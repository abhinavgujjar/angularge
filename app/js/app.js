'use strict';


// Declare app level module which depends on filters, and services
angular.module('myApp', [
	'ngRoute',
	'myApp.filters',
	'myApp.services',
	'myApp.directives',
	'myApp.controllers'
]).
config(['$routeProvider',
	function($routeProvider) {
		$routeProvider.when('/create', {
			templateUrl: 'partials/create.html',
			controller : 'createController'
		});
		$routeProvider.when('/listing', {
			templateUrl: 'partials/listing.html',
			controller: 'hotelsController'
		});
		$routeProvider.when('/alt', {
			templateUrl: 'partials/alt.html',
			controller: 'hotelsController'
		});
		$routeProvider.when('/error', {
			templateUrl: 'partials/error.html'
		});
		$routeProvider.otherwise({
			redirectTo: '/error'
		});
	}
]);