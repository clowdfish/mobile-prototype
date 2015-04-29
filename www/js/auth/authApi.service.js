(function() {

  'use strict';

  angular
    .module('app.auth')
    .service('authApi', authApi);

  function authApi($http, $q) {
    this.login = function(email, password) {
      return $q(function(resolve, reject) {
        $http
          .post('/api/auth/local', {
            email: email,
            password: password
          })
          .success(function() {
            resolve();
          })
          .error(function(data, status) {
            reject({
              data: data,
              status: status
            });
          });
      });
    }
  }

})();
