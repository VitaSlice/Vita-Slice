function calculateNutrition(base, ingredients, size, sugarLevel) {
  try {
    const baseNutrition = {
      green_tea: { calories: 2, sugar: 0, vitaminC: 0, vitaminA: 0 },
      water: { calories: 0, sugar: 0, vitaminC: 0, vitaminA: 0 },
      coconut: { calories: 19, sugar: 2.6, vitaminC: 2.4, vitaminA: 0 }
    };
    
    // LOGIC PENAMBAHAN GULA BERDASARKAN LEVEL (SIMULASI)
    let addedSugar = 0;
    switch (sugarLevel) {
      case 'no_sugar': // OPSI BARU: Tanpa Gula
        addedSugar = 0; 
        break;
      case 'less':
        addedSugar = 5; // Tambah 5 gram gula
        break;
      case 'normal':
        addedSugar = 10; // Tambah 15 gram gula
        break;
      case 'big':
        addedSugar = 20; // Tambah 25 gram gula
        break;
      default:
        addedSugar = 10;
    }

    let nutrition = { ...baseNutrition[base] };

    ingredients.forEach(ing => {
      const ratio = ing.amount / 100;
      nutrition.calories += (ing.calories || 0) * ratio;
      nutrition.sugar += (ing.sugar || 0) * ratio;
      nutrition.vitaminC += (ing.vitaminC || 0) * ratio;
      nutrition.vitaminA += (ing.vitaminA || 0) * ratio;
    });
    
    // Tambahkan gula dari level kustomisasi ke total gula
    nutrition.sugar += addedSugar;

    const sizeMultiplier = size === 'large' ? 1.5 : 1;
    nutrition.calories = Math.round(nutrition.calories * sizeMultiplier);
    nutrition.sugar = Math.round(nutrition.sugar * sizeMultiplier * 10) / 10;
    nutrition.vitaminC = Math.round(nutrition.vitaminC * sizeMultiplier * 10) / 10;
    nutrition.vitaminA = Math.round(nutrition.vitaminA * sizeMultiplier * 10) / 10;

    return nutrition;
  } catch (error) {
    console.error('Nutrition calculation error:', error);
    return { calories: 0, sugar: 0, vitaminC: 0, vitaminA: 0 };
  }
}