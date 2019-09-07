(function (){
    'use strict';

    angular.module('LunchCheck', [])

    .controller('LunchCheckController', function($scope) {

        $scope.lunchMenu = "";
        $scope.displayMessage = function () {
            $scope.message = getMessagge($scope.lunchMenu);
        };

        function getMessagge(lunchMenu){

            var items   = lunchMenu.split(',');
            var message = '';

            items = items.filter(item => item.trim() != '');
            if (items.length <= 3){
                message = "Enjoy it!";
            } else {
                message = "Too much!";
            }

            return message;
        }

    });
})();