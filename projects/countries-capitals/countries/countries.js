angular.module('cacApp')
    .controller('CountriesController', [
        '$scope', 'countryRepository',
        function($scope, countryRepository) {
            countryRepository.getCountryList()
                .then(function(result) {
                    $scope.countries = result.geonames;
                });
        }
    ]);