// script.js
// Menampilkan output
document.getElementById("pesan").textContent = "Hello World";
console.log("Hello World");

// Alert dan prompt
const namaPengguna = prompt("Masukkan nama Anda:", "");
if (namaPengguna && namaPengguna.trim() !== "") {
    alert("Halo, " + namaPengguna + "!");
    document.getElementById("pesan").textContent = "Selamat datang, " + namaPengguna + ".";
} else {
    alert("Nama belum diisi.");
}
// Operasi Dasar
function operasiDasar(a, b) {
    console.log("Penjumlahan:", a + b);
    console.log("Pengurangan:", a - b);
    console.log("Perkalian:", a * b);
    console.log("Pembagian:", b !== 0 ? a / b : "Tidak dapat dibagi nol");
    console.log("Modulus:", a % b);
}
operasiDasar(6, 5);

// Seleksi kondisi if–else
const inputNilai = prompt("Masukkan nilai (0–100):");
const nilaiMahasiswa = Number(inputNilai);
if (inputNilai === null || inputNilai.trim() === "" ||
Number.isNaN(nilaiMahasiswa) || nilaiMahasiswa < 0 || nilaiMahasiswa > 100) {
alert("Input nilai tidak valid.");
} else if (nilaiMahasiswa >= 60) {
alert("Lulus");
} else {
alert("Belum lulus");
}

// Seleksi kondisi switch
const inputPilihan = prompt("Masukkan angka 1–5:");
switch (inputPilihan) {
    case "1": alert("Bilangan satu"); break;
    case "2": alert("Bilangan dua"); break;
    case "3": alert("Bilangan tiga"); break;
    case "4": alert("Bilangan empat"); break;
    case "5": alert("Bilangan lima"); break;
    default: alert("Pilihan tidak tersedia");
}

// Form bilangan genap atau ganjil
function cekBilangan() {
    const input = document.getElementById("bilangan").value;
    const angka = Number(input);
    const hasil = document.getElementById("hasilBilangan");
    
    if (input.trim() === "" || !Number.isInteger(angka)) {
        hasil.textContent = "Masukkan bilangan bulat yang valid.";
    } else if (angka % 2 === 0) {
        hasil.textContent = "Bilangan genap";
    } else {
        hasil.textContent = "Bilangan ganjil";
    }
}
// Background color button
function ubahWarnaLatar(warna) {
    document.body.style.backgroundColor = warna;
}

const daftarMenu = document.querySelectorAll(".menu");
daftarMenu.forEach((item) => {
    item.addEventListener("change", hitungTotal);
});

// DOM dan checkbox menu makanan
function hitungTotal() {
    let total = 0;
    daftarMenu.forEach((item) => {
        if (item.checked) total += Number(item.value);
    });
    document.getElementById("total").textContent = total.toLocaleString("id-ID");
}

// Mini Project
    // Kalkulator Nilai
function hitungNilaiAkhir(tugas, uts, uas) {
    return tugas * 0.30 + uts * 0.30 + uas * 0.40;
}
function tentukanPredikat(nilai) {
    if (nilai >= 85) return "A";
    if (nilai >= 75) return "B";
    if (nilai >= 60) return "C";
    if (nilai >= 50) return "D";
    return "E";
}

function prosesHitung() {
    const tugasStr = document.getElementById("tugas").value;
    const utsStr = document.getElementById("uts").value;
    const uasStr = document.getElementById("uas").value;
    const errorBox = document.getElementById("errorBox");

    const tugas = parseFloat(tugasStr);
    const uts = parseFloat(utsStr);
    const uas = parseFloat(uasStr);

    const tidakValid = [tugasStr, utsStr, uasStr].includes("") ||
        [tugas, uts, uas].some(n => isNaN(n) || n < 0 || n > 100);

    if (tidakValid) {
        errorBox.style.display = "block";
        document.getElementById("hasilAkhir").textContent = "-";
        document.getElementById("hasilPredikat").textContent = "-";
        return;
    }
    errorBox.style.display = "none";

    const akhir = hitungNilaiAkhir(tugas, uts, uas);
    document.getElementById("hasilAkhir").textContent = akhir.toFixed(2);
    document.getElementById("hasilPredikat").textContent = tentukanPredikat(akhir);
}

