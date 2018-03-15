(function() {

	'use strict';

	angular.module('MenuApp')
	.controller('ItemsController', ItemsController);

  ItemsController.$inject = ['data'];
	function ItemsController(data) {
    this.items = data;
    console.log(data);
	}
})();