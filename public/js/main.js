
 // fixing navbar whenever someone scrolls using sticky position
 window.addEventListener("scroll",function(){
  var headerr=document.querySelector(".page_header");
  headerr.classList.toggle("sticky",window.scrollY >62.4);
document.getElementsByClassName("navbaritm")[1].classList.toggle("navbarshrink",window.scrollY >62.4);
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



