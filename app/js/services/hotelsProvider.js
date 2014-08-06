'use strict';

angular.module('myApp.services')
	.factory('hotelsProvider', ['$http', '$q',
		function($http, $q) {

			var defaultHotel = {};

			return {
				getHotels: function() {
					return $http.get('data/hotels.json');
				},
				addHotel: function(hotel) {
					//hotels.push(hotel);

					defaultHotel = angular.copy(hotel);

				},
				getHotel: function(hotelId) {
					var deferred = $q.defer();

					$http.get('data/hotels.json').success(function(data) {
						var hotels = data.results;
						var targetHotel;
						angular.forEach(hotels, function(item) {
							if (item.id === hotelId) {
								targetHotel = item;
							}
						});

						deferred.resolve(targetHotel);
					});

					return deferred.promise;
				},
				defaultHotel: function() {
					return defaultHotel;
				}
			};
		}
	]);