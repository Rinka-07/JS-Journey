/*
1. Promp untuk mengetahui saldo akhir dari apa yang diinputkan user 
2. Menentukan hari dari tanggal yang ada saat ini di pc
*/
// let hari = new Date()

// let days = hari.getDay()

// let hari2 = ['Senin','Selasa','Rabu','Kamis','Jumat','Sabtu','Minggu',]

// let harii = hari2[days]
// // Tampilkan nama hari
// console.log("Hari ini adalah: " + harii);
// function calculateBalance() {
//   // Mendapatkan saldo awal dari pengguna
//   let initialBalance = parseFloat(prompt("Masukkan saldo awal:"));

//   // Pastikan input adalah angka yang valid
//   if (isNaN(initialBalance)) {
//     alert("Saldo awal tidak valid!");
//     return;
//   }

//   // Variabel untuk menyimpan total transaksi
//   let totalTransactions = 0;
//   let continueInput = true;

//   // Loop untuk meminta input transaksi sampai pengguna selesai
//   while (continueInput) {
//     // Meminta input transaksi
//     let transaction = prompt(
//       "Masukkan transaksi (positif untuk deposit, negatif untuk penarikan), atau ketik 'selesai' untuk mengakhiri:"
//     );

//     // Cek apakah pengguna ingin mengakhiri input
//     if (transaction.toLowerCase() === "selesai") {
//       continueInput = false;
//     } else {
//       let amount = parseFloat(transaction);

//       // Pastikan input adalah angka yang valid
//       if (isNaN(amount)) {
//         alert("Transaksi tidak valid!");
//       } else {
//         totalTransactions += amount;
//       }
//     }
//   }

//   // Menghitung saldo akhir
//   let finalBalance = initialBalance + totalTransactions;

//   // Menampilkan saldo akhir
//   alert("Saldo akhir Anda adalah: " + finalBalance.toFixed(2));
// }

// // Memanggil fungsi untuk menghitung saldo akhir
// calculateBalance();
