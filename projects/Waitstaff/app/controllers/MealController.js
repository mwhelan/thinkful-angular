(function () {
    'use strict';

    angular.module('app')
        .controller("EarningsController", function ($scope, totalEarnings) {
            $scope.data = totalEarnings.get();

            $scope.reset = function () {
                totalEarnings.reset();
                $scope.data = totalEarnings.get();
            }
        })
        .controller("MealController", function ($scope, totalEarnings) {
            initializeForm();

            $scope.addMeal = function () {
                $scope.submitted = true;
                if (!$scope.mealForm.$valid) {
                    return;
                }
                var meal = $scope.data;
                meal.tax = meal.taxRate * meal.price / 100;
                meal.subtotal = meal.price + meal.tax;
                meal.tip = meal.subtotal * meal.tipPercentage / 100;
                meal.totalPrice = meal.subtotal + meal.tip;

                totalEarnings.add(meal.tip);

                $scope.mealForm.$setPristine();

            }

            $scope.cancel = function () {
                initializeForm();
                $scope.mealForm.$setPristine();
            }

            function initializeForm() {
                $scope.submitted = false;
                $scope.data = {
                    price: 0,
                    taxRate: 0,
                    tipPercentage: 0,
                    tax: 0,
                    subtotal: 0,
                    tip: 0,
                    totalPrice: 0
                }
            }
        });
})();


