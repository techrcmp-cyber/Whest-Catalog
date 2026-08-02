/* ==========================================================================
   WHEST ROLEPLAY - CATALOG JAVASCRIPT LOGIC
   ========================================================================== */

// 1. VEHICLE DATASET (12 Realistic FiveM Roleplay Vehicles)
const vehiclesData = [
  {
    id: "pegassi-zorrusso",
    name: "Pegassi Zorrusso Hyper",
    code: "ZORRUSSO-V12",
    category: "supercar",
    priceIC: "$450.000",
    priceVIP: "Rp 150.000",
    image: "assets/images/supercar.jpg",
    topSpeed: "350 km/h",
    topSpeedPct: 94,
    accel: "2.2 Detik",
    accelPct: 96,
    handling: "9.8 / 10",
    handlingPct: 98,
    trunk: "40 KG",
    trunkPct: 40,
    seats: "2 Kursi",
    engine: "6.0L V12 Quad-Turbo",
    features: ["Sound V12 Custom", "Active Aero Wing", "Drift Mode Switch", "Livery Carbon Edition", "Custom LED Underglow"]
  },
  {
    id: "grotti-rsx",
    name: "Grotti Itali RSX Apex",
    code: "RSX-HYBRID",
    category: "supercar",
    priceIC: "$520.000",
    priceVIP: "Rp 185.000",
    image: "assets/images/hero.jpg",
    topSpeed: "365 km/h",
    topSpeedPct: 98,
    accel: "2.0 Detik",
    accelPct: 99,
    handling: "9.9 / 10",
    handlingPct: 99,
    trunk: "35 KG",
    trunkPct: 35,
    seats: "2 Kursi",
    engine: "V10 Hybrid Electro",
    features: ["VIP Exclusive Unit", "Launch Control GT", "Custom Exhaust Backfire", "Armored Glass Option", "Carbon Ceramic Brakes"]
  },
  {
    id: "shinobi-cyber",
    name: "Nagasaki Shinobi Apex Bike",
    code: "SHINOBI-R1000",
    category: "motorcycle",
    priceIC: "$160.000",
    priceVIP: "Rp 65.000",
    image: "assets/images/motor.jpg",
    topSpeed: "330 km/h",
    topSpeedPct: 89,
    accel: "2.1 Detik",
    accelPct: 97,
    handling: "9.6 / 10",
    handlingPct: 96,
    trunk: "15 KG",
    trunkPct: 15,
    seats: "1-2 Kursi",
    engine: "998cc Racing Spec",
    features: ["Quickshifter System", "Akrapovic Exhaust Sound", "Agile Lane Splitter", "Custom Wheel Light"]
  },
  {
    id: "pfister-comet-s2",
    name: "Pfister Comet S2 Turbo",
    code: "COMET-S2-GT",
    category: "sport",
    priceIC: "$280.000",
    priceVIP: "Rp 95.000",
    image: "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?auto=format&fit=crop&w=1000&q=80",
    topSpeed: "310 km/h",
    topSpeedPct: 84,
    accel: "2.8 Detik",
    accelPct: 88,
    handling: "9.2 / 10",
    handlingPct: 92,
    trunk: "50 KG",
    trunkPct: 50,
    seats: "2 Kursi",
    engine: "3.8L Flat-6 Twin-Turbo",
    features: ["Rear Engine Layout", "Convertible Top", "Tuning Level 4 Package", "Sport Mode Plus"]
  },
  {
    id: "obey-10f-widebody",
    name: "Obey 10F Widebody GT",
    code: "OBEY-10F-WB",
    category: "sport",
    priceIC: "$310.000",
    priceVIP: "Rp 110.000",
    image: "https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?auto=format&fit=crop&w=1000&q=80",
    topSpeed: "325 km/h",
    topSpeedPct: 88,
    accel: "2.5 Detik",
    accelPct: 92,
    handling: "9.4 / 10",
    handlingPct: 94,
    trunk: "45 KG",
    trunkPct: 45,
    seats: "2 Kursi",
    engine: "5.2L V10 Naturally Aspirated",
    features: ["Liberty Walk Widebody Kit", "Quattro All-Wheel Drive", "Custom Pops & Bangs", "Track Day suspension"]
  },
  {
    id: "vapid-dominator-gtx",
    name: "Vapid Dominator GTX Custom",
    code: "DOMINATOR-V8",
    category: "sport",
    priceIC: "$195.000",
    priceVIP: "Rp 75.000",
    image: "https://images.unsplash.com/photo-1584345604476-8ec5e12e42dd?auto=format&fit=crop&w=1000&q=80",
    topSpeed: "295 km/h",
    topSpeedPct: 79,
    accel: "3.1 Detik",
    accelPct: 84,
    handling: "8.7 / 10",
    handlingPct: 87,
    trunk: "60 KG",
    trunkPct: 60,
    seats: "2 Kursi",
    engine: "5.0L Supercharged Muscle V8",
    features: ["Supercharger Whine FX", "Wheelie Ready Tuning", "Custom Hood Scoop", "Drag Race Tire Option"]
  },
  {
    id: "enus-jubilee",
    name: "Enus Jubilee Armored VIP",
    code: "JUBILEE-ARMOR",
    category: "suv",
    priceIC: "$380.000",
    priceVIP: "Rp 140.000",
    image: "https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=1000&q=80",
    topSpeed: "260 km/h",
    topSpeedPct: 70,
    accel: "3.8 Detik",
    accelPct: 76,
    handling: "8.9 / 10",
    handlingPct: 89,
    trunk: "120 KG",
    trunkPct: 90,
    seats: "4 Kursi",
    engine: "6.75L Twin-Turbo V12",
    features: ["Anti-Bullet B7 Glass", "Slick Oil Dispenser", "Starlight Roof Ceiling", "Executive Minibar Interior"]
  },
  {
    id: "gallivanter-baller",
    name: "Gallivanter Baller ST-D",
    code: "BALLER-STD-V8",
    category: "suv",
    priceIC: "$240.000",
    priceVIP: "Rp 85.000",
    image: "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?auto=format&fit=crop&w=1000&q=80",
    topSpeed: "250 km/h",
    topSpeedPct: 68,
    accel: "4.1 Detik",
    accelPct: 72,
    handling: "8.6 / 10",
    handlingPct: 86,
    trunk: "150 KG",
    trunkPct: 100,
    seats: "4 Kursi",
    engine: "5.0L Supercharged V8",
    features: ["Air Suspension Stance", "Huge Trunk Capacity", "Offroad Mode Lock", "Family Executive Comfort"]
  },
  {
    id: "ubermacht-rhinehart",
    name: "Ubermacht Rhinehart M-Touring",
    code: "RHINEHART-M",
    category: "sedan",
    priceIC: "$175.000",
    priceVIP: "Rp 60.000",
    image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=1000&q=80",
    topSpeed: "280 km/h",
    topSpeedPct: 75,
    accel: "3.4 Detik",
    accelPct: 80,
    handling: "9.0 / 10",
    handlingPct: 90,
    trunk: "90 KG",
    trunkPct: 75,
    seats: "4 Kursi",
    engine: "4.4L Twin-Turbo V8",
    features: ["Sleeper Wagon Body", "xDrive AWD Traction", "Executive Leather Cabin", "Stage 2 ECU Remap"]
  },
  {
    id: "albany-vstr",
    name: "Albany VSTR Luxury Mafia",
    code: "VSTR-LUXURY",
    category: "sedan",
    priceIC: "$210.000",
    priceVIP: "Rp 70.000",
    image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1000&q=80",
    topSpeed: "290 km/h",
    topSpeedPct: 78,
    accel: "3.2 Detik",
    accelPct: 82,
    handling: "8.9 / 10",
    handlingPct: 89,
    trunk: "80 KG",
    trunkPct: 70,
    seats: "4 Kursi",
    engine: "6.2L Supercharged V8",
    features: ["Tinted VIP Windows", "Aggressive Front Grille", "Deep V8 Rumble Sound", "Gang/Mafia Aesthetic"]
  },
  {
    id: "bati-801-rr",
    name: "Pegassi Bati 801 RR Racing",
    code: "BATI-801-RR",
    category: "motorcycle",
    priceIC: "$125.000",
    priceVIP: "Rp 50.000",
    image: "https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=1000&q=80",
    topSpeed: "315 km/h",
    topSpeedPct: 85,
    accel: "2.4 Detik",
    accelPct: 94,
    handling: "9.3 / 10",
    handlingPct: 93,
    trunk: "10 KG",
    trunkPct: 10,
    seats: "1-2 Kursi",
    engine: "1000cc Circuit Spec",
    features: ["Lightweight Carbon Fairing", "Slick Track Tires", "Ultra High Top Speed", "MotoGP Livery"]
  },
  {
    id: "truffade-thrax-apex",
    name: "Truffade Thrax Hypercar",
    code: "THRAX-APEX-W16",
    category: "supercar",
    priceIC: "$650.000",
    priceVIP: "Rp 220.000",
    image: "https://images.unsplash.com/photo-1544829099-b9a0c07fad1a?auto=format&fit=crop&w=1000&q=80",
    topSpeed: "380 km/h",
    topSpeedPct: 100,
    accel: "1.9 Detik",
    accelPct: 100,
    handling: "10.0 / 10",
    handlingPct: 100,
    trunk: "30 KG",
    trunkPct: 30,
    seats: "2 Kursi",
    engine: "8.0L Quad-Turbo W16",
    features: ["Limited Edition (1 of 3 Server)", "Ultimate Top Speed Champion", "Hydraulic Rear Wing", "Custom Soundscape"]
  }
];

