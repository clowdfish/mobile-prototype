(function() {

  'use strict';

  angular
    .module('app.booking')
    .controller('detailCtrl', detailCtrl);

  function detailCtrl($scope, $stateParams, $state, bookingApi, menuData) {
    menuData.setPreviousState('booking.list', null);
    bookingApi
      .getBookingItem($stateParams.id)
      .then(function(bookingItem) {
        $scope.booking = bookingItem;    
      });
     
    $scope.openPdf = function(booking) {      
      $state.go('booking.pdf', {
        id: booking.tripId
      });
    };    
  }

})();
