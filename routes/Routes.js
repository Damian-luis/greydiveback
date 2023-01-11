const express=require('express')
const Person=require("../controllers/Votes.controller.js")
const Votes=express.Router()

Votes.post("/addvote",Person.addVote)

module.exports =Votes