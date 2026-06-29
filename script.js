/* ================================================
   Pet Haven - Main Script
   ================================================ */

/* ------------------------------------------------
   PRODUCTS DATA (20+ products)
   ------------------------------------------------ */
const PRODUCTS = [
  // --- DRY FOOD ---
  {
    id: 1, name: "Royal Canin Maxi Adult Dog", category: "Dry Food", pet: "Dog",
    price: 285, badge: "Best Seller",
    desc: "Complete nutrition for adult large breed dogs. Supports joints and digestive health.",
    img: "https://images.unsplash.com/photo-1568640347023-a616a30bc3bd?w=400&q=80"
  },
  {
    id: 2, name: "Whiskas Dry Cat Food Salmon", category: "Dry Food", pet: "Cat",
    price: 145, badge: null,
    desc: "Crunchy kibble with real salmon flavor, enriched with vitamins and minerals.",
    img: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=400&q=80"
  },
  {
    id: 3, name: "Hill's Science Diet Adult Dog", category: "Dry Food", pet: "Dog",
    price: 320, badge: "Premium",
    desc: "Clinically proven antioxidants for a strong immune system. Easy to digest.",
    img: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=400&q=80"
  },
  // --- WET FOOD ---
  {
    id: 4, name: "Fancy Feast Tuna & Shrimp", category: "Wet Food", pet: "Cat",
    price: 28, badge: null,
    desc: "Delicate shreds of real tuna and shrimp in a savory broth cats love.",
    img: "https://images.unsplash.com/photo-1574144611937-0df059b5ef3e?w=400&q=80"
  },
  {
    id: 5, name: "Pedigree Beef Chunks in Gravy", category: "Wet Food", pet: "Dog",
    price: 35, badge: "New",
    desc: "Juicy beef chunks in rich gravy – a complete and balanced meal for adult dogs.",
    img: "https://images.unsplash.com/photo-1568640347023-a616a30bc3bd?w=400&q=80"
  },
  // --- CAT LITTER ---
  {
    id: 6, name: "Catsan Ultra Clumping Litter", category: "Cat Litter", pet: "Cat",
    price: 110, badge: "Top Rated",
    desc: "Odor-neutralizing mineral granules with clumping action for easy cleaning.",
    img: "https://images.unsplash.com/photo-1548767797-d8c844163c4a?w=400&q=80"
  },
  {
    id: 7, name: "Ever Clean Scented Litter 6L", category: "Cat Litter", pet: "Cat",
    price: 135, badge: null,
    desc: "Superior clumping with carbon technology for outstanding odor elimination.",
    img: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=400&q=80"
  },
  // --- TREATS ---
  {
    id: 8, name: "Temptations Cat Treats Chicken", category: "Treats", pet: "Cat",
    price: 55, badge: null,
    desc: "Crunchy on the outside, soft on the inside. Irresistible chicken flavor.",
    img: "https://images.unsplash.com/photo-1574144611937-0df059b5ef3e?w=400&q=80"
  },
  {
    id: 9, name: "Milk-Bone Dog Biscuits Variety", category: "Treats", pet: "Dog",
    price: 75, badge: "Popular",
    desc: "Classic crunchy dog treats with essential vitamins and minerals. 12 flavors.",
    img: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=400&q=80"
  },
  // --- TOYS ---
  {
    id: 10, name: "Kong Classic Dog Toy", category: "Toys", pet: "Dog",
    price: 165, badge: "Best Seller",
    desc: "Durable natural rubber toy. Stuff with treats to keep your dog busy for hours.",
    img: "https://images.unsplash.com/photo-1601758125946-6ec2ef64daf8?w=400&q=80"
  },
  {
    id: 11, name: "Cat Feather Wand Interactive", category: "Toys", pet: "Cat",
    price: 45, badge: null,
    desc: "Stimulating feather wand that triggers natural hunting instincts in cats.",
    img: "https://images.unsplash.com/photo-1574158622682-e40e69881006?w=400&q=80"
  },
  {
    id: 12, name: "Rope Tug of War Dog Toy", category: "Toys", pet: "Dog",
    price: 80, badge: null,
    desc: "Multi-color braided cotton rope toy. Great for interactive play and dental health.",
    img: "https://images.unsplash.com/photo-1601758125946-6ec2ef64daf8?w=400&q=80"
  },
  // --- COLLARS ---
  {
    id: 13, name: "Reflective Safety Dog Collar", category: "Collars", pet: "Dog",
    price: 95, badge: "New",
    desc: "360° reflective stitching for night visibility. Adjustable soft nylon, sizes S–XL.",
    img: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=400&q=80"
  },
  {
    id: 14, name: "Leather Cat Breakaway Collar", category: "Collars", pet: "Cat",
    price: 65, badge: null,
    desc: "Safety breakaway buckle keeps cats safe. Genuine leather with bell.",
    img: "https://images.unsplash.com/photo-1548767797-d8c844163c4a?w=400&q=80"
  },
  // --- LEASHES ---
  {
    id: 15, name: "Retractable Dog Leash 5m", category: "Leashes", pet: "Dog",
    price: 120, badge: null,
    desc: "One-button brake and lock system. Durable tape cord for dogs up to 50 kg.",
    img: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=400&q=80"
  },
  // --- BOWLS ---
  {
    id: 16, name: "Stainless Steel Double Bowl Set", category: "Bowls", pet: "Dog",
    price: 85, badge: null,
    desc: "Anti-slip rubber base, rust-proof stainless steel bowls. Dishwasher safe.",
    img: "https://images.unsplash.com/photo-1568640347023-a616a30bc3bd?w=400&q=80"
  },
  {
    id: 17, name: "Elevated Cat Feeding Station", category: "Bowls", pet: "Cat",
    price: 110, badge: "Premium",
    desc: "Raised ceramic bowls reduce neck strain. Stylish bamboo stand.",
    img: "https://images.unsplash.com/photo-1574144611937-0df059b5ef3e?w=400&q=80"
  },
  // --- BEDS ---
  {
    id: 18, name: "Plush Orthopedic Dog Bed XL", category: "Beds", pet: "Dog",
    price: 350, badge: "Top Rated",
    desc: "Memory foam base with ultra-soft plush cover. Waterproof inner liner.",
    img: "https://images.unsplash.com/photo-1601758125946-6ec2ef64daf8?w=400&q=80"
  },
  {
    id: 19, name: "Cozy Cave Cat Bed", category: "Beds", pet: "Cat",
    price: 185, badge: null,
    desc: "Hooded igloo design provides warmth and security. Machine washable fleece.",
    img: "https://images.unsplash.com/photo-1574158622682-e40e69881006?w=400&q=80"
  },
  // --- GROOMING ---
  {
    id: 20, name: "Self-Cleaning Slicker Brush", category: "Grooming Products", pet: "Dog",
    price: 130, badge: null,
    desc: "Fine wire bristles detangle and de-shed. Push button retracts bristles to clean.",
    img: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=400&q=80"
  },
  {
    id: 21, name: "Oatmeal Pet Shampoo 500ml", category: "Grooming Products", pet: "Dog",
    price: 90, badge: "Natural",
    desc: "Soothing oatmeal formula for sensitive skin. Paraben-free, tear-free, natural scent.",
    img: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=400&q=80"
  },
  // --- CARRIERS ---
  {
    id: 22, name: "Airline-Approved Pet Carrier", category: "Carriers", pet: "Cat",
    price: 280, badge: "New",
    desc: "Meets most airline cabin requirements. Mesh windows for airflow. Fits under seat.",
    img: "https://images.unsplash.com/photo-1548767797-d8c844163c4a?w=400&q=80"
  },
  // --- ACCESSORIES ---
  {
    id: 23, name: "GPS Pet Tracker Tag", category: "Accessories", pet: "Dog",
    price: 420, badge: "Premium",
    desc: "Real-time GPS tracking via smartphone app. Lightweight, waterproof, long battery.",
    img: "https://images.unsplash.com/photo-1601758125946-6ec2ef64daf8?w=400&q=80"
  },
  {
    id: 24, name: "Automatic Pet Water Fountain", category: "Accessories", pet: "Cat",
    price: 195, badge: "Popular",
    desc: "2.5L capacity with triple filtration. Silent pump encourages hydration.",
    img: "https://images.unsplash.com/photo-1574158622682-e40e69881006?w=400&q=80"
  }
];

