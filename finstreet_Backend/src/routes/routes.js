const express = require('express');
const db =  require('../config/database');
const Users = require('../models/Models');
const path = require("path");
const multer = require("multer");
const router = express.Router()

const profilePaths = path.join(__dirname,"../../uploads/profiles");

var storage = multer.diskStorage({
	destination: (req, file, cb) => {
    if (file.fieldname === "profile") {
        cb(null, profilePaths)
    }
 },
    filename:(req,file,cb)=>{
      if (file.fieldname === "profile" ) {
          cb(null, file.fieldname+Date.now()+path.extname(file.originalname));
      }
      
      
  }
});

var upload = multer({ storage: storage,
                      
                    fileFilter: (req, file, cb) => {
                        checkFileType(file, cb);
                    }
                    })
                    .fields(
                    [
                      {name:'profile', maxCount:1},
                      
                    ]
                    ); 
                    function checkFileType(file, cb) {
                      if ( file.fieldname === "profile" ) {
                          if (
                              file.mimetype === 'image/png' ||
                              file.mimetype === 'image/jpg' ||
                              file.mimetype === 'image/jpeg'||
                              fiel.mimetype===  'image/gif'
                            ) { // check file type to be png, jpeg, or jpg
                              cb(null, true);
                            } else {
                              cb(null, false); // else fails
                            }
                          }
                      }


router.get('/allcustomers',(req,res)=> {
   Users.findAll()
        .then(data => {
            console.log(data)
            res.render('allCustomer',{userData:data})
        })
        .catch(err => console.log(err))
}) ;

router.get('/insert',(req,res)=>{
    res.render('Customer')
})
router.post('/insert',upload,(req,res)=> {
    

 
 //insert in Table
    Users.create({
        user_name : req.body.user_name, 
        user_email : req.body.user_email , 
        user_password : req.body.user_password, 
        user_image : req.files['profile'][0].filename,  
        total_orders : req.body.total_orders
       })
      .then(Users => res.redirect('/routes/allcustomers')) 
      .catch(err => console.log(err))  

 }) 


//// update in Table ///

router.get('/details/:id',(req,res)=> {
    Users.findOne({where: 
        {user_id:req.params.id}})
         .then(data => {
             console.log(data)
             res.render('updatecustomer',{data:data})
         })
         .catch(err => console.log(err))
 }) ; 

 router.post('/details/:id',upload,(req,res)=> {
    
    
      
        let object = {
            user_name : req.body.user_name, 
            user_email : req.body.user_email , 
           
            user_password : req.body.user_password,          
            total_orders : req.body.total_orders
           }
           if(req.file){
               object.user_image = req.files['profile'][0].filename 
           }
           console.log(object)
    
     
       
    
 
    //insert in Table
       Users.update(object,{
        where: {
          user_id: req.params.id
        }})
         .then(Users => res.redirect('/routes/update')) 
         .catch(err => console.log(err))  
   
    }) 


///// update

router.get('/update',(req,res)=> {
             res.send('File Updated',)    
 }) ;

 //// images


 router.get('/images/:id',(req,res)=> {
    Users.findOne({where: 
        {user_id:req.params.id}})
         .then(data => {
             console.log(data)
             res.render('images',{data:data})
         })
         .catch(err => console.log(err))
 }) ; 

 //// 
 router.post('/delete/:id',(req,res)=> {
    Users.destroy({where: 
        {user_id:req.params.id}})
         .then(data => {
             console.log(data)
             res.send('Customer Successfully deleted')
         })
         .catch(err => console.log(err))
 }) ; 

 router.get('/',(req,res)=> {
        res.render('login')
 }) ;
 
 var uploads = multer();
routes.post('/',uploads.none(),async (req,res)=>{

      let obj={
        LoginUsername : req.body.UserEmail,
        LoginPassword :  req.body.Userpassword,
        LoginTime: new Date().now,
      
     }
    
  }) 
module.exports = router ;