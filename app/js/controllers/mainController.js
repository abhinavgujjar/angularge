angular.module('myApp')
	.controller('mainController', ['$scope', '$location',
		function($scope, $location) {
			// $scope.item = {
			// 	userName : 'Abhinav',
			// 	id : '3214324'
			// }



			$scope.$on('$locationChangeSuccess', function(evt, current, previous, rejection) {
				var route = $location.url();
				$scope.showNavbar = (route.indexOf('/login') < 0);
			});


			$scope.$on('hotelselected', function(evt, current, previous, rejection) {
				$scope.selectedHotel = current;
			});

		}
	])