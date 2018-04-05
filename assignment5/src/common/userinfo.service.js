(function () {
"use strict";

angular.module('common')
.service('UserInfoService', UserInfoService);

function UserInfoService() {
  var service = this;
  var UNAVAILABLE = "NA";
  service.firstName = UNAVAILABLE;
  service.lastName = UNAVAILABLE;
  service.email = UNAVAILABLE;
  service.phone = UNAVAILABLE;
  service.menuNumber = UNAVAILABLE;

  service.setUser = function(user) {
    service.setFirstName(user.firstName);
    service.setLastName(user.lastName);
    service.setEmail(user.email);
    service.setPhone(user.phone);
    service.setMenuNumber(user.menuNumber);
    console.log("here");
  }

  service.reset = function() {
    service.setFirstName(UNAVAILABLE);
    service.setLastName(UNAVAILABLE);
    service.setEmail(UNAVAILABLE);
    service.setPhone(UNAVAILABLE);
    service.setMenuNumber(UNAVAILABLE);
  }

  service.setFirstName = function(firstName) {
    service.firstName = firstName;
  }

  service.setLastName = function(lastName) {
    service.lastName = lastName;
  }

  service.setEmail = function(email) {
    service.email = email;
  }

  service.setPhone = function(phone) {
    service.phone = phone;
  }

  service.setMenuNumber = function(menuNumber) {
    service.menuNumber = menuNumber;
  }

  service.getFirstName = function() {
    return service.firstName;
  }

  service.getLastName = function() {
    return service.lastName;
  }

  service.getEmail = function() {
    return service.email;
  }

  service.getPhone = function() {
    return service.phone;
  }

  service.getMenuNumber = function() {
    return service.menuNumber;
  }
}

})();