const tugas = 85;
const uts = 78;
const uas = 88;
const akhir = hitungNilaiAkhir(tugas, uts, uas);
console.log("Nilai akhir:", akhir.toFixed(2));
console.log("Predikat:", tentukanPredikat(akhir));

// Eksperimen Mandiri
// 1. Operasi Dasar Dua Nilai
function operasiDasar(a, b) {
    const hasil = [
        "Penjumlahan: " + (a + b),
        "Pengurangan: " + (a - b),
        "Perkalian: " + (a * b),
        "Pembagian: " + (b !== 0 ? a / b : "Tidak dapat dibagi nol"),
        "Modulus: " + (b !== 0 ? a % b : "Tidak dapat dibagi nol")
    ];

    hasil.forEach((baris) => console.log(baris));
    return hasil.join("\n");
}
 
function eksperimen1() {
    const inputA = prompt("Masukkan bilangan pertama:");
    const inputB = prompt("Masukkan bilangan kedua:");
    const output = document.getElementById("hasil1");
 
    // menghasilkan strinng
    if (inputA === null || inputB === null ||
        inputA.trim() === "" || inputB.trim() === "") {
        output.textContent = "Input tidak boleh kosong.";
        return;
    }
 
    const a = Number(inputA);
    const b = Number(inputB);
 
    if (Number.isNaN(a) || Number.isNaN(b)) {
        output.textContent = "Masukkan angka yang valid.";
        return;
    }
 
    output.textContent = operasiDasar(a, b);
}

// 2. Tabel perkalian dengan perulangan for
function tabelPerkalian(angka) {
    let teks = "";
    for (let i = 1; i <= 10; i++) {
        const baris = angka + " x " + i + " = " + (angka * i);
        console.log(baris);
        teks += baris + "\n";
    }
    document.getElementById("hasil2").textContent = teks;
}


// 3. Function cekGenap
function cekGenap(angka) {
    return angka % 2 === 0;
}
 
function ujiCekGenap() {
    const input = document.getElementById("angka3").value;
    const angka = Number(input);
    const hasil = document.getElementById("hasil3");
 
    if (input.trim() === "" || !Number.isInteger(angka)) {
        hasil.textContent = "Masukkan bilangan bulat yang valid.";
        return;
    }
 
    const genap = cekGenap(angka);
    hasil.textContent = genap;
    console.log("cekGenap(" + angka + "):", genap);
}

// 4. Validasi form: kolom tidak boleh kosong
function validasiForm() {
    const nama = document.getElementById("nama4").value.trim();
    const nilaiStr = document.getElementById("nilai4").value.trim();
    const hasil = document.getElementById("hasil4");
 
    hasil.className = "error";
 
    if (nama === "" || nilaiStr === "") {
        hasil.textContent = "Semua kolom wajib diisi.";
        return;
    }
 
    const nilai = Number(nilaiStr);
    if (Number.isNaN(nilai) || nilai < 0 || nilai > 100) {
        hasil.textContent = "Nilai harus berada pada rentang 0 sampai 100.";
        return;
    }
 
    hasil.className = "";
    hasil.textContent = "Data valid. Nama: " + nama + ", Nilai: " + nilai;
}

// 5. Menu makanan dengan checkbox
const daftarmenu = document.querySelectorAll(".menu");
 
daftarmenu.forEach((item) => {
    item.addEventListener("change", hitungTotal);
});
 
function hitungTotal() {
    let total = 0;
    let jumlahDipilih = 0;
    const info = document.getElementById("infoMenu");
 
    daftarmenu.forEach((item) => {
        if (item.checked) {
            total += Number(item.value);
            jumlahDipilih++;
        }
    });
 
    // Total baru tampil jika minimal 2 menu dipilih
    if (jumlahDipilih < 2) {
        document.getElementById("total").textContent = "0";
        info.style.display = "block";
    } else {
        document.getElementById("total").textContent = total.toLocaleString("id-ID");
        info.style.display = "none";
    }
}
//  6. Sembunyikan / tampilkan elemen 
function toggleElemen() {
    const elemen = document.getElementById("elemenToggle");
    const tombol = document.getElementById("tombolToggle");
    const tersembunyi = elemen.style.display === "none";
 
    elemen.style.display = tersembunyi ? "block" : "none";
    tombol.textContent = tersembunyi ? "Sembunyikan" : "Tampilkan";
}
