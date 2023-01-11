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
    },
    getResults:async(req,res)=>{
        try{
            const data=await Person.get()
            const list=data.docs.map(e=>{return e.data()})
            var dataPerCountry={
                "argentina":0,
                "brasil":0,
                "chile":0,
                "colombia":0,
                "mexico":0,
                "peru":0,
                "uruguay":0,
                "venezuela":0
            }
            for(let i=0; i<list.length;i++){
                if(list[i].country==="argentina"){
                    console.log("pasate")
                    dataPerCountry.argentina=dataPerCountry.argentina+1
                }
                if(list[i].country==="brasil"){
                    dataPerCountry.brasil=dataPerCountry.brasil+1
                }
                if(list[i].country==="chile"){
                    dataPerCountry.chile=dataPerCountry.chile+1
                }
                if(list[i].country==="colombia"){
                    dataPerCountry.colombia=dataPerCountry.colombia+1
                }
                if(list[i].country==="mexico"){
                    dataPerCountry.mexico=dataPerCountry.mexico+1
                }
                if(list[i].country==="peru"){
                    dataPerCountry.peru=dataPerCountry.peru+1
                }
                if(list[i].country==="uruguay"){
                    dataPerCountry.uruguay=dataPerCountry.uruguay+1
                }
                if(list[i].country==="venezuela"){
                    dataPerCountry.venezuela=dataPerCountry.venezuela+1
                }
            }
            res.status(200).json({
                status:true,
                message:"Votos conseguidos exitosamente",
                list,
                ammounVotes:list.length,
                dataPerCountry
            })
        }
        catch(e){
            res.status(400).json({status:false,message:"No se ha podido acceder a esta información"})
        }
    }
} 