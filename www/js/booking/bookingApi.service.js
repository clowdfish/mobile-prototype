(function() {

  'use strict';

  angular
    .module('app.booking')
    .service('bookingApi', bookingApi);

  function bookingApi($q, $http) {

    this.shareBooking = null;

    this.getBooking = function() {
      return $q(function(resolve, reject) {
        $http
          .get('/api/mobile-bookings')
          .success(function(bookings) {
            resolve(bookings);
          });
      });
    }
  }

})();
