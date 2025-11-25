export const pizzas = [
  {
    id: 1,
    name: "Margherita",
    slug: "margherita",
    description: "Klasyczna pizza neapolitańska stworzona w 1889 roku dla królowej Margherity di Savoia. Kolory składników nawiązują do włoskiej flagi: czerwony (pomidor), biały (mozzarella), zielony (bazylia). To punkt odniesienia dla wszystkich pizz - prosta, ale wymagająca precyzji.",
    style: "napoletana",
    styleName: "Napoletana",
    authentic: {
      ingredients: [
        { name: "pomidory (passata lub pelati)", required: true },
        { name: "mozzarella fior di latte lub di bufala", required: true },
        { name: "świeża bazylia", required: true },
        { name: "oliwa z oliwek extra virgin", required: true },
        { name: "sól", required: true }
      ]
    },
    avoid: [
      {
        item: "ser żółty (gouda, cheddar, edamski)",
        note: "Autentyczna Margherita zawiera wyłącznie mozzarellę. Ser żółty daje zupełnie inny smak i teksturę."
      },
      {
        item: "oregano",
        note: "Oregano to składnik Marinara (pizzy bez sera). W Marghericie używa się świeżej bazylii."
      },
      {
        item: "czosnek",
        note: "Czosnek jest charakterystyczny dla Marinara. Margherita opiera się na prostocie trzech głównych składników."
      }
    ],
    optional: [
      {
        item: "parmezan",
        note: "W niektórych regionach dodawany na wierzch. Nie jest częścią klasycznej receptury, ale akceptowany jako wariant."
      },
      {
        item: "mozzarella di bufala zamiast fior di latte",
        note: "Premium opcja. Bufala ma bardziej kremową teksturę i intensywniejszy smak."
      }
    ],
    history: "Stworzona w 1889 roku przez pizzaiolo Raffaele Esposito z pizzerii Brandi w Neapolu. Pizza została przygotowana specjalnie dla królowej Margherity di Savoia podczas jej wizyty w Neapolu. Nazwa pochodzi od imienia królowej.",
    tips: [
      "Bazylię dodaj po wypieczeniu lub w ostatnich 30 sekundach - zachowa aromat i kolor",
      "Mozzarella bufala wymaga odsączenia i dodania pod koniec pieczenia",
      "Dobra oliwa jest kluczowa - jej smak jest wyraźnie wyczuwalny",
      "Im prostsza pizza, tym ważniejsza jakość każdego składnika"
    ],
    image_url: "/images/pizzas/margherita.jpg"
  },
  {
    id: 2,
    name: "Diavola",
    slug: "diavola",
    description: "Pizza z pikantnym włoskim salami. Nazwa pochodzi od 'diavolo' (diabeł), nawiązując do ostrości. Podstawą jest pomidor, mozzarella i salame piccante - tradycyjne włoskie pikantne salami.",
    style: "napoletana",
    styleName: "Napoletana / Romana",
    authentic: {
      ingredients: [
        { name: "pomidory", required: true },
        { name: "mozzarella", required: true },
        { name: "salame piccante", required: true },
        { name: "oliwa z oliwek", required: false }
      ]
    },
    avoid: [
      {
        item: "chorizo",
        note: "Chorizo to hiszpańska kiełbasa o innym profilu smakowym. Diavola tradycyjnie zawiera włoskie salame piccante."
      },
      {
        item: "kiełbasa krajana",
        note: "Polska kiełbasa ma zupełnie inną teksturę i smak niż włoskie salami."
      }
    ],
    optional: [
      {
        item: "pepperoni (amerykańskie)",
        note: "Pepperoni to amerykańska wersja pikantnego salami. Daje inny efekt - charakterystyczne 'miseczki' z tłuszczem."
      },
      {
        item: "świeże chili lub 'nduja",
        note: "W Kalabrii często dodaje się 'nduja (pastę z pikantnej kiełbasy) dla extra ostrości."
      },
      {
        item: "pikantna oliwa",
        note: "Oliwa z chili dodana po wypieczeniu wzmacnia ostrość."
      }
    ],
    history: "Popularna w całych Włoszech, choć każdy region ma własną wersję pikantnego salami. W Kalabrii używa się 'nduja, w Basilicacie - lucanica piccante. Nazwa nawiązuje do 'diabelskiej' ostrości.",
    tips: [
      "Salame piccante dodaj przed pieczeniem - tłuszcz wytopi się i przesiąknie do ciasta",
      "Im cieńsze plastry, tym bardziej chrupiące po wypieczeniu",
      "Świeże chili dodaj po wypieczeniu dla zachowania aromatu"
    ],
    image_url: "/images/pizzas/diavola.jpg"
  },
  {
    id: 3,
    name: "Capricciosa",
    slug: "capricciosa",
    description: "Capricciosa to jedna z najbardziej rozpoznawalnych pizz — zarówno we Włoszech, jak i w Polsce. U nas najczęściej kojarzy się z prostym zestawem: szynka i pieczarki, jednak klasyczna wersja jest bogatsza i zawiera składniki, które nadają jej charakterystyczny profil: karczochy, oliwki, pieczarki i szynkę cotto. Tradycyjnie układano je w osobnych 'ćwiartkach', choć obecnie często miesza się je na całej powierzchni.",
    style: "dowolny",
    styleName: "Dowolny — Capricciosę można przygotować na większości stylów ciasta, od neapolitańskiego, przez klasyczne, po New York czy Romaną Tondą.",
    authentic: {
      ingredients: [
        { name: "pomidory", required: true },
        { name: "mozzarella", required: true },
        { name: "prosciutto cotto (szynka gotowana)", required: true },
        { name: "pieczarki", required: true },
        { name: "karczochy (carciofi)", required: true },
        { name: "oliwki czarne", required: true },
        { name: "oliwa z oliwek", required: true }
      ]
    },
    avoid: [
      {
        item: "pominięcie karczocha",
        note: "Karczochy są jednym z kluczowych składników klasycznej Capricciosy. Bez nich powstaje inny profil smakowy."
      },
      {
        item: "zamiana całej kompozycji na 'szynka + pieczarki'",
        note: "To bardzo popularna wersja w polskich pizzeriach - smaczna, ale uproszczona i bardziej zbliżona do fungi niż do pełnej Capricciosy."
      }
    ],
    optional: [
      {
        item: "jajko na środku",
        note: "Spotykane głównie w północnych Włoszech. Nie jest klasyczną częścią oryginału, ale funkcjonuje jako lokalny wariant."
      },
      {
        item: "pieczarki z puszki vs świeże",
        note: "Obie wersje są akceptowane. Świeże dają bardziej puszysty smak, puszkowe są tradycyjniejsze i wygodniejsze."
      },
      {
        item: "prosciutto crudo zamiast cotto",
        note: "Niektóre regiony preferują szynkę surową dojrzewającą. Dodaje się ją po wypieczeniu."
      }
    ],
    history: "Capricciosa stała się popularna od lat 50. XX wieku. Tradycyjnie składniki układano w czterech osobnych 'ćwiartkach' — każdy składnik miał swoją część pizzy. Miało to symbolizować cztery różne 'kaprysy' kucharza. Dziś częściej miesza się składniki na całej powierzchni.",
    tips: [
      "Karczochy z puszki lub słoika warto dobrze odsączyć, żeby nie puszczały wody na pizzy",
      "Szynkę dodaj po upieczeniu lub przed końcem pieczenia, żeby nie wyschła",
      "Pieczarki świeże warto lekko podsmażyć przed dodaniem",
      "Klasyczna prezentacja 'po ćwiartce' nadal wygląda bardzo efektownie"
    ],
    image_url: "/images/pizzas/capricciosa.jpg"
  },
  {
    id: 4,
    name: "Marinara",
    slug: "marinara",
    description: "Najstarsza pizza neapolitańska - prostsza nawet od Margherity. Nie zawiera sera, tylko pomidory, czosnek, oregano i oliwę. Nazwa pochodzi od marynarzy (marinai), którzy ją jedli.",
    style: "napoletana",
    styleName: "Napoletana",
    authentic: {
      ingredients: [
        { name: "pomidory", required: true },
        { name: "czosnek", required: true },
        { name: "oregano (suszone)", required: true },
        { name: "oliwa z oliwek extra virgin", required: true },
        { name: "sól", required: true }
      ]
    },
    avoid: [
      {
        item: "mozzarella lub inny ser",
        note: "Marinara z definicji nie zawiera sera. Pizza z mozzarellą to już Margherita."
      },
      {
        item: "owoce morza",
        note: "Mimo nazwy kojarzącej się z morzem, Marinara nie zawiera owoców morza. Nazwa pochodzi od marynarzy."
      },
      {
        item: "bazylia",
        note: "Bazylia jest składnikiem Margherity. W Marinara używa się oregano - to kluczowa różnica między tymi pizzami."
      }
    ],
    optional: [
      {
        item: "anchois (sardele)",
        note: "W niektórych regionach dodaje się anchois. Podkreślają umami i morski charakter."
      },
      {
        item: "kapary",
        note: "Czasem dodawane razem z anchois."
      }
    ],
    history: "Najstarsza pizza neapolitańska, starsza od Margherity. Jedli ją marynarze - była tania, pożywna, a składniki nie psuły się szybko na morzu. Czosnek miał też działanie antyseptyczne.",
    tips: [
      "Czosnek pokrój w cienkie plastry i rozłóż równomiernie",
      "Oregano używaj suszone, nie świeże",
      "Dobra oliwa jest kluczowa - jej smak dominuje",
      "To świetna pizza na sprawdzenie jakości ciasta i pieca"
    ],
    image_url: "/images/pizzas/marinara.jpg"
  },
  {
    id: 5,
    name: "Quattro Formaggi",
    slug: "quattro-formaggi",
    description: "Pizza z czterema serami. Klasyczny zestaw to mozzarella, gorgonzola, fontina (lub taleggio) i parmezan. Może być bianca (bez pomidora) lub rossa (z pomidorem).",
    style: "napoletana",
    styleName: "Romana / Napoletana",
    authentic: {
      ingredients: [
        { name: "mozzarella", required: true },
        { name: "gorgonzola", required: true },
        { name: "fontina lub taleggio", required: true },
        { name: "parmezan (parmigiano reggiano)", required: true },
        { name: "pomidory (opcjonalnie)", required: false }
      ]
    },
    avoid: [
      {
        item: "ser topiony",
        note: "Wszystkie sery powinny być naturalne, nie przetworzone."
      },
      {
        item: "ser żółty typu gouda, edamski",
        note: "Tradycyjna Quattro Formaggi opiera się na włoskich serach o różnych charakterach."
      }
    ],
    optional: [
      {
        item: "inne włoskie sery",
        note: "Można eksperymentować z provolone, pecorino, czy stracchino - ważne, żeby sery się uzupełniały."
      },
      {
        item: "miód lub gruszka",
        note: "Popularny dodatek na koniec, szczególnie do wersji z dużą ilością gorgonzoli."
      },
      {
        item: "orzechy włoskie",
        note: "Dodają teksturę i uzupełniają serowy smak."
      }
    ],
    history: "Popularna w całych Włoszech. Idea polega na połączeniu czterech serów o różnych charakterach: kremowy, ostry, łagodny i twardy. Każdy region ma własne warianty.",
    tips: [
      "Gorgonzola jest intensywna - dawaj jej mniej niż innych serów",
      "Fontina i taleggio świetnie się topią",
      "Parmezan dodaj na końcu, nie przed pieczeniem",
      "Miód najlepiej smakuje z wersją bez pomidora (bianca)"
    ],
    image_url: "/images/pizzas/quattro-formaggi.jpg"
  }
];
