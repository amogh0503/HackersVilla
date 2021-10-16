const express = require('express');
const port = process.env.PORT || 5000
const mongoose = require('mongoose')
const url = "mongodb://localhost/studentData"

const app = express();
mongoose.connect(url, {useNewUrlParser:true})
const con = mongoose.connection
app.use(express.json());

var path = require("path");

app.use(express.static('./'));
app.use(function(req,res,next)
{
	res.header("Access-control-Allow-Origin","*");
	res.header("Access-control-Allow-Headers","Origin,X-Requestsed-With,Content-Type,Accept");
	next();
})

const db_register = require('./db_assets/db_register')
app.use('/register',db_register)


const db_login = require('./db_assets/db_login')
app.use('/login',db_login)

con
.once('open',() => console.log("Connected..."))
.on('error', error => {
	console.log('Your Error',error);
});


/*
app.get('/hello',function(req,res){
	res.json({A:1});
	console.log('Working');
})


app.post('/register',(req,res)=>{
    const { fname, password, phone, email} = req.body
    console.log(req.body)
})
*/

app.get("/",function (req,res) {
	res
		.status(200)
		.sendFile(path.join(__dirname,"index.html"));
});

app.get("/about",function (req,res) {
	res
		.status(200)
		.sendFile(path.join(__dirname,"about_us.html"));
});

app.get("/course",function (req,res) {
	res
		.status(200)
		.sendFile(path.join(__dirname,"course_tour.html"));
});

app.get("/contact",function (req,res) {
	res
		.status(200)
		.sendFile(path.join(__dirname,"contact_us.html"));
});

app.get("/home",function (req,res) {
	res
		.status(200)
		.sendFile(path.join(__dirname,"index.html"));
});

app.get("/register",function (req,res) {
	res
		.status(200)
		.sendFile(path.join(__dirname,"signin.html"));
});

app.get("/login",function (req,res) {
	res
		.status(200)
		.sendFile(path.join(__dirname,"signin.html"));
});

app.get("/bootcamp",function(req,res) {
	res.redirect('https://form.typeform.com/to/LUGW5Tqx');
});

app.get("/sample",function(req,res) {
	res.status(200).header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');

});

app.get("/*",function (req,res) {
	res
		.status(404)
		.sendFile(path.join(__dirname,"404.html"));
});

app.listen(port,() => {
	console.log("app is running on Port " + port)	
})
