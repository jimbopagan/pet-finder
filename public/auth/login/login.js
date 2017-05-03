var app = angular.module("myApp.Auth");

app.controller("LoginController", ["$scope", "$location", "UserService", function ($scope, $location, UserService) {
    $scope.go = function () {
        $location.path('/signup');
    }
    
    $scope.logInFunc = function (user) {
        UserService.login(user).then(function (response) {
            console.log('login');
            console.log(response.data.user);
            $location.path("/home");
        }, function (response) {
            alert(response.data.message);
        });
    }
}]);
