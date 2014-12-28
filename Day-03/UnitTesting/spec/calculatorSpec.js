describe("A calculator", function(){
	it("Should be able to add two numbers", function(){
		//arrange
		var calculator = new Calculator();
			n1 = 100,
			n2 = 200,
			expectedResult = 300;

		//act
		var result = calculator.add(n1,n2);

		//assert
		expect(result).toBe(expectedResult);
	});
	it("Should signal the alarm if the result is < 0", function(){
		//arrange
		var 
			dummyAlarm = {
				signal : function(){}
			},
			n1 = -100,
			n2 = -200,
			expectedResult = -300;

		spyOn(dummyAlarm, "signal");
		var calculator = new Calculator(dummyAlarm);

		//act
		var result = calculator.add(n1,n2);

		//assert
		expect(result).toBe(expectedResult);
		expect(dummyAlarm.signal).toHaveBeenCalledWith("A new alarm from 'subtract'");
	});
})