// State Management
let currentCategory = "all";
let searchQuery = "";
let selectedVehicle = null;

// DOM Elements
document.addEventListener("DOMContentLoaded", () => {
  initBackgroundCanvas();
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
    <div class="vehicle-card glass-panel" data-id="${item.id}">
      <div class="card-image-wrap">
        <span class="badge-pill card-badge">${item.category}</span>
        <img src="${item.image}" alt="${item.name}" loading="lazy" />
        <div class="card-price-tag">${item.priceIC} IC</div>
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
          <span class="vip-price">VIP: ${item.priceVIP}</span>
          <button class="btn-primary btn-sm view-detail-btn" onclick="openVehicleModal('${item.id}')">
            Detail & Beli
          </button>
        </div>
      </div>
    </div>
  `).join("");
}

// 3. EVENT LISTENERS SETUP
function setupEventListeners() {
  // Category Filter Buttons
  const filterBtns = document.querySelectorAll(".filter-btn");
  filterBtns.forEach(btn => {
    btn.addEventListener("click", (e) => {
      filterBtns.forEach(b => b.classList.remove("active"));
      e.target.classList.add("active");
      currentCategory = e.target.getAttribute("data-category");
      renderCatalog();
    });
  });

  // Search Input
  const searchInput = document.getElementById("search-input");
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      searchQuery = e.target.value.trim();
      renderCatalog();
    });
  }

  // Modal Close Events
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

  // ESC key to close modal
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeVehicleModal();
  });

  // Mobile Menu Toggle
  const mobileBtn = document.getElementById("mobile-menu-btn");
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
  
  // Populate modal content
  document.getElementById("modal-img").src = vehicle.image;
  document.getElementById("modal-title").textContent = vehicle.name;
  document.getElementById("modal-code").textContent = `Kode Unit: ${vehicle.code} | Kategori: ${vehicle.category.toUpperCase()}`;
  document.getElementById("modal-price-ic").textContent = `${vehicle.priceIC} IC`;
  document.getElementById("modal-price-vip").textContent = `Donasi VIP: ${vehicle.priceVIP}`;
  document.getElementById("modal-engine").textContent = vehicle.engine;
  document.getElementById("modal-seats").textContent = vehicle.seats;
  
  // Spec Progress Bars
  setSpecBar("bar-speed", vehicle.topSpeedPct, vehicle.topSpeed);
  setSpecBar("bar-accel", vehicle.accelPct, vehicle.accel);
  setSpecBar("bar-handling", vehicle.handlingPct, vehicle.handling);
  setSpecBar("bar-trunk", vehicle.trunkPct, vehicle.trunk);

  // Features tags
  const tagsContainer = document.getElementById("modal-features");
  tagsContainer.innerHTML = vehicle.features.map(f => `
    <span class="feature-tag">⚡ ${f}</span>
  `).join("");

  // Open Modal
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
  
  // Reset spec bars width for animation
  ["bar-speed", "bar-accel", "bar-handling", "bar-trunk"].forEach(id => {
    const fill = document.getElementById(id);
    if (fill) fill.style.width = "0%";
  });
}

// 5. ORDER TICKET GENERATOR & COPY TOAST
function orderVehicleViaDiscord() {
  if (!selectedVehicle) return;

  const ticketText = `[PESANAN MOBIL WHEST ROLEPLAY]\n----------------------------------\nNama Car / Karakter: [Isi Nama IC Anda]\nNama Mobil: ${selectedVehicle.name}\nKode Mobil: ${selectedVehicle.code}\nHarga IC: ${selectedVehicle.priceIC}\nOpsi Donasi VIP: ${selectedVehicle.priceVIP}\n----------------------------------\nMohon diproses staff Whest RP!`;

  const discordUrl = "https://discord.gg/ZKTQNrTqa3";

  navigator.clipboard.writeText(ticketText).then(() => {
    showToast(`✅ Format tiket ${selectedVehicle.name} disalin! Membuka Discord...`);
    setTimeout(() => {
      window.open(discordUrl, "_blank");
    }, 800);
  }).catch(() => {
    showToast(`✅ Format tiket disalin! Membuka Discord...`);
    window.open(discordUrl, "_blank");
  });
}

function copyServerIP() {
  const serverIP = "connect cfx.re/join/whest-roleplay";
  navigator.clipboard.writeText(serverIP).then(() => {
    showToast("🚀 IP FiveM Whest Roleplay berhasil disalin ke clipboard!");
  });
}

function showToast(message) {
  const container = document.getElementById("toast-container");
  if (!container) return;

  const toast = document.createElement("div");
  toast.className = "toast show";
  toast.innerHTML = `
    <span>${message}</span>
  `;
  container.appendChild(toast);

  setTimeout(() => {
    toast.classList.remove("show");
    setTimeout(() => toast.remove(), 400);
  }, 3500);
}

// 6. NAVBAR SCROLL EFFECT
function setupNavbarScroll() {
  const navbar = document.getElementById("navbar");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 40) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });
}

// 7. FUTURISTIC BACKGROUND CANVAS ANIMATION
function initBackgroundCanvas() {
  const canvas = document.getElementById("bg-canvas");
  if (!canvas) return;
  
  const ctx = canvas.getContext("2d");
  let width = canvas.width = window.innerWidth;
  let height = canvas.height = window.innerHeight;

  window.addEventListener("resize", () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  });

  // Create particles
  const particleCount = 45;
  const particles = [];

  for (let i = 0; i < particleCount; i++) {
    particles.push({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      radius: Math.random() * 2 + 1,
      alpha: Math.random() * 0.5 + 0.2
    });
  }

  function animate() {
    ctx.clearRect(0, 0, width, height);

    // Draw connecting cyan lines
    for (let i = 0; i < particleCount; i++) {
      for (let j = i + 1; j < particleCount; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < 130) {
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.strokeStyle = `rgba(0, 229, 255, ${0.15 * (1 - dist / 130)})`;
          ctx.lineWidth = 0.8;
          ctx.stroke();
        }
      }
    }

    // Draw & update particles
    particles.forEach(p => {
      p.x += p.vx;
      p.y += p.vy;

      if (p.x < 0 || p.x > width) p.vx *= -1;
      if (p.y < 0 || p.y > height) p.vy *= -1;

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(0, 229, 255, ${p.alpha})`;
      ctx.shadowBlur = 8;
      ctx.shadowColor = "#00e5ff";
      ctx.fill();
      ctx.shadowBlur = 0;
    });

    requestAnimationFrame(animate);
  }

  animate();
}
