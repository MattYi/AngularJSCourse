(function() {
  'use strict';

  angular.module('NarrowItDownApp', [])
  .controller('NarrowItDownController', NarrowItDownController)
  .service('MenuSearchService', MenuSearchService)
  .directive('foundItems', FoundItemsDirective);

  function FoundItemsDirective() {
    var ddo = {
      templateUrl: 'foundItems.html',
      scope: {
        items: "<",
        onRemove: "&"
      },
      controller: NarrowItDownController,
      controllerAs: 'items',
      bindToController: true
    };

    return ddo;
  }

  NarrowItDownController.$inject = ['MenuSearchService'];
  function NarrowItDownController(MenuSearchService) {
    var controller = this;
    controller.found = [];
    controller.search = function() {
      var promise = MenuSearchService.getMatchedMenuItem(controller.searchTerm);
      promise.then(function(value) {
        controller.found = value;
      })
    }
    controller.onRemove = function(index) {
      controller.found.splice(index, 1);
      console.log(index);
      console.log(controller.found);
      console.log("invoked");
    }
  }

  MenuSearchService.$inject = ['$http'];
  function MenuSearchService($http) {
    var service = this;
    
    service.getMatchedMenuItem = function(searchTerm) {
      return $http
      .get("https://davids-restaurant.herokuapp.com/menu_items.json")
      .then(function (response) {
        var items = response.data.menu_items;
        var result = [];
        for (var i in items) {
          if (JSON.stringify(items[i]).includes(searchTerm)) {
            result.push(items[i]);
          }
        }
        return result;
      });
    };
  };
})();