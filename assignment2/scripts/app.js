(function() {
  'use strict';
  angular.module("ShoppingListCheckOff", [])
    .controller("ToBuyController", ToBuyController)
    .controller("AlreadyBoughtController", AlreadyBoughtController)
    .service("ShoppingListCheckOffService", ShoppingListCheckOffService)

    ToBuyController.$inject = ['ShoppingListCheckOffService'];
    AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];

    function ToBuyController(ShoppingListCheckOffService) {
      
      this.getToBuyItems = function() {
        return ShoppingListCheckOffService.getToBuyItems();
      }

      this.buyItem = function(index) {
        return ShoppingListCheckOffService.buyItem(index);
      }
    }

    function AlreadyBoughtController(ShoppingListCheckOffService) {

      this.getAlreadyBoughtItems = function() {
        console.log(ShoppingListCheckOffService.getAlreadyBoughtItems());
        return ShoppingListCheckOffService.getAlreadyBoughtItems();
      }
    }

    function ShoppingListCheckOffService() {
      var service = this;

      service.toBuyItems = [];
      service.alreadyBoughtItems = [];

      service.populateInitialToBuyItems = function() {
        service.toBuyItems.push({"name": "cookies", "quantity": 10});
        service.toBuyItems.push({"name": "ice-creams", "quantity": 9});
        service.toBuyItems.push({"name": "brownies", "quantity": 8});
        service.toBuyItems.push({"name": "pies", "quantity": 7});
        service.toBuyItems.push({"name": "cupcakes", "quantity": 6});
      }

      service.populateInitialToBuyItems();

      service.getToBuyItems = function() {
        return service.toBuyItems;
      }

      service.getAlreadyBoughtItems = function() {
        return service.alreadyBoughtItems;
      }

      service.buyItem = function(index) {
        service.alreadyBoughtItems.push(service.toBuyItems[index]);
        service.toBuyItems.splice(index, 1);
      }
    }
})();