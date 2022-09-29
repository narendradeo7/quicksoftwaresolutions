
       const BG = document.querySelector(".bg");


       document.addEventListener("mousemove",function (e) {
           BG.style.left = `${e.clientX}px`;
           // here e.clientX gives us the coordinate of the mouse move
           BG.style.top = `${e.clientY-150}px`;

       });


  


  // controlling rotating hexagon size as per viewport current dimension
  var w = (window.innerWidth *2)+400;
  // var h = window.innerHeight 10;
  const hexbg=document.querySelector(".hex");
  hexbg.style.height=(w+"px");
  hexbg.style.width=(w+"px");
  var lef= -((w*29)/100);
  hexbg.style.left=(lef+"px");
  hexbg.style.right=(window.innerWidth+"px");