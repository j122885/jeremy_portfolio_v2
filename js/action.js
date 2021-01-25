// Select the button
const btn = document.querySelector('.btn-toggle');
const nav = document.getElementById('nav');

// Listen for a click on the button
btn.addEventListener('click', function() {
  // Then toggle (add/remove) the .dark-theme class to the body
  document.body.classList.toggle('dark-theme');  
 
 if( nav.style.backgroundColor == "transparent"){
  console.log("color changed")
  nav.classList.remove('navbar-light');
  nav.classList.add('navbar-dark');
  nav.style.backgroundColor = "#121212";

 } else{
  nav.style.backgroundColor = "transparent";
  nav.classList.remove('navbar-dark');
  nav.classList.add('navbar-light');
 }

})