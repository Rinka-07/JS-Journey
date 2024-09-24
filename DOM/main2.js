const btn1 = document.getElementById("btn1");
const btn2 = document.querySelector("button");
const body = document.body;

console.log(btn2);
btn1.style.border = "none";
btn1.style.padding = "18px";
btn1.style.background = "tomato";
btn1.style.borderRadius = "5px";
btn1.style.color = "white";

const defaulttext = "Klik saya 1";

function clickbutton() {
  btn1.style.background = "aqua";
  btn1.style.color = "black";
  const newtext = document.createElement("p")  
  newtext.textContent = "Keren ga"
  body.append(newtext)
  //
}

function ganticaption() {
  btn1.innerHTML = "Apasih pegang-pegang";
}

function semula() {
  btn1.textContent = defaulttext;
}
