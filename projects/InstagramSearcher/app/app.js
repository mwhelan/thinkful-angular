'use strict';

angular.module("app", ['angular-growl', 'ngAnimate']);

angular.module("app").config(['growlProvider', function(growlProvider) {
    growlProvider.globalTimeToLive(3000);
}]);
