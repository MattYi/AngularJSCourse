(function(){
  'use strict';

  angular.module('MenuApp')
  .config(RoutesConfig);

  RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
  function RoutesConfig($stateProvider, $urlRouterProvider) {
  	
    // redirect to home if no other URL matches
    $urlRouterProvider.otherwise('/');

    // UI states
    $stateProvider

  	// home
  	.state('home', {
  		url: '/',
  		templateUrl: '/src/templates/home.template.html'
  	})

  	// categories
  	.state('categories', {
  		url: '/categories',
  		//component: 'categories',
      templateUrl: '/src/templates/categories.template.html',
  		controller: 'CategoriesController as ctrl',
      resolve: {
        data: ['MenuDataService', function (MenuDataService) {
          return MenuDataService.getAllCategories();
        }]
      }
  	})
    .state('items', {
      url: '/categories/{categoryShortName}/items',
      templateUrl: 'src/templates/items.template.html',
      controller: 'ItemsController as ctrl',
      resolve: {
          data: ['$stateParams', 'MenuDataService', function ($stateParams, MenuDataService) {
                  return MenuDataService.getItemsForCategory($stateParams.categoryShortName);
          }]
        }
    });
  }
})();