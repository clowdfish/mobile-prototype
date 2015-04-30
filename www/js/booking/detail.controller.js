(function() {

  'use strict';

  angular
    .module('app.booking')
    .controller('detailCtrl', detailCtrl);

  function detailCtrl($scope, $stateParams, bookingApi) {
    bookingApi
      .getBookingItem($stateParams.id)
      .then(function(bookingItem) {
        $scope.booking = bookingItem;    
      });    
  }

})();
