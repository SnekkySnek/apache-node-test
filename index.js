const express = require('express')
const app = express()
const cluster = require('cluster') 
const dotenv = require('dotenv')
const bodyParser = require('body-parser')
const routes = require('./app/routes/index')
const port = 5050



if(cluster.isMaster){
    cluster.fork()
}else{
    
dotenv.config()






app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: true
}))

app.use(routes)



// app.get('/', (req, res) => {
//     res.sendFile(__dirname + '/index.html')
// })



app.listen(port, () =>{
    console.log(`Calling Zaddy on ${port}`)  
})
  

}