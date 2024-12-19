//var list = document.querySelector(".navbar-items");
var hamburgerIcon = document.querySelector(".icon-hamburger");
var closICon = document.querySelector(".icon-close")
var toggle = document.querySelector(".toggle")


function myFunction() {
    
//hamburgerIcon.classList.add(".nav-links");
    

    // var x = document.querySelectorAll("nav-list");
    // if (x.style.display === "flex") {
    //     x.style.display = "block";
    // }
    // else {
    //     x.style.display = "flex";
    // }
    
}

document.addEventListener("DOMContentLoaded", function () {
    var list = document.getElementById("mobile-nav");
    var navList = document.querySelector(".navlist");
    var hamburgerIcon = document.querySelector(".icon-hamburger");
    var closICon = document.querySelector(".icon-close");

    list.addEventListener("click", function () {
        navList.classList.toggle("active");
        hamburgerIcon.style.display = hamburgerIcon.style.display === 'none' ? 'block' : 'none';
        closICon.style.display = closICon.style.display === 'block' ? 'none' : 'block';
 
    });
});