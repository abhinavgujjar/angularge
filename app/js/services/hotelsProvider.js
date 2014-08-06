'use strict';

angular.module('myApp.services')
	.factory('hotelsProvider', ['$http', '$q',
		function($http, $q) {

			var defaultHotel = {};

			return {
				getHotels: function() {
					return $http.get('https://api.parse.com/1/classes/hotels', {
						headers: {
							'X-Parse-Application-Id': 'CFGDzavc88DToPz0RQhoPRUvLwloB39U3bSTTttk',
							'X-Parse-REST-API-Key': 'LsaiORZx4WEWyJzN2rcVXLBaFKAQdxWERx8XTzrW',
						},
						transformResponse: function(data) {
							var raw = angular.fromJson(data);
							return raw.results;
						}
					});
				},
				addHotel: function(hotel) {
					//hotels.push(hotel);

					defaultHotel = angular.copy(hotel);

					$http.post('https://api.parse.com/1/classes/hotels', hotel, {
						headers: {
							'X-Parse-Application-Id': 'CFGDzavc88DToPz0RQhoPRUvLwloB39U3bSTTttk',
							'X-Parse-REST-API-Key': 'LsaiORZx4WEWyJzN2rcVXLBaFKAQdxWERx8XTzrW',
						}
					}).success(function() {
						alert('wooo hooo!')
					});

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