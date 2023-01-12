const express=require('express')
const Person=require("../controllers/Votes.controller.js")
const Votes=express.Router()
const { body, validationResult } = require('express-validator');
var validator=[
    body('name').exists().isLength({ min: 2 }).not().isEmpty(),
    body('lastName').exists().isLength({ min: 2 }).not().isEmpty(),
    body('mail').isEmail().not().isEmpty(),
    body('birthDate').not().isEmpty().not().isEmpty(),
    body('country').not().isEmpty().isLength({ min: 2 }).not().isEmpty(),
    body('cb').exists()
]
Votes.post("/addvote",validator,Person.addVote)
Votes.get("/getvotes",Person.getResults)
module.exports =Votes