
//Service for functionality

(function (angular) {
    'use strict';

    angular
        .module('app')
        .factory('calculatorService', service);

    service.$inject = ['$http'];
    function service($http) {

        var data = {};
        //var res = {};
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
            }).then(function (res) {
                _.assign(data, res.data);
            });
        }

        //Function that check training
        function checkTraining(user) {
            var result = [];
            if (user.age && user.weight != null && user.age && user.weight != undefined) {
                result = checkParams(user.age, user.weight);
            };
            return result;
        };

        //Function that check age to output training
        function checkParams(age, weight) {
            var result = data.hardTraining;
            if (age >= 40 && weight >= 100) {
                result;
            } else if (age >= 40 && weight >= 70) {
                result = data.lightTraining;
            } else if (age >= 30) {
                result = data.middleTraining;
            }
            return result;
        }
        //Function that output the functionalities of the calculator
        function listWithFunctionalities() {
            return ["User enter parameters in fields", "Click button check it", "Receive correct training"];
        }
    };
})(angular);