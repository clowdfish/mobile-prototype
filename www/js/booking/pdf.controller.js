(function() {
	'use strict';
	
	angular
		.module('app.booking')
		.controller('pdfCtrl', pdfCtrl);
		
	function pdfCtrl($scope, $stateParams, bookingApi) {
		bookingApi
	      .getBookingItem($stateParams.id)
	      .then(function(bookingItem) {
	        $scope.url = bookingItem.travelDocument;    
	      });		
	}
})();