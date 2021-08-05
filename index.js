//1.6 First unit examen
//Student: Brayan Rivera Garay
//Friday, 9 de July de 2021

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const swaggerUi = require('swagger-ui-express');

const app = express();
const port = 4000;

app.use(express.json());
app.use(bodyParser.json());
app.use(cors());

app.all('*', function(req, res, next){
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'PUT,GET,POST,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers',  'Content-Type');
    next();
});

//GET Must return your name 
app.get('/api/get', ( req, res) => {
    res.send('Brayan Rivera Garay');
});

//POST Must return your age, sending your  birthdate  from postman
app.post('/api/post', (req, res) => {
    let body = req.body;
    let age = body.actyear - body.bornyear
    res.send({age});
  });

//PUT Must return your full name from posting your firstname and lastname from postman 
app.put('/api/put', (req, res) => {
    let body = req.body;
    let name = body.Fname + body.Sname
    res.send({name});
})

//DELETE Must return a message with a word that you sent from postman
app.delete('/api/delete', (req,res) => {
  let body = req.body;
  let message = body.message1
  res.send({message});
});

//GET Must return a blue div with an H1 showing your name
app.get('/api/get2', ( req, res) => {
    res.send(
       '<div style="background-color: blue";>Brayan Rivera Garay</div>'
    );
});

app.listen(port,function(){
    console.log('Goodness at port: ' + port);
});