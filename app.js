/**
 * RIDWAN RATTAN EXPORTS - CORE ENGINE
 * Handcrafted Indonesian Rattan Furniture & B2B Global Export Portal
 */

const PRODUCTS = [
  {
    id: "RRE-101",
    name: "Cirebon Heritage Peacock Lounge Chair",
    category: "living",
    categoryLabel: "Living Room",
    basePriceUSD: 145,
    moq: 10,
    cbm: 0.42,
    stockStatus: "ready",
    stockBadge: "Ready to Ship (50 pcs in stock)",
    leadTime: "3 - 5 Days to Port",
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=800&q=80",
    dimensions: "W 90 x D 65 x H 145 cm",
    materials: "Grade-A Natural Manau Rattan & Iron core",
    weaves: ["Open Webbing", "Intricate Lattice", "Sunburst Peacock"],
    finishes: [
      { name: "Natural Honey", hex: "#d4a373" },
      { name: "Kubu Grey", hex: "#8d8b82" },
      { name: "Bleached Nordic", hex: "#f1ede6" },
      { name: "Matte Black", hex: "#2b2b2b" }
    ],
    description: "The iconic Cirebon high-back peacock chair crafted by master weavers. Stackable for container shipping optimization."
  },
  {
    id: "RRE-102",
    name: "Java Boho Dining Armchair",
    category: "dining",
    categoryLabel: "Dining Room",
    basePriceUSD: 68,
    moq: 20,
    cbm: 0.22,
    stockStatus: "ready",
    stockBadge: "Ready to Ship (120 pcs in stock)",
    leadTime: "3 - 5 Days to Port",
    image: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?auto=format&fit=crop&w=800&q=80",
    dimensions: "W 58 x D 56 x H 82 cm",
    materials: "Solid Indonesian Teak Frame + Natural Rattan Core Weave",
    weaves: ["Classic Cannage", "Herringbone Tight"],
    finishes: [
      { name: "Natural Teak", hex: "#c68b59" },
      { name: "Ebonized Black", hex: "#1a1a1a" },
      { name: "Warm Walnut", hex: "#634735" }
    ],
    description: "Best-selling hospitality dining chair engineered for cafes, luxury villas, and boutique resorts."
  },
  {
    id: "RRE-103",
    name: "Sunda Organic Curved Sofa (3-Seater)",
    category: "living",
    categoryLabel: "Living Room",
    basePriceUSD: 320,
    moq: 5,
    cbm: 1.15,
    stockStatus: "order",
    stockBadge: "Made-to-Order",
    leadTime: "3 - 4 Weeks Production",
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=800&q=80",
    dimensions: "W 210 x D 85 x H 78 cm",
    materials: "Solid Rattan Poles + High-density Foam Cushions",
    weaves: ["Dense Split-Skin Weave", "Ribbed Cane Paneling"],
    finishes: [
      { name: "Organic Raw Cane", hex: "#ddbc8e" },
      { name: "Vintage Tan", hex: "#a47148" }
    ],
    description: "Architectural curved silhouette statement sofa with UV-stabilized topcoat."
  },
  {
    id: "RRE-104",
    name: "Kalimantan Weave Pendant Lamp (Set of 3)",
    category: "decor",
    categoryLabel: "Lighting & Décor",
    basePriceUSD: 42,
    moq: 30,
    cbm: 0.08,
    stockStatus: "ready",
    stockBadge: "Ready to Ship (200 sets in stock)",
    leadTime: "2 - 4 Days to Port",
    image: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=800&q=80",
    dimensions: "Dia 40cm, 50cm, 60cm Nesting Trio",
    materials: "Fine Natural Rattan Wicker + Internal Steel Ring",
    weaves: ["Spiral Basket Weave", "Airy Open Netting"],
    finishes: [
      { name: "Natural Blonde", hex: "#e8d8be" },
      { name: "Terracotta Two-tone", hex: "#b85d38" }
    ],
    description: "Nesting pendant lamps designed for ultra-compact shipping volume."
  },
  {
    id: "RRE-105",
    name: "Batavia King Size Rattan Headboard",
    category: "bedroom",
    categoryLabel: "Bedroom",
    basePriceUSD: 110,
    moq: 15,
    cbm: 0.35,
    stockStatus: "order",
    stockBadge: "Made-to-Order",
    leadTime: "2 - 3 Weeks Production",
    image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=800&q=80",
    dimensions: "W 195 x H 140 x D 6 cm",
    materials: "Mahogany Reinforcement + Natural Rattan Core Weave",
    weaves: ["French Octagonal Cane", "Fishbone Weave"],
    finishes: [
      { name: "Natural Sand", hex: "#dfc79b" },
      { name: "Antique Walnut", hex: "#5c3d28" }
    ],
    description: "Flat-packable luxury rattan headboard for hotel and retail suites."
  },
  {
    id: "RRE-106",
    name: "Kubu Round Coffee Table with Glass Top",
    category: "living",
    categoryLabel: "Living Room",
    basePriceUSD: 85,
    moq: 15,
    cbm: 0.28,
    stockStatus: "ready",
    stockBadge: "Ready to Ship (45 pcs in stock)",
    leadTime: "3 - 5 Days to Port",
    image: "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&w=800&q=80",
    dimensions: "Dia 80 x H 45 cm",
    materials: "Kubu Grey Thick Rattan + 8mm Tempered Glass",
    weaves: ["Chunky Basket Weave"],
    finishes: [
      { name: "Kubu Grey", hex: "#8a877d" },
      { name: "Warm Honey", hex: "#cda069" }
    ],
    description: "Heavy-duty coastal table woven from natural aged kubu vine."
  }
];

