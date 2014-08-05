angular.module('myApp')
	.controller('createController', ['$scope', 'hotelsProvider', '$location',
		function($scope, hotelsProvider, $location) {

			$scope.saveHotel = function(form, hotel) {
				if (form.$invalid) {
					alert('form Invalid');
				} else {
					hotelsProvider.addHotel(hotel);
					$location.url('/listing');
				}
			};

		}
	]);