(function(){

  "use strict";

  angular.module('public')
  .controller('SignupController', SignupController);

  SignupController.$inject = ['MenuService', 'UserInfoService'];
  function SignupController(MenuService, UserInfoService){
    
    var ctrl = this;    
    
    ctrl.user = {};
    
    ctrl.isMenuNumberValid = true;
    ctrl.isUserInfoSaved = false;
    
    ctrl.submit = function() {
      if (ctrl.user == undefined || ctrl.user.menuNumber == undefined) {
        return;
      }
      MenuService.getMenuItemData(ctrl.user.menuNumber).then(function(response) {
        UserInfoService.setUser(ctrl.user);
        ctrl.isMenuNumberValid = true;
        ctrl.isUserInfoSaved = true;
      }).catch(function(){
        ctrl.isUserInfoSaved = false;
        ctrl.isMenuNumberValid = false;
      })
    };
  }
})();