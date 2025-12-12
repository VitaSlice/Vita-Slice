# VitaBlend - Web Pemesanan Minuman Sehat Custom

## Deskripsi
VitaBlend adalah platform pemesanan minuman sehat yang memungkinkan pelanggan untuk membuat minuman custom dengan kustomisasi nutrisi real-time. Sistem ini dilengkapi dengan pelacak kalori, gula, dan vitamin, serta dashboard admin dan dapur untuk manajemen operasional.

## Fitur Utama

### 1. Halaman Pelanggan (index.html)
- Menu Signature: Katalog minuman siap saji
- Visual Customizer: Buat minuman custom dengan pilihan bahan
- Smart Nutrition Tracker: Pelacak nutrisi real-time (kalori, gula, vitamin C & A)
- Rekomendasi Persona: Pilihan tujuan kesehatan dengan batas rekomendasi
- Keranjang Belanja: Sistem checkout terintegrasi

### 2. Dashboard Admin (admin.html)
- Manajemen Inventaris: Input dan update stok bahan baku
- Sistem ambang batas minimum stok
- Input data nutrisi per 100 gram untuk setiap bahan

### 3. Dashboard Dapur (kitchen.html)
- Antrean pesanan real-time
- Tampilan detail bahan dengan satuan gram/ml
- Update status pesanan (Menunggu → Sedang Diracik → Siap Pickup)

## Struktur Database

### Table: ingredient
- name: Nama bahan
- stock: Jumlah stok (gram)
- calories: Kalori per 100g
- sugar: Gula per 100g
- vitaminC: Vitamin C per 100g
- vitaminA: Vitamin A per 100g

### Table: signature_product
- name: Nama produk
- description: Deskripsi
- price: Harga
- nutrients: Informasi nutrisi

### Table: order
- name: Nama pesanan
- type: Tipe (signature/custom)
- status: Status (pending/processing/ready)
- orderDate: Tanggal pesanan
- ingredients: Bahan-bahan (untuk custom)
- nutrition: Data nutrisi

## Teknologi
- React 18
- TailwindCSS
- Lucide Icons
- Trickle Database

## Update: 2025-11-10
Versi pertama dengan fitur lengkap pelanggan, admin, dan dapur.