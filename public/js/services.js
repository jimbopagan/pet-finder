var app = angular.module('myApp');

app.service('petService', ['$http', function ($http) {
    this.myPet = function (county) {
        if (!county) {
            var queryString = "";
//            alert('not county equal true')
        } else {
            var queryString = "?county=" + county;
//            alert('not county equal false')
        }
        return $http.get('/api/home' + queryString)
    }
    this.addPetService = function (obj) {
        return $http.post('/api/home', obj)
    }
    this.deletePetService = function (id) {
        return $http.delete('/api/home/' + id)
    }
    this.editPetService = function (obj, pet) {
        return $http.put('/api/home/' + pet._id, obj)
    }
}])
