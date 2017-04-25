var app = angular.module('myApp');

app.service('petService', ['$http', function($http){
    this.myPet = function(county){
        if(!county){
            var queryString = "";
            alert('not county equal true')
        } else{
            var queryString = "?county=" + county; 
             alert('not county equal false')
        }
        return $http.get('/pets' + queryString)
    }
    this.addPetService = function(obj){
        return $http.post('/pets', obj)
    }
    this.deletePetService = function(id){
        return $http.delete('/pets/' + id ) 
    }
    this.editPetService = function(obj, pet){
        return $http.put('/pets/' + pet._id, obj) 
    }
}])