const SHIPPING_DESTINATIONS = {
  "us-la": {
    portName: "Port of Los Angeles / Long Beach, CA (USA)",
    transitDays: "22 - 26 Days",
    estFreight20ft: "$1,850 - $2,200",
    estFreight40ft: "$2,850 - $3,450",
    incoterms: "FOB Jakarta / CIF Long Beach",
    customsNote: "Lacey Act declaration & ISF 10+2 filed. Phytosanitary & AFAS fumigation seals included."
  },
  "us-ny": {
    portName: "Port of New York / New Jersey (USA East Coast)",
    transitDays: "30 - 36 Days",
    estFreight20ft: "$2,400 - $2,850",
    estFreight40ft: "$3,600 - $4,300",
    incoterms: "FOB Jakarta / CIF New York",
    customsNote: "Official Phytosanitary & Methyl Bromide fumigation seals provided."
  },
  "eu-rot": {
    portName: "Port of Rotterdam / Antwerp (Western Europe)",
    transitDays: "26 - 30 Days",
    estFreight20ft: "$1,600 - $2,100",
    estFreight40ft: "$2,600 - $3,200",
    incoterms: "FOB Tanjung Priok / CIF Rotterdam",
    customsNote: "V-Legal / FLEGT timber and rattan certification included (0% duty under GSP)."
  },
  "eu-ham": {
    portName: "Port of Hamburg / Bremerhaven (Germany / CEE)",
    transitDays: "28 - 32 Days",
    estFreight20ft: "$1,700 - $2,250",
    estFreight40ft: "$2,750 - $3,350",
    incoterms: "FOB Tanjung Priok / CIF Hamburg",
    customsNote: "Strict moisture barrier packaging with 12 desiccant bags per 40ft container."
  },
  "au-syd": {
    portName: "Port of Sydney / Melbourne (Australia)",
    transitDays: "12 - 16 Days",
    estFreight20ft: "$1,100 - $1,450",
    estFreight40ft: "$1,800 - $2,300",
    incoterms: "FOB Jakarta / CIF Sydney",
    customsNote: "Complies with Australian Biosecurity (DAFF). Methyl Bromide fumigation with certificate."
  },
  "au-per": {
    portName: "Port of Fremantle / Perth (Western Australia)",
    transitDays: "9 - 12 Days",
    estFreight20ft: "$950 - $1,250",
    estFreight40ft: "$1,550 - $1,950",
    incoterms: "FOB Jakarta / CIF Fremantle",
    customsNote: "Direct fast route from Tanjung Priok Port."
  },
  "asia-sg": {
    portName: "Port of Singapore (Direct Short Sea)",
    transitDays: "3 - 5 Days",
    estFreight20ft: "$450 - $650",
    estFreight40ft: "$750 - $1,050",
    incoterms: "FOB / CIF Singapore",
    customsNote: "Form D (ASEAN Free Trade Area) for 0% preferential tariff."
  },
  "asia-tok": {
    portName: "Port of Tokyo / Yokohama (Japan)",
    transitDays: "11 - 15 Days",
    estFreight20ft: "$900 - $1,250",
    estFreight40ft: "$1,450 - $1,900",
    incoterms: "FOB Jakarta / CIF Tokyo",
    customsNote: "IJEPA Form J for 0% duty."
  },
  "me-dub": {
    portName: "Port of Jebel Ali, Dubai (UAE)",
    transitDays: "15 - 19 Days",
    estFreight20ft: "$1,250 - $1,600",
    estFreight40ft: "$2,050 - $2,550",
    incoterms: "FOB Jakarta / CIF Jebel Ali",
    customsNote: "Chamber of Commerce legalized Certificate of Origin & commercial invoice."
  }
};

