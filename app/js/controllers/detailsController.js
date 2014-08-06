angular.module('myApp')
	.controller('detailsController', ['$scope', 'hotelsProvider','$routeParams',
		function($scope, hotelsProvider, $routeParams) {

			var hotelId = $routeParams.hotelId;
			console.log('hotelId' + hotelId);

			hotelsProvider.getHotel(hotelId).then(function(result){
				$scope.item = result;
			});
		}
	])