
const app =require('express')();
const bodyParser = require("body-parser");
const multer = require("multer");
const express = require("express");
const path = require("path");
const ejs = require("ejs");

const port = process.env.PORT  || 3000;

app.get('/',(req,res)=>res.render('Dashbored'));

const Sequelize = require('sequelize');
 
let database = require('./config/database')
 
database.authenticate()
 .then(() => {
   console.log('Connection has been established successfully.');
 })
 .catch(err => {
   console.error('Unable to connect to the database:', err);
 });
 
 app.use(bodyParser.json());
 app.use(bodyParser.urlencoded({ extended: true }));

 //Routes   
 app.use('/routes', require('./routes/routes'));


const staticpath = path.join(__dirname, "../public/");
const viewspath = path.join(__dirname, "../views");

app.set('view engine', 'ejs');
app.set('views', viewspath); 

app.use(express.static(staticpath));
app.use(`/images`,express.static(path.join(__dirname, "../uploads/profiles")));


app.listen(port,()=>{
    console.log("server running on port number",port);
    })



