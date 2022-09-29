

document.querySelectorAll(".slideswitch").forEach(function(slide){


    slide.addEventListener("click",function(){
      
         
      
     document.querySelectorAll(".slideswitch").forEach(function(elem){
      elem.classList.remove("flex-active")

     });
    this.classList.add("flex-active");
      var activeslideno= document.querySelectorAll(".flex-active")[0].innerText;
      var slidetoshow = ("slide"+activeslideno);
      console.log(slidetoshow);
      const allslides =[".slide1",".slide2",".slide3",".slide4"];
   allslides.splice(activeslideno-1,1);
      console.log(allslides);
    //   displaying the slide which is selected by the user 
      document.getElementsByClassName(slidetoshow)[0].classList.add("activeslide");
   for(i=0;i<allslides.length;i++){

    //   removing activeslide class from all other slides 
  
    document.querySelector(allslides[i]).classList.remove("activeslide");
    
   }


    
   });
           });

      