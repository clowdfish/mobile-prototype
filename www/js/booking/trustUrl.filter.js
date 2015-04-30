(function() {
	'use strict';
	
	angular
		.module('app.booking')
		.filter('trustUrl', trustUrl);
	
	function trustUrl($sce){
		return function(url) {
	      return $sce.trustAsResourceUrl(url);
	    };
	}
})();