var app = angular.module("myApp.Auth", []);

app.config(["$routeProvider", function ($routeProvider) {
    $routeProvider
        .when("/signup", {
            templateUrl: 'auth/signup/signup.html',
            controller: "SignupController"
        })
        .when("/login", {
            templateUrl: "auth/login/login.html",
            controller: "LoginController"
        })
        .when("/logout", {
            controller: "LogoutController",
            template: ""
        })
        .when("/forgot", {
            templateUrl: "auth/forgot/forgot.html",
            controller: "ForgotPasswordController"
        })
        .when("/reset/:resetToken", {
            templateUrl: "auth/reset/reset.html",
            controller: "PasswordResetController"
        })

}]);

app.service("TokenService", [function () {
    var userToken = "token";

    this.setToken = function (token) {
        localStorage[userToken] = token;

    };

    this.getToken = function () {
        return localStorage[userToken];
    };

    this.removeToken = function () {
        localStorage.removeItem(userToken);
    };
}]);

app.service("UserService", ["$http", "$location", "TokenService", function ($http, $location, TokenService) {
    var self = this;
    this.signup = function (user) {
        return $http.post("/auth/signup", user);
    };
    
    this.login = function (user) {
        return $http.post("/auth/login", user).then(function (response) {
            TokenService.setToken(response.data.token);
            console.log(response.data);
            //            console.log('from here');
            //            console.log(response);
            self.user = response.data.user;
            return response;


        });
    };

    this.logout = function () {
        TokenService.removeToken();
        $location.path("/login");
    };

    this.isAuthenticated = function () {
        return !!TokenService.getToken();
    };
    this.changePassword = function (newPassword) {
        console.log(newPassword);
        return $http.post("/auth/change-password", {
            newPassword: newPassword
        }).then(function (response) {
            alert("Password Changed Successfully!");
            return response.data;
        }, function (response) {
            alert("Problem with the server");
        });
    };
    this.forgotPassword = function (email) {
        console.log("Sending an email to " + email);
        return $http.post("/auth/forgot", {
            email: email
        })
    };
    this.resetForgottenPassword = function (password, resetToken) {
        return $http.post("/auth/reset/" + resetToken, {
            password: password
        }).then(function (response) {
            return response.data.message;
        });
    };
}]);

app.service("AuthInterceptor", ["$q", "$location", "TokenService", function ($q, $location, TokenService) {
    this.request = function (config) {
        var token = TokenService.getToken();
        if (token) {
            config.headers = config.headers || {};
            config.headers.Authorization = "Bearer " + token;
        }
        return config;
    };

    this.responseError = function (response) {
        if (response.status === 401) {
            TokenService.removeToken();
            $location.path("/login");
        }
        return $q.reject(response);
    };
}]);

app.config(["$httpProvider", function ($httpProvider) {
    $httpProvider.interceptors.push("AuthInterceptor");
}]);
