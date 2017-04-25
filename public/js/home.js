var app = angular.module('myApp');

app.controller('mainController', ['$scope', 'petService', function ($scope, petService) {
    $scope.pets = [];
    $scope.county = '';
    $scope.message = '';
    $scope.localAnimalFunc = function (county) {
        petService.myPet(county).then(function (res) {
           
            if(!res.data.length){
                console.log('no pet data')
                $scope.message = 'no pets in your area';
            } else{
                console.log('else')
                 $scope.pets = res.data;
            }
            console.dir(res);
        })
    }
}])
