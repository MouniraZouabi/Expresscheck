

const express = require('express');
const app = express();


//middleware 
let date = new Date();
let currentHour = date.getHours();
console.log('The current hour is :',currentHour,'h');
let currentDay = date.getDay();
console.log('The current number of the day is : ',currentDay ,'d');
function logger(req, res, next) {
  if (currentHour > 9 && currentHour < 17 && currentDay > 0 && currentDay < 6 ) {next();} 
  else {
        res.sendFile('public/close.html',{root : __dirname})}
      
  
  }

app.use(logger);
app.use(express.json());

// Serve the static files
app.use(express.static(__dirname + '/public'));

const port = 5000;
app.listen(port, (err) => {
  err
    ? console.log(err)
    : console.log(`the server is running on port ${port}`);
});

 //Routes
app.get('/',(req, res) => {
  res.sendFile('index.html',{root : __dirname})});

app.get('/contact',(req, res) => {
res.sendFile('contact.html',{root : __dirname})});

app.get('/services', (req, res) => {
  res.sendFile('services.html',{root : __dirname})});


  