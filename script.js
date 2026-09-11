// Database of targeted search locations (France & Europe)
const locationsDatabase = [
  // Airports France
  { name: "Aéroport de Paris-Charles de Gaulle (CDG)", category: "Aéroport" },
  { name: "Aéroport de Paris-Orly (ORY)", category: "Aéroport" },
  { name: "Aéroport de Nice Côte d'Azur (NCE)", category: "Aéroport" },
  { name: "Aéroport de Lyon-Saint Exupéry (LYS)", category: "Aéroport" },
  { name: "Aéroport de Marseille Provence (MRS)", category: "Aéroport" },
  { name: "Aéroport de Toulouse-Blagnac (TLS)", category: "Aéroport" },
  { name: "Aéroport de Bordeaux-Mérignac (BOD)", category: "Aéroport" },

  // Airports Europe
  { name: "Aéroport de Francfort (FRA), Allemagne", category: "Aéroport" },
  { name: "Aéroport d'Amsterdam-Schiphol (AMS), Pays-Bas", category: "Aéroport" },
  { name: "Aéroport de Madrid-Barajas (MAD), Espagne", category: "Aéroport" },
  { name: "Aéroport de Rome Fiumicino (FCO), Italie", category: "Aéroport" },
  { name: "Aéroport de Bruxelles-National (BRU), Belgique", category: "Aéroport" },

  // Railway Stations France
  { name: "Gare de Paris-Gare-de-Lyon", category: "Gare ferroviaire" },
  { name: "Gare de Paris-Montparnasse", category: "Gare ferroviaire" },
  { name: "Gare de Lyon-Part-Dieu", category: "Gare ferroviaire" },
  { name: "Gare de Marseille-Saint-Charles", category: "Gare ferroviaire" },
  { name: "Gare de Lille Europe", category: "Gare ferroviaire" },
  { name: "Gare de Strasbourg-Ville", category: "Gare ferroviaire" },
  { name: "Gare de Bordeaux Saint-Jean", category: "Gare ferroviaire" },

  // Railway Stations Europe
  { name: "Gare Centrale de Berlin (Hauptbahnhof), Allemagne", category: "Gare ferroviaire" },
  { name: "Gare de Barcelone-Sants, Espagne", category: "Gare ferroviaire" },
  { name: "Gare de Milan-Centrale, Italie", category: "Gare ferroviaire" },

  // Bus Stations (Gares Routières)
  { name: "Gare Routière Internationale de Paris-Gallieni", category: "Gare routière" },
  { name: "Gare Routière de Lyon Perrache", category: "Gare routière" },
  { name: "Gare Routière de Toulouse Pierre Semard", category: "Gare routière" },
  { name: "Gare Routière de Marseille Saint-Charles", category: "Gare routière" },

  // Universities & Colleges
  { name: "Université Paris-Sorbonne, Paris", category: "Université" },
  { name: "Université Paris-Saclay, Orsay", category: "Université" },
  { name: "École Polytechnique, Palaiseau", category: "Université" },
  { name: "Université de Strasbourg", category: "Université" },
  { name: "Université de Lyon (Claude Bernard)", category: "Université" },
  { name: "Université d'Aix-Marseille", category: "Université" },
  { name: "Université de Heidelberg, Allemagne", category: "Université" },
  { name: "Université de Bologne, Italie", category: "Université" },

  // Iconic Places & Landmarks
  { name: "Tour Eiffel / Champ de Mars, Paris", category: "Lieu emblématique" },
  { name: "Musée du Louvre, Paris", category: "Lieu emblématique" },
  { name: "Château de Versailles, Versailles", category: "Lieu emblématique" },
  { name: "Mont Saint-Michel, Normandie", category: "Lieu emblématique" },
  { name: "Promenade des Anglais, Nice", category: "Lieu emblématique" },
  { name: "Sagrada Família, Barcelone, Espagne", category: "Lieu emblématique" },
  { name: "Colisée, Rome, Italie", category: "Lieu emblématique" }
];

document.addEventListener("DOMContentLoaded", () => {
  const locationInput = document.getElementById("pickup-location");
  const suggestionsList = document.getElementById("suggestions-list");
  const searchForm = document.getElementById("rental-search-form");
  const modal = document.getElementById("phone-modal");
  const closeModalBtn = document.querySelector(".close-modal");
  const loadingSpinner = document.getElementById("loading-spinner");
  const modalDetails = document.getElementById("modal-details");

  if (!locationInput || !suggestionsList || !searchForm) return;

  // Autocomplete Location Filter
  locationInput.addEventListener("input", () => {
    const query = locationInput.value.toLowerCase().trim();
    suggestionsList.innerHTML = "";

    if (query.length < 1) {
      suggestionsList.style.display = "none";
      return;
    }

    const filtered = locationsDatabase.filter(item =>
      item.name.toLowerCase().includes(query) || item.category.toLowerCase().includes(query)
    );

    if (filtered.length > 0) {
      filtered.forEach(item => {
        const li = document.createElement("li");
        li.innerHTML = `<strong>${item.name}</strong> <span class="badge">${item.category}</span>`;
        li.addEventListener("click", () => {
          locationInput.value = item.name;
          suggestionsList.style.display = "none";
        });
        suggestionsList.appendChild(li);
      });
      suggestionsList.style.display = "block";
    } else {
      suggestionsList.style.display = "none";
    }
  });

  // Hide suggestions list when clicking outside
  document.addEventListener("click", (e) => {
    if (!locationInput.contains(e.target) && !suggestionsList.contains(e.target)) {
      suggestionsList.style.display = "none";
    }
  });

  // Search Form Submit Logic with 1 Second Delay and Pop-up Display
  searchForm.addEventListener("submit", (e) => {
    e.preventDefault();

    // Show modal in loading state
    modal.style.display = "block";
    loadingSpinner.style.display = "block";
    modalDetails.style.display = "none";

    // 1 Second Delay before showing phone details
    setTimeout(() => {
      loadingSpinner.style.display = "none";
      modalDetails.style.display = "block";
    }, 1000);
  });

  // Modal Close Events
  closeModalBtn.addEventListener("click", () => {
    modal.style.display = "none";
  });

  window.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  });
});
