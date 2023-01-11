const express=require('express')
const Person=require("../controllers/Votes.controller.js")
const Votes=express.Router()

Votes.post("/addvote",Person.addVote)
Votes.get("/getvotes",Person.getResults)
module.exports =Votes