/* ------------------------------------------------
   WHATSAPP NUMBER
   ------------------------------------------------ */
const WA_NUMBER = "201234567890";

/* ------------------------------------------------
   CART SYSTEM
   - Persists to localStorage so it survives a refresh
   - Each item: { id, name, price, img, qty }
   ------------------------------------------------ */
const CART_KEY = 'petHavenCart';
let cart = loadCart();

function loadCart() {
  try {
    const saved = localStorage.getItem(CART_KEY);
    const parsed = saved ? JSON.parse(saved) : [];
    return Array.isArray(parsed) ? parsed : [];
  } catch (e) {
    return [];
  }
}

function saveCart() {
  try {
    localStorage.setItem(CART_KEY, JSON.stringify(cart));
  } catch (e) {
    /* localStorage unavailable - cart just won't persist */
  }
}

function cartTotal() {
  return cart.reduce((sum, item) => sum + item.price * item.qty, 0);
}

function cartItemCount() {
  return cart.reduce((sum, item) => sum + item.qty, 0);
}

function addToCart(id) {
  const product = PRODUCTS.find(p => p.id === id);
  if (!product) return;

  const existing = cart.find(item => item.id === id);
  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({ id: product.id, name: product.name, price: product.price, img: product.img, qty: 1 });
  }

  saveCart();
  renderCart();
  bumpCartBadge();
  showToast(`${product.name} added to cart`, '🛒');
}

