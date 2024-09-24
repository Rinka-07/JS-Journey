// let a = prompt("Masukkan nilai pertama");
// let b = prompt("Masukkan nilai kedua");
// const c = +a + +b;

// if (isNaN(a)) {
//   alert("Masukkan nilai yang sesuai");
//   if (isNaN(b)) {
//     alert("Masukkan nilai yang sesuai");
//   }
// } else {
//   alert(c);
// }

// let a, b, c;

// function getValidNumber(promptMessage) {
//   let value;
//   while (true) {
//     value = prompt(promptMessage);
//     if (!isNaN(value) && value.trim() !== '') {
//       return +value;
//     } else {
//       alert("Masukkan nilai yang sesuai");
//     }
//   }
// }

// a = getValidNumber("Masukkan nilai pertama");
// b = getValidNumber("Masukkan nilai kedua");

// c = a + b;
// alert("Hasilnya adalah: " + c);

const welcome =
  "Selamat datang di sistem penambahan sederhana dari 2 nilai yang diinput";
alert(welcome);

function validasi(data) {
  let nilai;
  while (true) {
    nilai = prompt(data);
    if (!isNaN(nilai) && nilai.trim() !== "") {
      return +nilai;
    } else {
      alert("Masukkan nilai yang sesuai berupa angka");
    }
  }
}

function tampilkanhasil(a, b) {
  const c = a + b;
  alert(`Hasil dari ${a} + ${b} adalah ${c}`);
}

// Menampilkan prompt untuk input pengguna
let userInput;
do {
  let a = validasi("Masukkan Nilai Pertama");
  let b = validasi("Masukkan Nilai Kedua");
  tampilkanhasil(a, b);

  while (true) {
    userInput = prompt(
      "Apakah Anda Mau Mencoba Lagi? (Ya/Tidak)"
    ).toLowerCase();

    if (userInput === "ya" || userInput === "tidak") {
      break;
    } else {
      alert("Input tidak valid, Ketik Ya/Tidak");
    }
  }
} while (userInput === "ya");
alert("Terima Kasih Sudah Mencoba");
