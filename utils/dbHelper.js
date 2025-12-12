// vitablend/utils/dbHelper.js

// --- DATA BAHAN BAKU (INGREDIENT) ---
const INGREDIENT_DATA = [
  // Catatan: objectId ditambahkan untuk simulasi ID database
  // --- BUAH-BUAHAN (Fruits) ---
  { objectId: 'ing-1', objectData: { name: 'Strawberry', stock: 5000, calories: 32, sugar: 4.9, vitaminC: 58.8, vitaminA: 1 } },
  { objectId: 'ing-2', objectData: { name: 'Blueberry', stock: 5000, calories: 57, sugar: 9.9, vitaminC: 9.7, vitaminA: 5 } },
  { objectId: 'ing-3', objectData: { name: 'Mangga', stock: 5000, calories: 60, sugar: 13.7, vitaminC: 27.7, vitaminA: 54 } },
  { objectId: 'ing-4', objectData: { name: 'Jeruk', stock: 5000, calories: 47, sugar: 9.4, vitaminC: 53.2, vitaminA: 11 } },
  { objectId: 'ing-5', objectData: { name: 'Nanas', stock: 5000, calories: 50, sugar: 9.9, vitaminC: 47.8, vitaminA: 3 } },
  { objectId: 'ing-6', objectData: { name: 'Pisang', stock: 5000, calories: 89, sugar: 12.2, vitaminC: 8.7, vitaminA: 3 } },
  { objectId: 'ing-7', objectData: { name: 'Alpukat', stock: 5000, calories: 160, sugar: 0.7, vitaminC: 10.0, vitaminA: 7 } },
  { objectId: 'ing-8', objectData: { name: 'Kiwi', stock: 5000, calories: 61, sugar: 9.0, vitaminC: 92.7, vitaminA: 4 } },
  { objectId: 'ing-9', objectData: { name: 'Pepaya', stock: 5000, calories: 43, sugar: 7.8, vitaminC: 61.2, vitaminA: 47 } },
  { objectId: 'ing-10', objectData: { name: 'Apel', stock: 5000, calories: 52, sugar: 10.4, vitaminC: 4.6, vitaminA: 3 } },
  { objectId: 'ing-11', objectData: { name: 'Semangka', stock: 5000, calories: 30, sugar: 6.2, vitaminC: 8.1, vitaminA: 28 } },
  { objectId: 'ing-12', objectData: { name: 'Lemon', stock: 5000, calories: 29, sugar: 2.5, vitaminC: 53.0, vitaminA: 1 } },
  // --- SAYURAN (Vegetables) ---
  { objectId: 'ing-13', objectData: { name: 'Bayam', stock: 5000, calories: 23, sugar: 0.4, vitaminC: 28.1, vitaminA: 469 } },
  { objectId: 'ing-14', objectData: { name: 'Wortel', stock: 5000, calories: 41, sugar: 4.7, vitaminC: 5.9, vitaminA: 835 } },
  { objectId: 'ing-15', objectData: { name: 'Timun', stock: 5000, calories: 15, sugar: 1.7, vitaminC: 2.8, vitaminA: 7 } },
  // --- BAHAN TAMBAHAN (Extra Ingredient) ---
  { objectId: 'ing-16', objectData: { name: 'Susu Almond', stock: 5000, calories: 15, sugar: 0.2, vitaminC: 0.0, vitaminA: 0 } },
];

// --- DATA PRODUK SIGNATURE (SIGNATURE_PRODUCT) ---
const SIGNATURE_PRODUCT_DATA = [
    // BLENDED SIGNATURE PRODUCTS (Original)
    { objectId: 'sig-1', objectData: { name: 'Berry Blast (Jus)', description: 'Kombinasi stroberi, bluberi, dan teh hijau. Kaya antioksidan!', price: 35000, type: 'blended', nutrients: JSON.stringify({ calories: 180, sugar: 22, vitaminC: 60, vitaminA: 5 }) } },
    { objectId: 'sig-2', objectData: { name: 'Green Detox (Jus)', description: 'Bayam, apel, kiwi, dan air mineral. Pilihan terbaik untuk detoks.', price: 40000, type: 'blended', nutrients: JSON.stringify({ calories: 140, sugar: 18, vitaminC: 105, vitaminA: 470 }) } },
    { objectId: 'sig-3', objectData: { name: 'Tropical Sunshine (Jus)', description: 'Mangga, nanas, dan air kelapa. Rasanya seperti liburan tropis!', price: 38000, type: 'blended', nutrients: JSON.stringify({ calories: 220, sugar: 30, vitaminC: 80, vitaminA: 60 }) } },
    
    // SLICED SIGNATURE PRODUCTS (New)
    { objectId: 'sig-4', objectData: { name: 'Summer Slices12 (Potongan)', description: 'Semangka, Pepaya, Jeruk, dengan kuah Air Kelapa segar.', price: 30000, type: 'sliced', nutrients: JSON.stringify({ calories: 110, sugar: 18, vitaminC: 75, vitaminA: 80 }) } },
    { objectId: 'sig-5', objectData: { name: 'Power Fruit (Potongan)', description: 'Pisang, Alpukat, Apel, dengan sedikit Teh Hijau sebagai kuah.', price: 34000, type: 'sliced', nutrients: JSON.stringify({ calories: 250, sugar: 25, vitaminC: 15, vitaminA: 10 }) } },
    { objectId: 'sig-6', objectData: { name: 'Kiwi Berry (Potongan)', description: 'Kiwi dan Stroberi yang dipotong dadu. Kebutuhan Vitamin C terpenuhi!', price: 36000, type: 'sliced', nutrients: JSON.stringify({ calories: 120, sugar: 15, vitaminC: 150, vitaminA: 1 }) } },
];

// --- SIMULASI PEMBANTU DATABASE (Non-Persistent) ---
function getIngredientData() {
    // Mengembalikan salinan data untuk digunakan di komponen
    return JSON.parse(JSON.stringify(INGREDIENT_DATA));
}

function getSignatureProductData() {
    return JSON.parse(JSON.stringify(SIGNATURE_PRODUCT_DATA));
}

// Fungsi dummy untuk mencegah error di komponen lain yang mungkin memanggilnya
function initializeDatabase() {
    console.warn('Database connection disabled. Using hardcoded JS data.');
}
