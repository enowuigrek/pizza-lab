# Pizza Lab - Style Guide

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
- **Minimalne**: preferujemy ostre krawędzie lub brak zaokrągleń
- **Wyjątek**: elementy okrągłe/koliste nawiązujące do pizzy (badges, avatary, ikony)

### Koła (nawiązanie do pizzy)
- Używamy kół gdzie to możliwe:
  - Okrągłe badges/tagi
  - Okrągłe elementy dekoracyjne
  - Okrągłe wskaźniki/bulletsy

### Cienie
- Minimalne lub bez cieni - preferujemy ramki
- Używamy border zamiast shadow

### Ramki
- Preferujemy cienkie ramki (border) zamiast cieni
- Szczególnie lewa ramka jako akcent (border-l-4)

---

## Ikony i grafika

### Zasady
- **Emoji dopuszczalne** jako ikony dla pizz (🇮🇹 🌶️ 🍄 ⚓ 🧀) i flagi 🇮🇹 🇵🇱
- Logo pizzy jako placeholder gdy brak zdjęcia
- Proste, liniowe ikony jeśli potrzebne (Lucide, Heroicons outline)
- Zdjęcia: wysokiej jakości, naturalne kolory

### Placeholder
- Okrągły element z logo pizzy
- Stonowane kolory (beż, czerwony przytłumiony)

---

## Komponenty

### Karty
- Brak zaokrągleń (ostre krawędzie)
- Cienka ramka (border border-stone-200)
- Brak cieni
- Hover: subtelna zmiana ramki (border-stone-300)

### Przyciski
- Primary: czerwony, wypełniony
- Secondary: biały z ramką
- Brak zaokrągleń
- Bez cieni

### Badges/Tagi
- **Okrągłe** (rounded-full) - nawiązanie do pizzy
- Małe, subtelne
- Stonowane kolory

### Sekcje informacyjne
- Lewa ramka jako akcent (border-l-4)
- Subtelne tło
- Bez zaokrągleń

### Sekcje rozwijane (Collapsible)
- Bez zaokrągleń
- Cienka ramka
- Przycisk + lub − do rozwijania
- Hover: subtelne tło (bg-stone-100)

---

## Changelog

### 2025-11-25
- Aktualizacja zasad emoji - dopuszczalne jako ikony dla pizz

### 2024-11-24
- Utworzenie style guide
- Definicja palety kolorów (włoskie kolory)
- Zasady typografii
- Usunięcie zaokrągleń z kart
- Dodanie sekcji rozwijanych
- Przeniesienie notatek biznesowych do PROJECT_NOTES.md
