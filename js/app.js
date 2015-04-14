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

	var app = angular.module('app', []);
	
	app.controller('LockedController', function(){
    	//this.solution = {};
    	
    	this.addSolution = function(){

    		// form
    		var xnumber = this.xnumber
    		var ynumber = this.ynumber
    		var znumber = this.znumber

    		// another informations
    		var body = 40;
    		var start = true;

    		// solution
    		var solution = {};

    		//1
    		var rotation = Math.floor(xnumber / body);
    		var number = (0 + xnumber) % body;
    		if(number < 0) number += body;
    		var rWord = getRotationWord(rotation);

 			solution[0] = {"rotation": rotation, "rWord": rWord, "way": (start?"prawo":"lewo"), "number": number};

 			//2
    		rotation = Math.floor(ynumber / body);
			number = (number - ynumber) % body;
    		if(number < 0) number += body;
    		var rWord = getRotationWord(rotation);
 			
 			solution[1] = {"rotation": rotation, "rWord": rWord, "way": (start?"lewo":"prawo"), "number": number};

 			//3
    		rotation = Math.floor(znumber / body);
			number = (number + znumber) % body;
    		if(number < 0) number += body;
			var rWord = getRotationWord(rotation);

 			solution[2] = {"rotation": rotation, "rWord": rWord, "way": (start?"prawo":"lewo"), "number": number};


    		return this.solution = solution;
    	};
    })

	
})();