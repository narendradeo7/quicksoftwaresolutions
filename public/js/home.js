

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

      // getting navbar on mobile 
      let toggler=document.querySelector(".toggle_menu");
      
      toggler.addEventListener("click",function(){
        toggler.classList.toggle("mobile-active");
        document.querySelector(".page_header").classList.toggle("mobile-active");
      
      });

      // getting all ul list 
      let menu=document.querySelector(".sf-menu").children;
      for(let i=1;i<menu.length-1;i++){
        menu[i].addEventListener("click",function(){
          let submenu= menu[i].children[1];
          submenu.classList.toggle("submenuli");
          submenu.classList.toggle("submenu-active");
        
        });
      }