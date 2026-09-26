// A tiny gray "no image" box shown when a product has no images yet,
// or when an image file is missing/broken. No extra image file needed.
const PLACEHOLDER_IMG =
  "data:image/svg+xml;charset=UTF-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300'%3E%3Crect width='100%25' height='100%25' fill='%23e2e8f0'/%3E%3Ctext x='50%25' y='50%25' fill='%2394a3b8' font-family='sans-serif' font-size='16' text-anchor='middle' dy='.3em'%3ENo Image%3C/text%3E%3C/svg%3E";

document.addEventListener("DOMContentLoaded", () => {
  renderHeader();
  renderProducts();
  renderFeatures();
  renderFooter();
});

function getWhatsAppLink(message) {
  const phone = petifyData.contact.whatsappNumber;
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}

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

  // Render Category Hero Pills
  const pillsContainer = document.getElementById("hero-pills");
  pillsContainer.innerHTML = petifyData.header.pills
    .map(pill => `<span class="pill">${pill}</span>`)
    .join("");
}

// Builds the photo area for a card: a carousel when there's more than
// one image (prev/next buttons + position dots), a single plain image
// when there's just one, or a placeholder when there are none.
function renderGallery(product) {
  const images = product.images && product.images.length ? product.images : [];

  if (images.length === 0) {
    return `
      <div class="card-gallery">
        <div class="carousel-images">
          <img src="${PLACEHOLDER_IMG}" alt="${product.title}" class="card-main-image active">
        </div>
      </div>
    `;
  }

  const slidesHtml = images
    .map((img, i) => `
      <img
        src="${img}"
        alt="${product.title} photo ${i + 1}"
        class="card-main-image${i === 0 ? " active" : ""}"
        onerror="this.onerror=null; this.src='${PLACEHOLDER_IMG}';"
      >
    `)
    .join("");

  const controlsHtml = images.length > 1
    ? `
      <button class="carousel-btn prev" onclick="changeImage('${product.id}', -1)" aria-label="Previous photo">&#10094;</button>
      <button class="carousel-btn next" onclick="changeImage('${product.id}', 1)" aria-label="Next photo">&#10095;</button>
    `
    : "";

  const dotsHtml = images.length > 1
    ? `<div class="dots">${images.map((_, i) => `<span class="dot${i === 0 ? " active" : ""}"></span>`).join("")}</div>`
    : "";

  return `
    <div class="card-gallery" id="gallery-${product.id}">
      <div class="carousel-images">
        ${slidesHtml}
        ${controlsHtml}
      </div>
      ${dotsHtml}
    </div>
  `;
}

// Called by the prev/next buttons. direction is -1 or 1.
function changeImage(productId, direction) {
  const gallery = document.getElementById(`gallery-${productId}`);
  const slides = [...gallery.querySelectorAll(".card-main-image")];
  const dots = [...gallery.querySelectorAll(".dot")];

  const currentIndex = slides.findIndex(img => img.classList.contains("active"));
  const nextIndex = (currentIndex + direction + slides.length) % slides.length;

  slides[currentIndex].classList.remove("active");
  slides[nextIndex].classList.add("active");

  if (dots.length) {
    dots[currentIndex].classList.remove("active");
    dots[nextIndex].classList.add("active");
  }
}

function renderSingleCard(product) {
  return `
    <div class="card">
      ${renderGallery(product)}
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
  `;
}

function renderComboCard(combo) {
  return `
    <div class="card combo-card">
      <span class="save-tag">${combo.saveTag}</span>
      ${renderGallery(combo)}
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
  `;
}

// Reads the single `products` array and sorts each item into the
// right grid based on its `type` — this is the only function that
// needs to know both card layouts exist.
function renderProducts() {
  const singleContainer = document.getElementById("single-products-grid");
  const comboContainer = document.getElementById("combo-products-grid");

  singleContainer.innerHTML = petifyData.products
    .filter(p => p.type === "single")
    .map(renderSingleCard)
    .join("");

  comboContainer.innerHTML = petifyData.products
    .filter(p => p.type === "combo")
    .map(renderComboCard)
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
