(function() {
  'use strict';

  angular.module('LunchCheck', [])
  .controller('LunchCheckController', LunchCheckController);

  LunchCheckController.$inject = ['$scope'];

  function LunchCheckController($scope) {
    $scope.checkLunchItems = function() {
      var items = $scope.lunchItems;
      

      if (items == undefined || items == "") {
        $scope.msg = "Please enter data first"
      }
      else {
        var numItems = items.split(",").length;
        if (numItems <= 3 && numItems > 0) {
          $scope.msg = "Enjoy!"
        }
        else {
          $scope.msg = "Too much!"
        }
      }
    }   
  }
})();