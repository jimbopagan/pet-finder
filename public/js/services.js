var app = angular.module('myApp');

app.service('petService', ['$http', function ($http) {
    this.myPet = function (county) {
        if (!county) {
            var queryString = "";
            alert('not county equal true')
        } else {
            var queryString = "?county=" + county;
            alert('not county equal false')
        }
        return $http.get('/pets' + queryString)
    }
    this.addPetService = function (obj) {
        return $http.post('/pets', obj)
    }
    this.deletePetService = function (id) {
        return $http.delete('/pets/' + id)
    }
    this.editPetService = function (obj, pet) {
        return $http.put('/pets/' + pet._id, obj)
    }
}])

app.service('profileService', ['$http', function ($http) {
    this.myUser = function (profile) {
        //        if(!county){
        //            var queryString = "";
        //            alert('not county equal true')
        //        } else{
        //            var queryString = "?county=" + county; 
        //             alert('not county equal false')
        //        }
        return $http.get('/profiles')
    }
    this.addProfileService = function (obj) {
        return $http.post('/profiles', obj)
    }
    this.deleteProfileService = function (id) {
        return $http.delete('/profiles/' + id)
    }
    this.editProfileService = function (obj, profile) {
        return $http.put('/profiles/' + profile._id, obj)
    }
}])

app.service('loginService', ['$http', function ($http) {
    this.myUser = function (login) {
        return $http.get('/login')
    }
    this.addProfileService = function (obj) {
        return $http.post('/login', obj)
    }
    this.deleteProfileService = function (id) {
        return $http.delete('/login/' + id)
    }
    this.editProfileService = function (obj, profile) {
        return $http.put('/login/' + profile._id, obj)
    }
}])
