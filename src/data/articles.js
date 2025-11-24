export const articleStubs = [
  {
    id: 1,
    title: "Test: Pizzeria vs Nuvola vs 5 Stagioni",
    slug: "test-pizzeria-nuvola-5stagioni",
    category: "tests",
    status: "planned",
    excerpt: "Porównanie trzech popularnych mąk w identycznych warunkach: ten sam poolish, ta sama fermentacja, ten sam piec.",
    tags: ["test", "porównanie", "mąki"],
    content: "PLACEHOLDER - czekam na wyniki testu"
  },
  {
    id: 2,
    title: "Dlaczego calzone nie jest popularny w Polsce?",
    slug: "dlaczego-calzone-nie-popularny",
    category: "philosophy",
    status: "draft",
    excerpt: "Analiza dlaczego idealne danie na wynos nie wystartowało w Polsce, mimo że kebab i zapiekanki są wszędzie.",
    tags: ["calzone", "analiza", "kultura"],
    content: "PLACEHOLDER"
  },
  {
    id: 3,
    title: "Pizza Ramen - eksperyment z miso glaze",
    slug: "pizza-ramen-miso",
    category: "experiments",
    status: "in-progress",
    excerpt: "Fusion pizza z miso butter glaze dla umami bomby. Eksperyment z azjatyckimi smakami.",
    tags: ["fusion", "eksperyment", "miso"],
    content: "PLACEHOLDER"
  },
  {
    id: 4,
    title: "Czemu wszystkie najlepsze pizzerie robią to samo?",
    slug: "sufit-napoletan",
    category: "philosophy",
    status: "draft",
    excerpt: "Analiza dominacji stylu neapolitańskiego i braku różnorodności w polskiej scenie pizzowej. Dlaczego wszyscy robią to samo?",
    tags: ["neapolitańska", "analiza", "różnorodność"],
    content: "PLACEHOLDER"
  },
  {
    id: 5,
    title: "Salame piccante vs Pepperoni - różnice",
    slug: "salame-piccante-vs-pepperoni",
    category: "ingredients",
    status: "ready",
    excerpt: "Czym się różnią te dwa pikantne salami? Pochodzenie, smak, użycie - i dlaczego to nie jest to samo.",
    tags: ["salami", "składniki", "pepperoni"],
    content: `# Salame piccante vs Pepperoni

Jedna z największych pomyłek w świecie pizzy to mylenie salame piccante z pepperoni. To są różne produkty.

## Salame piccante (włoskie)

- **Pochodzenie**: Włochy (różne regiony)
- **Mięso**: Wieprzowina
- **Przyprawy**: Papryka ostra, czosnek, fenkuł
- **Tekstura**: Grubsza, wyrazista
- **Smak**: Głęboki, złożony, naturalny

## Pepperoni (amerykańskie)

- **Pochodzenie**: USA (wynalezione przez włoskich imigrantów)
- **Mięso**: Wieprzowina + wołowina (często)
- **Przyprawy**: Papryka słodka i ostra, dymione
- **Tekstura**: Drobniejsza, jednolita
- **Smak**: Bardziej dymiony, słodkawy

## Na pizzy

**Salame piccante** - układa się w większych plastrach, tłuszcz się wytapia i przesiąka do ciasta

**Pepperoni** - mniejsze plastry, charakterystyczne "miseczki" (cups) z tłuszczem, bardziej chrupiące

## Podsumowanie

Dla autentycznej włoskiej pizzy - salame piccante.
Dla pizza party w amerykańskim stylu - pepperoni.

Oba są dobre, ale to różne produkty do różnych pizz.`
  },
  {
    id: 6,
    title: "Mozzarella di Bufala - jak używać na pizzy",
    slug: "mozzarella-bufala-jak-uzywac",
    category: "ingredients",
    status: "ready",
    excerpt: "Dlaczego bufala idzie na koniec, nie na początek. Jak nie zmarnować drogiego sera.",
    tags: ["mozzarella", "bufala", "technika"],
    content: `# Mozzarella di Bufala na pizzy

Mozzarella di Bufala to ser z mleka bawołów wodnych. Drogi, delikatny, niesamowity - ale trzeba wiedzieć jak go używać.

## Dlaczego nie na początek?

1. **Dużo wody** - bufala ma ok. 52% wilgotności vs 45% fior di latte
2. **Delikatna** - dłuższe pieczenie = gumowata tekstura
3. **Strata smaku** - subtelny smak ginie przy długim pieczeniu

## Jak używać prawidłowo?

### Metoda 1: Na koniec
- Dodaj bufalę 30-60 sekund przed końcem pieczenia
- Ser lekko się rozpuści ale zachowa teksturę

### Metoda 2: Po wyjęciu
- Dodaj na świeżą, gorącą pizzę
- Najlepiej zachowuje smak i teksturę

### Metoda 3: Zmieszana
- Fior di latte przed pieczeniem (topi się)
- Bufala na koniec (smak i tekstura)

## Przygotowanie bufali

1. Wyjmij z lodówki 30 min przed użyciem
2. Odsącz z płynu
3. Pokrój lub porwij na kawałki
4. Nie wyciskaj - stracisz kremową teksturę

## Gdzie kupić?

- Włoskie delikatesy
- Carrefour (czasem)
- Online (Jak u Mammy, Casa Italiana)

Bufala to premium produkt. Nie marnuj go na złe ciasto.`
  },
  {
    id: 7,
    title: "Rosso Gargano vs San Marzano DOP",
    slug: "rosso-gargano-vs-san-marzano",
    category: "ingredients",
    status: "planned",
    excerpt: "Test dwóch włoskich pomidorów - smak, konsystencja, cena. Czy warto przepłacać za DOP?",
    tags: ["pomidory", "test", "składniki"],
    content: "PLACEHOLDER - oczekiwanie na wyniki testu"
  },
  {
    id: 8,
    title: "Jak obliczyć proporcje ciasta na pizzę",
    slug: "jak-obliczyc-proporcje-ciasta",
    category: "techniques",
    status: "ready",
    excerpt: "Matematyka ciasta: hydratacja, waga kul, ilość drożdży. Baker's percentages explained.",
    tags: ["matematyka", "proporcje", "tutorial"],
    content: `# Jak obliczyć proporcje ciasta na pizzę

Baker's percentages (procenty piekarskie) to uniwersalny język piekarzy na całym świecie.

## Podstawy

Wszystko liczymy **od mąki**. Mąka = 100%.

- **Hydratacja 65%** = 65g wody na 100g mąki
- **Sól 2%** = 2g soli na 100g mąki
- **Drożdże 0.5%** = 0.5g drożdży na 100g mąki

## Przykładowe obliczenie

**Chcesz: 4 pizze po 250g**

1. Całkowita waga ciasta: 4 × 250g = 1000g
2. Proporcje: mąka 100% + woda 65% + sól 2% = 167%
3. Mąka: 1000g ÷ 1.67 = ~600g
4. Woda: 600g × 0.65 = 390g
5. Sól: 600g × 0.02 = 12g

## Hydratacja - co wybrać?

| Hydratacja | Charakter | Dla kogo |
|------------|-----------|----------|
| 55-60% | Suche, łatwe | Początkujący |
| 60-65% | Neapolitańska | Większość |
| 65-70% | NY style | Średniozaawansowani |
| 70%+ | Bardzo mokre | Zaawansowani |

## Waga kuli

- **200g** - Romana (cienka, chrupiąca)
- **250g** - Neapolitańska (standard)
- **280-300g** - NY style (większa pizza)

## Drożdże

Im dłuższa fermentacja, tym mniej drożdży:
- 8-12h: 1-2%
- 24h: 0.3-0.5%
- 48h: 0.1-0.2%
- 72h+: 0.05-0.1%

Użyj naszego kalkulatora żeby wszystko obliczyć automatycznie.`
  },
  {
    id: 9,
    title: "Hydratacja ciasta - jak wpływa na pizzę?",
    slug: "hydratacja-ciasta-wplyw",
    category: "techniques",
    status: "draft",
    excerpt: "60% vs 70% hydratacji - jak zmienia się tekstura, technika i efekt końcowy.",
    tags: ["hydratacja", "technika"],
    content: "PLACEHOLDER"
  },
  {
    id: 10,
    title: "Ile drożdży? Przewodnik po ilościach",
    slug: "ile-drozdzy-przewodnik",
    category: "techniques",
    status: "draft",
    excerpt: "Od 2% do 0.05% - kiedy ile używać. Zależność od czasu fermentacji i temperatury.",
    tags: ["drożdże", "fermentacja"],
    content: "PLACEHOLDER"
  }
];
