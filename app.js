//jshint esversion

const express= require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const lds= require("lodash");

// const hdr= require(__dirname +"/getheader.jsx");
// // import hdr from (."/getheader.jsx");


// array of different page title 
const Ptitle=[{title:"Data",subtitle:"Swift fibre"},{title:"Data",subtitle:"NBN"},{title:"Dialpad",subtitle:"Dialpad Talk"},{title:"Dialpad",subtitle:"Dialpad Sales Dialer"},{title:"Dialpad",subtitle:"Dialpad Contact Centre"},{title:"Voice",subtitle:"Business SIP Voice"},{title:"Voice",subtitle:"Business Phone System"},{title:"Voice",subtitle:"Inbound Voice"},{title:"Cloud & IoT",subtitle:"Cloud Services"},{title:"Cloud & IoT",subtitle:"IOT Services"},{title:"About Us",subtitle:"about yourcompany"},{title:"About Us",subtitle:"Partner Reseller With Companyname"},{title:"About Us",subtitle:"Customer Referral"},{title:"About Us",subtitle:"Contact Companyname"}];

const app= express();

// using ejs
app.set("view engine", "ejs");
// for using ejs we need to put all the ejs files under named "views" folder and header and footer.ejs in "partials"

// use of bodyParser to get data from the route
app.use(bodyParser.urlencoded({extended:true}));

// making a public folder and using it to get hold of static folder such as css and all

app.use(express.static("public"));

// now using get function for home route

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

  Ptitle.forEach(function(pageinfo){
    // console.log(lds.lowerCase(pageinfo.subtitle));
    if(lds.lowerCase(pageinfo.subtitle)==urldypart){
      // var header= hdr(pageinfo.title,pageinfo.subtitle);
      // res.render((req.params.title));
      
      res.render((req.params.title),{Titlepage:pageinfo.title,Subtitlepage:pageinfo.subtitle});
    }
else{
  res.send("<img src='https://media.giphy.com/media/iliZk0fuv82cKdTwbO/giphy.gif' style='position:absolute;left: 38%;top: 29%;transform: translate(-50px, -100px);'>");
}
  });

});


// listening to our webpage on the desired or provide port on server

app.listen(process.env.PORT || 3000,function(){

  console.log("server is running on 3000 port");
});
