// classlist - shows/gets all classes 
// contains - checks classlist for specific class
// add - add class
// remove - remove class
// toggle -toggle class

const navtoggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".links");

navtoggle.addEventListener("click",function(){
//  console.log(links.classList);
//  console.log(links.classList.contains("random"));
//  console.log(links.classList.contains("links"));
// if(links.classList.contains("show-links")){
//     links.classList.contains("show-links");
// }
// else{
//     links.classList.add("show-links");
// }
links.classList.toggle("show-links");
});
