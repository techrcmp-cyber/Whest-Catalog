/* ==========================================================================
   WHEST ROLEPLAY - EXCLUSIVE VEHICLE SHOWROOM LOGIC
   ========================================================================== */

// 1. VEHICLE DATASET (9 Real Custom Vehicles - Clean Real Money Pricing)
const vehiclesData = [
  {
    id: "nissan-skyline-r33",
    name: "Nissan Skyline GT-R R33 Widebody",
    code: "R33-GTR-WIDE",
    category: "sport",
    priceReal: "Rp 500.000",
    image: "assets/images/car_r33.jpg",
    topSpeed: "320 km/h",
    topSpeedPct: 88,
    accel: "2.6 Detik",
    accelPct: 91,
    handling: "9.4 / 10",
    handlingPct: 94,
    trunk: "45 KG",
    trunkPct: 45,
    seats: "2 Kursi",
    engine: "RB26DETT Twin-Turbo",
    features: ["Widebody Kit Custom", "Toyo Tires Lettering Stance", "Sound RB26 Custom", "Hood Vents Aero", "Track Ready Tuning"]
  },
  {
    id: "porsche-911-rwb",
    name: "Porsche 911 RWB Rauh-Welt",
    code: "PORSCHE-911-RWB",
    category: "sport",
    priceReal: "Rp 350.000",
    image: "assets/images/car_rwb.jpg",
    topSpeed: "335 km/h",
    topSpeedPct: 91,
    accel: "2.4 Detik",
    accelPct: 94,
    handling: "9.7 / 10",
    handlingPct: 97,
    trunk: "40 KG",
    trunkPct: 40,
    seats: "2 Kursi",
    engine: "3.8L Flat-6 Air-Cooled",
    features: ["RAUH-Welt Begriff Original", "Custom X3 MARS License Plate", "Ducktail Spoiler", "Air-Cooled Engine Sound", "Deep Dish Rims"]
  },
  {
    id: "lamborghini-huracan-lb",
    name: "Lamborghini Huracán Liberty Walk",
    code: "HURACAN-LB-PERF",
    category: "supercar",
    priceReal: "Rp 650.000",
    image: "assets/images/car_huracan.jpg",
    topSpeed: "355 km/h",
    topSpeedPct: 96,
    accel: "2.1 Detik",
    accelPct: 97,
    handling: "9.8 / 10",
    handlingPct: 98,
    trunk: "35 KG",
    trunkPct: 35,
    seats: "2 Kursi",
    engine: "5.2L V10 Naturally Aspirated",
    features: ["Liberty Walk Performance Kit", "Deep Chrome Dish Wheels", "Purple Metallic Paint", "V10 Screamer Exhaust", "Lowered Stance"]
  },
  {
    id: "ferrari-488-pista",
    name: "Ferrari 488 Pista / F8 Custom",
    code: "FERRARI-488-PISTA",
    category: "supercar",
    priceReal: "Rp 450.000",
    image: "assets/images/car_ferrari.jpg",
    topSpeed: "360 km/h",
    topSpeedPct: 97,
    accel: "2.0 Detik",
    accelPct: 98,
    handling: "9.9 / 10",
    handlingPct: 99,
    trunk: "30 KG",
    trunkPct: 30,
    seats: "2 Kursi",
    engine: "3.9L Twin-Turbo V8",
    features: ["S-Duct Aero Bonnet", "Carbon Pista Package", "Racing Center Stripe", "Yellow Caliper Option", "High-Downforce Aero"]
  },
  {
    id: "lamborghini-aventador-svj",
    name: "Lamborghini Aventador SVJ LB",
    code: "AVENTADOR-SVJ-LB",
    category: "supercar",
    priceReal: "Rp 650.000",
    image: "assets/images/car_aventador.jpg",
    topSpeed: "375 km/h",
    topSpeedPct: 100,
    accel: "1.9 Detik",
    accelPct: 100,
    handling: "10.0 / 10",
    handlingPct: 100,
    trunk: "25 KG",
    trunkPct: 25,
    seats: "2 Kursi",
    engine: "6.5L V12 Quad-Turbo",
    features: ["VIP Limited Unit (1 of 3)", "SVJ Swan Neck Carbon Wing", "Extreme Chrome Stance", "V12 Flame Backfire FX", "Apex Performance"]
  },
  {
    id: "mercedes-560-sec-amg",
    name: "Mercedes-Benz 560 SEC AMG",
    code: "BENZ-560-SEC-AMG",
    category: "classic",
    priceReal: "Rp 250.000",
    image: "assets/images/car_benz.jpg",
    topSpeed: "285 km/h",
    topSpeedPct: 77,
    accel: "3.4 Detik",
    accelPct: 80,
    handling: "8.9 / 10",
    handlingPct: 89,
    trunk: "80 KG",
    trunkPct: 75,
    seats: "2 Kursi",
    engine: "6.0L V8 AMG Hammer",
    features: ["Classic 80s AMG Hammer Kit", "Blackout Front Grille", "VIP Mafia Executive Style", "Deep Dish Custom Wheels", "Luxury Leather Interior"]
  },
  {
    id: "audi-rs7-sportback",
    name: "Audi RS7 Sportback Widebody",
    code: "AUDI-RS7-SPORTBACK",
    category: "sedan",
    priceReal: "Rp 300.000",
    image: "assets/images/car_rs7.jpg",
    topSpeed: "325 km/h",
    topSpeedPct: 89,
    accel: "2.5 Detik",
    accelPct: 93,
    handling: "9.3 / 10",
    handlingPct: 93,
    trunk: "100 KG",
    trunkPct: 85,
    seats: "4 Kursi",
    engine: "4.0L Twin-Turbo V8",
    features: ["Quattro AWD All-Weather Traction", "Electric Blue Pearl Paint", "Sportback 4-Door Utility", "Stage 3 ECU Remap", "Aggressive Honeycomb Grille"]
  },
  {
    id: "bmw-m3-g80-stance",
    name: "BMW M3 G80 Competition",
    code: "BMW-M3-G80-STANCE",
    category: "sedan",
    priceReal: "Rp 250.000",
    image: "assets/images/car_m3g80.jpg",
    topSpeed: "330 km/h",
    topSpeedPct: 90,
    accel: "2.3 Detik",
    accelPct: 95,
    handling: "9.5 / 10",
    handlingPct: 95,
    trunk: "85 KG",
    trunkPct: 70,
    seats: "4 Kursi",
    engine: "3.0L Twin-Turbo S58 Inline-6",
    features: ["G80 Vertical Kidney Grille", "Extreme Stance Camber Kit", "Windshield Custom Banner", "M-Performance Quad Exhaust", "Drift Mode Switch"]
  },
  {
    id: "dodge-challenger-srt",
    name: "Dodge Challenger SRT Demon",
    code: "CHALLENGER-SRT-DEMON",
    category: "muscle",
    priceReal: "Rp 400.000",
    image: "assets/images/car_challenger.jpg",
    topSpeed: "315 km/h",
    topSpeedPct: 86,
    accel: "2.3 Detik",
    accelPct: 95,
    handling: "8.8 / 10",
    handlingPct: 88,
    trunk: "70 KG",
    trunkPct: 60,
    seats: "2 Kursi",
    engine: "6.2L Supercharged HEMI V8",
    features: ["HEMI Supercharger Whine", "Scat Pack Tires Lettering", "Widebody Demon Fenders", "Drag Launch Control", "Aggressive Muscle Sound"]
  }
];

