const locationsDB = [
  { name: "PARIS All Locations", country: "FR", category: "Ville" },
  { name: "Aéroport de Paris-Charles de Gaulle (CDG)", country: "FR", category: "Aéroport" },
  { name: "Aéroport de Paris-Orly (ORY)", country: "FR", category: "Aéroport" },
  { name: "Gare de Paris-Gare-de-Lyon", country: "FR", category: "Gare" },
  { name: "Gare Routière Paris Gallieni", country: "FR", category: "Gare Routière" }
];

const countryData = {
  FR: {
    bgImages: [
      "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?auto=format&fit=crop&w=1600&q=80"
    ],
    heroTitle: "VENTE MONDIALE : JUSQU'À 15% DE RÉDUCTION SUR VOTRE LOCATION",
    searchBoxHeading: "SEARCH AND COMPARE CAR RENTAL RATES",
    reviews: [
      { name: "Catherine", text: "Toujours un plaisir de réserver avec vous. Service client excellent." },
      { name: "Angel", text: "Tout était parfait lors du retrait à l'aéroport." },
      { name: "Ronald", text: "Prise en charge très bien organisée. Impossible de faire plus simple." }
    ]
  }
};

let currentBgIndex = 0;
let currentCountry = "FR";

document.addEventListener("DOMContentLoaded", () => {
  initSlideshow();
  initAutocomplete();
  initAccordion();
  initPopups();
  renderReviews("FR");
});

function initSlideshow() {
  const slider = document.getElementById("hero-slider");
  if (!slider) return;

  const images = countryData[currentCountry].bgImages;
  slider.style.backgroundImage = `linear-gradient(rgba(13, 35, 58, 0.65), rgba(13, 35, 58, 0.65)), url('${images[0]}')`;

  setInterval(() => {
    currentBgIndex = (currentBgIndex + 1) % images.length;
    slider.style.backgroundImage = `linear-gradient(rgba(13, 35, 58, 0.65), rgba(13, 35, 58, 0.65)), url('${images[currentBgIndex]}')`;
  }, 5000);
}

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

    const matches = locationsDB.filter(loc => loc.name.toLowerCase().includes(query));

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
    }
  });
}

function initAccordion() {
  const headers = document.querySelectorAll(".accordion-header");
  headers.forEach(header => {
    header.addEventListener("click", () => {
      const item = header.parentElement;
      const isOpen = item.classList.contains("active");

      document.querySelectorAll(".accordion-item").forEach(i => {
        i.classList.remove("active");
        i.querySelector(".faq-icon").innerText = "+";
      });

      if (!isOpen) {
        item.classList.add("active");
        header.querySelector(".faq-icon").innerText = "−";
      }
    });
  });
}

function initPopups() {
  const modal = document.getElementById("phone-modal");
  const closeModal = document.querySelector(".close-modal");
  const spinner = document.getElementById("modal-spinner");
  const phoneDetails = document.getElementById("modal-phone-details");
  const partnerLogos = document.querySelectorAll(".partner-logo");

  function triggerModal() {
    if (!modal) return;
    modal.style.display = "block";
    spinner.style.display = "block";
    phoneDetails.style.display = "none";

    setTimeout(() => {
      spinner.style.display = "none";
      phoneDetails.style.display = "block";
    }, 1000);
  }

  partnerLogos.forEach(logo => logo.addEventListener("click", triggerModal));
  if (closeModal) closeModal.addEventListener("click", () => modal.style.display = "none");
}

/* Page Navigation with 1-second Loader for General Business Terms */
function loadTermsPage(event) {
  event.preventDefault();
  const loader = document.getElementById("country-loader");
  if (loader) loader.style.display = "flex";

  setTimeout(() => {
    window.location.href = "terms.html";
  }, 1000);
}

/* Cookie Banner Controls */
function hideCookieBanner() {
  const banner = document.getElementById("cookie-banner");
  if (banner) banner.style.display = "none";
}

function showCookieBanner() {
  const banner = document.getElementById("cookie-banner");
  if (banner) banner.style.display = "block";
}
