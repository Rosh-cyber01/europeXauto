  const pickup = document.getElementById("pickupLocation");
  if (pickup) pickup.value = item.name + ", " + item.country;
  const hero = document.getElementById("heroSection");
  if (hero) hero.style.backgroundImage = `url('${item.bgIcon}')`;
  const langKey = item.lang && translations[item.lang] ? item.lang : 'en';
  applyLanguage(langKey);
  const reviewKey = item.country.toLowerCase();
  renderReviews(countryReviews[reviewKey] ? reviewKey : 'default');
  if (hero) hero.scrollIntoView({ behavior: 'smooth' });
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
  if (!container) return;
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
