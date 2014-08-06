'use strict';

/* Directives */


angular.module('myApp.directives', []).
directive('appVersion', ['version',
	function(version) {
		return function(scope, elm, attrs) {
			elm.text(version);
		};
	}
]).directive('preview', function() {
	return {
		restrict: 'E',
		templateUrl: 'partials/preview.html',
		scope: {
			entry: '=',
			rows: '='
		}
	}
}).directive('hotelDisplayRead', function() {
	return {
		restrict: 'E',
		templateUrl: 'partials/read.html',
		scope: {
			item: '=',
			addToFav: '&'
		}
	}
}).directive('hotelDisplayEdit', function() {
	return {
		restrict: 'E',
		templateUrl: 'partials/edit.html',
		scope: {
			item: '=',
			addToFav: '&'
		}
	}
});