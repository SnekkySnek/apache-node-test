const express = require('express')
const app = express()
const dotenv = require('dotenv')
const bodyParser = require('body-parser')
const routes = require('./app/routes/index')

dotenv.config()


const port = 5050



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
  
