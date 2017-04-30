var app = angular.module('myApp', ['ngRoute', 'myApp.Auth'])
app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
        .when('/home', {
            templateUrl: '/views/home.html',
            controller: 'mainController',

        })
        .when('/logout', {
            templateUrl: '/views/home.html',
            controller: 'LogoutController',

        })
//        .when('/profile', {
//            templateUrl: '/views/profile.html',
//            controller: 'thirdController',
//
//        })
        .otherwise({
            redirecTo: '/home'
        })
}])
