(function() {

  'use strict';

  angular
    .module('app.booking')
    .controller('listCtrl', listCtrl);

  function listCtrl($scope, $state, $ionicLoading, $ionicPopover, bookingApi, menuData) {
    $scope.menuData.setPreviousState(null);
    $ionicLoading.show({
      template: 'Loading booking items...'
    });

    $scope.bookings = [];
    bookingApi
      .getBooking()
      .then(function(bookings) {
        $scope.bookings = bookings;        
        $ionicLoading.hide();
      }, function() {
        $ionicLoading.hide();
      });

    $scope.selectBooking = function(booking) {      
      $state.go('booking.detail', {
        id: booking.tripId
      });
    };

  }

})();
