angular.module('cacApp')
    .controller('CountryController', [
        '$scope', 'countryRepository',
        function($scope, countryRepository) {
            countryRepository.getCountry().then(function(result) {
                $scope.country = result.geonames[0];
            });
            countryRepository.getNeighbourList().then(function(result) {
                $scope.neighbours = result.geonames;
            });
            countryRepository.getCapitalDetails().then(function(result) {
                $scope.capitalPopulation = result.geonames[0].population;
            });
        }
    ]);