
 // fixing navbar whenever someone scrolls using sticky position
 window.addEventListener("scroll",function(){
  var headerr=document.querySelector(".page_header");
  headerr.classList.toggle("sticky",window.scrollY >62.4);
document.getElementsByClassName("navbaritm")[1].classList.toggle("navbarshrink",window.scrollY >62.4);
// getting all the amchor element of the 

  let anchall=document.querySelectorAll('ul.nav.sf-menu>li>a');
  anchall.forEach(function(elem){
elem.classList.toggle("ashrink",window.scrollY >62.4);

  });

// to animate an element whenever its fully invisible

let footer_child = document.querySelector(".footer_elements").children;
var page_footer=document.querySelector(".page_footer");
var footer_position= page_footer.getBoundingClientRect();
// checking if fully invisible
if(footer_position.top < window.innerHeight && footer_position.bottom >= 0){
// we will animate footer elements heartbe

for (let i = 0; i < footer_child.length; i++) {
  footer_child[i].classList.add("fadeInUp");
}
}
});


// // to animate when visible 
// var animate_icn=document.querySelector(".animate");
// var anim_position= animate_icn.getBoundingClientRect();
// // checking if fully invisible
// if(anim_position.top < window.innerHeight && anim_position.bottom >= 0){
//   // we will animate footer elements heartbe

//   for (let i = 0; i < footer_child.length; i++) {
//     footer_child[i].classList.add("fadeInUp");
//   }
// }
//   });


// getting navbar on mobile 
let toggler=document.querySelector(".toggle_menu");
      
toggler.addEventListener("click",function(){
  toggler.classList.toggle("mobile-active");
  document.querySelector(".page_header").classList.toggle("mobile-active");

});

// getting all ul list and making it active on  click 

document.querySelectorAll("ul.nav.sf-menu>li>a").forEach(function(elem){
  elem.addEventListener("click",function(){
    elem.parentElement.children[1].classList.toggle("submenu-active");
  // making drop down of submenu of products run 
    document.querySelectorAll(".submenu-active>li").forEach(function(elem){elem.addEventListener("click",function(){elem.children[1].classList.toggle('submenu-active')});});

  
  })});

