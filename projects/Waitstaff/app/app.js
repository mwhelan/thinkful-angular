'use strict';

angular.module("app", ["ngRoute", "ngAnimate"])
    .factory("totalEarnings", function () {
        var earnings = {
            tipTotal: 0,
            mealCount: 0,
            averageTip: 0
        }
        return {
            get: function() {
                return earnings;
            },
            add: function(tip) {
                earnings.tipTotal += tip;
                earnings.mealCount++;
                earnings.averageTip = earnings.tipTotal / earnings.mealCount;
            },
            reset: function() {
                earnings.tipTotal = 0;
                earnings.mealCount = 0;
                earnings.averageTip = 0;
            }
        }
    })
    .run(function ($rootScope, $location) {
        $rootScope.$on('$routeChangeError', function () {
            $location.path("/error");
        });
    })
    .config(function($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl: "app/home.html"
        })
        .when("/new-meal", {
            templateUrl: "app/new-meal.html",
            controller: "MealController"
        })
        .when("/my-earnings", {
            templateUrl: "app/my-earnings.html",
            controller: "EarningsController"
        })
        .otherwise({
            redirectTo: "/"
        })
        .when('/error', {
            template: '<p>Error Page Not Found</p>'
        });
});