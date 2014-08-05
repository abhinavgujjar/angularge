'use strict';

/* Controllers */

angular.module('myApp.controllers', [])
	.controller('hotelsController', ['$scope', 'hotelsProvider', 'uiConfig', 'hotelVotingService',
		function($scope, hp, uiConfig, vService) {

			var hotels = hp.getHotels();

			$scope.descLimit =  uiConfig.descLimit;

			$scope.hotels = hotels;

			$scope.upVote = vService.upVote;

			$scope.downVote = vService.downVote;
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