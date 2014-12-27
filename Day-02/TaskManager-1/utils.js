	angular.module("utils",[]).filter("toMoment", function(){
		return function(date){
			return moment(date).fromNow();
		}
	});