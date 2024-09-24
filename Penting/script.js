btn1.style.padding = "10px"
btn1.style.display = "block"
btn1.style.margin = "7px"

btn2.style.padding = "10px"
btn2.style.display = "block"
btn2.style.margin = "7px"


function contoh(){
    let a,b,C,f
    a = prompt("Masukkan Angka")
    b = prompt("Masukkan Angka")
    c = prompt("Masukkan Angka")
    f = a + b + c 
    alert(f)
    alert("Itu yang terjadi jika di js nya tanpa parsefloat")
}

function contoh2(){
    let d,e,g,h 
    d = parseFloat(prompt("Masukkan Angka"))
    e = parseFloat(prompt("Masukkan Angka"))
    g = parseFloat(prompt("Masukkan Angka"))
    h = d + e + g
    alert(h)
    alert("Ini jika dengan parsefloat")
}