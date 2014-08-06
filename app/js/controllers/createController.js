angular.module('myApp')
	.controller('createController', ['$scope', 'hotelsProvider', '$location',
		function($scope, hotelsProvider, $location) {

			$scope.hotel = angular.copy(hotelsProvider.defaultHotel());			

			$scope.showAlert = function(message){
				alert(message)
			}

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