const CURRENCIES = {
  USD: { symbol: "$", rate: 1.0 },
  EUR: { symbol: "€", rate: 0.92 },
  AUD: { symbol: "A$", rate: 1.52 },
  GBP: { symbol: "£", rate: 0.78 }
};
let currentCurrency = localStorage.getItem("rre_currency") || "USD";

function formatPrice(usdAmount) {
  const curr = CURRENCIES[currentCurrency] || CURRENCIES.USD;
  const converted = Math.round(usdAmount * curr.rate);
  return `${curr.symbol}${converted.toLocaleString()}`;
}

// RFQ Cart
let rfqCart = JSON.parse(localStorage.getItem("rre_rfq_cart") || "[]");

function saveCart() {
  localStorage.setItem("rre_rfq_cart", JSON.stringify(rfqCart));
  updateCartUI();
}

function addToRFQ(productId, customQty) {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;
  const existing = rfqCart.find(item => item.id === productId);
  const qtyToAdd = customQty || product.moq;

  if (existing) {
    existing.qty += qtyToAdd;
  } else {
    rfqCart.push({
      id: product.id,
      name: product.name,
      basePriceUSD: product.basePriceUSD,
      cbm: product.cbm,
      qty: qtyToAdd,
      moq: product.moq,
      image: product.image
    });
  }
  saveCart();
  showToast(`Added ${qtyToAdd}x "${product.name}" to Quotation List`);
}

function updateCartQty(productId, delta) {
  const item = rfqCart.find(i => i.id === productId);
  if (!item) return;
  item.qty += delta;
  if (item.qty < item.moq) item.qty = item.moq;
  saveCart();
}

function removeFromRFQ(productId) {
  rfqCart = rfqCart.filter(i => i.id !== productId);
  saveCart();
}

function clearRFQ() {
  rfqCart = [];
  saveCart();
}

