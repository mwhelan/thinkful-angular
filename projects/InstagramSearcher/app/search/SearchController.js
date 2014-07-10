(function () {
    'use strict';

    angular.module('app')
        .controller("SearchController", function ($scope, $http, growl) {
            $scope.search = function () {
                $scope.submitted = true;
                if (!$scope.searchForm.$valid) {
                    return;
                }

                var tag = $scope.searchField;
                $scope.images = null;
                $scope.submitted = false;
                $scope.searchForm.$setPristine();
                $scope.searchField = "";

                growl.addInfoMessage("Searching Instagram for photos tagged with '" + tag + "'");
                getImagesFor(tag);
            };

        function getImagesFor(tag) {
            var base = "https://api.instagram.com/v1";
            var clientId = '548ead825f8b450593ea7b5c066b451a';

            var request = '/tags/' + tag + '/media/recent';
            var url = base + request;
            var config = {
                'params': {
                    'client_id': clientId,
                    'count': 12,
                    'callback': 'JSON_CALLBACK'
                }
            };
            $http.jsonp(url, config).success(function (result) {
                if (result.meta.code == 200) {
                    $scope.images = result.data;
                    growl.addInfoMessage("We found " + result.data.length + " results for '" + tag + "' tag.");
                } else {
                    var message = "There was an error. Code: " + result.meta.code + ". Type: " + result.meta.error_type + ". Message: " + result.meta.error_message;
                    growl.addErrorMessage(message, { ttl: 5000 });
                }
            }).error(function() {
                growl.addErrorMessage("There was a problem contacting Instagram", {ttl:5000});
            });
        }

        function showMessage(message) {
            $scope.message = message;
            $scope.displayMessage = true;
        }
    });
})();


