angular.module('myApp')
	.controller('detailsController', ['$scope', 'hotelsProvider','$routeParams',
		function($scope, hotelsProvider, $routeParams) {

			var hotelId = $routeParams.hotelId;
			console.log('hotelId' + hotelId);

			hotelsProvider.getHotel(hotelId).then(function(result){
				$scope.item = result;

				$scope.$emit('hotelselected', result.name);
			});

			$scope.addComment = function(){
				if(!$scope.item.comments ){
					$scope.item.comments = [];
				}

				$scope.item.comments.push(angular.copy($scope.comment));
			}
		}
	])