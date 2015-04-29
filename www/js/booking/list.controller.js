(function() {

  'use strict';

  angular
    .module('app.booking')
    .controller('listCtrl', listCtrl);

  function listCtrl($scope, $ionicLoading, $ionicPopover, bookingApi) {
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
      $state.go('')
    }
    $ionicPopover.fromTemplateUrl('templates/list/popover-menu.html', {
      scope: $scope
    }).then(function(popover) {
      $scope.popover = popover;
    });

    $scope.$on('$destroy', function() {
      $scope.popover.remove();
    });
  }

})();
