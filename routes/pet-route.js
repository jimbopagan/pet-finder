var express = require('express');

var router = express.Router();

//models

var Pet = require('../models/pet-schema');

router
    .route('/')
    .get(function (req, res) {
        console.log(req.query);
        Pet.find(req.query, function (err, pets) {
            if (err) {
                res.send(err)
            }
            console.dir(pets);
            res.send(pets)
        })
    })

    .post(function (req, res) {
        var pet = new Pet(req.body);
        pet.owner = req.user
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
        Pet.findByIdAndUpdate({_id: req.params.todoId, user: req.user._id}, function (err, pet) {
            if (err) {
                res.status(500).send(err);
            } else {

                pet.save(function (err, pet) {
                    if (err) {
                        res.status(500).send(err)
                    }
                })
                res.send(pet);
            }
        })
    })
    .delete(function (req, res) {
        Pet.findByIdAndRemove({_id: req.params.todoId, user: req.user._id}, function (err, pet) {
            var response = {
                message: 'pet deleted',
            }
            res.send(response);
        })
    })
module.exports = router;