function increaseQty(id) {
  const item = cart.find(item => item.id === id);
  if (!item) return;
  item.qty += 1;
  saveCart();
  renderCart();
}

function decreaseQty(id) {
  const item = cart.find(item => item.id === id);
  if (!item) return;
  item.qty -= 1;
  if (item.qty <= 0) {
    removeFromCart(id);
    return;
  }
  saveCart();
  renderCart();
}

function removeFromCart(id) {
  cart = cart.filter(item => item.id !== id);
  saveCart();
  renderCart();
}

function clearCart() {
  if (!cart.length) return;
  if (!confirm('Remove all items from your cart?')) return;
  cart = [];
  saveCart();
  renderCart();
  showToast('Cart cleared', '🗑️');
}

function bumpCartBadge() {
  const badge = document.getElementById('cartCount');
  if (!badge) return;
  badge.classList.remove('bump');
  void badge.offsetWidth; // restart animation
  badge.classList.add('bump');
}

function renderCart() {
  const badge   = document.getElementById('cartCount');
  const body    = document.getElementById('cartDrawerBody');
  const totalEl = document.getElementById('cartTotalAmount');
  const count   = cartItemCount();

  if (badge) {
    badge.textContent = count;
    badge.classList.toggle('show', count > 0);
  }

  if (totalEl) totalEl.textContent = `${cartTotal()} EGP`;

  if (!body) return;

  if (!cart.length) {
    body.innerHTML = `
      <div class="cart-empty">
        <div class="icon">🛒</div>
        <h3>Your cart is empty</h3>
        <p>Add some products to get started!</p>
      </div>`;
    return;
  }

  body.innerHTML = cart.map(item => `
    <div class="cart-item" data-id="${item.id}">
      <img class="cart-item-img" src="${item.img}" alt="${item.name}">
      <div class="cart-item-info">
        <div class="cart-item-name">${item.name}</div>
        <div class="cart-item-price">${item.price} <span>EGP</span></div>
        <div class="cart-item-controls">
          <div class="cart-qty">
            <button type="button" aria-label="Decrease quantity" onclick="decreaseQty(${item.id})">−</button>
            <span>${item.qty}</span>
            <button type="button" aria-label="Increase quantity" onclick="increaseQty(${item.id})">+</button>
          </div>
          <button type="button" class="cart-item-remove" aria-label="Remove item" onclick="removeFromCart(${item.id})">🗑️</button>
        </div>
      </div>
    </div>
  `).join('');
}

