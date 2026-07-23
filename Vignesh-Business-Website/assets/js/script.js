window.addEventListener("load", function () {

const loader = document.getElementById("loader");

if(loader){

loader.style.opacity = "0";

setTimeout(() => {

loader.style.display = "none";

}, 500);

}

});

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", function(){

if(window.scrollY > 50){

navbar.classList.add("shadow");

}

else{

navbar.classList.remove("shadow");

}

});

const topButton = document.getElementById("topBtn");

window.addEventListener("scroll", function(){

if(window.scrollY > 300){

topButton.style.display = "block";

}

else{

topButton.style.display = "none";

}

});

function topFunction(){

window.scrollTo({

top:0,

behavior:"smooth"

});

}

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

anchor.addEventListener("click",function(e){

e.preventDefault();

const target=document.querySelector(this.getAttribute("href"));

if(target){

target.scrollIntoView({

behavior:"smooth"

});

}

});

});

const counters=document.querySelectorAll(".counter");

counters.forEach(counter=>{

const update=()=>{

const target=Number(counter.dataset.target);

const count=Number(counter.innerText);

const increment=target/100;

if(count<target){

counter.innerText=Math.ceil(count+increment);

setTimeout(update,20);

}

else{

counter.innerText=target;

}

};

update();

});

const sections=document.querySelectorAll("section");

const navLinks=document.querySelectorAll(".nav-link");

window.addEventListener("scroll",()=>{

let current="";

sections.forEach(section=>{

const top=section.offsetTop-150;

if(window.scrollY>=top){

current=section.getAttribute("id");

}

});

navLinks.forEach(link=>{

link.classList.remove("active");

if(link.getAttribute("href")==="#"+current){

link.classList.add("active");

}

});

});

const revealElements=document.querySelectorAll("section");

window.addEventListener("scroll",()=>{

revealElements.forEach(element=>{

const windowHeight=window.innerHeight;

const elementTop=element.getBoundingClientRect().top;

if(elementTop<windowHeight-100){

element.classList.add("show");

}

});

});

const form=document.querySelector("form");

if(form){

form.addEventListener("submit",function(e){

e.preventDefault();

alert("Thank You! Your Message Has Been Received.");

form.reset();

});

}

const cards=document.querySelectorAll(".business-card");

cards.forEach(card=>{

card.addEventListener("mouseenter",()=>{

card.style.transform="translateY(-12px)";

});

card.addEventListener("mouseleave",()=>{

card.style.transform="translateY(0)";

});

});

const year=document.getElementById("year");

if(year){

year.innerHTML=new Date().getFullYear();

}

