var app = angular.module('myApp');

app.controller('secondController', ['$scope', 'loginService', '$location', function ($scope, loginService, $location) {
    $scope.go = function (path) {
        $location.path(path);
    };
    $scope.user = [];
    $scope.logInFunc = function (user) {
        loginService.addLoginService(user).then(function (res) {

            if (!res.data.length) {
                console.log('no user data');
            } else {
                console.log('else')
                $scope.user = res.data;
            }
            console.dir(res);
        })
    }

}])