function openCart() {
  document.getElementById('cartDrawer')?.classList.add('open');
  document.getElementById('cartOverlay')?.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeCart() {
  document.getElementById('cartDrawer')?.classList.remove('open');
  document.getElementById('cartOverlay')?.classList.remove('open');
  document.body.style.overflow = '';
}

function initCart() {
  renderCart();

  const cartBtn  = document.getElementById('cartBtn');
  const overlay  = document.getElementById('cartOverlay');
  const closeBtn = document.getElementById('cartClose');
  const clearBtn = document.getElementById('cartClearBtn');

  if (cartBtn)  cartBtn.addEventListener('click', openCart);
  if (overlay)  overlay.addEventListener('click', closeCart);
  if (closeBtn) closeBtn.addEventListener('click', closeCart);
  if (clearBtn) clearBtn.addEventListener('click', clearCart);

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeCart();
  });
}

function orderCartOnWhatsApp() {
  if (!cart.length) {
    showToast('Your cart is empty!', '🛒');
    return;
  }

  const lines = cart.map((item, i) =>
    `${i + 1}- ${item.name} (x${item.qty}) — ${item.price * item.qty} EGP`
  );

  const msg = encodeURIComponent(
    `Hello, I want to order:\n\n${lines.join('\n')}\n\nTotal: ${cartTotal()} EGP`
  );

  window.open(`https://wa.me/${WA_NUMBER}?text=${msg}`, '_blank');
}

/* ------------------------------------------------
   NAVIGATION: sticky scroll + hamburger
   ------------------------------------------------ */
function initNavbar() {
  const navbar    = document.querySelector('.navbar');
  const hamburger = document.querySelector('.hamburger');
  const mobileMenu= document.querySelector('.mobile-menu');

  if (!navbar) return;

  // Sticky scroll effect
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 50);
  }, { passive: true });

  // Hamburger toggle
  if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('open');
      mobileMenu.classList.toggle('open');

      // Avoid two mobile panels open at once
      const searchBar = document.getElementById('mobileSearchBar');
      const searchToggle = document.getElementById('mobileSearchToggle');
      if (searchBar && searchBar.classList.contains('open')) {
        searchBar.classList.remove('open');
        if (searchToggle) searchToggle.setAttribute('aria-expanded', 'false');
      }
    });
  }

  // Highlight active link
  const links = document.querySelectorAll('.nav-links a, .mobile-menu a');
  const current = window.location.pathname.split('/').pop() || 'index.html';
  links.forEach(link => {
    const href = link.getAttribute('href');
    if (href === current || (current === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });
}

/* ------------------------------------------------
   SCROLL TO TOP BUTTON
   ------------------------------------------------ */
function initScrollTop() {
  const btn = document.getElementById('scrollTop');
  if (!btn) return;

  window.addEventListener('scroll', () => {
    btn.classList.toggle('visible', window.scrollY > 400);
  }, { passive: true });

  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

/* ------------------------------------------------
   LAZY LOADING IMAGES
   ------------------------------------------------ */
function initLazyLoad() {
  const images = document.querySelectorAll('img.lazy');
  if (!images.length) return;

  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.dataset.src;
          img.addEventListener('load', () => img.classList.add('loaded'), { once: true });
          io.unobserve(img);
        }
      });
    }, { rootMargin: '200px' });

    images.forEach(img => io.observe(img));
  } else {
    // Fallback
    images.forEach(img => {
      img.src = img.dataset.src;
      img.classList.add('loaded');
    });
  }
}

/* ------------------------------------------------
   TOAST NOTIFICATION
   ------------------------------------------------ */
