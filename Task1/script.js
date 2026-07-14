
const themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
        themeBtn.innerHTML = '<i class="fa-solid fa-sun"></i>';
    } else {
        themeBtn.innerHTML = '<i class="fa-solid fa-moon"></i>';
    }
});



const filters = document.querySelectorAll(".filter");
const cards = document.querySelectorAll(".card");

filters.forEach(button => {

    button.addEventListener("click", () => {

        filters.forEach(btn => btn.classList.remove("active"));
        button.classList.add("active");

        const value = button.dataset.filter;

        cards.forEach(card => {

            if (value === "all" || card.classList.contains(value)) {
                card.classList.remove("hide");
            } else {
                card.classList.add("hide");
            }

        });

    });

});

const lightbox = document.querySelector(".lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const closeBtn = document.querySelector(".close");
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");

const currentText = document.getElementById("current");
const totalText = document.getElementById("total");

const galleryImages = document.querySelectorAll(".gallery img");

let currentIndex = 0;

totalText.textContent = galleryImages.length;


galleryImages.forEach((img, index) => {

    img.addEventListener("click", () => {

        currentIndex = index;
        showImage();

    });

});



function showImage() {

    lightbox.style.display = "flex";

    lightboxImg.src = galleryImages[currentIndex].src;

    currentText.textContent = currentIndex + 1;

}



closeBtn.addEventListener("click", () => {

    lightbox.style.display = "none";

});



nextBtn.addEventListener("click", () => {

    currentIndex++;

    if (currentIndex >= galleryImages.length) {
        currentIndex = 0;
    }

    showImage();

});



prevBtn.addEventListener("click", () => {

    currentIndex--;

    if (currentIndex < 0) {
        currentIndex = galleryImages.length - 1;
    }

    showImage();

});



lightbox.addEventListener("click", (e) => {

    if (e.target === lightbox) {
        lightbox.style.display = "none";
    }

});



document.addEventListener("keydown", (e) => {

    if (lightbox.style.display === "flex") {

        if (e.key === "ArrowRight") {

            nextBtn.click();

        }

        if (e.key === "ArrowLeft") {

            prevBtn.click();

        }

        if (e.key === "Escape") {

            lightbox.style.display = "none";

        }

    }

});

window.addEventListener("load", () => {

    document.body.style.opacity = "1";

});

document.body.style.opacity = "0";
document.body.style.transition = "opacity .5s";



console.log("%c✨ Modern Image Gallery Loaded Successfully!",
"color:#6c63ff;font-size:18px;font-weight:bold;");
