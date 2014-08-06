'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
angular.module('myApp.services', []).
value('version', '0.1').
value('uiConfig', {
	descLimit: 200,
	resultsLimit: 10
}).factory('convlib', function() {

	function toSqFt(input) {
		return input * 10.7639
	}

	function toFarenheit(input) {
		return ((input * 9) / 5) + 32;
	}

	return {
		toSqFt: toSqFt,
		toFarenheit: toFarenheit
	}


});