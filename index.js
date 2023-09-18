const express = require('express');
const cors = require('cors')
const app = express();
const port = process.env.PORT  || 3001;


app.use(cors());

const apiData = require('./data.json')

app.get('/service',(req, res)=>{
    res.send(apiData)
})

app.get("/", (req, res)=>{
    res.send('Hello i am live')
});


app.listen(port, ()=>{
    console.log('heloo again live')
})