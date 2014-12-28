function Calculator(alarm){
	this.add = function(x,y){
		var result =  x + y;
		if (result < 0 && alarm){
			alarm.signal("A new alarm from 'add'");
		}
		return result;
	};

	this.subtract = function(x,y){
		return x - y;
	};
}
