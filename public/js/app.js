var app = angular.module('myApp', ['ngRoute'])
app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
        .when('/home', {
            templateUrl: '/views/home.html',
            controller: 'mainController',

        })
        .when('/logIn', {
            templateUrl: '/views/logIn.html',
            controller: 'secondController',

        })
        .when('/profile', {
            templateUrl: '/views/profile.html',
            controller: 'thirdController',

        })
        .otherwise({
            redirecTo: '/home'
        })
}])
