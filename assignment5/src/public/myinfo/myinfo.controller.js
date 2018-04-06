(function(){

'use strict';

  angular.module('public')
  .controller('MyInfoController', MyInfoController);
 
  MyInfoController.$inject = ['UserInfoService'];
  function MyInfoController(UserInfoService){
    var ctrl = this;
    ctrl.getEmail = function() {
      return UserInfoService.getEmail();
    }

    ctrl.getFirstName = function() {
      return UserInfoService.getFirstName();
    }

    ctrl.getLastName = function() {
      return UserInfoService.getLastName();
    }

    ctrl.getPhone = function() {
      return UserInfoService.getPhone();
    }

    ctrl.hasRegisterred = function() {
      console.log(UserInfoService.hasRegisterred);
      return UserInfoService.hasRegisterred;
    }
    console.log("here");
  }
})();