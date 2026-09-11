// Database of targeted European locations
const locationsDB = [
  // France
  { name: "Aéroport de Paris-Charles de Gaulle (CDG)", country: "FR", category: "Aéroport" },
  { name: "Aéroport de Paris-Orly (ORY)", country: "FR", category: "Aéroport" },
  { name: "Gare de Paris-Gare-de-Lyon", country: "FR", category: "Gare" },
  { name: "Gare Routière Paris Gallieni", country: "FR", category: "Gare Routière" },
  { name: "Tour Eiffel / Champ de Mars", country: "FR", category: "Lieu Emblématique" },
  { name: "Aéroport de Nice Côte d'Azur (NCE)", country: "FR", category: "Aéroport" },
  { name: "Gare de Marseille Saint-Charles", country: "FR", category: "Gare" },

  // Germany
  { name: "Flughafen Frankfurt am Main (FRA)", country: "DE", category: "Flughafen" },
  { name: "Flughafen München (MUC)", country: "DE", category: "Flughafen" },
  { name: "Berlin Hauptbahnhof", country: "DE", category: "Bahnhof" },
  { name: "ZOB Berlin Zentraler Omnibusbahnhof", country: "DE", category: "Busbahnhof" },
  { name: "Brandenburger Tor, Berlin", country: "DE", category: "Sehenswürdigkeit" },

  // Spain
  { name: "Aeropuerto Adolfo Suárez Madrid-Barajas (MAD)", country: "ES", category: "Aeropuerto" },
  { name: "Aeropuerto de Barcelona-El Prat (BCN)", country: "ES", category: "Aeropuerto" },
  { name: "Estación de Barcelona Sants", country: "ES", category: "Estación" },
  { name: "Estación del Norte, Valencia", country: "ES", category: "Estación" },
  { name: "La Sagrada Família, Barcelona", country: "ES", category: "Lugar Icónico" },

  // Italy
  { name: "Aeroporto di Roma-Fiumicino (FCO)", country: "IT", category: "Aeroporto" },
  { name: "Aeroporto di Milano-Malpensa (MXP)", country: "IT", category: "Aeroporto" },
  { name: "Stazione di Milano Centrale", country: "IT", category: "Stazione" },
  { name: "Stazione di Roma Termini", country: "IT", category: "Stazione" },
  { name: "Colosseo, Roma", country: "IT", category: "Luogo Iconico" }
];

