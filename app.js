let header=document.querySelectorAll(".header");

window.addEventListener("scroll",()=>{
    header.classList.toggle('active',window.scrollY>0)
});