function showToast(msg, icon = '✅') {
  let toast = document.getElementById('toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'toast';
    toast.className = 'toast';
    document.body.appendChild(toast);
  }
  toast.innerHTML = `<span>${icon}</span> ${msg}`;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 3200);
}

/* ------------------------------------------------
   PRODUCT CARD BUILDER
   ------------------------------------------------ */
function buildProductCard(product) {
  const card = document.createElement('div');
  card.className = 'product-card';
  card.dataset.category = product.category;
  card.dataset.pet = product.pet;

  card.innerHTML = `
    <div class="product-img-wrap">
      <img class="lazy" data-src="${product.img}" alt="${product.name}" loading="lazy">
      ${product.badge ? `<span class="product-badge">${product.badge}</span>` : ''}
      <span class="product-pet-badge">${product.pet === 'Dog' ? '🐶' : '🐱'} ${product.pet}</span>
    </div>
    <div class="product-body">
      <div class="product-category">${product.category}</div>
      <h3 class="product-name">${product.name}</h3>
      <p class="product-desc">${product.desc}</p>
      <div class="product-footer">
        <div class="product-price">${product.price} <span>EGP</span></div>
        <button class="btn-addcart" onclick="addToCart(${product.id})">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>
          Add to Cart
        </button>
      </div>
    </div>
  `;

  return card;
}

/* ------------------------------------------------
   HOME PAGE: Featured products (6 best sellers)
   ------------------------------------------------ */
function initHomeFeatured() {
  const grid = document.getElementById('featuredGrid');
  if (!grid) return;

  const featured = PRODUCTS.filter(p => p.badge === 'Best Seller' || p.badge === 'Top Rated' || p.badge === 'Popular').slice(0, 6);
  if (featured.length < 6) {
    // fill up to 6
    PRODUCTS.forEach(p => {
      if (featured.length < 6 && !featured.includes(p)) featured.push(p);
    });
  }

  featured.slice(0, 6).forEach((p, i) => {
    const card = buildProductCard(p);
    card.style.animationDelay = `${i * 0.08}s`;
    grid.appendChild(card);
  });

  initLazyLoad();
}

/* ------------------------------------------------
   PRODUCTS PAGE: render + search + filter
   ------------------------------------------------ */
function initProductsPage() {
  const grid   = document.getElementById('productsGrid');
  const search = document.getElementById('productSearch');
  const filters= document.querySelectorAll('.filter-btn');
  const count  = document.getElementById('productCount');

  if (!grid) return;

  let activeFilter = 'all';
  let searchTerm   = '';

  function render() {
    grid.innerHTML = '';

    let filtered = PRODUCTS.filter(p => {
      const matchCat = activeFilter === 'all'
        || p.category.toLowerCase().replace(/\s+/g, '-') === activeFilter
        || (activeFilter === 'cats' && p.pet === 'Cat')
        || (activeFilter === 'dogs' && p.pet === 'Dog');

      const matchSearch = !searchTerm
        || p.name.toLowerCase().includes(searchTerm)
        || p.category.toLowerCase().includes(searchTerm)
        || p.desc.toLowerCase().includes(searchTerm);

      return matchCat && matchSearch;
    });

    if (count) count.textContent = `${filtered.length} product${filtered.length !== 1 ? 's' : ''}`;

    if (!filtered.length) {
      grid.innerHTML = `
        <div class="no-results">
          <div class="icon">🐾</div>
          <h3>No products found</h3>
          <p>Try a different search term or category filter.</p>
        </div>`;
      return;
    }

    filtered.forEach((p, i) => {
      const card = buildProductCard(p);
      card.style.animationDelay = `${i * 0.05}s`;
      grid.appendChild(card);
    });

    initLazyLoad();
  }

  // Filter buttons
  filters.forEach(btn => {
    btn.addEventListener('click', () => {
      filters.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activeFilter = btn.dataset.filter;
      render();
    });
  });

  // Search
  if (search) {
    search.addEventListener('input', () => {
      searchTerm = search.value.trim().toLowerCase();
      render();
    });
  }

  // Category from URL param (coming from home page categories)
  const params = new URLSearchParams(window.location.search);
  const catParam = params.get('category');
  if (catParam) {
    const matchBtn = [...filters].find(b => b.dataset.filter === catParam);
    if (matchBtn) {
      matchBtn.click();
    }
  }

  render();
}

