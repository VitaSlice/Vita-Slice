// vitablend/utils/dbHelper.js

// --- DATA BAHAN BAKU (INGREDIENT) ---
const INGREDIENT_DATA = [
  // Catatan: objectId ditambahkan untuk simulasi ID database
  // --- BUAH-BUAHAN (Fruits) ---
  { objectId: 'ing-10', objectData: { name: 'Melon', stock: 5000, calories: 52, sugar: 10.4, vitaminC: 4.6, vitaminA: 3 } },
  { objectId: 'ing-10', objectData: { name: 'Apel', stock: 5000, calories: 52, sugar: 10.4, vitaminC: 4.6, vitaminA: 3 } },
  { objectId: 'ing-11', objectData: { name: 'Semangka', stock: 5000, calories: 30, sugar: 6.2, vitaminC: 8.1, vitaminA: 28 } },
  { objectId: 'ing-12', objectData: { name: 'Lemon', stock: 5000, calories: 29, sugar: 2.5, vitaminC: 53.0, vitaminA: 1 } },
];

// --- DATA PRODUK SIGNATURE (SIGNATURE_PRODUCT) ---
const SIGNATURE_PRODUCT_DATA = [
    // BLENDED SIGNATURE PRODUCTS (Original - Kosongkan jika belum ada)
    
    // SLICED SIGNATURE PRODUCTS (New)
    { 
      objectId: 'sig-4', 
      objectData: { 
        name: 'Vita-Jasmine Series (Potongan)', 
        description: 'Semangka, Lemon, Apel, melon, dengan kuah Teh Jasmine.', 
        price: 20000, 
        type: 'sliced',
        
        // --- BAGIAN PENTING: GANTI LINK DI BAWAH INI ---
        // Masukkan Link GitHub RAW Anda di sini. 
        // Contoh: "https://raw.githubusercontent.com/VitaSlice/Vita-Slice/main/jasmine.jpg"
        image: "https://github.com/VitaSlice/Vita-Slice/blob/main/jasmin.png?raw=true", 
        
        nutrients: JSON.stringify({ calories: 110, sugar: 18, vitaminC: 75, vitaminA: 80 }) 
      } 
    },
    { 
      objectId: 'sig-5', 
      objectData: { 
        name: 'Vita-Coco Series (Potongan)', 
        description: 'Semangka, Lemon, Apel, melon, dengan sedikit Air Kelapa segar sebagai kuah.', 
        price: 20000, 
        type: 'sliced', 
        
        // --- BAGIAN PENTING: GANTI LINK DI BAWAH INI ---
        image: "https://github.com/VitaSlice/Vita-Slice/blob/main/coco.png?raw=true", 
        
        nutrients: JSON.stringify({ calories: 250, sugar: 25, vitaminC: 15, vitaminA: 10 }) 
      } 
    },
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
