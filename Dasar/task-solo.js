//  // Mendapatkan saldo awal dari pengguna
//         let initialBalance = parseFloat(prompt("Masukkan saldo awal:"));

//         // Memeriksa apakah saldo awal valid
//         if (isNaN(initialBalance)) {
//             alert("Saldo awal tidak valid!");
//         } else {
//             // Variabel untuk menyimpan total transaksi
//             let totalTransactions = 0;
//             let transaction;

//             // Loop untuk meminta input transaksi
//             while (true) {
//                 transaction = prompt("Masukkan transaksi (positif untuk deposit, negatif untuk penarikan), atau ketik 'selesai' untuk mengakhiri:");

//                 // Cek apakah pengguna ingin mengakhiri input
//                 if (transaction.toLowerCase() === 'selesai') break;

//                 // Menghitung transaksi
//                 let amount = parseFloat(transaction);

//                 // Tambahkan jumlah transaksi jika valid
//                 if (!isNaN(amount)) {
//                     totalTransactions += amount;
//                 } else {
//                     alert("Transaksi tidak valid!");
//                 }
//             }

//             // Menghitung saldo akhir
//             let finalBalance = initialBalance + totalTransactions;

//             // Menampilkan saldo akhir
//             alert("Saldo akhir Anda adalah: " + finalBalance.toFixed(2));
//         }
// let i = prompt("Masukkan Saldo Awal = ")
// i = saldo
// Transaksi