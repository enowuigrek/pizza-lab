# Pizza Lab - Notatki projektowe

## Filozofia projektu
Pizza Lab to polska platforma wiedzy o pizzy. Prezentujemy informacje rzeczowo, bez oceniania.
Opisujemy różnice między wersjami autentycznymi a lokalnymi adaptacjami - nie krytykujemy, edukujemy.

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
│   ├── /ciasto/maki
│   ├── /ciasto/style
│   └── /ciasto/techniki
├── /skladniki (toppingi)
│   ├── /skladniki/:category
│   └── /skladniki/:category/:slug
├── /klasyczne-pizze (przewodnik po pizzach)
│   └── /klasyczne-pizze/:slug
├── /moje-wariacje
├── /artykuly
│   └── /artykuly/:slug
└── /o-mnie

Legacy redirects:
- /przewodnik → /klasyczne-pizze
- /toppingi → /skladniki
```

---

## Sekcje platformy

### 1. Ciasto
- Kalkulator ciasta (z poolish, biga, direct)
- Baza mąk (Caputo, 5 Stagioni, etc.)
- Style ciasta (Napoletana, Romana, New York, etc.)
- Techniki (poolish, biga, autolyza, balling)

### 2. Składniki (Toppingi)
- Przewodnik po składnikach
- Kategorie: sery, pomidory, mięso, warzywa, oleje
- Szczegółowe opisy składników

### 3. Klasyczne Pizze (Przewodnik)
- Przewodnik po pizzach (Margherita, Diavola, Capricciosa, etc.)
- Historie pizz
- Autentyczne przepisy
- Częste uproszczenia i błędy

### 4. Moje Wariacje
- Autorskie przepisy
- Eksperymenty
- Niekonwencjonalne podejścia

### 5. Artykuły
- Porady i wskazówki
- Techniki pieczenia
- Testy i porównania
- Filozofia pizzy
