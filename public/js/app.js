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
        .when("/profile", {
            templateUrl: "/profile/profile.html",
            controller: "ProfileController",
        })
        .otherwise({
            redirecTo: '/home'
        })
}])
