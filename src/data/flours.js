export const flours = [
  {
    id: 1,
    name: "Pizzeria",
    brand: "Caputo",
    type: "00",
    protein_content: 12.5,
    w_strength: 260,
    description: "Klasyczna mąka do pizzy neapolitańskiej. Tipo 00, idealna na krótsze fermentacje (do 24h).",
    ideal_for: ["krótka fermentacja", "neapolitańska", "piec do pizzy"],
    fermentation_range: "12-24h",
    notes: "Rustykalny charakter, chrupiące krawędzie, bardziej zbożowy smak. Dobry wybór na początek przygody z pizzą.",
    image_url: "/images/flours/caputo-pizzeria.jpg",
    slug: "caputo-pizzeria"
  },
  {
    id: 2,
    name: "Nuvola (Super)",
    brand: "Caputo",
    type: "00",
    protein_content: 12.5,
    w_strength: 260,
    description: "Puszysta, delikatna mąka do długich fermentacji (24-72h). Nuvola = chmura.",
    ideal_for: ["długa fermentacja", "neapolitańska", "puszysty brzeg"],
    fermentation_range: "24-72h",
    notes: "Ciasto rozwija się jak chmura. Świetny rozwój gazu, delikatny smak. Lepiej trzyma strukturę przy długiej fermentacji niż Pizzeria.",
    image_url: "/images/flours/caputo-nuvola.jpg",
    slug: "caputo-nuvola"
  },
  {
    id: 3,
    name: "Cuoco",
    brand: "Caputo",
    type: "00",
    protein_content: 13.0,
    w_strength: 320,
    description: "Mocna mąka do bardzo długich fermentacji (48-96h). Wymaga cierpliwości.",
    ideal_for: ["bardzo długa fermentacja", "mocny gluten", "profesjonalne użycie"],
    fermentation_range: "48-96h",
    notes: "Wymaga czasu - po krótkiej fermentacji ciasto będzie gumowate. Po 48h+ ujawnia się głęboki smak i jedwabista elastyczność. Dla cierpliwych.",
    image_url: "/images/flours/caputo-cuoco.jpg",
    slug: "caputo-cuoco"
  },
  {
    id: 4,
    name: "Pizza Napoletana",
    brand: "Le 5 Stagioni",
    type: "00",
    protein_content: 12.5,
    w_strength: 300,
    description: "Kultowa włoska mąka, alternatywa dla Caputo. Inna filozofia, inny profil smakowy.",
    ideal_for: ["średnia fermentacja", "neapolitańska", "poolish"],
    fermentation_range: "24-48h",
    notes: "Bardziej chlebowy smak niż Caputo. Świetnie współpracuje z poolish. Dobra elastyczność, łatwa w obróbce.",
    image_url: "/images/flours/5stagioni.jpg",
    slug: "5-stagioni-napoletana"
  }
];
