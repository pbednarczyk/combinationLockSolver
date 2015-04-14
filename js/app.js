(function(){
	
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
    		var number = 0 + xnumber % body;
    		if(number < 0){
    			number += body;
    		}


    		var rWord = "";

			switch(rotation) {
			    case 1:
			        rWord = "obrót";
			        break;
			    case 2:
			    case 3:
			    case 4:
			        rWord = "obroty";
			        break;
			    default:
			        rWord = "obrotów";
			}

 			solution[0] = {"rotation": rotation, "way": rWord + " " + (start?"prawo":"lewo"), "number": number};

 			//2
    		rotation = Math.floor(ynumber / body);
			number = number - ynumber % body;
    		if(number < 0){
    			number += body;
    		}
			switch(rotation) {
			    case 1:
			        rWord = "obrót";
			        break;
			    case 2:
			    case 3:
			    case 4:
			        rWord = "obroty";
			        break;
			    default:
			        rWord = "obrotów";
			}
 			
 			solution[1] = {"rotation": rotation, "way": rWord + " " + (start?"lewo":"prawo"), "number": number};

 			//3
    		rotation = Math.floor(znumber / body);
			number = number + znumber % body;
    		if(number < 0){
    			number += body;
    		}
			switch(rotation) {
			    case 1:
			        rWord = "obrót";
			        break;
			    case 2:
			    case 3:
			    case 4:
			        rWord = "obroty";
			        break;
			    default:
			        rWord = "obrotów";
			}

 			solution[2] = {"rotation": rotation, "way": rWord + " " + (start?"prawo":"lewo"), "number": number};


    		return this.solution = solution;
    	};
    })

	
})();