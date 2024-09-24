const btn = document.getElementById("btn2");
const body = document.body;
const teks = document.createElement("p");
teks.innerText = "Mario Sahala Tua";

btn2.style.borderRadius = "5px";
btn2.style.border = "None";
btn2.style.background = "orange";
btn2.style.color = "white";
btn2.style.padding = "18px";

function muncul() {
  btn2.style.transition = "0.2s linear";
  body.append(teks);
}

function pergi() {
  teks.style.color = "Green";
}
