var app = angular.module("myApp");

app.controller("ProfileController", ["$scope", "UserService", function ($scope, UserService) {
    
    $scope.currentUserName = UserService.user;
    console.log($scope.currentUser);
    $scope.changePassword = function (passwords) {
        
        if (passwords.newPassword === passwords.newPasswordRepeat) {
            UserService.changePassword(passwords.newPassword).then(function (response) {
                $scope.passwords = {};
            })
        } else {
            alert("The two passwords didn't match");
        }
    }
}]);
