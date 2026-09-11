// 1. Language & Cultural Dictionary
const locales = {
  us: {
    country: "United States",
    flag: "🇺🇸",
    nav: { home: "Home", fleet: "Fleet", search: "Search Cars", faq: "FAQ" },
    heroTitle: "Rent a Car Worldwide",
    heroSubtitle: "Book directly with top European and international providers at cheap rates.",
    searchWidget: { pickup: "Pick-up Location", pickupDate: "Pick-up Date", returnDate: "Return Date", btn: "Search Cars" },
    fleetTitle: "Featured Vehicles",
    cars: [
      { name: "Economy Compact", price: "$29 / day", img: "https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?w=500&q=80" },
      { name: "Executive Sedan", price: "$55 / day", img: "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=500&q=80" },
      { name: "Full-Size SUV", price: "$75 / day", img: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=500&q=80" }
    ],
    faqTitle: "Frequently Asked Questions",
    faqs: [
      { q: "What do I need to rent a car?", a: "You need a valid driver's license, a credit card in your name, and to be at least 21 years old." },
      { q: "Are security deposits required?", a: "Yes, a security deposit is held on your primary credit card during the rental period." }
    ],
    bookBtn: "Book Now"
  },
  de: {
    country: "Deutschland",
    flag: "🇩🇪",
    nav: { home: "Startseite", fleet: "Fahrzeuge", search: "Mietwagen Suchen", faq: "FAQ" },
    heroTitle: "Mieten Sie Ihr perfektes Auto",
    heroSubtitle: "Flexible Buchung, kostenlose Stornierung und beste Preise garantiert.",
    searchWidget: { pickup: "Abholort", pickupDate: "Abholdatum", returnDate: "Rückgabedatum", btn: "Auto Suchen" },
    fleetTitle: "Unsere Fahrzeugflotte",
    cars: [
      { name: "Kompaktklasse", price: "27 € / Tag", img: "https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?w=500&q=80" },
      { name: "Oberklasse Limousine", price: "50 € / Tag", img: "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=500&q=80" },
      { name: "Premium SUV", price: "70 € / Tag", img: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=500&q=80" }
    ],
    faqTitle: "Häufig gestellte Fragen (FAQ)",
    faqs: [
      { q: "Was benötige ich, um ein Auto zu mieten?", a: "Sie benötigen einen gültigen Führerschein, eine Kreditkarte auf Ihren Namen und müssen mindestens 18–21 Jahre alt sein." },
      { q: "Ist eine Kaution erforderlich?", a: "Ja, für die Dauer der Anmietung wird eine Kaution auf Ihrer Kreditkarte hinterlegt." }
    ],
    bookBtn: "Jetzt Buchen"
  },
  es: {
    country: "España",
    flag: "🇪🇸",
    nav: { home: "Inicio", fleet: "Flota", search: "Buscar Coches", faq: "Preguntas" },
    heroTitle: "Alquila tu coche al mejor precio",
    heroSubtitle: "Reservas flexibles, cancelación gratuita y las mejores tarifas.",
    searchWidget: { pickup: "Lugar de recogida", pickupDate: "Fecha de recogida", returnDate: "Fecha de devolución", btn: "Buscar Coches" },
    fleetTitle: "Vehículos Destacados",
    cars: [
      { name: "Compacto Económico", price: "25 € / día", img: "https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?w=500&q=80" },
      { name: "Berlina Ejecutiva", price: "48 € / día", img: "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=500&q=80" },
      { name: "SUV Familiar", price: "68 € / día", img: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=500&q=80" }
    ],
    faqTitle: "Preguntas Frecuentes",
    faqs: [
      { q: "¿Qué necesito para alquilar un coche?", a: "Necesitas un permiso de conducir válido, una tarjeta de crédito a tu nombre y cumplir la edad mínima requerida." },
      { q: "¿Se requiere un depósito de garantía?", a: "Sí, se bloqueará un depósito de seguridad en tu tarjeta de crédito durante el alquiler." }
    ],
    bookBtn: "Reservar Ahora"
  },
  fr: {
    country: "France",
    flag: "🇫🇷",
    nav: { home: "Accueil", fleet: "Véhicules", search: "Rechercher", faq: "FAQ" },
    heroTitle: "Réservez votre voiture de location",
    heroSubtitle: "Réservations flexibles, annulation gratuite et meilleurs tarifs garantis.",
    searchWidget: { pickup: "Lieu de prise en charge", pickupDate: "Date de départ", returnDate: "Date de retour", btn: "Rechercher" },
    fleetTitle: "Notre Flotte de Véhicules",
    cars: [
      { name: "Économique Compacte", price: "26 € / jour", img: "https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?w=500&q=80" },
      { name: "Berline de Luxe", price: "52 € / jour", img: "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=500&q=80" },
      { name: "SUV Familial", price: "72 € / jour", img: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=500&q=80" }
    ],
    faqTitle: "Foire Aux Questions",
    faqs: [
      { q: "De quoi ai-je besoin pour louer une voiture?", a: "Vous avez besoin d'un permis de conduire valide, d'une carte de crédit à votre nom et d'avoir au moins 21 ans." },
      { q: "Un dépôt de garantie est-il requis?", a: "Oui, un dépôt de garantie est bloqué sur votre carte de crédit pendant la durée de la location." }
    ],
    bookBtn: "Réserver"
  },
  it: {
    country: "Italia",
    flag: "🇮🇹",
    nav: { home: "Home", fleet: "Parco Auto", search: "Cerca Auto", faq: "FAQ" },
    heroTitle: "Noleggia l'auto perfetta per il tuo viaggio",
    heroSubtitle: "Prenotazioni flessibili, cancellazione gratuita e tariffe imbattibili.",
    searchWidget: { pickup: "Luogo di ritiro", pickupDate: "Data di ritiro", returnDate: "Data di riconsegna", btn: "Cerca Auto" },
    fleetTitle: "Le Nostre Auto",
    cars: [
      { name: "Economica Compatta", price: "25 € / giorno", img: "https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?w=500&q=80" },
      { name: "Berlina Elegante", price: "49 € / giorno", img: "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=500&q=80" },
      { name: "SUV Spazioso", price: "69 € / giorno", img: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=500&q=80" }
    ],
    faqTitle: "Domande Frequenti",
    faqs: [
      { q: "Cosa serve per noleggiare un'auto?", a: "Serve una patente di guida valida, una carta di credito intestata al conducente e un'età minima di 21 anni." },
      { q: "È richiesto un deposito di garanzia?", a: "Sì, un deposito viene bloccato sulla carta di credito per tutta la durata del noleggio." }
    ],
    bookBtn: "Prenota Ora"
  }
};

// 2. Background Images Slider Array (Rotates every 10 seconds)
const bgImages = [
  "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&w=1350&q=80",
  "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1350&q=80",
  "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&w=1350&q=80"
];

let currentBgIdx = 0;
const heroBanner = document.getElementById('heroBanner');

// Smooth 10-second automatic background update
function rotateBackground() {
  if (heroBanner) {
    heroBanner.style.backgroundImage = `url('${bgImages[currentBgIdx]}')`;
    currentBgIdx = (currentBgIdx + 1) % bgImages.length;
  }
}

rotateBackground();
setInterval(rotateBackground, 10000); // 10000ms = 10 Seconds

// 3. Dynamic Locale Selection & DOM Updates
function selectLocale(code) {
  const data = locales[code] || locales['us'];

  // Update Header Button
  document.getElementById('currentFlag').textContent = data.flag;
  document.getElementById('currentCountry').textContent = data.country;

  // Update Navigation
  document.getElementById('navHome').textContent = data.nav.home;
  document.getElementById('navFleet').textContent = data.nav.fleet;
  document.getElementById('navBooking').textContent = data.nav.search;
  document.getElementById('navFaq').textContent = data.nav.faq;

  // Update Hero Content
  document.getElementById('heroTitle').textContent = data.heroTitle;
  document.getElementById('heroSubtitle').textContent = data.heroSubtitle;

  // Update Search Widget
  document.getElementById('lblPickup').textContent = data.searchWidget.pickup;
  document.getElementById('lblPickupDate').textContent = data.searchWidget.pickupDate;
  document.getElementById('lblReturnDate').textContent = data.searchWidget.returnDate;
  document.getElementById('btnSearch').textContent = data.searchWidget.btn;

  // Update Car Fleet Section
  document.getElementById('fleetHeading').textContent = data.fleetTitle;
  const carGrid = document.getElementById('carGrid');
  carGrid.innerHTML = '';
  data.cars.forEach(car => {
    const card = document.createElement('div');
    card.className = 'car-card';
    card.innerHTML = `
      <img src="${car.img}" alt="${car.name}" />
      <div class="car-info">
        <h3>${car.name}</h3>
        <div class="price">${car.price}</div>
        <button class="btn-book">${data.bookBtn}</button>
      </div>
    `;
    carGrid.appendChild(card);
  });

  // Update FAQs Section
  document.getElementById('faqHeading').textContent = data.faqTitle;
  const faqContainer = document.getElementById('faqContainer');
  faqContainer.innerHTML = '';
  data.faqs.forEach(faq => {
    const item = document.createElement('div');
    item.className = 'faq-item';
    item.innerHTML = `<h3>${faq.q}</h3><p>${faq.a}</p>`;
    faqContainer.appendChild(item);
  });

  closeModal();
}

// 4. Modal Event Listeners
const modal = document.getElementById('countryModal');
const openBtn = document.getElementById('countrySelectorBtn');
const closeBtn = document.getElementById('closeModal');

if (openBtn) openBtn.onclick = () => modal.classList.add('active');
if (closeBtn) closeBtn.onclick = closeModal;
window.onclick = (e) => { if (e.target === modal) closeModal(); };

function closeModal() {
  if (modal) modal.classList.remove('active');
}

// Initial Load Default
selectLocale('us');
