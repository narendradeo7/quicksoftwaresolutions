import React from "react";
import ReactDOM from "react-dom"; 

module.exports =getHeader;


function getHeader(title,subtitle){ 
var pageDesc=[]; 
pageDesc.push({pageTitle:title,pageSubtitle:subtitle});
    return(
    <section class="page_title cs s-pt-60 s-pb-10 s-pt-lg-130 s-pb-lg-60 page_title text-center">
        <div class="hex cs s-pt-60 s-pb-10 s-pt-lg-130 s-pb-lg-60 text-center">
        </div>
        <div class="bg cs s-pt-60 s-pb-10 s-pt-lg-130 s-pb-lg-60  text-center">
    
    
    
        </div>
        <div class="container-fluid onTop">
            <div class="row">
    
                <div class="divider-60"></div>
    
                <div class="col-md-12 text-center">
                    <h1>{pageDesc[0].pageSubtitle }</h1>
                </div>
    
                <div class="divider-50"></div>
    
            </div>
    
        </div>
        <ol class="breadcrumb full-width onTop">
            <li class="breadcrumb-item">
                <a href="./">Home</a>
            </li>
            <li class="breadcrumb-item">
                <a href="#">Managed Services</a>
            </li>
            <li class="breadcrumb-item active">
                Cloud Services
            </li>
        </ol>
    
   
    </section>
    
    ); 
 } 

//  export default getHeader;