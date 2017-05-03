var app = angular.module('myApp');

app.controller('mainController', ['$scope', 'petService', "UserService", function ($scope, petService, UserService) {
    $scope.pets = [];

    $scope.county = '';
    $scope.message = '';
    $scope.localAnimalFunc = function (county) {
        petService.myPet(county).then(function (res) {

            if (!res.data.users.length) {
                console.log('no pet data')
                $scope.message = 'no pets in your area';
            } else {
                console.log('else')
                $scope.pets = res.data.users;
                console.log(res.data.users);
                $scope.currentUser = res.data.currentUser;
                console.dir($scope.pets);
            }
            console.dir(res);
        })
    }
    $scope.delete = function(index, id){
        petService.deletePetService(id).then(function(res){
            if(res.data){
                console.log('pet deleted');
                alert('pet deleted');
                $scope.pets.splice(index, 1);
            }
        })
    }
}])
