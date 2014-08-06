angular.module('myApp')
	.controller('listingController', ['$scope', 'hotelsProvider',
		'uiConfig', 'hotelVotingService', '$filter', 'convlib',
		'$routeParams','$rootScope','$location',
		function($scope, hp, uiConfig, vService, $filter,
		 convlib, $routeParams, $rootScope, $location) {

		 	$scope.addToFavorites = function(hotel){
		 		$scope.$broadcast('hotel:favorited', hotel);
		 	}

			$scope.loading = true;
			hp.getHotels().then(function(response) {
				$scope.hotels = response.data;
			}).finally(function() {
				$scope.loading = false;
			});

			$scope.showDetails= function(hotel){
				hp.selectedHotel = hotel;
				$location.url('/details');
			}

			$scope.descLimit = uiConfig.descLimit;

			$scope.search = function() {
				var tajHotels = $filter('filter')($scope.hotels, {
					$: 'taj'
				});

				console.log(tajHotels);
			}

			$scope.toSqft = function(input){
				return convlib.toSqft(input)
			}


			$scope.upVote = function(hotel) {

				vService.upVote(hotel)
			};

			$scope.downVote = vService.downVote;
		}
	])