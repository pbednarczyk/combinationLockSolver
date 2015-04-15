(function(){
	function getRotationWord (rotation){
		switch(rotation) {
		    case 1:
		        return "obrót";
		        break;
		    case 2:
		    case 3:
		    case 4:
		        return "obroty";
		        break;
		    default:
		        return "obrotów";
		}
	}

	function getSolutionData(nNumber, lastNumber, body, way){

		    var rotation = Math.floor(nNumber / body);
    		var number = (way?(lastNumber + nNumber):(lastNumber - nNumber)) % body;
    		if(number < 0) number += body;
    		var rWord = getRotationWord(rotation);

 			return  {"rotation": rotation, "rWord": rWord, "way": way, "number": number};

	}

	var app = angular.module('app', []);
	
	app.controller('LockedController', function(){
    	
    	this.addSolution = function(){

    		// form
    		var xnumber = this.xnumber
    		var ynumber = this.ynumber
    		var znumber = this.znumber

    		// another informations
    		var body = 40;
    		var way = true;

    		// solution
    		var solution = {};

    		solution[0] = getSolutionData(xnumber, 0, body, way);
    		solution[1] = getSolutionData(ynumber, solution[0].number, body, !(solution[0].way));
    		solution[2] = getSolutionData(znumber, solution[1].number, body, !(solution[1].way))

    		return this.solution = solution;
    	};
    })

	
})();