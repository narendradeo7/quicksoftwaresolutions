  // contact form data submitting to the google sheets 

  let contact_form= document.querySelector(".contact-form");
  contact_form.addEventListener("submit",(e)=>{
    // document.querySelector("body").style.overflow="hidden";
    // we are preventing reload of the page
    e.preventDefault();
    document.querySelector(".enqbtn").innerHTML="Submitting🔃";
    let data = new FormData(contact_form);
    fetch("https://script.google.com/macros/s/AKfycbz2kLNPdWUJDimaQZ0ojxvjxhsNK9v_-Un-N32w_uz4yrn7_ZVhUpu0gWDciRwfk2bFAA/exec",{method:"POST",
  body:data})
  
  .then(res => res.text())
  .then(data => {if(data="Success"){document.querySelector(".alertmsg").style.display="block";
  }
  else{document.querySelector(".alertbg").innerHTML="Oops ! Something Went Wrong <br> Please try to resubmit !!!"}
    document.querySelector(".enqbtn").innerHTML="Submit";
  });
  })
  
  // reloading page when exitalert is clicked
  document.querySelector(".exitalert").addEventListener("click",function(){
    // document.querySelector("body").style.overflow="auto";
    location.reload();
  })