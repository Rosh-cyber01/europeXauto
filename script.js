/* LOCATION DATA & BACKGROUND ICONS */
const locationData = {
  milan: { name: "Milan", country: "Italy", lang: "it", bgIcon: "https://images.unsplash.com/photo-1513581166391-887a96ddeafd?auto=format&fit=crop&w=1200&q=80" },
  munich: { name: "Munich", country: "Germany", lang: "de", bgIcon: "https://images.unsplash.com/photo-1595867818082-083862f3d630?auto=format&fit=crop&w=1200&q=80" },
  lisbon: { name: "Lisbon", country: "Portugal", lang: "pt", bgIcon: "https://images.unsplash.com/photo-1503917988258-f87a78e3c995?auto=format&fit=crop&w=1200&q=80" },
  paris: { name: "Paris", country: "France", lang: "fr", bgIcon: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1200&q=80" },
  barcelona: { name: "Barcelona", country: "Spain", lang: "es", bgIcon: "https://images.unsplash.com/photo-1539037116277-4db20889f2d4?auto=format&fit=crop&w=1200&q=80" },
  athens: { name: "Athens", country: "Greece", lang: "el", bgIcon: "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=1200&q=80" },
  amsterdam: { name: "Amsterdam", country: "Netherlands", lang: "nl", bgIcon: "https://images.unsplash.com/photo-1512470876302-972faa2aa9a4?auto=format&fit=crop&w=1200&q=80" },
  italy: { name: "Italy", country: "Italy", lang: "it", bgIcon: "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=1200&q=80" },
  france: { name: "France", country: "France", lang: "fr", bgIcon: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1200&q=80" },
  spain: { name: "Spain", country: "Spain", lang: "es", bgIcon: "https://images.unsplash.com/photo-1539037116277-4db20889f2d4?auto=format&fit=crop&w=1200&q=80" },
  portugal: { name: "Portugal", country: "Portugal", lang: "pt", bgIcon: "https://images.unsplash.com/photo-1503917988258-f87a78e3c995?auto=format&fit=crop&w=1200&q=80" },
  germany: { name: "Germany", country: "Germany", lang: "de", bgIcon: "https://images.unsplash.com/photo-1595867818082-083862f3d630?auto=format&fit=crop&w=1200&q=80" },
  greece: { name: "Greece", country: "Greece", lang: "el", bgIcon: "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=1200&q=80" },
  usa: { name: "USA", country: "USA", lang: "en", bgIcon: "https://images.unsplash.com/photo-1506146332389-18140dc7b2fb?auto=format&fit=crop&w=1200&q=80" }
};

/* TRANSLATIONS DATA */
const translations = {
  en: {
    customerCare: "CUSTOMER CARE",
    navDeals: "Deals", navDestinations: "Destinations", navReviews: "Reviews", navWhy: "Why Us", navContact: "Contact",
    heroTitle: "Compare Car Rental Deals Across Europe",
    heroSubtitle: "Find the right car at the right price from leading rental companies.",
    pickupLocation: "Pick-up Location", dropoffLocation: "Drop-off Location", differentDropoff: "Return car to a different location",
    pickupDate: "Pick-up Date", returnDate: "Return Date", driverAge: "Driver Age", searchCars: "SEARCH CARS",
    whyBook: "Why Book With Us", why1: "Compare companies for the best rates", why2: "Free cancellation up to 48hrs before Pick-up", why3: "No credit card fees", why4: "Available 7 days a week", why5: "28,000 Pick-up locations worldwide",
    topCities: "GREAT DEALS IN TOP CITIES", popularCountries: "BEST RATES IN POPULAR COUNTRIES", topDestinations: "TOP DESTINATIONS", company: "COMPANY",
    priceNote: "*Rates shown are per day, based upon a 7-day rental. Taxes and additional surcharges may apply."
  },
  fr: {
    customerCare: "SERVICE CLIENT",
    navDeals: "Offres", navDestinations: "Destinations", navReviews: "Avis", navWhy: "Pourquoi Nous", navContact: "Contact",
    heroTitle: "Comparez les offres de location de voitures en Europe",
    heroSubtitle: "Trouvez la bonne voiture au meilleur prix auprès des grands loueurs.",
    pickupLocation: "Lieu de prise en charge", dropoffLocation: "Lieu de restitution", differentDropoff: "Restituer dans un autre lieu",
    pickupDate: "Date de départ", returnDate: "Date de retour", driverAge: "Âge du conducteur", searchCars: "RECHERCHER",
    whyBook: "Pourquoi réserver chez nous", why1: "Meilleurs tarifs garantis", why2: "Annulation gratuite 48h avant", why3: "Pas de frais de carte", why4: "Service 7/7j", why5: "28 000 agences dans le monde",
    topCities: "MEILLEURES OFFRES PAR VILLE", popularCountries: "MEILLEURS TARIFS PAR PAYS", topDestinations: "DESTINATIONS POPULAIRES", company: "ENTREPRISE",
    priceNote: "*Tarifs par jour basés sur une location de 7 jours."
  },
  it: {
    customerCare: "ASSISTENZA CLIENTI",
    navDeals: "Offerte", navDestinations: "Destinazioni", navReviews: "Recensioni", navWhy: "Perché Noi", navContact: "Contatti",
    heroTitle: "Confronta il noleggio auto in Europa",
    heroSubtitle: "Trova l'auto ideale al miglior prezzo.",
    pickupLocation: "Luogo di ritiro", dropoffLocation: "Luogo di riconsegna", differentDropoff: "Riconsegna in un altro luogo",
    pickupDate: "Data di ritiro", returnDate: "Data di riconsegna", driverAge: "Età del guidatore", searchCars: "CERCA AUTO",
    whyBook: "Perché prenotare con noi", why1: "Confronta le migliori tariffe", why2: "Cancellazione gratuita fino a 48 ore", why3: "Nessun costo carta", why4: "Disponibile 7 giorni su 7", why5: "28.000 punti di ritiro nel mondo",
    topCities: "OFFERTE NELLE CITTÀ", popularCountries: "TARIFFE NEI PAESI", topDestinations: "DESTINAZIONI", company: "AZIENDA",
    priceNote: "*Tariffe giornaliere basate su noleggio di 7 giorni."
  },
  de: {
    customerCare: "KUNDENSERVICE",
    navDeals: "Angebote", navDestinations: "Ziele", navReviews: "Bewertungen", navWhy: "Warum Wir", navContact: "Kontakt",
    heroTitle: "Mietwagenangebote in Europa vergleichen",
    heroSubtitle: "Finden Sie das passende Fahrzeug zum besten Preis.",
    pickupLocation: "Abholort", dropoffLocation: "Rückgabeort", differentDropoff: "An anderem Ort zurückgeben",
    pickupDate: "Abholdatum", returnDate: "Rückgabedatum", driverAge: "Fahreralter", searchCars: "FAHRZEUGE SUCHEN",
    whyBook: "Warum bei uns buchen", why1: "Anbieter vergleichen & sparen", why2: "Kostenlose Stornierung bis 48 Std.", why3: "Keine Kreditkartengebühren", why4: "7 Tage die Woche erreichbar", why5: "28.000 Stationen weltweit",
    topCities: "TOP STÄDTE ANGEBOTE", popularCountries: "BELIEBTE LÄNDER PREISE", topDestinations: "TOP REISEZIELE", company: "UNTERNEHMEN",
    priceNote: "*Tagespreise basierend auf 7 Tagen Mietdauer."
  },
  es: {
    customerCare: "ATENCIÓN AL CLIENTE",
    navDeals: "Ofertas", navDestinations: "Destinos", navReviews: "Reseñas", navWhy: "Por Qué Elegirnos", navContact: "Contacto",
    heroTitle: "Compara coches de alquiler en Europa",
    heroSubtitle: "Encuentra el coche adecuado al mejor precio.",
    pickupLocation: "Lugar de recogida", dropoffLocation: "Lugar de devolución", differentDropoff: "Devolver en otro lugar",
    pickupDate: "Fecha de recogida", returnDate: "Fecha de devolución", driverAge: "Edad del conductor", searchCars: "BUSCAR COCHES",
    whyBook: "Por qué reservar con nosotros", why1: "Compara tarifas al instante", why2: "Cancelación gratis hasta 48h antes", why3: "Sin comisiones por tarjeta", why4: "Atención 7 días a la semana", why5: "28.000 puntos de recogida",
    topCities: "OFERTAS EN CIUDADES", popularCountries: "TARIFAS POR PAÍS", topDestinations: "DESTINOS PRINCIPALES", company: "COMPAÑÍA",
    priceNote: "*Precios por día basados en alquiler de 7 días."
  }
};

/* COUNTRY-SPECIFIC REVIEWS */
const countryReviews = {
  france: [
    { text: "Super smooth pick-up at CDG Airport in Paris. Car was spotless!", author: "PIERRE M." },
    { text: "Auto Europe is reliable. Got a neat Renault Clio for our road trip.", author: "SOPHIE T." }
  ],
  italy: [
    { text: "Excellent experience driving around Milan and Tuscany!", author: "MARCO R." },
    { text: "Fast desk service and hassle-free return in Rome.", author: "LUCIA B." }
  ],
  germany: [
    { text: "Flawless autobahn cruiser from Munich station. Very satisfied.", author: "HANS W." },
    { text: "Great pricing for 10 days rental across Germany.", author: "GRETA K." }
  ],
  default: [
    { text: "Everything ran smoothly! Saved over €100 compared to local desks.", author: "MARIA MARTA" },
    { text: "Easy booking and excellent customer support 7 days a week.", author: "MICHAEL K." }
  ]
};

/* EVENT HANDLERS & INTERACTION */
document.addEventListener("DOMContentLoaded", () => {
  renderReviews('default');

  const diffDropoff = document.getElementById("differentDropoff");
  const dropoffField = document.getElementById("dropoffField");

  diffDropoff.addEventListener("change", (e) => {
    dropoffField.style.display = e.target.checked ? "flex" : "none";
  });
});

function selectLocation(key) {
  const item = locationData[key];
  if (!item) return;

  // 1. Set input value
  document.getElementById("pickupLocation").value = item.name + ", " + item.country;

  // 2. Change dynamic Hero Background Image
  const hero = document.getElementById("heroSection");
  hero.style.backgroundImage = `url('${item.bgIcon}')`;

  // 3. Switch Language
  const langKey = item.lang && translations[item.lang] ? item.lang : 'en';
  applyLanguage(langKey);

  // 4. Load region-specific reviews
  const reviewKey = item.country.toLowerCase();
  renderReviews(countryReviews[reviewKey] ? reviewKey : 'default');

  // Smooth scroll up to search box
  hero.scrollIntoView({ behavior: 'smooth' });
}

function applyLanguage(lang) {
  const dict = translations[lang] || translations.en;
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (dict[key]) {
      if (el.tagName === "INPUT" && el.type === "submit") {
        el.value = dict[key];
      } else {
        el.textContent = dict[key];
      }
    }
  });
}

function renderReviews(countryKey) {
  const reviews = countryReviews[countryKey] || countryReviews.default;
  const container = document.getElementById("reviewsContainer");
  container.innerHTML = "";

  reviews.forEach(rev => {
    const card = document.createElement("div");
    card.className = "review-card";
    card.innerHTML = `
      <div class="stars">★★★★★</div>
      <p>"${rev.text}"</p>
      <span>${rev.author}</span>
    `;
    container.appendChild(card);
  });
}

/* API DATA EXPORT FOR LOCATIONS & CITIES */
window.autoEuropeAPI = {
  getLocations: () => locationData,
  searchLocations: (query) => {
    const q = query.toLowerCase();
    return Object.values(locationData).filter(loc => 
      loc.name.toLowerCase().includes(q) || loc.country.toLowerCase().includes(q)
    );
  }
};
