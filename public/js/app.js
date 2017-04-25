var app = angular.module('myApp', ['ngRoute'])
app.config(['$routeProvider', function($routeProvider){
    $routeProvider
    .when('/home', {
            templateUrl: '/views/home.html',
            controller: 'mainController',

        })
//        .when('/profile', {
//            templateUrl: '/views/profile.html',
//            controller: 'secondController',
//
//        })
        .otherwise({
            redirecTo: '/home'
        })
}])