# Lab5Web
# Laporan Praktikum 5: JavaScript Dasar

## Langkah Kerja Praktikum

### Latihan 1: Menampilkan Output
* **Penjelasan**: Mengenali cara menampilkan output di halaman HTML menggunakan `innerHTML`/`textContent` serta menampilkan pesan di Konsol pengembang menggunakan `console.log()`.
* **Screenshot**:
<img width="1366" height="738" alt="Screenshot from 2026-10-19 10-33-50" src="https://github.com/user-attachments/assets/1ac8a685-7cee-4338-a029-20dd8e15a825" />
<img width="1366" height="738" alt="Screenshot from 2026-10-19 10-34-05" src="https://github.com/user-attachments/assets/4c317a46-7182-448f-ac05-c2b8db16ff9c" />


### Latihan 2: Alert dan Prompt
* **Penjelasan**: Menggunakan dialog `prompt()` untuk meminta masukan nama pengguna serta `alert()` untuk menampilkan sambutan interaktif.
* **Screenshot**:
<img width="1366" height="738" alt="Screenshot from 2026-10-19 10-35-55" src="https://github.com/user-attachments/assets/03fd0c4d-375d-41ae-a832-18bee4ba3625" />



### Latihan 3: Function dan Operasi Aritmetika
* **Penjelasan**: Membuat fungsi JavaScript yang menerima dua bilangan, lalu menghitung serta menampilkan hasil penjumlahan, pengurangan, perkalian, pembagian, dan modulus.
* **Screenshot**:
<img width="1366" height="252" alt="Screenshot from 2026-10-19 10-38-46" src="https://github.com/user-attachments/assets/e9cf9c6c-6417-4f09-b0e4-ea21f47510d1" />


### Latihan 4: Seleksi Kondisi if-else
* **Penjelasan**: Membuat program seleksi nilai mahasiswa (standar lulus >= 60) dengan mengonversi input string dari prompt menjadi tipe data *number* serta melakukan validasi rentang nilai 0–100.
* **Screenshot**:


### Latihan 5: Seleksi Kondisi switch
* **Penjelasan**: Menerima input angka 1–5 dari pengguna dan menampilkan nama bilangan yang bersesuaian menggunakan struktur kendali *switch-case*.
* **Screenshot**:
  *(Sisipkan screenshot hasil switch-case di sini)*

### Latihan 6: Form Bilangan Genap atau Ganjil
* **Penjelasan**: Membuat form input interaktif untuk memeriksa apakah suatu bilangan bulat yang dimasukkan pengguna merupakan bilangan genap atau ganjil.
* **Screenshot**:
<img width="1366" height="738" alt="Screenshot from 2026-10-19 10-47-10" src="https://github.com/user-attachments/assets/a7e8ce10-d5c5-4f28-a968-850bd2f37468" />
<img width="1366" height="738" alt="Screenshot from 2026-10-19 10-48-08" src="https://github.com/user-attachments/assets/653b4c3b-506b-4f88-9714-ad2302b34dda" />
<img width="1366" height="738" alt="Screenshot from 2026-10-19 10-47-20" src="https://github.com/user-attachments/assets/379310cf-5ccd-493f-aa43-3b95d5f75a35" />


### Latihan 7: Mengubah Warna Halaman
* **Penjelasan**: Membuat fungsi dengan parameter (`ubahWarnaLatar`) untuk mengubah warna latar belakang dokumen HTML secara dinamis melalui beberapa tombol pilihan.
* **Screenshot**:
<img width="1366" height="738" alt="Screenshot from 2026-10-19 10-52-23" src="https://github.com/user-attachments/assets/f0dba614-b1fb-44f1-8e76-5a5d8a367d03" />
<img width="1366" height="738" alt="Screenshot from 2026-10-19 10-51-09" src="https://github.com/user-attachments/assets/8b2b597e-536a-4020-98c5-0ff6213ab013" />
<img width="1366" height="738" alt="Screenshot from 2026-10-19 10-51-03" src="https://github.com/user-attachments/assets/7a54c44f-f50f-4b83-b74f-c47ade0ac791" />


### Latihan 8: DOM dan Checkbox Menu Makanan
* **Penjelasan**: Menerapkan *event listener* dan manipulasi DOM untuk menghitung total harga menu makanan secara otomatis ketika opsi checkbox dicentang atau dilepas.
* **Screenshot**:
<img width="1366" height="738" alt="Screenshot from 2026-10-19 11-06-42" src="https://github.com/user-attachments/assets/f8fa7a08-6084-4c5c-bbba-d22c00075c30" />
<img width="1366" height="738" alt="Screenshot from 2026-10-19 11-06-35" src="https://github.com/user-attachments/assets/c23458d8-affb-47e5-ac78-e18b69a1d201" />


