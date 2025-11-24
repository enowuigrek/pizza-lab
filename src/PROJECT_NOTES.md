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
│   ├── /maki (włączone w ciasto)
│   └── /kalkulator (włączony w ciasto)
├── /toppingi
│   ├── /skladniki (włączone w toppingi)
│   └── /toppingi/[slug]
├── /przewodnik (pizze)
│   └── /przewodnik/[slug]
└── /artykuly
    └── /artykuly/[slug]
```

---

## Sekcje platformy

### 1. Ciasto
- Kalkulator ciasta
- Baza mąk
- Parametry mąki
- Zaczyny (poolish, biga)

### 2. Toppingi
- Przewodnik po składnikach
- Kategorie: sery, pomidory, mięso, warzywa, oleje

### 3. Przewodnik
- Przewodnik po pizzach
- Historie pizz
- Autentyczne przepisy

### 4. Artykuły
- Porady i wskazówki
- Techniki pieczenia
- Historia pizzy
