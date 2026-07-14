// =========================
// Dark Mode Toggle
// =========================

const themeBtn = document.getElementById("themeToggle");

themeBtn.addEventListener("click", () => {

document.body.classList.toggle("dark");

if(document.body.classList.contains("dark")){
themeBtn.innerHTML='<i class="fa-solid fa-sun"></i>';
}
else{
themeBtn.innerHTML='<i class="fa-solid fa-moon"></i>';
}

});

// =========================
// Typing Effect
// =========================

const text = [
"Frontend Developer",
"Web Designer",
"JavaScript Learner",
"UI Enthusiast"
];

let count = 0;
let index = 0;
let currentText = "";
let letter = "";

(function type(){

if(count === text.length){
count = 0;
}

currentText = text[count];

letter = currentText.slice(0,++index);

document.getElementById("typing").textContent = letter;

if(letter.length === currentText.length){

setTimeout(()=>{
index=0;
count++;
type();
},1500);

}
else{

setTimeout(type,120);

}

})();

// =========================
// Scroll To Top
// =========================

const topBtn=document.getElementById("topBtn");

window.onscroll=()=>{

if(document.documentElement.scrollTop>300){

topBtn.style.display="block";

}
else{

topBtn.style.display="none";

}

};

topBtn.onclick=()=>{

window.scrollTo({

top:0,
behavior:"smooth"

});

};

// =========================
// Active Navbar
// =========================

const sections=document.querySelectorAll("section");
const navLinks=document.querySelectorAll("nav ul li a");

window.addEventListener("scroll",()=>{

let current="";

sections.forEach(section=>{

const sectionTop=section.offsetTop-120;

if(pageYOffset>=sectionTop){

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

// =========================
// Contact Form
// =========================

const form=document.querySelector("form");

form.addEventListener("submit",(e)=>{

e.preventDefault();

alert("✅ Thank you! Your message has been received.");

form.reset();

});

// =========================
// Fade Animation
// =========================

const observer=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";
entry.target.style.transform="translateY(0)";

}

});

});

document.querySelectorAll("section").forEach(sec=>{

sec.style.opacity="0";
sec.style.transform="translateY(60px)";
sec.style.transition=".8s";

observer.observe(sec);

});

// =========================
// Console Message
// =========================

console.log("%c🚀 Portfolio Loaded Successfully!",
"color:#6c63ff;font-size:18px;font-weight:bold;");
