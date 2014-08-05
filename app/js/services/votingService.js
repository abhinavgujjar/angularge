angular.module('myApp.services')
	.factory('hotelVotingService', function() {
		return {
			upVote: function(hotel) {
				if (!hotel.rating) {
					hotel.rating = 0;
				}

				hotel.rating++;

			},
			downVote: function(hotel) {
				if (!hotel.rating) {
					hotel.rating = 0;
				}

				if (hotel.rating > 0) {
					hotel.rating--;
				}

			}
		};
	})