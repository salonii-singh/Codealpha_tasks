const images = [
"img1.jpg",
"img2.jpg",
"img3.jpg",
"img4.jpg",
"img5.jpg",
"img6.jpg"
];

let current = 0;

function openLightbox(index){
current = index;
document.getElementById("lightbox").style.display = "flex";
document.getElementById("lightbox-img").src = images[current];
}

function closeLightbox(){
document.getElementById("lightbox").style.display = "none";
}

function changeImage(step){
current += step;

if(current < 0){
current = images.length-1;
}

if(current >= images.length){
current = 0;
}

document.getElementById("lightbox-img").src = images[current];
}
