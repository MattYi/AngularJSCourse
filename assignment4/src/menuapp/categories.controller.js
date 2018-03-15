(function() {

	'use strict';

	angular.module('MenuApp')
	.controller('CategoriesController', CategoriesController);

  CategoriesController.$inject = ['data'];
	function CategoriesController(data) {
    this.categories = data;
	}
})();