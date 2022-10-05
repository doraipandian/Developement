const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const bodyparser = require('body-parser');
const path = require('path');


const app = express()

dotenv.config({path:'config.env'});
const PORT = process.env.PORT||8080;

//log requests
app.use(morgan('tiny'));

// request to body-parser
app.use(bodyparser.urlencoded({extended:true}));

// setting view engine
app.set("view engine", "ejs")

// load assets
app.use('/css', express.static(path.resolve(__dirname,"public/css")));
app.use('/img', express.static(path.resolve(__dirname,"public/img")));
app.use('/js', express.static(path.resolve(__dirname,"public/js")));

app.get('/',(req, res)=>{
   // res.send('SLP Application');
   res.render('login');
})

app.listen(PORT, ()=> {
    console.log(`Server is running on http://localhost:${PORT}`);
});