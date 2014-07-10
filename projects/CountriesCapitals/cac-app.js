'use strict';

angular.module('cacApp', ['cacDataServices', 'ngRoute', 'ngAnimate'])
    .config([
        '$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
            $locationProvider.hashPrefix('!');

            $routeProvider
                .when("/", {
                    templateUrl: "./home/home.html",
                    controller: 'HomeController'
                })
                .when("/countries", {
                    templateUrl: "./countries/countries.html",
                    controller: "CountriesController"
                })
                .when("/countries/:countryCode", {
                    templateUrl: "./countries/country.html",
                    controller: 'CountryController'
                })
                .otherwise({
                    redirectTo: '/'
                });
        }
    ]);
