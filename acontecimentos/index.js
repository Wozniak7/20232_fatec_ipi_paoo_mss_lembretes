require('dotenv').config()
//usamos para definir endpoints
//para receber requisições HTTP
const express = require('express')
//usamos para enviar requisições HTTP
const axios = require('axios')
const app = express();
//middleware
app.use(express.json())

const baseLogs = {}
let id = 1

app.get('/logs', (req, res) => res.send(baseLogs))  

app.post('/eventos', (req, res) => {
  try{
    const d = new Date();
    let time = d.toLocaleTimeString();
    let date = d.toLocaleDateString();
    baseLogs[id] = {
        tipo: req.body.type,
        data: date + "|" + time 
    }
    id++
  }
  catch(e){}
  res.status(200).end() 
})


app.listen(
  process.env.PORT,
  () => console.log(`Logs: ${process.env.PORT}`)
)