(function() {
	'use strict';
	
	angular
		.module('app.common')
		.factory('$localStorage', function($window) {
			var prefix = 'ionicStorage';
			return {
				set: function(key, value) {
					key = prefix + key;
					if (typeof(value) === 'object') {
						$window.localStorage[key] = JSON.stringify(value);	
					} else {
						$window.localStorage[key] = value;
					}
					
				},
				get: function(key) {
					key = prefix + key;
					var data = $window.localStorage[key];
					try {
						return JSON.parse(data);
					} catch (e) {
						return data;
					}					
				}
			}		
		});
})();