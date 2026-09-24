document.addEventListener("DOMContentLoaded", () => {
  renderHeader();
  renderSingleProducts();
  renderComboProducts();
  renderFeatures();
  renderFooter();
});

function getWhatsAppLink(message) {
  const phone = petifyData.contact.whatsappNumber;
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}

// function renderHeader() {
//   document.getElementById("brand-title").textContent = petifyData.header.title;
//   document.getElementById("brand-tagline").textContent = petifyData.header.tagline;

//   const pillsContainer = document.getElementById("hero-pills");
//   pillsContainer.innerHTML = petifyData.header.pills
//     .map(pill => `<span class="pill">${pill}</span>`)
//     .join("");
// }

//header with logo.png
function renderHeader() {
  const brandTitleEl = document.getElementById("brand-title");
  brandTitleEl.innerHTML = `
    <a href="#" id="logo-link" title="Scroll to top">
      <img src="${petifyData.header.logoUrl}" alt="Petify Logo" class="brand-logo" id="main-logo" oncontextmenu="return false;">
    </a>
  `;

  // Attach right-click prevention directly via JavaScript
  const logoImg = document.getElementById("main-logo");
  logoImg.addEventListener("contextmenu", (e) => {
    e.preventDefault(); // Blocks the right-click dropdown menu
  });

  // Attach smooth-scroll click listener
  document.getElementById("logo-link").addEventListener("click", (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });

  document.getElementById("brand-tagline").textContent = petifyData.header.tagline;

  const pillsContainer = document.getElementById("hero-pills");
  pillsContainer.innerHTML = petifyData.header.pills
    .map(pill => `<span class="pill">${pill}</span>`)
    .join("");
}

function renderSingleProducts() {
  const container = document.getElementById("single-products-grid");
  container.innerHTML = petifyData.singleProducts
    .map(product => `
      <div class="card">
        <div>
          <span class="card-badge">${product.badge}</span>
          <h3>${product.title}</h3>
          <p>${product.description}</p>
          <ul class="specs">
            ${product.specs.map(spec => `<li>${spec}</li>`).join("")}
          </ul>
        </div>
        <a href="${getWhatsAppLink(product.defaultWhatsappMsg)}" class="btn" target="_blank" rel="noopener noreferrer">Order via WhatsApp</a>
      </div>
    `)
    .join("");
}

function renderComboProducts() {
  const container = document.getElementById("combo-products-grid");
  container.innerHTML = petifyData.comboProducts
    .map(combo => `
      <div class="card combo-card">
        <span class="save-tag">${combo.saveTag}</span>
        <div>
          <span class="card-badge">${combo.badge}</span>
          <h3>${combo.title}</h3>
          <p>${combo.description}</p>
        </div>
        <div class="price-box">
          <span class="price">${combo.price}</span>
          <span class="old-price">${combo.oldPrice}</span>
        </div>
        <a href="${getWhatsAppLink(combo.defaultWhatsappMsg)}" class="btn" target="_blank" rel="noopener noreferrer">Order Combo</a>
      </div>
    `)
    .join("");
}

function renderFeatures() {
  const container = document.getElementById("features-grid");
  container.innerHTML = petifyData.features
    .map(feature => `
      <div class="feature-item">
        <h4>${feature.title}</h4>
        <p>${feature.description}</p>
      </div>
    `)
    .join("");
}

function renderFooter() {
  const contact = petifyData.contact;
  document.getElementById("footer-location").textContent = contact.location;
  
  const contactContainer = document.getElementById("footer-contact");
  contactContainer.innerHTML = `
    <p>Phone: <a href="tel:+${contact.whatsappNumber}">${contact.phoneDisplay}</a></p>
    <p>Email: <a href="mailto:${contact.email}">${contact.email}</a></p>
  `;
}