var express = require('express');

var router = express.Router();

//models

var Pet = require('../models/pets-schema');

router
    .route('/')
    .get(function (req, res) {
        console.log(re.query);
        Pet.find(req.query, function (err, pets) {
            if (err) {
                res.send(err)
            }
            console.dir(pets);
            res.send(pets)
        })
    })

    .post(function (req, res) {
        var pet = new Pets(req.body);
        pet.save(function (err, createdPet) {
            if (err) {
                res.send(err);
            }
            res.send(createdPet);
        })
    })

router
    .route('/:id')
    .put(function (req, res) {
        Pet.findById(req.params.id, function (err, pet) {
            if (err) {
                res.status(500).send(err);
            } else {
                pet.owner = req.body.owner || pet.owner;
                pet.pets = req.body.pets || pet.pets;
                pet.pets.kind = req.body.pets.kind || pet.pets.kind;
                pet.pets.gender = req.body.pets.gender || pet.pets.gender;
                pet.pets.photo = req.body.pets.photo || pet.pets.photo;
                pet.pets.missingSince = req.body.pets.missingSince || pet.pets.missingSince;
                pet.save(function(err, pet){
                    if(err){
                        res.status(500).send(err)
                    }
                })
                res.send(pet);
            }
        })
    })
.delete(function(req, res){
    Pet.findByIdAndRemove(req.params.id, function(err, garden){
        var response = {
            message: 'pet deleted',
        }
        res.send(response);
    })
})
