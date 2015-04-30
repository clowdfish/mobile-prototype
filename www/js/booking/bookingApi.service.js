(function() {

  'use strict';

  angular
    .module('app.booking')
    .service('bookingApi', bookingApi);

  function bookingApi($q, $http, appConfig) {    
    var _this = this;
    this.shareBooking = null;

    this.getBooking = function() {
      return $q(function(resolve, reject) {
        $http
          .get(appConfig.serverAddress + '/mobile-bookings')
          .success(function(bookings) {
            resolve(bookings);
          });
      });
    };
    
    this.getBookingItem = function() {
      return $q(function(resolve, reject) {
        _this.getBooking()
          .then(function(data) {
             var item = data[0];             
             item['documentName'] = item.travelDocument.split('/').splice(-1)[0];             
             resolve(item);
          });
      });
    };
  }

})();
