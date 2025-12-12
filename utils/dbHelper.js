// vitablend/utils/dbHelper.js

// --- DATA BAHAN BAKU (INGREDIENT) ---
const INGREDIENT_DATA = [
  { objectId: 'ing-10', objectData: { name: 'Melon', stock: 5000, calories: 52, sugar: 10.4, vitaminC: 4.6, vitaminA: 3 } },
  { objectId: 'ing-10', objectData: { name: 'Apel', stock: 5000, calories: 52, sugar: 10.4, vitaminC: 4.6, vitaminA: 3 } },
  { objectId: 'ing-11', objectData: { name: 'Semangka', stock: 5000, calories: 30, sugar: 6.2, vitaminC: 8.1, vitaminA: 28 } },
  { objectId: 'ing-12', objectData: { name: 'Lemon', stock: 5000, calories: 29, sugar: 2.5, vitaminC: 53.0, vitaminA: 1 } },
];

// --- DATA PRODUK SIGNATURE (SIGNATURE_PRODUCT) ---
const SIGNATURE_PRODUCT_DATA = [
    // SLICED SIGNATURE PRODUCTS (New)
    { 
      objectId: 'sig-4', 
      objectData: { 
        name: 'Vita-Jasmine Series (Potongan)', 
        description: 'Semangka, Lemon, Apel, melon, dengan kuah Teh Jasmine.', 
        price: 20000, 
        type: 'sliced',
        
        // --- COBA PERBAIKAN INI: Huruf 'J' Besar ---
        image: "https://github.com/VitaSlice/Vita-Slice/blob/main/Jasmin.png?raw=true", 
        
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
        
        // Yang ini sudah berhasil (jangan diubah)
        image: "https://github.com/VitaSlice/Vita-Slice/blob/main/coco.png?raw=true", 
        
        nutrients: JSON.stringify({ calories: 250, sugar: 25, vitaminC: 15, vitaminA: 10 }) 
      } 
    },
];

// --- FUNGSI HELPER ---
function getIngredientData() { return JSON.parse(JSON.stringify(INGREDIENT_DATA)); }
function getSignatureProductData() { return JSON.parse(JSON.stringify(SIGNATURE_PRODUCT_DATA)); }
function initializeDatabase() { console.warn('Database connection disabled.'); }