/* ------------------------------------------------
   HERO background zoom
   ------------------------------------------------ */
function initHero() {
  const heroBg = document.querySelector('.hero-bg');
  if (!heroBg) return;
  setTimeout(() => heroBg.classList.add('loaded'), 100);
}

/* ------------------------------------------------
   CONTACT FORM
   ------------------------------------------------ */
function initContactForm() {
  const form = document.getElementById('contactForm');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    showToast('Message sent! We\'ll reply soon. 😊', '📨');
    form.reset();
  });
}

/* ------------------------------------------------
   NAV SEARCH → redirect to products page
   ------------------------------------------------ */
function initNavSearch() {
  const navSearchForm = document.getElementById('navSearchForm');
  const mobileSearchForm = document.getElementById('mobileSearchForm');
  const mobileHeaderSearchForm = document.getElementById('mobileHeaderSearchForm');

  function handleSearch(input) {
    const val = input.value.trim();
    if (val) {
      window.location.href = `products.html?search=${encodeURIComponent(val)}`;
    }
  }

  [navSearchForm, mobileSearchForm, mobileHeaderSearchForm].forEach(form => {
    if (!form) return;
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      handleSearch(form.querySelector('input'));
    });
  });

  // Pre-fill search from URL
  const params = new URLSearchParams(window.location.search);
  const searchParam = params.get('search');
  if (searchParam) {
    const productSearch = document.getElementById('productSearch');
    if (productSearch) {
      productSearch.value = searchParam;
    }
  }
}

/* ------------------------------------------------
   MOBILE HEADER SEARCH ICON → slide-down search bar
   (mobile only; desktop search bar is unaffected)
   ------------------------------------------------ */
function initMobileSearchToggle() {
  const toggleBtn = document.getElementById('mobileSearchToggle');
  const searchBar = document.getElementById('mobileSearchBar');
  if (!toggleBtn || !searchBar) return;

  toggleBtn.addEventListener('click', () => {
    const isOpen = searchBar.classList.toggle('open');
    toggleBtn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');

    // Avoid two mobile panels open at once
    const hamburger = document.querySelector('.hamburger');
    const mobileMenu = document.querySelector('.mobile-menu');
    if (isOpen && hamburger && mobileMenu) {
      hamburger.classList.remove('open');
      mobileMenu.classList.remove('open');
    }

    if (isOpen) {
      const input = searchBar.querySelector('input');
      if (input) setTimeout(() => input.focus(), 300);
    }
  });
}

/* ------------------------------------------------
   ANIMATE ON SCROLL (simple observer)
   ------------------------------------------------ */
function initScrollReveal() {
  const elements = document.querySelectorAll('.why-card, .category-card, .team-card');
  if (!elements.length) return;

  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  elements.forEach((el, i) => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(24px)';
    el.style.transition = `opacity 0.5s ease ${i * 0.06}s, transform 0.5s ease ${i * 0.06}s`;
    io.observe(el);
  });
}

/* ------------------------------------------------
   BOOT
   ------------------------------------------------ */
document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initCart();
  initScrollTop();
  initHero();
  initHomeFeatured();
  initProductsPage();
  initContactForm();
  initNavSearch();
  initMobileSearchToggle();
  initScrollReveal();

  // Handle URL search param for products page
  const params = new URLSearchParams(window.location.search);
  const searchParam = params.get('search');
  if (searchParam && document.getElementById('productSearch')) {
    document.getElementById('productSearch').value = searchParam;
    // Trigger input event to filter
    document.getElementById('productSearch').dispatchEvent(new Event('input'));
  }
});
