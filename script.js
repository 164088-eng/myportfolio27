// ==============================
// Loading Screen
// ==============================

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    loader.style.opacity = "0";

    setTimeout(() => {

        loader.style.display = "none";

    },500);

});

// ==============================
// Back To Top
// ==============================

const topBtn = document.getElementById("topBtn");

window.onscroll = function(){

    if(document.documentElement.scrollTop > 300){

        topBtn.style.display="block";

    }else{

        topBtn.style.display="none";

    }

}

topBtn.onclick = function(){

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

}

// ==============================
// Navbar Effect
// ==============================

const nav = document.querySelector("nav");

window.addEventListener("scroll",()=>{

    if(window.scrollY>50){

        nav.style.background="rgba(10,61,145,.92)";
        nav.style.boxShadow="0 10px 30px rgba(0,0,0,.3)";

    }else{

        nav.style.background="rgba(0,0,0,.25)";
        nav.style.boxShadow="none";

    }

});

// ==============================
// Lightbox
// ==============================

const lightbox = document.getElementById("lightbox");
const lightImg = document.getElementById("lightbox-img");

function openImage(src){

    lightbox.style.display="flex";

    lightImg.src=src;

}

function closeImage(){

    lightbox.style.display="none";

}

lightbox.addEventListener("click",(e)=>{

    if(e.target===lightbox){

        closeImage();

    }

});

// ==============================
// Smooth Scroll
// ==============================

document.querySelectorAll('nav a').forEach(link=>{

    link.addEventListener("click",function(e){

        e.preventDefault();

        const target=document.querySelector(this.getAttribute("href"));

        target.scrollIntoView({

            behavior:"smooth"

        });

    });

});

// ==============================
// Active Menu
// ==============================

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

// ==============================
// Hero Button Animation
// ==============================

const button=document.querySelector(".btn");

button.addEventListener("mouseenter",()=>{

    button.style.transform="scale(1.08)";

});

button.addEventListener("mouseleave",()=>{

    button.style.transform="scale(1)";

});

// ==============================
// Fade In On Scroll
// ==============================

const observer=new IntersectionObserver(entries=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("fade-up");

        }

    });

});

document.querySelectorAll(".glass,.card,.activity-card,.timeline-item").forEach(el=>{

    observer.observe(el);

});

// ==============================
// ESC Close Lightbox
// ==============================

document.addEventListener("keydown",(e)=>{

    if(e.key==="Escape"){

        closeImage();

    }

});

// ==============================
// Console Message
// ==============================

console.log("%cPortfolio Website Ready!",
"color:#FFD54F;font-size:18px;font-weight:bold;");
