var express = require('express');

var router = express.Router();

//models

var User = require('../models/user-schema');

router
    .route('/home')
    .get(function (req, res) {
        console.log(req.query);
        console.log(req.params.id);
        User.find(req.params.id)
            .where('county')
            .equals(req.query.county)
            .exec(function (err, users) {
                if (err) {
                    res.send(err)
                }
                console.dir(users);
                res.send({
                    users: users,
                    currentUser: req.user
                })
            })
    })

    .post(function (req, res) {
        var user = new User(req.body);
        user.save(function (err, createdPet) {
            if (err) {
                res.send(err);
            }
            res.send(createdPet);
        })
    })


router
    .route('/home/:id')
    .put(function (req, res) {
        User.findByIdAndUpdate({
            user: req.user._id
        }, function (err, user) {
            if (err) {
                res.status(500).send(err);
            } else {

                user.save(function (err, user) {
                    if (err) {
                        res.status(500).send(err)
                    }
                })
                res.send(user);
            }
        })
    })
    .delete(function (req, res) {
        User.findByIdAndRemove(req.user._id, function (err, user) {
            var response = {
                message: 'user deleted',
            }
            res.send(response);
        })
    })
module.exports = router;
