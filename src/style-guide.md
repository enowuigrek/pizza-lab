# Pizza Lab - Style Guide

## Filozofia projektu
Pizza Lab to polska platforma wiedzy o pizzy. Prezentujemy informacje rzeczowo, bez oceniania.
Opisujemy różnice między wersjami autentycznymi a lokalnymi adaptacjami - nie krytykujemy, edukujemy.

---

## Kolorystyka

### Paleta główna (włoskie kolory)
- **Czerwony (akcent główny)**: `#B91C1C` (red-700) - stonowany, elegancki
- **Zielony (pozytywny)**: `#15803D` (green-700) - do sekcji "co zawiera"
- **Biały/Kremowy**: `#FAFAF9` (stone-50) - tło główne
- **Ciemny**: `#1C1917` (stone-900) - tekst główny

### Paleta pomocnicza
- **Beż ciepły**: `#F5F5F4` (stone-100) - tło kart
- **Szary**: `#78716C` (stone-500) - tekst pomocniczy
- **Złoty/Amber**: `#D97706` (amber-600) - dla sekcji opcjonalnych

### Użycie kolorów
- Zielony: sekcja "Autentyczne składniki" - subtelne tło, cienka lewa ramka
- Czerwony: sekcja "Czego unikać" - subtelne tło, cienka lewa ramka
- Złoty/Amber: sekcja "Opcjonalne/Warianty regionalne" - subtelne tło
- Unikamy jaskrawych, nasyconych kolorów

---

## Typografia

### Fonty
- **Nagłówki**: Playfair Display (serif, elegancki) lub podobny odręczny/kaligraficzny
- **Body**: Inter lub Source Sans Pro (czytelny, profesjonalny)
- **Liczby/dane techniczne**: JetBrains Mono lub podobny monospace

### Hierarchia
- H1: 48px, font nagłówkowy, tracking tight
- H2: 32px, font nagłówkowy
- H3: 24px, font nagłówkowy
- Body: 16-18px, line-height 1.7
- Small/Caption: 14px

---

## Kształty i elementy

### Zaokrąglenia
- **Minimalne**: preferujemy ostre krawędzie lub bardzo małe zaokrąglenia (rounded-sm)
- **Wyjątek**: elementy okrągłe/koliste nawiązujące do pizzy (badges, avatary, ikony)

### Koła (nawiązanie do pizzy)
- Używamy kół gdzie to możliwe:
  - Okrągłe badges/tagi
  - Okrągłe elementy dekoracyjne
  - Okrągłe wskaźniki/bulletsy

### Cienie
- Minimalne, subtelne cienie (shadow-sm)
- Unikamy głębokich cieni

### Ramki
- Preferujemy cienkie ramki (border) zamiast cieni
- Szczególnie lewa ramka jako akcent (border-l-4)

---

## Ikony i grafika

### Zasady
- **BEZ EMOJI** w interfejsie
- Logo pizzy jako jedyny element graficzny (placeholder)
- Proste, liniowe ikony jeśli potrzebne (Lucide, Heroicons outline)
- Zdjęcia: wysokiej jakości, naturalne kolory

### Placeholder
- Okrągły element z logo pizzy
- Stonowane kolory (beż, czerwony przytłumiony)

---

## Ton komunikacji

### Zasady
- Rzeczowy, edukacyjny
- Bez oceniania i krytyki
- "W klasycznej wersji używa się..." zamiast "Błędem jest używanie..."
- "Polska adaptacja często zawiera..." zamiast "W Polsce źle robią..."
- Szacunek dla różnych tradycji kulinarnych

### Przykłady
❌ "Niestety w Polsce pizza jest robiona źle"
✅ "Polska wersja różni się od włoskiego oryginału"

❌ "NIGDY nie używaj sera żółtego!"
✅ "Autentyczna wersja zawiera mozzarellę"

---

## Struktura sekcji w przewodniku po pizzach

1. **Opis** - co to za pizza, skąd pochodzi
2. **Autentyczne składniki** (zielona sekcja) - co zawiera klasyczna wersja
3. **Czego unikać** (czerwona sekcja) - składniki które nie pasują do tej pizzy
4. **Warianty i opcje** (złota/amber sekcja) - regionalne różnice, dopuszczalne modyfikacje
5. **Historia** - kontekst historyczny
6. **Wskazówki** - praktyczne tipy

---

## Struktura nawigacji

```
/ (Home)
├── /kalkulator
├── /ciasto
│   ├── /ciasto/zaczyny (poolish, biga, etc.)
│   └── /ciasto/parametry
├── /maki
│   ├── /maki/jak-czytac-parametry (intro przed listą)
│   └── /maki/[slug]
├── /przewodnik (pizze)
│   └── /przewodnik/[slug]
├── /skladniki
│   └── /skladniki/[slug]
└── /artykuly
    └── /artykuly/[slug]
```

---

## Komponenty

### Karty
- Minimalne zaokrąglenia (rounded-sm lub rounded)
- Cienka ramka (border border-stone-200)
- Brak lub minimalny cień
- Hover: subtelna zmiana tła lub ramki

### Przyciski
- Primary: czerwony, wypełniony
- Secondary: biały z ramką
- Minimalne zaokrąglenia
- Bez cieni

### Badges/Tagi
- **Okrągłe** (rounded-full) - nawiązanie do pizzy
- Małe, subtelne
- Stonowane kolory

### Sekcje informacyjne
- Lewa ramka jako akcent (border-l-4)
- Subtelne tło
- Bez zaokrągleń lub minimalne

---

## Changelog

### 2024-11-24
- Utworzenie style guide
- Definicja palety kolorów (włoskie kolory)
- Zasady typografii
- Zasady komunikacji (neutralny ton)
- Struktura nawigacji
