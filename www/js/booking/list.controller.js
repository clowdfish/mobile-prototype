(function() {

  'use strict';

  angular
    .module('app.booking')
    .controller('listCtrl', listCtrl);

  function listCtrl($scope, $state, $ionicLoading, $ionicPopover, bookingApi) {
    $ionicLoading.show({
      template: 'Loading booking items...'
    });

    $scope.bookings = [];
    bookingApi
      .getBooking()
      .then(function(bookings) {
        $scope.bookings = bookings;
        console.log(bookings);
        $ionicLoading.hide();
      }, function() {
        $ionicLoading.hide();
      });

    $scope.selectBooking = function(booking) {
      bookingApi.shareBooking = booking;
      $state.go('booking.detail', {
        id: booking.tripId
      });
    }

  }

})();
