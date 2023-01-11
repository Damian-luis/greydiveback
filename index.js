const express=require('express')
const cors=require('cors')
const app=express()
const Votes=require("./routes/Routes.js")
app.use(express.json())
app.use(cors())
require('dotenv').config()
const PORT=process.env.PORT || 3000

app.use("/votes",Votes)
app.listen(PORT,()=>{
    console.log("running on port "+PORT)
})
