const nodemailer=require('nodemailer');
const bodyParser=require('body-parser');
module.exports={
    sendMail:(mail)=>{
        
        
      let transporter = nodemailer.createTransport({
        service: 'gmail',
          // true for 465, false for other ports
          auth: {
            user: 'damian.luis.porta@gmail.com', // generated ethereal user
            pass: 'exffehlohvlacxub', // generated ethereal password
          }
        
        });  
    
    
    
        var mailOptions = {
          from: '"Damian Duran" <damian.luis.porta@gmail.com>', // sender address
          to: `${mail}`, // list of receivers
          subject: "Encuesta Greydive", // Subject line
           // plain text body
           text: "",
          html: `<div >
          
          <h2>Tu voto se ha enviado correctamente! <h2><br>
          <h2>Gracias por participar, esta encuesta se ha realizado para el challenge de Greydive.</h2>
          <br>
          <br>Puedes consultar los resultados del mismo en https://greydivefront.vercel.app/results
          <br>
          <br>
          <br>
          <br>
          <h3>Damian Duran. </h3>
          
          
          </div>`// html body
        }
        
        
        transporter.sendMail(mailOptions,(error,info) => {
          console.log("senMail returned!");
          if (error) {
            console.log("ERROR!!!!!!", error);
          } else {
            console.log('Email sent: ' + info.response);
          }
        });
        
    }
  
  
}
