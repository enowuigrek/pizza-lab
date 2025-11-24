// Yeast percentages based on fermentation time and method
const yeastPercentages = {
  'short': { // 8-12h room temp or 12-18h fridge
    direct: 2.0,
    poolish_starter: 0.2,
    poolish_main: 1.0,
    biga_starter: 1.0,
    biga_main: 0.5
  },
  'medium': { // 18-36h mostly fridge
    direct: 0.5,
    poolish_starter: 0.1,
    poolish_main: 0.3,
    biga_starter: 0.5,
    biga_main: 0.2
  },
  'long': { // 36-72h fridge
    direct: 0.2,
    poolish_starter: 0.05,
    poolish_main: 0.1,
    biga_starter: 0.2,
    biga_main: 0.1
  },
  'very_long': { // 72h+ fridge
    direct: 0.1,
    poolish_starter: 0.03,
    poolish_main: 0,
    biga_starter: 0.1,
    biga_main: 0
  }
};

// Yeast type conversions (relative to fresh yeast)
const yeastConversions = {
  fresh: 1.0,           // base (świeże)
  active_dry: 0.4,      // suche aktywne = 40% of fresh
  instant: 0.33         // instant = 33% of fresh
};

// Pizza style presets
const pizzaStyles = {
  neapolitan: { weight: 250, hydration: 60 },
  romana: { weight: 200, hydration: 65 },
  new_york: { weight: 280, hydration: 65 },
  al_taglio: { weight: 300, hydration: 70 }
};

export function calculateDough({
  numberOfPizzas = 4,
  ballWeight = 250,      // grams
  hydration = 65,        // percentage
  method = 'poolish',    // 'direct', 'poolish', 'biga'
  prefermentPercentage = 50, // 20, 30, 50 (percent of flour in preferment)
  yeastType = 'fresh',   // 'fresh', 'active_dry', 'instant'
  fermentationTime = 'medium',
  temperature = 'fridge'
}) {

  // Calculate total dough weight
  const totalDoughWeight = numberOfPizzas * ballWeight;

  // Calculate flour weight (accounting for hydration and 2% salt)
  const flourWeight = totalDoughWeight / (1 + (hydration / 100) + 0.02);
  const waterWeight = flourWeight * (hydration / 100);
  const saltWeight = flourWeight * 0.02;

  // Get yeast percentage based on time and method
  const getYeastPercentage = (key) => {
    return yeastPercentages[fermentationTime]?.[key] || 0.1;
  };

  // Convert yeast amount based on type
  const convertYeast = (freshYeastAmount) => {
    return freshYeastAmount * yeastConversions[yeastType];
  };

  if (method === 'direct') {
    const yeastPercentage = getYeastPercentage('direct');
    const yeastWeight = flourWeight * (yeastPercentage / 100);

    return {
      method: 'direct',
      dough: {
        flour: Math.round(flourWeight),
        water: Math.round(waterWeight),
        salt: Math.round(saltWeight),
        yeast: Math.round(convertYeast(yeastWeight) * 10) / 10 // round to 0.1g
      },
      total: {
        flour: Math.round(flourWeight),
        water: Math.round(waterWeight),
        hydration: hydration,
        balls: numberOfPizzas,
        ballWeight: ballWeight
      }
    };
  }

  if (method === 'poolish') {
    const poolishFlour = flourWeight * (prefermentPercentage / 100);
    const poolishWater = poolishFlour; // 100% hydration
    const poolishYeast = poolishFlour * (getYeastPercentage('poolish_starter') / 100);

    const mainFlour = flourWeight - poolishFlour;
    const mainWater = waterWeight - poolishWater;
    const mainYeastPercentage = getYeastPercentage('poolish_main');
    const mainYeast = mainFlour * (mainYeastPercentage / 100);

    return {
      method: 'poolish',
      poolish: {
        flour: Math.round(poolishFlour),
        water: Math.round(poolishWater),
        yeast: Math.round(convertYeast(poolishYeast) * 10) / 10,
        timing: "16-24h w lodówce (po 1h w pokojowej)"
      },
      main: {
        flour: Math.round(mainFlour),
        water: Math.round(mainWater),
        salt: Math.round(saltWeight),
        yeast: mainYeastPercentage > 0 ? Math.round(convertYeast(mainYeast) * 10) / 10 : 0,
        poolish: "caly"
      },
      total: {
        flour: Math.round(flourWeight),
        water: Math.round(waterWeight),
        hydration: hydration,
        balls: numberOfPizzas,
        ballWeight: ballWeight
      }
    };
  }

  if (method === 'biga') {
    const bigaFlour = flourWeight * (prefermentPercentage / 100);
    const bigaWater = bigaFlour * 0.5; // 50% hydration (stiffer)
    const bigaYeast = bigaFlour * (getYeastPercentage('biga_starter') / 100);

    const mainFlour = flourWeight - bigaFlour;
    const mainWater = waterWeight - bigaWater;
    const mainYeastPercentage = getYeastPercentage('biga_main');
    const mainYeast = mainFlour * (mainYeastPercentage / 100);

    return {
      method: 'biga',
      biga: {
        flour: Math.round(bigaFlour),
        water: Math.round(bigaWater),
        yeast: Math.round(convertYeast(bigaYeast) * 10) / 10,
        timing: "16-48h w lodówce"
      },
      main: {
        flour: Math.round(mainFlour),
        water: Math.round(mainWater),
        salt: Math.round(saltWeight),
        yeast: mainYeastPercentage > 0 ? Math.round(convertYeast(mainYeast) * 10) / 10 : 0,
        biga: "cala"
      },
      total: {
        flour: Math.round(flourWeight),
        water: Math.round(waterWeight),
        hydration: hydration,
        balls: numberOfPizzas,
        ballWeight: ballWeight
      }
    };
  }
}

export { pizzaStyles, yeastConversions, yeastPercentages };
