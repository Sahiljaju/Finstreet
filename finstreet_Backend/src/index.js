
const app =require('express')();
const bodyParser = require("body-parser");
const multer = require("multer");
const express = require("express");
const path = require("path");
const ejs = require("ejs");

const port = process.env.PORT  || 3000;

app.get('/',(req,res)=>res.send('INDEX'))

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

//
// const uploads =multer()                      

// app.get('/insert',(req,res)=>{
//       res.render('Customer');
// }); 

// app.post('/insert',upload, async function  (req, res, next) {
//     let obj = {
//         profilephoto: req.files['profile'][0].filename,
//          Fullname: req.body.FullName,
        
//          Password: req.body.Password,
         
//          PhoneNumber: req.body.Phone,
//          HomeContact: req.body.HomeContact,
//          EmailAddress: req.body.email,   
        
         
        
//          FatherName: req.body.FatherName,
//          MotherName: req.body.MotherName,
//          DateofBirth: req.body.DateofBirth,
//          Gender: req.body.Gender,
//          PermanentAddress: req.body.DocumentName,
         
        
//                      }
                     
         
//                      Customer.create(obj, (err, item) => {
//          if (err) {
//              console.log(err);
//            } 
//          else {
              
//              // res.send('fileuploaded');
//              res.redirect('/details');
//            }
//          });
//        });


// app.get('/details/:id',(req,res)=>{
//     var id = req.params.id;
//     Customer.findOne({id:id}, (err, Data) => {
//         if (err) {
//             console.log(err);
//             res.status(500).send('An error occurred', err);
//         }
//         else {
//             res.render('updatecustomer', { userData: Data});
            
//         }
//     });
        
//   }); 

// app.post('/details/:id',uploads.none(),(req, res)=>{
//     let obj = {
        
//          Fullname: req.body.FullName,
        
//          Password: req.body.Password,
         
//          PhoneNumber: req.body.Phone,
//          HomeContact: req.body.HomeContact,
//          EmailAddress: req.body.email,   
        
         
        
//          FatherName: req.body.FatherName,
//          MotherName: req.body.MotherName,
//          DateofBirth: req.body.DateofBirth,
//          Gender: req.body.Gender,
//          PermanentAddress: req.body.DocumentName,
         
        
//                      }
//                      var id = req.params.id;
//                      Employee.update({_id:id},obj,(err,docs)=>{
//                        if(err){
//                          console.log(err);
//                        }
//                        else{
//                          console.log(docs);
//                          res.redirect('/alluserinformationpage')
//                        }
//                      });                 
// })  

// app.get('/alluserinformationpage', (req, res) => {
//     Employee.find({}, (err, items) => {
//         if (err) {
//             console.log(err);
//             res.status(500).send('An error occurred', err);
//         }
//         else {
//             res.render('manageEmployee', { userData: items });
//             console.log(items);
//         }
//     })
// });
  
// app.post('/delete/:id',(req,res)=>{

//     Employee.findByIdAndRemove( req.params.id, (err, docs)=>{
//             if(err){ res.json(err)}
//             else {
//               res.redirect('/alluserinformationpage')};
            
// });
// });
app.listen(port,()=>{
    console.log("server running on port number",port);
    })



