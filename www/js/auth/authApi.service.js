(function() {

  'use strict';

  angular
    .module('app.auth')
    .service('authApi', authApi);

  function authApi($http, $q, $localStorage, appConfig) {
    var _this = this;
    this.login = function(email, password) {
      return $q(function(resolve, reject) {
        $http
          .post(appConfig.serverAddress + '/auth/local', {
            email: email,
            password: password
          })
          .success(function(data) {
            _this.setAuthenticationToken(data.token);
            resolve(data);
          })
          .error(function(data, status) {
            _this.setAuthenticationToken(null);
            reject({
              data: data,
              status: status
            });
          });
      });
    }
    
    this.setAuthenticationToken = function(token) {
      $localStorage.set('token', token);
    }
    
    this.getAuthenticationToken = function() {
      return $localStorage.get('token');
    }
  }

})();
