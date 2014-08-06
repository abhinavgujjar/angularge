angular.module('myApp')
	.controller('favoritesController', ['$scope',
		function($scope) {
			$scope.favorites = [];

			$scope.$on('hotel:favorited', function(evt, current, previous, rejection) {
				$scope.favorites.push(current);
			});

		}
	])