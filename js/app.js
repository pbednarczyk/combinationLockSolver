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
    		var number = (way?(lastNumber - nNumber):(lastNumber + nNumber)) % body;
    		if(number < 0) number += body;
    		var rWord = getRotationWord(rotation);

 			return  {"rotation": rotation, "rWord": rWord, "way": way, "number": number};

	}

	var app = angular.module('app', []);
	
	app.controller('LockedController', function(){
    	
    	this.addSolution = function(){

    		// form
   			var numbers = this.nNumber;

    		// another informations
    		var body = 40;
    		var way = true;

    		// solution
    		var solution = {};

    		for(var i in numbers){
    			solution[i] = getSolutionData(numbers[i], ((i > 0)?solution[i-1].number:0), body, !((i > 0)?solution[i-1].way:0));
    		}

    		return this.solution = solution;
    	};
    })

	
})();