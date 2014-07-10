angular.module('cacApp')
    .controller('HomeController', [
        '$scope',
        function($scope) {
            $scope.data = "world";
        }
    ]);
