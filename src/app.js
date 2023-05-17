//jshint esversion

const express= require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const lds= require("lodash");

var enforce = require('express-sslify');
 
const path =require('path');
 



// const hdr= require(__dirname +"/getheader.jsx");
// // import hdr from (."/getheader.jsx");


// array of different page title 
const Ptitle=[{title:"Data",subtitle:"Swift fibre"},{title:"Data",subtitle:"NBN"},{title:"Dialpad",subtitle:"Dialpad Talk"},{title:"Dialpad",subtitle:"Dialpad Sales Dialer"},{title:"Dialpad",subtitle:"Dialpad Contact Centre"},{title:"Voice",subtitle:"Business SIP Voice"},{title:"Voice",subtitle:"Business Phone System"},{title:"Voice",subtitle:"Inbound Voice"},{title:"Cloud & IoT",subtitle:"Cloud Services"},{title:"Cloud & IoT",subtitle:"IOT Services"},{title:"About Us",subtitle:"about Quick software solutions"},{title:"About Us",subtitle:"Partner Reseller With Quick software solutions"},{title:"About Us",subtitle:"Customer Referral"},{title:"About Us",subtitle:"Contact Quick software solutions"},{title:"Devlopment & Integrate",subtitle:"Services"}];

const app= express();

// using ejs

// public file static path for css and images 

const static_path= path.join(__dirname,"../public");

// we have got path of public by going one dir back of working dir 

// getting all paths for views and partials 

const templates_path=path.join(__dirname,"../templates/views");


// setiing views and partials for the dynamic pages 

app.set("view engine", 'ejs');
app.set('views',templates_path);


// use of bodyParser to get the data from the route body 

app.use(bodyParser.urlencoded({extended:true}));

// making our express app use static fles like css images and js 

app.use(express.static(static_path));


app.get("/",function(req,res){

res.render("home");


});



// responding to the post action of the home route

app.post("/",function(req,res){


});

// to get the page as per the url entered by the user
app.get("/:title",function(req,res){
  // converting dynamic part of the url to lowecase of lodash
  urldypart=lds.lowerCase(req.params.title);
  console.log(urldypart +"this is we getting from url target");
  var pagefound ="false";

  Ptitle.forEach(function(pageinfo){
    // console.log(lds.lowerCase(pageinfo.subtitle));
    if(lds.lowerCase(pageinfo.subtitle)==urldypart){
      // var header= hdr(pageinfo.title,pageinfo.subtitle);
      // res.render((req.params.title));
      
      res.render((req.params.title),{Titlepage:pageinfo.title,Subtitlepage:pageinfo.subtitle});
      pagefound="true";
    }
else{
 
}
  });
  if(pagefound="false"){
    res.send("<img src='https://media.giphy.com/media/iliZk0fuv82cKdTwbO/giphy.gif' style='position:absolute;left: 38%;top: 29%;transform: translate(-50px, -100px);'>");
  }

});


// listening to our webpage on the desired or provide port on server

app.listen(process.env.PORT || 3000,function(){

  console.log("server is running on 3000 port");
});