### Mini Project: Kalkulator Nilai Mahasiswa
* **Penjelasan**: Mengembangkan kalkulator nilai akhir berdasarkan komponen tugas (30%), UTS (30%), dan UAS (40%), menentukan predikat (A–E) serta status kelulusan dengan form validasi.
* **Screenshot**:
<img width="642" height="277" alt="Screenshot from 2026-10-19 16-43-36" src="https://github.com/user-attachments/assets/3a19afa7-b6eb-4ae1-b100-625449729855" />
<img width="642" height="277" alt="Screenshot from 2026-10-19 16-43-56" src="https://github.com/user-attachments/assets/b92b9cc9-0109-4ee7-a13f-65c673382119" />
<img width="635" height="258" alt="Screenshot from 2026-10-19 16-42-37" src="https://github.com/user-attachments/assets/eed822d5-e040-48e6-ba1a-477f0b12dfb9" />


---

# Eksperimen Mandiri

### 1. Modifikasi Latihan 3 (Input dari Prompt)
* **Penjelasan**: Eksperimen dilakukan dengan mengubah mekanisme masukan pada Latihan 3. Angka pertama dan kedua yang sebelumnya bernilai konstan kini diambil langsung secara dinamis dari pengguna menggunakan dialog `prompt()`. Data yang diterima dari `prompt()` (berupa *string*) terlebih dahulu dikonversi menjadi tipe data numerik menggunakan `Number()` sebelum dilakukan operasi aritmetika (penjumlahan, pengurangan, perkalian, pembagian, dan modulus).
* **Screenshot**:
  *(Sisipkan screenshot tampilan dialog prompt dan hasil perhitungan di console di sini)*

### 2. Tabel Perkalian Angka 7 (1 sampai 10)
* **Penjelasan**: Menerapkan struktur perulangan `for` untuk menghasilkan tabel perkalian angka 7 secara otomatis dari pengali 1 hingga 10. Setiap iterasi menghitung hasil kali dan mencetak hasilnya secara terstruktur ke dalam `console.log()`.
* **Screenshot**:
  *(Sisipkan screenshot tampilan tabel perkalian di console di sini)*

### 3. Fungsi `cekGenap(angka)`
* **Penjelasan**: Membuat sebuah fungsi logika bernama `cekGenap` yang menerima satu parameter masukan berupa angka. Fungsi ini memanfaatkan operator modulus (`% 2 === 0`) untuk mengecek sisa hasil bagi. Jika sisa bagi dengan 2 adalah 0, fungsi akan mengembalikan nilai boolean `true` (genap), dan jika tidak maka mengembalikan `false` (ganjil).
* **Screenshot**:
  *(Sisipkan screenshot hasil pengujian fungsi di console di sini)*

### 4. Validasi Form (Kolom Tidak Boleh Kosong)
* **Penjelasan**: Mengimplementasikan fungsi validasi pada elemen formulir HTML untuk memastikan pengguna mengisi kolom sebelum data dikirimkan. Fungsi memeriksa isi bidang input setelah menghapus spasi di awal/akhir (`trim()`). Jika kolom ditemukan kosong, program akan memunculkan peringatan `alert()` dan membatalkan proses submission.
* **Screenshot**:
  *(Sisipkan screenshot pesan peringatan saat kolom kosong di browser di sini)*

### 5. Modifikasi Latihan 8 (Tambah Menu dan Harga)
* **Penjelasan**: Mengembangkan latihan menu makanan dengan menambahkan dua pilihan menu baru beserta nilainya (*value*) ke dalam elemen checkbox HTML. Ketika pilihan menu baru dicentang atau dilepas, fungsi kalkulasi total harga otomatis menghitung ulang dan menampilkan akumulasi harga terbaru.
* **Screenshot**:
  *(Sisipkan screenshot tampilan daftar menu baru dan akumulasi total harga di sini)*

### 6. Tombol Toggle (Sembunyikan / Tampilkan Elemen)
* **Penjelasan**: Membuat tombol interaktif yang memanfaatkan manipulasi DOM pada properti CSS `style.display`. Saat tombol diklik, fungsi akan mengecek status visibilitas elemen target; jika elemen sedang tersembunyi (`none`), posisinya diubah menjadi tampak (`block`), dan sebaliknya.
* **Screenshot**:
  *(Sisipkan screenshot kondisi elemen saat ditampilkan dan disembunyikan di browser di sini)*
