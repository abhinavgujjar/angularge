'use strict';


// Declare app level module which depends on filters, and services
angular.module('myApp', [
	'ngRoute',
	'myApp.filters',
	'myApp.services',
	'myApp.directives',
]).
config(['$routeProvider',
	function($routeProvider) {
		$routeProvider.when('/create', {
			templateUrl: 'partials/create.html',
			controller : 'createController'
		});
		$routeProvider.when('/listing', {
			templateUrl: 'partials/listing.html',
			controller: 'listingController'
		});
		$routeProvider.when('/details/:hotelId', {
			templateUrl: 'partials/details.html',
			controller: 'detailsController'
		});
		$routeProvider.when('/alt', {
			templateUrl: 'partials/alt.html',
			controller: 'listingController'
		});
		$routeProvider.when('/error', {
			templateUrl: 'partials/error.html'
		});
		$routeProvider.otherwise({
			redirectTo: '/error'
		});
	}
]);