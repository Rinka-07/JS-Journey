// const arraySaya = []

// arraySaya['Alpukat'] = '🥑'
// arraySaya['Jeruk'] = '🍊'

// console.log(arraySaya)
// Case nya adalah cara menambahkan data ke tipe data Array Tanpa mengubah Array pertama / Orisiniilnya
const arraySaya = ["🍊", "🥑", "🍉", "🍍", "🍌"];

// Penyelesaian orang yang baru belajar js pasti begini
// Dengan membuat variabel array baru dan memasukkan variabel array orisinilnya seperti sintaks dibawah
const newarraySaya = arraySaya;

// Lalu menambah datanya seperti ini
newarraySaya[0] = ["💕"];

console.log(arraySaya);
console.log(newarraySaya);

// JIka dijalankan dari array pertama pasti akan ikut berubah juga
// Jadi solusinya ganti const newarraySaya = arraySayas jadi sintaks dibawah ini
// const newarraySaya = [...arraySaya]
