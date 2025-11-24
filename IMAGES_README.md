# Jak dodawać zdjęcia do Pizza Lab

## Struktura folderów

Wszystkie zdjęcia wrzucaj do odpowiednich folderów w `public/images/`:

```
public/
  images/
    flours/          ← zdjęcia mąk
    ingredients/     ← zdjęcia składników
    pizzas/          ← zdjęcia pizz
```

## Formaty i nazewnictwo

### Mąki
- **Folder**: `public/images/flours/`
- **Nazewnictwo**: `[slug-maki].jpg`
- **Przykłady**:
  - `caputo-pizzeria.jpg`
  - `caputo-nuvola.jpg`
  - `5-stagioni-napoletana.jpg`

### Składniki
- **Folder**: `public/images/ingredients/`
- **Nazewnictwo**: `[slug-skladnika].jpg`
- **Przykłady**:
  - `mozzarella-bufala.jpg`
  - `salame-piccante.jpg`

### Pizze
- **Folder**: `public/images/pizzas/`
- **Nazewnictwo**: `[slug-pizzy].jpg`
- **Przykłady**:
  - `margherita.jpg`
  - `diavola.jpg`
  - `capricciosa.jpg`

## Jak dodać zdjęcie?

### 1. Dla mąk (w `src/data/flours.js`)
```javascript
{
  id: 1,
  name: "Pizzeria",
  brand: "Caputo",
  // ... inne dane ...
  image_url: "/images/flours/caputo-pizzeria.jpg",  // ← dodaj tę linię
  slug: "caputo-pizzeria"
}
```

### 2. Dla składników (w `src/pages/ingredients/IngredientDetail.jsx`)
```javascript
'mozzarella-bufala': {
  name: 'Mozzarella di Bufala',
  category: 'sery',
  description: '...',
  image_url: '/images/ingredients/mozzarella-bufala.jpg',  // ← dodaj tę linię
  content: `...`
}
```

### 3. Dla pizz (w `src/data/pizzas.js`)
```javascript
{
  id: 1,
  name: "Margherita",
  slug: "margherita",
  // ... inne dane ...
  image_url: "/images/pizzas/margherita.jpg"  // ← to już jest dodane
}
```

## Zalecane parametry zdjęć

- **Format**: JPG lub PNG (preferowany JPG dla mniejszego rozmiaru)
- **Rozmiar**: maksymalnie 1920px szerokości
- **Jakość**: 80-90% (kompresja JPG)
- **Proporcje**:
  - Mąki: kwadrat (1:1) lub zbliżone, np. 1000x1000px
  - Składniki: kwadrat (1:1) lub zbliżone
  - Pizze: szeroki format (16:9 lub 4:3), np. 1600x900px

## Co się dzieje, gdy nie ma zdjęcia?

Jeśli nie dodasz zdjęcia lub plik nie zostanie znaleziony:
- **Mąki**: Pojawi się graficzny placeholder (krąg w kolorze amber)
- **Składniki**: Sekcja ze zdjęciem nie pojawi się wcale
- **Pizze**: Pojawi się graficzny placeholder (czerwony krąg)

Wszystko działa automatycznie - nie musisz się martwić o błędy!

## Przykładowy workflow

1. Przygotuj zdjęcie (kompresja, rozmiar)
2. Zmień nazwę na odpowiedni slug: `caputo-pizzeria.jpg`
3. Wrzuć do właściwego folderu: `public/images/flours/`
4. Upewnij się, że w danych jest poprawna ścieżka: `/images/flours/caputo-pizzeria.jpg`
5. Gotowe! Zdjęcie pojawi się automatycznie

## Wskazówki

- Używaj małych liter i myślników w nazwach plików
- Unikaj spacji i polskich znaków w nazwach plików
- Sprawdź czy slug w nazwie pliku pasuje do sluga w danych
- Kompresuj zdjęcia przed wrzuceniem (np. TinyPNG, ImageOptim)
