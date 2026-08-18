let tab1 = document.getElementById("tab1");
let tab2 = document.getElementById("tab2");
let tab3 = document.getElementById("tab3");

let content1 = document.getElementById("content1");
let content2 = document.getElementById("content2");
let content3 = document.getElementById("content3");

let container = document.querySelector(".card");

tab1.addEventListener("click" , function(){
    container.appendChild(content1);
    content2.remove();
    content3.remove();
    tab1.classList.add("active");
    tab2.classList.remove("active");
    tab3.classList.remove("active");
})
tab2.addEventListener("click" , function(){
    content1.remove();
    container.appendChild(content2);
    content3.remove();
    tab1.classList.remove("active");
    tab2.classList.add("active");
    tab3.classList.remove("active");
})
tab3.addEventListener("click" , function(){
    content1.remove();
    content2.remove();
    container.appendChild(content3);
    tab1.classList.remove("active");
    tab2.classList.remove("active");
    tab3.classList.add("active");
})