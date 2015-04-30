(function() {
	'use strict';
	
	angular
		.module('app.booking')
		.service('menuData', menuData);
	
	function menuData() {
		this.prevousState = null;
		var _this = this;
		this.setPreviousState = function(name, data) {
			if (name == null) {
				_this.previousState = null;
				return;
			}
			data = data || null;
			_this.previousState = {
				name: name,
				data: data
			};			
		};
		return this;
	}
})();