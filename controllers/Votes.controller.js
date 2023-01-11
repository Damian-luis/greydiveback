const Person = require('../config/db.js')
module.exports={
    addVote:async(req,res)=>{
        const name=req.body.name
        const lastName=req.body.lastName
        const mail=req.body.mail
        const birthDate=req.body.birthDate
        const country=req.body.country
        const cb=req.body.cb
        try{
            await Person.add({
                name,lastName,mail,birthDate,country,cb
            })
            res.status(200).json({status:true,message:"Su informacion se ha subido correctamente"})
        }
        catch(e){
            console.log(e)
            res.status(400).json({status:false,message:"No se ha podido submitir correctamente, contacte a su desarrollador a cargo :/"})
        }
    }
} 