// State Management
let currentCategory = "all";
let searchQuery = "";
let selectedVehicle = null;

// DOM Initialization
document.addEventListener("DOMContentLoaded", () => {
  renderCatalog();
  setupEventListeners();
  setupNavbarScroll();
});

// 2. RENDER CATALOG GRID
function renderCatalog() {
  const grid = document.getElementById("vehicle-grid");
  const noResults = document.getElementById("no-results");
  const countBadge = document.getElementById("catalog-count");
  
  if (!grid) return;

  const filtered = vehiclesData.filter(item => {
    const matchesCategory = currentCategory === "all" || item.category === currentCategory;
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          item.code.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          item.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  if (countBadge) {
    countBadge.textContent = `Menampilkan ${filtered.length} dari ${vehiclesData.length} Unit`;
  }

  if (filtered.length === 0) {
    grid.style.display = "none";
    if (noResults) noResults.classList.add("visible");
    return;
  }

  grid.style.display = "grid";
  if (noResults) noResults.classList.remove("visible");

  grid.innerHTML = filtered.map(item => `
    <div class="vehicle-card glass-card" data-id="${item.id}">
      <div class="card-img-wrap">
        <span class="badge-tag card-badge">${item.category.toUpperCase()}</span>
        <img src="${item.image}" alt="${item.name}" loading="lazy" decoding="async" width="600" height="350" />
        <div class="card-price-tag">${item.priceReal}</div>
      </div>
      <div class="card-body">
        <div>
          <h3 class="vehicle-name">${item.name}</h3>
          <p class="vehicle-subtitle">${item.code} • ${item.engine}</p>
        </div>
        
        <div class="spec-mini-grid">
          <div class="spec-mini-item">
            <span class="spec-mini-val">${item.topSpeed}</span>
            <span class="spec-mini-lbl">Speed</span>
          </div>
          <div class="spec-mini-item">
            <span class="spec-mini-val">${item.accel}</span>
            <span class="spec-mini-lbl">0-100</span>
          </div>
          <div class="spec-mini-item">
            <span class="spec-mini-val">${item.trunk}</span>
            <span class="spec-mini-lbl">Bagasi</span>
          </div>
        </div>

        <div class="card-footer">
          <span class="unit-status"><i class="fa-solid fa-check"></i> Official Unit</span>
          <button class="btn btn-cyan btn-sm" onclick="openVehicleModal('${item.id}')">
            Detail & Beli
          </button>
        </div>
      </div>
    </div>
  `).join("");
}

// 3. EVENT LISTENERS SETUP
function setupEventListeners() {
  const filterBtns = document.querySelectorAll(".tab-btn");
  filterBtns.forEach(btn => {
    btn.addEventListener("click", (e) => {
      filterBtns.forEach(b => b.classList.remove("active"));
      e.target.classList.add("active");
      currentCategory = e.target.getAttribute("data-category");
      renderCatalog();
    });
  });

  const searchInput = document.getElementById("search-input");
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      searchQuery = e.target.value.trim();
      renderCatalog();
    });
  }

  const modalOverlay = document.getElementById("modal-overlay");
  const modalCloseBtn = document.getElementById("modal-close-btn");
  
  if (modalCloseBtn) {
    modalCloseBtn.addEventListener("click", closeVehicleModal);
  }
  if (modalOverlay) {
    modalOverlay.addEventListener("click", (e) => {
      if (e.target === modalOverlay) closeVehicleModal();
    });
  }

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeVehicleModal();
  });

  const mobileBtn = document.getElementById("mobile-toggle");
  const navLinks = document.getElementById("nav-links");
  if (mobileBtn && navLinks) {
    mobileBtn.addEventListener("click", () => {
      navLinks.classList.toggle("mobile-open");
    });
  }
}

