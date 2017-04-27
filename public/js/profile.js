var app = angular.module('myApp');

app.controller('thirdController', ['$scope', 'profileService', function($scope, profileService){
    $scope.user=[];
      $scope.userFunc = function (user) {
        profileService.myUser(user).then(function (res) {
           
            if(!res.data.length){
                console.log('no user data');
            } else{
                console.log('else')
                 $scope.user = res.data;
            }
            console.dir(res);
        })
    }
    
}])