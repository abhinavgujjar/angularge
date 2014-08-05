angular.module('myApp')
.controller('listingController', ['$scope', 'hotelsProvider', 'uiConfig', 'hotelVotingService',
		function($scope, hp, uiConfig, vService) {

			var hotels = hp.getHotels();

			$scope.descLimit = uiConfig.descLimit;

			$scope.hotels = hotels;

			$scope.upVote = function(hotel) {

				vService.upVote(hotel)
			};

			$scope.downVote = vService.downVote;
		}
	])