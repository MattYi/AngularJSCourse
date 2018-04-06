(function(){

'use strict';

  angular.module('public')
  .controller('MyInfoController', MyInfoController);
 
  MyInfoController.$inject = ['UserInfoService', 'ApiPath'];
  function MyInfoController(UserInfoService, ApiPath){
    var ctrl = this;
    
    ctrl.apiPath = ApiPath;

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

    ctrl.hasRegistered = function() {
      return UserInfoService.hasRegistered;
    }

    ctrl.getFavoriteDish = function() {
      return UserInfoService.getFavoriteDish();
    }
    console.log("here");
  }
})();