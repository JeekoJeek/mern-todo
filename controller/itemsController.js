const db = require("../models");

module.exports = {
    findAll: function(req,res){
        db.Item.find(req.query)
            .sort({date:-1})
                .then(dbModel => res.json(dbModel))
                    .catch(err => json(err))
    },
    findById: function(req,res){
        db.Item.findById(req.params.id)
                .then(dbModel => res.json(dbModel))
                    .catch(err => json(err))
    },
    create: function(req,res){
        db.Item.create(req.body)
            .then(dbModel => res.json(dbModel))
                .catch(err => res.json(err))
    },
    update: function(req,res){
        db.Item.findeOneAneUpdate({
            _id: req.params.id
        },req.body).then(dbModel => res.json(dbModel)).catch(err=> res.json(err))
    },
    remove: function(req,res){
        db.Item.findById({_id: req.params.id})
        .then(dbModel => dbModel.remove())
        .then(dbModel => res.json(dbModel))
            .catch(err => json(err))
    }
}