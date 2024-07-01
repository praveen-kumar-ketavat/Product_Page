let button=document.querySelector("#add-to-cart");
let count=document.querySelector(".cart-count");

let counter=0;
button.onclick=()=>{
    counter++;
    count.innerText=`${counter}`;
    count.style.backgroundColor="black";
    button.style.backgroundColor="black";
    button.style.color="white";
}


let c1=document.querySelector(".c1");
let c2=document.querySelector(".c2");
let c3=document.querySelector(".c3");
let large=document.querySelector(".large");
let I1=document.querySelector("#I1");
let I2=document.querySelector("#I2");
let I3=document.querySelector("#I3");
let I4=document.querySelector("#I4");
let I5=document.querySelector("#I5");
let main=document.querySelector("#name");

let color="white";

c1.onclick=()=>{
    color="white";
    change(color);
    main.innerText="MEN'S TRIPLE S CLEAR SOLE SNEAKER IN WHITE";
}
c2.onclick=()=>{
    color="black";
    change(color);
    main.innerText="MEN'S TRIPLE S CLEAR SOLE SNEAKER IN BLACK";
}
c3.onclick=()=>{
    color="offWhite";
    change(color);
    main.innerText="MEN'S TRIPLE S CLEAR SOLE SNEAKER IN WHITE";
}
console.log(color);
function change(col){
    large.style.backgroundImage=`url("./images/${col}/image1.jpg")`;
    I1.style.backgroundImage=`url("./images/${col}/image1.jpg")`;
    I2.style.backgroundImage=`url("./images/${col}/image2.jpg")`;
    I3.style.backgroundImage=`url("./images/${col}/image3.jpg")`;
    I4.style.backgroundImage=`url("./images/${col}/image4.jpg")`;
    I5.style.backgroundImage=`url("./images/${col}/image5.jpg")`;
}

let s1=document.querySelector(".s1");
let s2=document.querySelector(".s2");
let s3=document.querySelector(".s3");
let s4=document.querySelector(".s4");

s1.onclick=()=>{
    s1.classList.toggle('on');
}
s2.onclick=()=>{
    s2.classList.toggle('on');
}
s3.onclick=()=>{
    s3.classList.toggle('on');
}
s4.onclick=()=>{
    s4.classList.toggle('on');
}


let num="1";
I1.onclick=()=>{
    num="1";
    changeLarge(num);
}
I2.onclick=()=>{
    num="2";
    changeLarge(num);
}
I3.onclick=()=>{
    num="3";
    changeLarge(num);
}
I4.onclick=()=>{
    num="4";
    changeLarge(num);
}
I5.onclick=()=>{
    num="5";
    changeLarge(num);
}

function changeLarge(num){
        large.style.backgroundImage=`url("./images/${color}/image${num}.jpg")`;
}

let refresh=document.querySelector(".menu-main");
refresh.onclick=()=>{
    location.reload();
}
