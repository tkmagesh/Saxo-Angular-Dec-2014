'use strict';

describe('myApp.view1 module', function() {

  beforeEach(module('myApp.view1'));

  describe('view1 controller', function(){

    it('should be defined when created', inject(function($controller) {
      //spec body
      var scope = {};
      var greetService = {};
      var view1Ctrl = $controller('View1Ctrl', {$scope : scope, greetService : greetService});
      expect(view1Ctrl).toBeDefined();
    }));

    it('should default the name to empty string', inject(function($controller) {
      var scope = {};
      var view1Ctrl = $controller('View1Ctrl', {$scope : scope});
      
      expect(scope.name).toBe('');
    }));

/*    it('should set the greet message with greet method invoked', inject(function($controller) {
      var scope = {};
      var view1Ctrl = $controller('View1Ctrl', {$scope : scope});
      scope.name = "Magesh";
      scope.greet();

      expect(scope.greetMsg).toBe('Hi Magesh');
    }));
*/
	    it('should invoke the "getGreetMsg" of "greetService" during "greet()"', inject(function($controller) {
	      var scope = {};
	      var greetService = {
	      	getGreetMsg : function(name){

	      	}
	      };

	      var expectedGreetMsg = "Hi Magesh";
	      spyOn(greetService, "getGreetMsg").andReturn(expectedGreetMsg);

	      var view1Ctrl = $controller('View1Ctrl', {$scope : scope, greetService: greetService});
	      scope.name = "Magesh";
	      scope.greet();

	      expect(greetService.getGreetMsg).toHaveBeenCalledWith(scope.name);
	      expect(scope.greetMsg).toBe(expectedGreetMsg);
	    }));

  });
});