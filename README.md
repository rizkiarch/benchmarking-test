# Node.js Benchmarking Tool

Tool sederhana untuk melakukan benchmarking pada API/Web Server menggunakan Autocannon dan Express.js.

## Fitur

- Server Express.js sederhana sebagai target benchmark
- Script benchmark menggunakan Autocannon
- Konfigurasi yang mudah disesuaikan
- Laporan hasil benchmark yang detail

## Prasyarat

Sebelum menjalankan tool ini, pastikan sudah terinstall:
- Node.js (versi 14.x atau lebih tinggi)
- npm (Node Package Manager)

## Instalasi

1. Clone repository ini:
```bash
git clone https://github.com/username/benchmark-test.git
cd benchmark-test
```

2. Install dependencies:
```bash
npm install
```

## Cara Penggunaan

### Menjalankan Server

1. Jalankan server dengan perintah:
```bash
node server.js
```

2. Server akan berjalan di `http://localhost:3000`

### Menjalankan Benchmark

1. Buka terminal baru
2. Jalankan script benchmark:
```bash
node benchmark.js
```

## Konfigurasi Benchmark

Anda dapat mengubah parameter benchmark di file `benchmark.js`:

```javascript
const options = {
  url: 'http://localhost:3000',
  connections: 10,    // Jumlah koneksi concurrent
  pipelining: 1,      // Jumlah request per koneksi
  duration: 10        // Durasi benchmark (detik)
};
```

### Penjelasan Parameter

- **connections**: Jumlah koneksi concurrent yang dibuat ke server
  - Nilai lebih tinggi = beban server lebih berat
  - Sesuaikan dengan kemampuan hardware

- **pipelining**: Jumlah request yang dikirim per koneksi
  - Nilai 1 = request serial (tunggu response sebelum kirim request baru)
  - Nilai >1 = multiple requests tanpa menunggu response
  - Range yang disarankan: 1-5

- **duration**: Lama waktu benchmark berjalan (dalam detik)
  - Minimal 10 detik untuk hasil yang reliable
  - Semakin lama = hasil lebih akurat

## Memahami Hasil Benchmark

Setelah benchmark selesai, Anda akan melihat output seperti ini:

```
Hasil Benchmark:
Rata-rata Latency: 1.23 ms
Rata-rata Request/Detik: 8534
Total Request: 85340
Total Data Transfer: 1234567 bytes
```

### Metrik Penting:

1. **Latency**: Waktu yang dibutuhkan dari request sampai mendapat response
   - Semakin rendah semakin baik
   - Perhatikan juga nilai min/max

2. **Requests/Second**: Jumlah request yang bisa ditangani per detik
   - Metrik utama untuk throughput server
   - Nilai lebih tinggi = performa lebih baik

3. **Total Requests**: Total request yang berhasil diproses
   - Berguna untuk validasi konsistensi

4. **Data Transfer**: Total data yang ditransfer
   - Penting untuk analisis bandwidth

## Tips Penggunaan

1. **Pengujian Bertahap**:
   - Mulai dengan beban rendah
   - Tingkatkan bertahap untuk temukan batas server

2. **Konsistensi Hasil**:
   - Jalankan benchmark beberapa kali
   - Perhatikan variance hasil

3. **Monitoring Resource**:
   - Monitor CPU & memory usage
   - Identifikasi bottleneck

## Troubleshooting

1. **Error ECONNREFUSED**:
   - Pastikan server berjalan
   - Periksa port yang digunakan

2. **Hasil Tidak Konsisten**:
   - Tutup aplikasi yang berat
   - Jalankan ulang server

## Kontribusi

Silakan berkontribusi dengan membuat pull request atau melaporkan issues.

## Lisensi

MIT License - silakan gunakan dan modifikasi sesuai kebutuhan.