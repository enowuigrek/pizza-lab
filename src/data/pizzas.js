export const pizzas = [
  {
    id: 1,
    name: "Margherita",
    slug: "margherita",
    authentic: {
      description: "Klasyczna pizza neapolitanska: pomidor, mozzarella, bazylia, oliwa z oliwek. Punkt odniesienia dla wszystkich pizz.",
      ingredients: {
        "pomidory (passata lub pelati)": { required: true, authentic: true },
        "mozzarella (fior di latte lub bufala)": { required: true, authentic: true },
        "swieza bazylia": { required: true, authentic: true },
        "oliwa z oliwek extra virgin": { required: true, authentic: true },
        "sol": { required: true, authentic: true }
      }
    },
    misconceptions: [
      {
        item: "ser zolty (gouda, cheddar, edamski)",
        status: "wrong",
        note: "NIGDY! Margherita = tylko mozzarella. Ser zolty zmienia smak i teksture calkowicie."
      },
      {
        item: "oregano",
        status: "wrong",
        note: "Oregano NIE jest w Marghericie, tylko bazylia. Oregano jest w Marinara (bez sera)."
      },
      {
        item: "czosnek",
        status: "wrong",
        note: "Czosnek jest w Marinara, nie w Marghericie. To dwie rozne pizze!"
      },
      {
        item: "parmezan posypany na wierzchu",
        status: "regional",
        note: "Nie jest w klasycznej wersji, ale niektorzy dodaja. Opcjonalne, nie wymagane."
      }
    ],
    history: "Stworzona w 1889 roku przez pizzaiolo Raffaele Esposito dla krolowej Margherity di Savoia. Kolory: czerwony (pomidor), bialy (mozzarella), zielony (bazylia) = flaga Wloch. Najprostsza, ale najtrudniejsza do perfekcji - nie ma sie gdzie ukryc.",
    tips: "Bazylie dodaj PO wypieczeniu lub w ostatnich 30 sekundach pieczenia - wtedy zachowa aromat. Mozzarella bufala jest premium opcja, dodaj ja na koniec (30-60 sek przed koncem) zeby nie wyschla.",
    image_url: "/images/pizzas/margherita.jpg"
  },
  {
    id: 2,
    name: "Diavola",
    slug: "diavola",
    authentic: {
      description: "Pizza z pikantnym salami. Podstawa: pomidor, mozzarella, salame piccante (wloskie pikantne salami).",
      ingredients: {
        "pomidory": { required: true, authentic: true },
        "mozzarella": { required: true, authentic: true },
        "salame piccante (wloskie pikantne salami)": { required: true, authentic: true },
        "oliwa (opcjonalnie pikantna)": { required: false, authentic: true },
        "swieze chili (opcjonalnie)": { required: false, authentic: true }
      }
    },
    misconceptions: [
      {
        item: "dowolne pikantne skladniki",
        status: "partial",
        note: "Diavola = konkretnie salame piccante, nie 'wszystko co ostre'. Mozna dodac chili, ale base to salami."
      },
      {
        item: "papryczki jalapeno",
        status: "acceptable",
        note: "Mozna dodac dla extra ostrosci, ale nie sa wymagane w klasycznej wersji. Bardziej amerykanski twist."
      },
      {
        item: "pikantna kielbasa/chorizo",
        status: "wrong",
        note: "To nie to samo co salame piccante. Kielbasa ma inna teksture i smak."
      },
      {
        item: "pepperoni (amerykanskie)",
        status: "different",
        note: "Pepperoni ≠ salame piccante. Rozne produkty, rozne pizze."
      }
    ],
    history: "Nazwa od 'diavolo' (diabel) = ostra. Popularna w calych Wloszech, kazdy region ma swoja wersje salame. W Kalabrii uzywaja 'nduja (pasta z pikantnej kielbasy).",
    tips: "Salame piccante dodaj PRZED pieczeniem - tluszcz sie wytopi i przesiaknie do ciasta (to jest dobre!). Jak chcesz MEGA ostrosci, dodaj swieze chili lub pikantna oliwe na koniec.",
    image_url: "/images/pizzas/diavola.jpg"
  },
  {
    id: 3,
    name: "Capricciosa",
    slug: "capricciosa",
    authentic: {
      description: "Bogata pizza z szynka, pieczarkami, karczohem i oliwkami. 'Capriccio' = kaprys, whim.",
      ingredients: {
        "pomidory": { required: true, authentic: true },
        "mozzarella": { required: true, authentic: true },
        "szynka (prosciutto cotto - gotowana)": { required: true, authentic: true },
        "pieczarki swieze lub konserwowe": { required: true, authentic: true },
        "karczoch (carciofi)": { required: true, authentic: true },
        "oliwki czarne": { required: true, authentic: true },
        "oliwa z oliwek": { required: false, authentic: true }
      }
    },
    misconceptions: [
      {
        item: "brak karczocha",
        status: "wrong",
        note: "To NAJWIEKSZY blad w Polsce! Karczoch jest KLUCZOWY w autentycznej Capricciosa. Bez niego to po prostu 'pizza z szynka i pieczarkami'."
      },
      {
        item: "tylko szynka + pieczarki",
        status: "wrong",
        note: "To jest drastyczne uproszczenie. Brakuje karczocha (najwazniejsze!) i oliwek."
      },
      {
        item: "jajko na srodku",
        status: "regional",
        note: "W niektorych regionach Wloch dodaja jajko, ale NIE jest standardem. Raczej osobna wersja."
      },
      {
        item: "pieczarki z puszki zatopione w wodzie",
        status: "acceptable",
        note: "Mozna, ale lepiej swieze podsmazone lub wysokiej jakosci konserwowe w oleju."
      }
    ],
    history: "Nazwa od 'capriccio' (kaprys) = bogata w skladniki, kaprys szefa kuchni. Popularna od lat 50. XX wieku. Tradycyjnie skladniki uklada sie 'po cwiartce' (kazdy skladnik w swojej cwiartce pizzy).",
    tips: "Karczoch uzyj z puszki/sloika (sott'olio - w oleju), swiezy wymaga dlugiego przygotowania. Szynke dodaj w polowie pieczenia lub po (zeby nie wyschla). Mozesz ulozyc skladniki 'po cwiartce' dla tradycyjnej prezentacji.",
    image_url: "/images/pizzas/capricciosa.jpg"
  },
  {
    id: 4,
    name: "Marinara",
    slug: "marinara",
    authentic: {
      description: "Najstarsza pizza neapolitanska - BEZ sera! Pomidory, czosnek, oregano, oliwa. Prosta jak morze.",
      ingredients: {
        "pomidory": { required: true, authentic: true },
        "czosnek": { required: true, authentic: true },
        "oregano": { required: true, authentic: true },
        "oliwa z oliwek extra virgin": { required: true, authentic: true },
        "sol": { required: true, authentic: true }
      }
    },
    misconceptions: [
      {
        item: "mozzarella lub jakikolwiek ser",
        status: "wrong",
        note: "Marinara NIE MA sera! To jest jej definicja. Pizza z mozzarella to juz Margherita."
      },
      {
        item: "owoce morza",
        status: "wrong",
        note: "Marinara NIE oznacza 'z owocami morza'. Nazwa pochodzi od marynarzy, ktorzy ja jedli."
      },
      {
        item: "bazylia",
        status: "wrong",
        note: "Bazylia jest w Marghericie. W Marinara jest oregano. To kluczowa roznica!"
      }
    ],
    history: "Najstarsza pizza neapolitanska, starsza niz Margherita. Nazwa od marynarzy (marinai), ktorzy ja jedli - tania, pozywna, bez skladnikow ktore sie psuja na morzu. Czosnek dziala antyseptycznie.",
    tips: "Czosnek pokroj w plastry i rozloz rownomiernie - nie dawaj calych zabkow. Oregano susz, nie swiezy. Dobra oliwa jest kluczowa - czujesz jej smak.",
    image_url: "/images/pizzas/marinara.jpg"
  },
  {
    id: 5,
    name: "Quattro Formaggi",
    slug: "quattro-formaggi",
    authentic: {
      description: "Pizza z czterema serami. Klasycznie: mozzarella, gorgonzola, fontina/taleggio, parmezan. Bianca (bez pomidora) lub rossa.",
      ingredients: {
        "mozzarella": { required: true, authentic: true },
        "gorgonzola": { required: true, authentic: true },
        "fontina lub taleggio": { required: true, authentic: true },
        "parmezan": { required: true, authentic: true },
        "pomidory (opcjonalnie)": { required: false, authentic: true }
      }
    },
    misconceptions: [
      {
        item: "dowolne 4 sery",
        status: "partial",
        note: "Teoretycznie mozna, ale klasyczna wersja ma swoj zestaw. Cheddar czy gouda to juz nie to."
      },
      {
        item: "ser zolty typu gouda/edamski",
        status: "wrong",
        note: "To nie sa wloskie sery! Quattro Formaggi uzywano wloskich serow o roznych charakterach."
      },
      {
        item: "ser topiony",
        status: "wrong",
        note: "Sery maja byc naturalne, nie przetworzone."
      }
    ],
    history: "Popularna w calych Wloszech, kazdy region ma swoja wersje. Idea: 4 sery o roznych charakterach - kremowy, ostry, lagodny, twardy.",
    tips: "Gorgonzola jest mocna - daj mniej. Fontina sie super topi. Parmezan dodaj na koniec, nie przed pieczeniem. Mozesz dodac miod lub gruszke na koniec dla kontrastu.",
    image_url: "/images/pizzas/quattro-formaggi.jpg"
  }
];
