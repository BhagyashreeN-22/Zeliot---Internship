let h1 = document.querySelector("h1");
h1.innerText = h1.innerText + "Welcome to Zeliot ";

let div= document.getElementsByClassName("box");
div[0].innerText="HII ,first";
div[1].innerText="HII ,second";
div[2].innerText="HII ,third";

let divone=document.getElementById("firstbox");
divone.onmouseover=()=>{
    console.log("First div");
}

let divtwo=document.getElementById("but");
divtwo.addEventListener("click",()=>{
    console.log("button clicked");
});