// Translations and Dynamic Content per Country
const countryData = {
  FR: {
    bgImages: [
      "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?auto=format&fit=crop&w=1600&q=80"
    ],
    heroTitle: "VENTE MONDIALE : JUSQU'À 15% DE RÉDUCTION SUR VOTRE LOCATION",
    searchBoxHeading: "COMPARER LES TARIFS DE LOCATION",
    lblPickupLoc: "LIEU DE PRISE EN CHARGE :",
    lblDropoffLoc: "LIEU DE RESTITUTION :",
    lblPickupDate: "DATE DE DÉPART :",
    lblDropDate: "DATE DE RETOUR :",
    txtDriverAge: "Conducteur âgé de 30 à 65 ans",
    btnFindCar: "TROUVER UNE VOITURE >",
    partnersTitle: "NOS PARTENAIRES DE CONFIANCE",
    cityMainTitle: "LOCATION DE VOITURE À PARIS - VILLE LUMIÈRE",
    cityP1: "Imprégnée d'histoire, de joyaux culturels et architecturaux, Paris est une ville captivante. Pour une première visite, la Tour Eiffel demeure le symbole incontournable.",
    cityP2: "L'art occupe une place prépondérante avec des musées de renommée mondiale et la cathédrale Notre-Dame. Réservez votre voiture de location à Paris pour explorer également Lyon, Nice ou Marseille.",
    cityP3: "Avec plus de 70 ans d'expérience mondiale, EuropeXauto s'associe aux meilleurs loueurs pour vous garantir un service d'excellence au meilleur prix.",
    pickupTitle: "OÙ RETIRER VOTRE VOITURE DE LOCATION EN FRANCE",
    pickupIntro: "Retirez votre véhicule dans tous les grands aéroports, gares ferroviaires, gares routières et monuments emblématiques de France.",
    pickupSubAirports: "AÉROPORTS ET GARES DE PREMIER PLAN",
    pickupAirportsDetail: "Accès facile aux aéroports Charles de Gaulle (CDG), Orly (ORY), Beauvais, ainsi qu'aux gares principales (Gare de Lyon, Montparnasse) et gares routières.",
    reviews: [
      { name: "Catherine", text: "Toujours un plaisir de réserver avec vous. Jamais eu le moindre problème." },
      { name: "Angel", text: "Tout était parfait lors du retrait à l'aéroport." },
      { name: "Ronald", text: "Prise en charge très bien organisée. Impossible de faire plus simple." },
      { name: "Jean", text: "Processus très rapide et efficace. Rapport qualité-prix imbattable." }
    ],
    breadcrumbs: { country: "France", city: "Paris" }
  },
  DE: {
    bgImages: [
      "https://images.unsplash.com/photo-1587330979470-3595ac045ab0?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&w=1600&q=80"
    ],
    heroTitle: "WELTWEITER SALE: BIS ZU 15% RABATT AUF MIETWAGEN",
    searchBoxHeading: "MIETWAGENPREISE VERGLEICHEN",
    lblPickupLoc: "ABHOLORT:",
    lblDropoffLoc: "RÜCKGABEORT:",
    lblPickupDate: "ABHOLDATUM:",
    lblDropDate: "RÜCKGABEDATUM:",
    txtDriverAge: "Fahrer zwischen 30 und 65 Jahren",
    btnFindCar: "AUTO FINDEN >",
    partnersTitle: "UNSERE VERTRAUENSWOLLEN PARTNER",
    cityMainTitle: "MIETWAGEN IN BERLIN UND DEUTSCHLAND",
    cityP1: "Entdecken Sie Deutschland mit vollkommener Flexibilität. Von historischen Städten wie Berlin und München bis hin zu malerischen Autobahnen.",
    cityP2: "Buchen Sie Ihren Mietwagen an allen großen Flughäfen und Hauptbahnhöfen mit EuropeXauto.",
    cityP3: "Über 70 Jahre Erfahrung garantieren Ihnen den besten Service zum Spitzenpreis.",
    pickupTitle: "WO SIE IHREN MIETWAGEN IN DEUTSCHLAND ABHOLEN",
    pickupIntro: "Bequeme Abholstationen an allen großen Flughäfen, Hauptbahnhöfen und Busbahnhöfen in ganz Deutschland.",
    pickupSubAirports: "WICHTIGE FLUGHÄFEN UND BAHNHOFE",
    pickupAirportsDetail: "Direkter Service am Flughafen Frankfurt (FRA), Flughafen München (MUC), Berlin Hauptbahnhof und ZOB.",
    reviews: [
      { name: "Markus", text: "Ausgezeichneter Service in Berlin. Sehr schnelle Übergabe." },
      { name: "Stefanie", text: "Sehr gute Preise und erstklassige Betreuung." },
      { name: "Lukas", text: "Reibungslose Buchung und tolles Auto." },
      { name: "Hanna", text: "Sehr empfehlenswert für Reisen durch Deutschland." }
    ],
    breadcrumbs: { country: "Deutschland", city: "Berlin" }
  },
  ES: {
    bgImages: [
      "https://images.unsplash.com/photo-1539037116277-4db20889f2d4?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1511527656417-264678a3d9d6?auto=format&fit=crop&w=1600&q=80"
    ],
    heroTitle: "VENTA GLOBAL: HASTA UN 15% DE DESCUENTO EN ALQUILER DE COCHES",
    searchBoxHeading: "COMPARAR TARIFAS DE ALQUILER",
    lblPickupLoc: "LUGAR DE RECOGIDA:",
    lblDropoffLoc: "LUGAR DE DEVOLUCIÓN:",
    lblPickupDate: "FECHA DE RECOGIDA:",
    lblDropDate: "FECHA DE DEVOLUCIÓN:",
    txtDriverAge: "Conductor entre 30 y 65 años",
    btnFindCar: "BUSCAR COCHE >",
    partnersTitle: "NUESTROS SOCIOS DE CONFIANZA",
    cityMainTitle: "ALQUILER DE COCHES EN MADRID Y ESPAÑA",
    cityP1: "Explore España con total comodidad desde Madrid, Barcelona, Valencia o Sevilla.",
    cityP2: "Ofrecemos recogida en aeropuertos, estaciones de tren AVE y estaciones de autobuses principales.",
    cityP3: "Más de 70 años de experiencia garantizan las mejores ofertas y atención personalizada.",
    pickupTitle: "DÓNDE RECOGER SU COCHE EN ESPAÑA",
    pickupIntro: "Puntos de recogida estratégicos en aeropuertos principales, estaciones RENFE y paradas clave.",
    pickupSubAirports: "AEROPUERTOS Y ESTACIONES PRINCIPALES",
    pickupAirportsDetail: "Servicio disponible en Aeropuerto Madrid-Barajas, Barcelona El Prat, Estación de Sants y Atocha.",
    reviews: [
      { name: "Carlos", text: "Excelente atención al cliente en el aeropuerto de Madrid." },
      { name: "Elena", text: "Proceso rápido y sin sorpresas. Muy satisfechos." },
      { name: "Mateo", text: "El mejor comparador para viajar por España." },
      { name: "Lucía", text: "Coche impecable y recogida muy sencilla." }
    ],
    breadcrumbs: { country: "España", city: "Madrid" }
  },
  IT: {
    bgImages: [
      "https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1529260830199-42c24126f198?auto=format&fit=crop&w=1600&q=80"
    ],
    heroTitle: "VENDITA GLOBALE: FINO AL 15% DI SCONTO SUL NOLEGGIO AUTO",
    searchBoxHeading: "CONFRONTA LE TARIFFE DI NOLEGGIO",
    lblPickupLoc: "LUOGO DI RITIRO:",
    lblDropoffLoc: "LUOGO DI RICONSEGNA:",
    lblPickupDate: "DATA DI RITIRO:",
    lblDropDate: "DATA DI RICONSEGNA:",
    txtDriverAge: "Conducente di età compresa tra 30 e 65 anni",
    btnFindCar: "TROVA L'AUTO >",
    partnersTitle: "I NOSTRI PARTNER DI FIDUCIA",
    cityMainTitle: "NOLEGGIO AUTO A ROMA E IN ITALIA",
    cityP1: "Scopri le meraviglie d'Italia da Roma a Milano, Firenze e la Costiera Amalfitana.",
    cityP2: "Ritiro comodo presso tutti i principali aeroporti, stazioni ferroviarie e autostazioni.",
    cityP3: "Oltre 70 anni di esperienza per offrirti il miglior servizio al miglior prezzo.",
    pickupTitle: "DOVE RITIRARE LA TUA AUTO IN ITALIA",
    pickupIntro: "I nostri partner sono presenti in tutti i punti nevralgici delle città italiane.",
    pickupSubAirports: "AEROPORTI E STAZIONI PRINCIPALI",
    pickupAirportsDetail: "Servizio rapido all'Aeroporto di Roma Fiumicino, Milano Malpensa, Stazione Termini e Milano Centrale.",
    reviews: [
      { name: "Marco", text: "Servizio impeccabile a Roma Fiumicino." },
      { name: "Giulia", text: "Noleggio facile e veloce. Auto fantastica." },
      { name: "Alessandro", text: "Prezzi imbattibili e grande professionalità." },
      { name: "Sofia", text: "Consigliatissimo per viaggiare in tutta Italia." }
    ],
    breadcrumbs: { country: "Italia", city: "Roma" }
  }
};