function updateCartUI() {
  const countBadges = document.querySelectorAll(".badge-rfq-count");
  const totalCount = rfqCart.reduce((sum, item) => sum + item.qty, 0);
  countBadges.forEach(b => (b.textContent = totalCount));

  const drawerContainer = document.getElementById("rfqDrawerItems");
  const totalValueEl = document.getElementById("rfqTotalValue");
  const totalCbmEl = document.getElementById("rfqTotalCbm");
  const containerFillEl = document.getElementById("rfqContainerFill");

  if (!drawerContainer) return;

  if (rfqCart.length === 0) {
    drawerContainer.innerHTML = `<div style="text-align: center; color: var(--text-muted); padding: 50px 0;">Your RFQ inquiry list is empty.</div>`;
    if (totalValueEl) totalValueEl.textContent = formatPrice(0);
    if (totalCbmEl) totalCbmEl.textContent = "0.00 CBM";
    if (containerFillEl) containerFillEl.textContent = "0% of 20ft Container";
    return;
  }

  let totalUSD = 0;
  let totalCBM = 0;

  drawerContainer.innerHTML = rfqCart.map(item => {
    const itemTotalUSD = item.basePriceUSD * item.qty;
    const itemCBM = (item.cbm * item.qty).toFixed(2);
    totalUSD += itemTotalUSD;
    totalCBM += item.cbm * item.qty;

    return `
      <div class="rfq-item">
        <img src="${item.image}" alt="${item.name}" class="rfq-item-img" />
        <div style="flex-grow: 1;">
          <h4 style="font-size: 13.5px;">${item.name}</h4>
          <p style="font-size: 12px; color: var(--text-muted);">
            ${formatPrice(item.basePriceUSD)} x ${item.qty} pcs = <strong>${formatPrice(itemTotalUSD)}</strong> | ${itemCBM} CBM
          </p>
          <div style="display: flex; gap: 8px; align-items: center; margin-top: 6px;">
            <button onclick="updateCartQty('${item.id}', -5)" style="width: 22px; height: 22px; cursor: pointer;">-</button>
            <span style="font-size: 12px; font-weight: 600;">${item.qty} pcs</span>
            <button onclick="updateCartQty('${item.id}', 5)" style="width: 22px; height: 22px; cursor: pointer;">+</button>
            <button onclick="removeFromRFQ('${item.id}')" style="background:none; border:none; color:red; font-size:11px; cursor:pointer; margin-left:auto;">Remove</button>
          </div>
        </div>
      </div>
    `;
  }).join("");

  if (totalValueEl) totalValueEl.textContent = formatPrice(totalUSD);
  if (totalCbmEl) totalCbmEl.textContent = `${totalCBM.toFixed(2)} CBM`;

  if (containerFillEl) {
    let percent20ft = Math.round((totalCBM / 28) * 100);
    if (percent20ft <= 100) {
      containerFillEl.textContent = `${percent20ft}% of 20ft Container (~28 CBM)`;
    } else {
      let percent40ft = Math.round((totalCBM / 68) * 100);
      containerFillEl.textContent = `${percent40ft}% of 40ft High Cube (~68 CBM)`;
    }
  }
}

function sendWhatsAppRFQ() {
  if (rfqCart.length === 0) {
    alert("Please add at least one product to your quotation list.");
    return;
  }
  let totalUSD = 0;
  let totalCBM = 0;
  let itemsList = "";

  rfqCart.forEach((item, index) => {
    totalUSD += item.basePriceUSD * item.qty;
    totalCBM += item.cbm * item.qty;
    itemsList += `${index + 1}. ${item.name} - ${item.qty} pcs (~$${item.basePriceUSD * item.qty})\n`;
  });

  const msg = `Hello Mr. Ridwan,\n\nI would like to request an official wholesale quotation for:\n\n${itemsList}\nTotal Volume: ~${totalCBM.toFixed(2)} CBM\nEstimated Total: ~${formatPrice(totalUSD)} (FOB Jakarta)\n\nPlease advise delivery schedule. Thank you!`;
  window.open(`https://wa.me/6281234567890?text=${encodeURIComponent(msg)}`, "_blank");
}

function showToast(message) {
  let toast = document.getElementById("siteToast");
  if (!toast) {
    toast = document.createElement("div");
    toast.id = "siteToast";
    toast.className = "toast";
    document.body.appendChild(toast);
  }
  toast.innerHTML = `✓ ${message}`;
  toast.classList.add("show");
  setTimeout(() => toast.classList.remove("show"), 3200);
}

function updateShippingEstimator() {
  const destSelect = document.getElementById("shippingDestSelect");
  const sizeSelect = document.getElementById("containerSizeSelect");
  if (!destSelect || !sizeSelect) return;

  const data = SHIPPING_DESTINATIONS[destSelect.value];
  if (!data) return;

  const portDisplay = document.getElementById("calcDestPort");
  const transitDisplay = document.getElementById("calcTransitDays");
  const freightDisplay = document.getElementById("calcEstFreight");
  const customsDisplay = document.getElementById("calcCustomsNote");

  if (portDisplay) portDisplay.textContent = data.portName;
  if (transitDisplay) transitDisplay.textContent = data.transitDays;
  if (customsDisplay) customsDisplay.textContent = data.customsNote;

  if (freightDisplay) {
    if (sizeSelect.value === "20ft") {
      freightDisplay.textContent = data.estFreight20ft + " (20ft FCL)";
    } else if (sizeSelect.value === "40ft") {
      freightDisplay.textContent = data.estFreight40ft + " (40ft HC)";
    } else {
      freightDisplay.textContent = "$190 - $260 / CBM (LCL Shared)";
    }
  }
}

