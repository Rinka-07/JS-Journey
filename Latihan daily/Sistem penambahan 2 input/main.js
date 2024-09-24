const welcome = "Silahkan Mencoba Sistem Penambahan 2 Nilai Yang Diinput";
alert(welcome);

function validasi(data) {
  let nilai;
  while (true) {
    nilai = prompt(data);
    if (!isNaN(nilai) && nilai.trim() !== "") {
      return +nilai;
    } else {
      alert("Masukkan Nilai Yang Sesuai Berupa Angka");
    }
  }
}

function tampilkanhasil(a, b) {
  const c = a + b;
  alert(`Hasil Dari ${a} + ${b} adalah ${c}`);
}

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
