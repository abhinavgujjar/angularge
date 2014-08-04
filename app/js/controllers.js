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
	.controller('MyCtrl2', ['$scope',
		function($scope) {

		}
	]);