// 4. VEHICLE SPEC MODAL LOGIC
function openVehicleModal(id) {
  const vehicle = vehiclesData.find(v => v.id === id);
  if (!vehicle) return;

  selectedVehicle = vehicle;
  const overlay = document.getElementById("modal-overlay");
  
  document.getElementById("modal-img").src = vehicle.image;
  document.getElementById("modal-title").textContent = vehicle.name;
  document.getElementById("modal-code").textContent = `Kode Unit: ${vehicle.code} | Kategori: ${vehicle.category.toUpperCase()}`;
  document.getElementById("modal-price-val").textContent = `${vehicle.priceReal}`;
  document.getElementById("modal-engine").textContent = vehicle.engine;
  document.getElementById("modal-seats").textContent = vehicle.seats;
  
  setSpecBar("bar-speed", vehicle.topSpeedPct, vehicle.topSpeed);
  setSpecBar("bar-accel", vehicle.accelPct, vehicle.accel);
  setSpecBar("bar-handling", vehicle.handlingPct, vehicle.handling);
  setSpecBar("bar-trunk", vehicle.trunkPct, vehicle.trunk);

  const tagsContainer = document.getElementById("modal-features");
  tagsContainer.innerHTML = vehicle.features.map(f => `
    <span class="feature-tag">⚡ ${f}</span>
  `).join("");

  overlay.classList.add("active");
  document.body.style.overflow = "hidden";
}

function setSpecBar(elementId, pct, labelVal) {
  const fill = document.getElementById(elementId);
  const valLabel = document.getElementById(`${elementId}-val`);
  if (fill) {
    setTimeout(() => {
      fill.style.width = `${pct}%`;
    }, 100);
  }
  if (valLabel) {
    valLabel.textContent = labelVal;
  }
}

function closeVehicleModal() {
  const overlay = document.getElementById("modal-overlay");
  if (overlay) overlay.classList.remove("active");
  document.body.style.overflow = "auto";
  
  ["bar-speed", "bar-accel", "bar-handling", "bar-trunk"].forEach(id => {
    const fill = document.getElementById(id);
    if (fill) fill.style.width = "0%";
  });
}

// 5. ORDER TICKET GENERATOR & DISCORD REDIRECT
function orderVehicleViaDiscord() {
  if (!selectedVehicle) return;

  const ticketText = `[PESANAN MOBIL WHEST ROLEPLAY]\n----------------------------------\nNama Car / Karakter: [Isi Nama IC Anda]\nNama Mobil: ${selectedVehicle.name}\nKode Mobil: ${selectedVehicle.code}\nHarga: ${selectedVehicle.priceReal}\n----------------------------------\nMohon diproses staff Whest RP!`;

  const discordUrl = "https://discord.gg/ZKTQNrTqa3";

  navigator.clipboard.writeText(ticketText).then(() => {
    showToast(`✅ Tiket ${selectedVehicle.name} disalin! Membuka Discord...`);
    setTimeout(() => {
      window.open(discordUrl, "_blank");
    }, 600);
  }).catch(() => {
    window.open(discordUrl, "_blank");
  });
}

function showToast(message) {
  const container = document.getElementById("toast-container");
  if (!container) return;

  const toast = document.createElement("div");
  toast.className = "toast show";
  toast.innerHTML = `<span>${message}</span>`;
  container.appendChild(toast);

  setTimeout(() => {
    toast.classList.remove("show");
    setTimeout(() => toast.remove(), 400);
  }, 3200);
}

// 6. NAVBAR SCROLL EFFECT
function setupNavbarScroll() {
  const navbar = document.getElementById("navbar");
  let ticking = false;

  window.addEventListener("scroll", () => {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        if (window.scrollY > 40) {
          navbar.classList.add("scrolled");
        } else {
          navbar.classList.remove("scrolled");
        }
        ticking = false;
      });
      ticking = true;
    }
  }, { passive: true });
}
