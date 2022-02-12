const moongoose = require('mongoose');
const Database = process.env['Database']

 

module.exports ={
    name: 'ready',
    once: true,
    execute(client){
      console.log(` ${client.user.tag} is working!`);
      client.user.setActivity(" with BOT SIMPLE ", {type: "PLAYING"});
      
  

      if(!Database) return;
        moongoose.connect(Database,{
            useNewUrlParser: true,
            useUnifiedTopology: true,
        }).then(()=>{
            console.log("Connected to Database");
        }).catch((err) =>{
            console.log(err);
            console.log("AREA error at database");
        });
    }
}
 