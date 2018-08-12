const express = require('express');
const app = express();
const cluster = require('cluster'); 
const dotenv = require('dotenv');
const mongo = require('./app/mongo');
const bodyParser = require('body-parser');
const routes = require('./app/routes/index');




if(cluster.isMaster){
    cluster.fork();
}else{
    
dotenv.config();
const port = process.env.PORT;





app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(routes);



// app.get('/', (req, res) => {
//     res.sendFile(__dirname + '/index.html')
// })




 async function connectDb() {
     let connection =  mongo.connect(process.env.MONGO_URL)

     try {
        let connected = await connection
        return connected
     }catch(error){
         console.log(error);
         
     }
        
 };

 connectDb().then(() =>{

     app.listen(port, () =>{
         console.log(`Calling Zaddy on port ${port}`);
     })  
 })

 
};