let currentBgIndex = 0;
let currentCountry = "FR";
let slideshowInterval = null;

document.addEventListener("DOMContentLoaded", () => {
  initSlideshow();
  initCountrySelector();
  initAutocomplete();
  initAccordion();
  initPopups();
  renderReviews("FR");
});

// 5-Second Background Slideshow Logic
function initSlideshow() {
  const slider = document.getElementById("hero-slider");
  if (!slider) return;

  const images = countryData[currentCountry].bgImages;
  slider.style.backgroundImage = `linear-gradient(rgba(13, 35, 58, 0.65), rgba(13, 35, 58, 0.65)), url('${images[0]}')`;

  if (slideshowInterval) clearInterval(slideshowInterval);

  slideshowInterval = setInterval(() => {
    const imgs = countryData[currentCountry].bgImages;
    currentBgIndex = (currentBgIndex + 1) % imgs.length;
    slider.style.backgroundImage = `linear-gradient(rgba(13, 35, 58, 0.65), rgba(13, 35, 58, 0.65)), url('${imgs[currentBgIndex]}')`;
  }, 5000);
}

// Country Selector with 1-Second Page Reload Simulation
function initCountrySelector() {
  const select = document.getElementById("country-select");
  const loader = document.getElementById("country-loader");

  select.addEventListener("change", (e) => {
    const selectedCode = e.target.value;
    loader.style.display = "flex";

    setTimeout(() => {
      currentCountry = selectedCode;
      updatePageLanguage(selectedCode);
      initSlideshow();
      renderReviews(selectedCode);
      loader.style.display = "none";
    }, 1000);
  });
}

