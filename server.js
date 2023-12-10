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

app.get("/terms",function (req,res) {
	res
		.status(200)
		.sendFile(path.join(__dirname,"terms.html"));
});

app.get("/refund",function (req,res) {
	res
		.status(200)
		.sendFile(path.join(__dirname,"refund.html"));
});

app.get("/privacy",function (req,res) {
	res
		.status(200)
		.sendFile(path.join(__dirname,"privacy.html"));
});

app.get("/ctf",function(req,res) {
	res.status(200).header('Flag', 'KYC{I_will_find_you}').send('Go around!');
});

app.get("/sqli",function(req,res) {
	res.redirect('http://loginpage.unaux.com/index.php');
});

app.get("/bootcamp",function(req,res) {
	res.redirect('https://imjo.in/uuxMTB');
});

app.get("/webinar",function(req,res) {
	res.redirect('https://chat.whatsapp.com/BjwioRfsIHI8yIstvy3G3A');
});

app.get("/discord",function(req,res) {
	res.redirect('https://discord.gg/ScYJGAvHdJ');

});

app.get("/whatsapp",function(req,res) {
	res.redirect('https://whatsapp.com/channel/0029VaDTkiiIt5s25C86Zw30');

});

app.get("/youtube",function(req,res) {
	res.redirect('https://www.youtube.com/channel/UCM6PAPjFPjCdkgpzM96njlw');

});

app.get("/instagram",function(req,res) {
	res.redirect('https://www.instagram.com/hackersvillaxyz');
});

app.get("/hacknslash-masterclass-thank-you",function (req,res) {
	res
		.status(200)
		.sendFile(path.join(__dirname,"/masterclass/thanks.html"));
});

app.get("/*",function (req,res) {
	res
		.status(404)
		.sendFile(path.join(__dirname,"404.html"));
});

app.listen(port,() => {
	console.log("app is running on Port " + port)	
})
