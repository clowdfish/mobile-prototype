(function() {

  'use strict';

  angular
    .module('app.booking', [])
    .config(routeConfig);

  function routeConfig($stateProvider) {
    
    $stateProvider.state('booking', {
      url: '/booking',
      controller: 'bookingCtrl',
      templateUrl: 'templates/booking/booking.html'
    });
    
    $stateProvider.state('booking.list', {
      url:'/list',
      controller: 'listCtrl',
      templateUrl: 'templates/booking/list.html'
    })
    
    $stateProvider.state('booking.detail', {
      url: '/detail/:id',
      controller: 'detailCtrl',
      templateUrl: 'templates/booking/detail.html',
      resolve: {
        bookingItem: getBookingItem
      }
    });
    
    $stateProvider.state('booking.pdf', {
      url: '/pdf/:id',
      controller: 'pdfCtrl',
      templateUrl: 'templates/booking/pdf.html'
    });
    
    function getBookingItem(bookingApi) {
       return bookingApi.shareBooking;
    }
  }
})();
