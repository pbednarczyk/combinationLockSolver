(function(){
	
	var app = angular.module('app', []);
	
	app.controller('LockedController', function(){
    	//this.solution = {};
    	
    	this.addSolution = function(){

    		var xnumber = this.xnumber
    		var ynumber = this.ynumber
    		var znumber = this.znumber

    		var body = 40;
    		var start = 'prawo';

    		

    		return this.solution = [{
    				rotation: 3,
           			way: 'prawo',
            		number: 12
    			},
				{
    				rotation: 1,
           			way: 'lewo',
            		number: 30
    			},
				{
    				rotation: 2,
           			way: 'prawo',
            		number: 8
    			}];
    	};
    })

	
})();