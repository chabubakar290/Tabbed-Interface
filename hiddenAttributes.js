let tab1 = document.getElementById("tab1");
let tab2 = document.getElementById("tab2");
let tab3 = document.getElementById("tab3");

let content1 = document.getElementById("content1");
let content2 = document.getElementById("content2");
let content3 = document.getElementById("content3");

tab1.addEventListener("click" , function(){
    content1.hidden = false;
    content2.hidden = true;
    content3.hidden = true;
})
tab2.addEventListener("click" , function(){
    content1.hidden = true;
    content2.hidden = false;
    content3.hidden = true;
})
tab3.addEventListener("click" , function(){
    content1.hidden = true;
    content2.hidden = true;
    content3.hidden = false;
})