function renderProductGrid(filterCategory = "all", filterStock = "all", containerId = "productGridContainer") {
  const container = document.getElementById(containerId);
  if (!container) return;

  const filtered = PRODUCTS.filter(p => {
    const matchCat = filterCategory === "all" || p.category === filterCategory;
    const matchStock = filterStock === "all" || p.stockStatus === filterStock;
    return matchCat && matchStock;
  });

  container.innerHTML = filtered.map(p => {
    const isReady = p.stockStatus === "ready";
    const badgeClass = isReady ? "badge-ready" : "badge-order";
    const dots = p.finishes.map(f => `<span class="variant-dot" style="background: ${f.hex};" title="${f.name}"></span>`).join("");

    return `
      <div class="product-card">
        <div class="product-media">
          <img src="${p.image}" alt="${p.name}" />
          <div class="product-badge-float">
            <span class="badge ${badgeClass}">${p.stockBadge}</span>
          </div>
          <div class="product-moq-float">MOQ: ${p.moq} pcs</div>
        </div>

        <div class="product-content">
          <div class="product-category">${p.categoryLabel}</div>
          <h3 class="product-title">${p.name}</h3>
          
          <div class="product-specs">
            <span class="spec-item">📏 ${p.dimensions}</span>
            <span class="spec-item">📦 ${p.cbm} CBM</span>
            <span class="spec-item">⏱️ ${p.leadTime}</span>
          </div>

          <div class="product-variants-preview">
            ${dots}
            <span style="font-size: 11.5px; color: var(--text-muted); margin-left: 4px;">${p.finishes.length} finishes</span>
          </div>

          <div class="product-footer">
            <div class="product-price-box">
              <span class="price-label">FOB Jakarta</span>
              <span class="price-value">${formatPrice(p.basePriceUSD)}</span>
            </div>
            <button class="btn btn-primary btn-sm" onclick="addToRFQ('${p.id}')">
              + Quote
            </button>
          </div>
        </div>
      </div>
    `;
  }).join("");
}

function initFaqAccordion() {
  document.querySelectorAll(".faq-question").forEach(q => {
    q.addEventListener("click", () => {
      const item = q.parentElement;
      item.classList.toggle("active");
    });
  });

  const searchInput = document.getElementById("faqSearchInput");
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      const query = e.target.value.toLowerCase();
      document.querySelectorAll(".faq-item").forEach(item => {
        item.style.display = item.textContent.toLowerCase().includes(query) ? "block" : "none";
      });
    });
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const drawer = document.getElementById("rfqDrawer");
  const overlay = document.getElementById("rfqOverlay");
  const openButtons = document.querySelectorAll(".js-open-rfq");
  const closeBtn = document.getElementById("rfqDrawerClose");

  function openDrawer() { if (drawer && overlay) { drawer.classList.add("open"); overlay.classList.add("open"); } }
  function closeDrawer() { if (drawer && overlay) { drawer.classList.remove("open"); overlay.classList.remove("open"); } }

  openButtons.forEach(b => b.addEventListener("click", openDrawer));
  if (closeBtn) closeBtn.addEventListener("click", closeDrawer);
  if (overlay) overlay.addEventListener("click", closeDrawer);

  const currencySelect = document.getElementById("currencySelect");
  if (currencySelect) {
    currencySelect.value = currentCurrency;
    currencySelect.addEventListener("change", (e) => {
      currentCurrency = e.target.value;
      localStorage.setItem("rre_currency", currentCurrency);
      updateCartUI();
      renderProductGrid();
    });
  }

  const mobileToggle = document.querySelector(".mobile-toggle");
  const navMenu = document.querySelector(".nav-menu");
  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener("click", () => navMenu.classList.toggle("mobile-open"));
  }

  updateCartUI();
  updateShippingEstimator();
  initFaqAccordion();
});