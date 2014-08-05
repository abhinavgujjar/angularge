'use strict';

/* Controllers */

angular.module('myApp.controllers', [])
	.controller('hotelsController', ['$scope', 'hotelsProvider', 'uiConfig',
		function($scope, hp, uiConfig) {

			var hotels = hp.getHotels();

			$scope.descLimit =  uiConfig.descLimit;

			$scope.hotels = hotels;
		}
	])
	.controller('createController', ['$scope', 'hotelsProvider', '$location',
		function($scope, hotelsProvider, $location) {

			$scope.saveHotel = function(form, hotel){
				if ( form.$invalid){
					alert('form Invalid');
				}else
				{
					hotelsProvider.addHotel(hotel);
					$location.url('/listing');
				}
			};

		}
	]);