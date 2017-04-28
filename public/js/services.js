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
        return $http.get('/api/pets' + queryString)
    }
    this.addPetService = function (obj) {
        return $http.post('/api/pets', obj)
    }
    this.deletePetService = function (id) {
        return $http.delete('/api/pets/' + id)
    }
    this.editPetService = function (obj, pet) {
        return $http.put('/api/pets/' + pet._id, obj)
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
        return $http.get('/api/profile')
    }
    this.addProfileService = function (obj) {
        return $http.post('/api/profile', obj)
    }
    this.deleteProfileService = function (id) {
        return $http.delete('/api/profile/' + id)
    }
    this.editProfileService = function (obj, profile) {
        return $http.put('/api/profile/' + profile._id, obj)
    }
}])

app.service('loginService', ['$http', function ($http) {
//    this.myUser = function (login) {
//        return $http.get('/auth/login')
//    }
    this.addLoginService = function (obj) {
        return $http.post('/auth/login', obj)
    }
//    this.deleteLoginService = function (id) {
//        return $http.delete('/auth/login/' + id)
//    }
//    this.editLoginService = function (obj, login) {
//        return $http.put('/auth/login/' + login._id, obj)
//    }
}])
