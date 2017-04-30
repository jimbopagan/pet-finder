var app = angular.module("myApp.Auth");

app.controller("LoginController", ["$scope", "$location", "UserService", function ($scope, $location, UserService) {

    $scope.logInFunc = function (user) {
        UserService.login(user).then(function (response) {
            $location.path("/pets");
        }, function (response) {
            alert(response.data.message);
        });
    }
}]);