// Language Content Switcher
function updatePageLanguage(code) {
  const data = countryData[code];
  if (!data) return;

  document.getElementById("hero-title").innerText = data.heroTitle;
  document.getElementById("search-box-heading").innerText = data.searchBoxHeading;
  document.getElementById("lbl-pickup-loc").innerText = data.lblPickupLoc;
  document.getElementById("lbl-dropoff-loc").innerText = data.lblDropoffLoc;
  document.getElementById("lbl-pickup-date").innerText = data.lblPickupDate;
  document.getElementById("lbl-drop-date").innerText = data.lblDropDate;
  document.getElementById("txt-driver-age").innerText = data.txtDriverAge;
  document.getElementById("btn-submit-search").innerText = data.btnFindCar;
  document.getElementById("txt-partners-title").innerText = data.partnersTitle;

  document.getElementById("city-main-title").innerText = data.cityMainTitle;
  document.getElementById("city-p1").innerText = data.cityP1;
  document.getElementById("city-p2").innerText = data.cityP2;
  document.getElementById("city-p3").innerText = data.cityP3;

  document.getElementById("pickup-title").innerText = data.pickupTitle;
  document.getElementById("pickup-intro").innerText = data.pickupIntro;
  document.getElementById("pickup-sub-airports").innerText = data.pickupSubAirports;
  document.getElementById("pickup-airports-detail").innerText = data.pickupAirportsDetail;

  document.getElementById("breadcrumb-country").innerText = data.breadcrumbs.country;
  document.getElementById("breadcrumb-city").innerText = data.breadcrumbs.city;
}

// Render Reviews Based on Selected Country
function renderReviews(code) {
  const container = document.getElementById("reviews-grid");
  if (!container) return;

  const reviews = countryData[code].reviews;
  container.innerHTML = "";

  reviews.forEach(rev => {
    const card = document.createElement("div");
    card.className = "review-card";
    card.innerHTML = `
      <div class="stars">★★★★★</div>
      <p class="review-text">"${rev.text}"</p>
      <p class="review-author">- ${rev.name}</p>
    `;
    container.appendChild(card);
  });
}

// Location Autocomplete Search
function initAutocomplete() {
  const input = document.getElementById("pickup-location");
  const list = document.getElementById("suggestions-list");

  if (!input || !list) return;

  input.addEventListener("input", () => {
    const query = input.value.toLowerCase().trim();
    list.innerHTML = "";

    if (query.length < 1) {
      list.style.display = "none";
      return;
    }

    const matches = locationsDB.filter(loc =>
      loc.name.toLowerCase().includes(query) || loc.category.toLowerCase().includes(query)
    );

    if (matches.length > 0) {
      matches.forEach(loc => {
        const li = document.createElement("li");
        li.innerHTML = `<span>${loc.name}</span> <span class="badge">${loc.category}</span>`;
        li.addEventListener("click", () => {
          input.value = loc.name;
          list.style.display = "none";
        });
        list.appendChild(li);
      });
      list.style.display = "block";
    } else {
      list.style.display = "none";
    }
  });

  document.addEventListener("click", (e) => {
    if (!input.contains(e.target) && !list.contains(e.target)) {
      list.style.display = "none";
    }
  });
}

// Accordion (+ / - Toggle) FAQ Logic
function initAccordion() {
  const headers = document.querySelectorAll(".accordion-header");

  headers.forEach(header => {
    header.addEventListener("click", () => {
      const item = header.parentElement;
      const isOpen = item.classList.contains("active");

      // Close all accordion items
      document.querySelectorAll(".accordion-item").forEach(i => {
        i.classList.remove("active");
        i.querySelector(".faq-icon").innerText = "+";
      });

      // Toggle clicked item
      if (!isOpen) {
        item.classList.add("active");
        header.querySelector(".faq-icon").innerText = "−";
      }
    });
  });
}

// Pop-up Triggering Logic (Partner Logos & Search Form Submit)
function initPopups() {
  const modal = document.getElementById("phone-modal");
  const closeModal = document.querySelector(".close-modal");
  const spinner = document.getElementById("modal-spinner");
  const phoneDetails = document.getElementById("modal-phone-details");
  const searchForm = document.getElementById("rental-search-form");
  const partnerLogos = document.querySelectorAll(".partner-logo");

  function triggerModal() {
    modal.style.display = "block";
    spinner.style.display = "block";
    phoneDetails.style.display = "none";

    setTimeout(() => {
      spinner.style.display = "none";
      phoneDetails.style.display = "block";
    }, 1000);
  }

  if (searchForm) {
    searchForm.addEventListener("submit", (e) => {
      e.preventDefault();
      triggerModal();
    });
  }

  partnerLogos.forEach(logo => {
    logo.addEventListener("click", () => {
      triggerModal();
    });
  });

  closeModal.addEventListener("click", () => {
    modal.style.display = "none";
  });

  window.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  });
}
