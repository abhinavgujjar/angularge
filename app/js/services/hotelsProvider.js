'use strict';

angular.module('myApp.services')
.factory('hotelsProvider',['$http', 
	function($http) {

	return {
		getHotels: function() {
			var hotels = $http.get('data/hotels.json');

			return hotels;
		},
		addHotel: function(hotel) {
			//hotels.push(hotel);
		}
	};
}]);