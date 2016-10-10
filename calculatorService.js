
//Service for functionality

(function (angular) {
    'use strict';

    angular
        .module('app')
        .factory('calculatorService', service);

    service.$inject = ['$http'];
    function service($http) {

        var data = [];

        return {
            data: data,
            get: get,
            checkTraining: checkTraining,
            //Function for functionalitist
            listWithFunctionalities: listWithFunctionalities
        };

        function get() {
            return $http({
                method: 'GET',
                url: 'http://localhost:3001/trainings'
            }).then(function (result) {
                _.each(result.data, function (d) {
                    data.push(d);
                })
            });
        }

        //Function that check training
        function checkTraining(user) {
            var result = [];
            if (user.age != null && user.age != undefined) {
                result = checkAge(user.age);
            };
            return result;
        };

        //Function that check age to output training
        function checkAge(age) {
            var result = data[2];
            if (age >= 40) {
                result = data[1];
            } else if (age >= 30) {
                result = data[0];
            }
            return result;
        }
        //Function that output the functionalities of the calculator
        function listWithFunctionalities() {
            return ["User enter parameters in fields", "Click button check it", "Receive correct training"];
        }
    };
})(angular);