/* ============================================================
   BIRM® — App
   ============================================================ */

/* ----------------------------------------
   Catálogo: 12 SKUs
   ---------------------------------------- */
const PRODUCTS = [
  {
    id: 'prev-90',
    line: 'preventivo',
    lineName: 'Preventivo',
    name: 'BIRM Preventivo',
    format: '90 Cápsulas',
    price: 36.50,
    image: 'assets/productos/preventivo.jpg',
    accent: '#3aa380',
  },
  {
    id: 'prev-120',
    line: 'preventivo',
    lineName: 'Preventivo',
    name: 'BIRM Preventivo Solución Oral',
    format: '120 ml',
    price: 26.00,
    image: 'assets/productos/preventivo.jpg',
    accent: '#3aa380',
  },
  {
    id: 'prev-240',
    line: 'preventivo',
    lineName: 'Preventivo',
    name: 'BIRM Preventivo Solución Oral',
    format: '240 ml',
    price: 46.50,
    image: 'assets/productos/preventivo.jpg',
    accent: '#3aa380',
  },
  {
    id: 'conc-90',
    line: 'concentrado',
    lineName: 'Concentrado',
    name: 'BIRM Concentrado',
    format: '90 Cápsulas',
    price: 136.00,
    image: 'assets/productos/concentrado.jpg',
    accent: '#1c5a45',
  },
  {
    id: 'conc-120',
    line: 'concentrado',
    lineName: 'Concentrado',
    name: 'BIRM Concentrado Solución Oral',
    format: '120 ml',
    price: 126.00,
    image: 'assets/productos/concentrado.jpg',
    accent: '#1c5a45',
  },
  {
    id: 'hh-30',
    line: 'hh',
    lineName: 'HH',
    name: 'HH Healing Helper',
    format: '30 Tabletas',
    price: 18.70,
    image: 'assets/productos/hh.jpg',
    accent: '#3a8a96',
  },
  {
    id: 'hh-60',
    line: 'hh',
    lineName: 'HH',
    name: 'HH Healing Helper',
    format: '60 Tabletas',
    price: 34.97,
    image: 'assets/productos/hh.jpg',
    accent: '#3a8a96',
  },
  {
    id: 'kids-120',
    line: 'kids',
    lineName: 'Kids',
    name: 'BIRM Kids Solución Oral',
    format: '120 ml',
    price: 24.00,
    image: 'assets/productos/kids.jpg',
    accent: '#e8a847',
  },
  {
    id: 'sport-90',
    line: 'sport',
    lineName: 'Sport',
    name: 'BIRM Sport',
    format: '90 Cápsulas · +cacao',
    price: 42.00,
    image: 'assets/productos/sport.jpg',
    accent: '#b8761e',
  },
  {
    id: 'nace-30',
    line: 'cosmetica',
    lineName: 'Cosmética',
    name: 'Crema NACE',
    format: '30 g',
    price: 19.20,
    image: 'assets/productos/viva.jpg',
    accent: '#5ec4b5',
  },
  {
    id: 'viva-sh',
    line: 'cosmetica',
    lineName: 'Cosmética',
    name: 'Shampoo VIVA',
    format: '200 ml',
    price: 12.65,
    image: 'assets/productos/viva.jpg',
    accent: '#5ec4b5',
  },
  {
    id: 'viva-ac',
    line: 'cosmetica',
    lineName: 'Cosmética',
    name: 'Acondicionador VIVA',
    format: '200 ml',
    price: 11.29,
    image: 'assets/productos/viva.jpg',
    accent: '#5ec4b5',
  },
];
window.PRODUCTS = PRODUCTS;

/* ----------------------------------------
   Líneas (6) — para el catálogo organizado por familia
   ---------------------------------------- */
const LINES = [
  {
    id: 'preventivo',
    name: 'BIRM Preventivo',
    accent: '#3aa380',
    image: 'assets/productos/preventivo.jpg',
    claim: 'Mantén tu sistema inmune en equilibrio — el escudo silencioso, todos los días.',
    skus: ['prev-90', 'prev-120', 'prev-240'],
  },
  {
    id: 'concentrado',
    name: 'BIRM Concentrado',
    accent: '#1c5a45',
    image: 'assets/productos/concentrado.jpg',
    claim: 'Apoyo reforzado para quienes lo necesitan más — máxima concentración de extracto activo.',
    skus: ['conc-90', 'conc-120'],
  },
  {
    id: 'hh',
    name: 'HH Healing Helper',
    accent: '#3a8a96',
    image: 'assets/productos/hh.jpg',
    claim: 'Alivio natural para el dolor y la inflamación, sin la dureza de los químicos.',
    skus: ['hh-30', 'hh-60'],
  },
  {
    id: 'kids',
    name: 'BIRM Kids',
    accent: '#e8a847',
    image: 'assets/productos/kids.jpg',
    claim: 'Defensas equilibradas para los más pequeños, con sabor natural.',
    skus: ['kids-120'],
  },
  {
    id: 'sport',
    name: 'BIRM Sport',
    accent: '#b8761e',
    image: 'assets/productos/sport.jpg',
    claim: 'Rendimiento y recuperación, con BIRM + cacao antioxidante.',
    skus: ['sport-90'],
  },
  {
    id: 'cosmetica',
    name: 'Cosmética VIVA & NACE',
    accent: '#5ec4b5',
    image: 'assets/productos/viva.jpg',
    claim: 'El cuidado BIRM, ahora en tu piel y tu cabello — shampoo y acondicionador VIVA, crema dermo NACE.',
    skus: ['viva-sh', 'viva-ac', 'nace-30'],
  },
];

/* ----------------------------------------
   Popups del scroll-cinema (6 momentos)
   ---------------------------------------- */
const POPUPS = [
  {
    id: 'preventivo',
    productId: 'prev-90',
    line: 'Preventivo',
    title: 'Preventivo',
    titleEm: 'cada día.',
    claim: 'Mantén tu sistema inmune en equilibrio — el escudo silencioso, todos los días.',
    benefits: [
      'Inmunomodulador natural de Dulcamara',
      'Apoya el equilibrio del sistema inmune',
      '90 cápsulas · uso continuo',
    ],
    center: 192, range: 106,
    accent: '#3aa380',
  },
  {
    id: 'kids',
    productId: 'kids-120',
    line: 'Kids',
    title: 'Para los',
    titleEm: 'más pequeños.',
    claim: 'Defensas equilibradas con sabor natural — pensado para niños desde temprana edad.',
    benefits: [
      'Sabor natural sin conservantes artificiales',
      'Apoya defensas en crecimiento',
      '120 ml · solución oral',
    ],
    center: 384, range: 106,
    accent: '#e8a847',
  },
  {
    id: 'sport',
    productId: 'sport-90',
    line: 'Sport',
    title: 'Rendimiento.',
    titleEm: 'Recuperación.',
    claim: 'BIRM + cacao antioxidante — la fórmula para quienes exigen más a su cuerpo.',
    benefits: [
      'Con cacao antioxidante puro',
      'Apoya recuperación después del esfuerzo',
      '90 cápsulas · entrenamientos exigentes',
    ],
    center: 576, range: 106,
    accent: '#b8761e',
  },
  {
    id: 'concentrado',
    productId: 'conc-90',
    line: 'Concentrado',
    title: 'Apoyo',
    titleEm: 'reforzado.',
    claim: 'Para quienes lo necesitan más — la concentración máxima de BIRM en una cápsula.',
    benefits: [
      'Concentración elevada de extracto activo',
      'Apoyo inmune reforzado',
      '90 cápsulas · indicado por especialista',
    ],
    center: 768, range: 106,
    accent: '#1c5a45',
  },
  {
    id: 'hh',
    productId: 'hh-60',
    line: 'Healing Helper',
    title: 'Alivio',
    titleEm: 'natural.',
    claim: 'HH — Healing Helper. Para el dolor y la inflamación, sin la dureza de los químicos.',
    benefits: [
      'Apoya el alivio natural de la inflamación',
      'Fórmula libre de químicos agresivos',
      '60 tabletas · uso según necesidad',
    ],
    center: 960, range: 106,
    accent: '#3a8a96',
  },
  {
    id: 'viva',
    productId: 'viva-sh',
    line: 'Cosmética VIVA',
    title: 'BIRM',
    titleEm: 'para tu piel y cabello.',
    claim: 'La ciencia de BIRM, ahora en cuidado personal — VIVA shampoo y NACE crema.',
    benefits: [
      'Shampoo revitalizante VIVA 200 ml',
      'Crema NACE 30 g — cuidado dermo',
      'Acondicionador VIVA 200 ml',
    ],
    center: 1110, range: 92,
    accent: '#5ec4b5',
  },
];

/* ----------------------------------------
   Frames manifest (6 tramos × 192 = 1152 frames webp)
   24 fps nativo extraído de los videos fuente — máxima fluidez.
   ---------------------------------------- */
const FRAMES_PER_TRAMO = 192;
const TRAMOS = 6;
const TOTAL_FRAMES = FRAMES_PER_TRAMO * TRAMOS;

function framePath(globalIdx) {
  const tramo = Math.floor(globalIdx / FRAMES_PER_TRAMO) + 1;
  const local = (globalIdx % FRAMES_PER_TRAMO) + 1;
  const n = String(local).padStart(3, '0');
  return `assets/frames/t${tramo}/${n}.webp`;
}

/* ----------------------------------------
   Estado global de cart
   ---------------------------------------- */
const CART_KEY = 'birm.cart.v1';
let cart = loadCart();
window.getCart = () => cart;

function loadCart() {
  try {
    const raw = localStorage.getItem(CART_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch { return []; }
}
function saveCart() {
  try { localStorage.setItem(CART_KEY, JSON.stringify(cart)); } catch {}
}
function addToCart(productId) {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;
  const existing = cart.find(i => i.id === productId);
  if (existing) existing.qty += 1;
  else cart.push({ id: productId, qty: 1 });
  saveCart();
  renderCart();
  bumpCartBadge();
  showToast(`${product.name} agregado`);
}
function buyNow(productId) {
  addToCart(productId);
  openCart();
  // Salta directo a la vista de checkout si está disponible
  if (typeof window.openCheckout === 'function') {
    setTimeout(() => window.openCheckout(), 200);
  }
}
function clearCart() {
  cart = [];
  saveCart();
  renderCart();
}
function removeFromCart(productId) {
  cart = cart.filter(i => i.id !== productId);
  saveCart();
  renderCart();
}
function updateQty(productId, delta) {
  const item = cart.find(i => i.id === productId);
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) cart = cart.filter(i => i.id !== productId);
  saveCart();
  renderCart();
}
function cartCount() { return cart.reduce((s, i) => s + i.qty, 0); }
function cartTotal() {
  return cart.reduce((s, i) => {
    const p = PRODUCTS.find(p => p.id === i.id);
    return s + (p ? p.price * i.qty : 0);
  }, 0);
}

/* ----------------------------------------
   Render: catálogo por línea (6 tarjetas)
   ---------------------------------------- */
function skuLabel(line, product) {
  let prefix = product.name.replace(line.name, '').trim();
  if (prefix.startsWith('—')) prefix = prefix.slice(1).trim();
  return prefix;
}

function renderCatalog() {
  const grid = document.getElementById('catalog-grid');
  if (!grid) return;
  grid.innerHTML = LINES.map(line => {
    const skus = line.skus.map(sid => PRODUCTS.find(p => p.id === sid)).filter(Boolean);
    return `
      <article class="line-card" data-line="${line.id}">
        <div class="line-card-media">
          <img src="${line.image}" alt="${line.name}" loading="lazy" />
          <span class="line-card-tag">${line.name}</span>
          <span class="line-card-count">${skus.length} ${skus.length === 1 ? 'formato' : 'formatos'}</span>
        </div>
        <div class="line-card-body">
          <h3 class="line-card-name">${line.name}</h3>
          <p class="line-card-claim">${line.claim}</p>
          <ul class="line-card-skus">
            ${skus.map(p => {
              const label = skuLabel(line, p);
              const primary = label || p.format;
              const sub = label ? p.format : '';
              return `
                <li class="sku-row">
                  <div class="sku-format">
                    ${primary}
                    ${sub ? `<span>${sub}</span>` : ''}
                  </div>
                  <div class="sku-price">$${p.price.toFixed(2)}</div>
                  <button class="sku-add" data-add="${p.id}" aria-label="Agregar ${p.name}">
                    <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.8">
                      <path d="M8 3v10M3 8h10" stroke-linecap="round" />
                    </svg>
                  </button>
                </li>
              `;
            }).join('')}
          </ul>
          <div class="line-card-actions">
            <button class="btn-line-buy" data-buy="${skus[0]?.id}">Comprar ahora</button>
            <button class="btn-line-add" data-add="${skus[0]?.id}">+ Añadir</button>
          </div>
        </div>
      </article>
    `;
  }).join('');
  grid.querySelectorAll('[data-add]').forEach(btn => {
    btn.addEventListener('click', e => {
      e.stopPropagation();
      addToCart(btn.dataset.add);
    });
  });
  grid.querySelectorAll('[data-buy]').forEach(btn => {
    btn.addEventListener('click', e => {
      e.stopPropagation();
      buyNow(btn.dataset.buy);
    });
  });
}

/* ----------------------------------------
   Render: cart drawer
   ---------------------------------------- */
function renderCart() {
  const count = cartCount();
  // Nav badge
  const navCount = document.getElementById('nav-cart-count');
  if (navCount) navCount.textContent = count;
  // Floating fab
  const fab = document.getElementById('cart-fab');
  const fabCount = document.getElementById('cart-fab-count');
  if (fabCount) fabCount.textContent = count;
  if (fab) fab.classList.toggle('is-visible', count > 0);

  const body = document.getElementById('cart-body');
  if (!body) return;

  if (cart.length === 0) {
    body.innerHTML = `
      <div class="cart-empty">
        <div class="cart-empty-mark">∅</div>
        <p>Tu carrito está vacío.</p>
        <p style="margin-top:8px; font-size:12px;">Explora el catálogo para empezar.</p>
      </div>`;
  } else {
    body.innerHTML = cart.map(i => {
      const p = PRODUCTS.find(p => p.id === i.id);
      if (!p) return '';
      return `
        <div class="cart-item">
          <div class="cart-item-img"><img src="${p.image}" alt="" /></div>
          <div>
            <div class="cart-item-line">${p.lineName}</div>
            <div class="cart-item-name">${p.name}</div>
            <div class="cart-item-format" style="font-size:11px; color: var(--ink-dim); margin-bottom:10px;">${p.format}</div>
            <div class="cart-item-qty">
              <button class="cart-qty-btn" data-qty="${p.id}" data-d="-1">−</button>
              <span class="cart-qty-val">${i.qty}</span>
              <button class="cart-qty-btn" data-qty="${p.id}" data-d="1">+</button>
            </div>
          </div>
          <div class="cart-item-end">
            <div class="cart-item-price">$${(p.price * i.qty).toFixed(2)}</div>
            <button class="cart-item-remove" data-remove="${p.id}">eliminar</button>
          </div>
        </div>
      `;
    }).join('');
  }

  const total = cartTotal();
  // Las cifras (subtotal/total/pay-amount/checkout-total/etc.) las gestiona checkout.js
  if (typeof window.checkoutRefreshTotals === 'function') {
    window.checkoutRefreshTotals();
  } else {
    // Fallback mínimo si checkout.js no cargó
    const totalEl = document.getElementById('cart-total');
    const subtotalEl = document.getElementById('cart-subtotal');
    if (totalEl) totalEl.textContent = `$${total.toFixed(2)}`;
    if (subtotalEl) subtotalEl.textContent = `$${total.toFixed(2)}`;
  }

  // attach listeners
  body.querySelectorAll('[data-qty]').forEach(btn => {
    btn.addEventListener('click', () => updateQty(btn.dataset.qty, parseInt(btn.dataset.d, 10)));
  });
  body.querySelectorAll('[data-remove]').forEach(btn => {
    btn.addEventListener('click', () => removeFromCart(btn.dataset.remove));
  });
}

function bumpCartBadge() {
  const navCount = document.getElementById('nav-cart-count');
  if (!navCount) return;
  navCount.classList.add('is-bumping');
  setTimeout(() => navCount.classList.remove('is-bumping'), 240);
}

/* ----------------------------------------
   Cart drawer open/close
   ---------------------------------------- */
function openCart() {
  document.getElementById('cart-drawer').classList.add('is-open');
  document.getElementById('cart-backdrop').classList.add('is-open');
  document.body.style.overflow = 'hidden';
}
function closeCart() {
  document.getElementById('cart-drawer').classList.remove('is-open');
  document.getElementById('cart-backdrop').classList.remove('is-open');
  document.body.style.overflow = '';
  // Tras cerrar, regresa a la vista de carrito (evita reabrir en checkout/éxito)
  setTimeout(() => {
    if (typeof window.checkoutSetView === 'function') window.checkoutSetView('cart');
  }, 420);
}

/* ----------------------------------------
   WhatsApp checkout
   ---------------------------------------- */
function checkoutWhatsApp() {
  if (cart.length === 0) return;
  const lines = cart.map(i => {
    const p = PRODUCTS.find(p => p.id === i.id);
    return `• ${p.name} (${p.format}) × ${i.qty} — $${(p.price * i.qty).toFixed(2)}`;
  });
  const total = cartTotal().toFixed(2);
  const msg = `Hola BIRM 👋, quiero realizar este pedido:%0A%0A${lines.join('%0A')}%0A%0A*Total: $${total} USD*%0A%0AConfírmenme disponibilidad y forma de pago. Gracias.`;
  const phone = '593994215836';
  window.open(`https://wa.me/${phone}?text=${msg}`, '_blank', 'noopener');
}

/* ----------------------------------------
   Toast
   ---------------------------------------- */
let toastTimer;
function showToast(text) {
  const t = document.getElementById('toast');
  if (!t) return;
  t.querySelector('.toast-text').textContent = text;
  t.classList.add('is-visible');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => t.classList.remove('is-visible'), 2200);
}

/* ----------------------------------------
   Scroll Cinema: preload por tramo + canvas player
   ---------------------------------------- */
const images = new Array(TOTAL_FRAMES);
let loadedCount = 0;

function updateLoaderProgress() {
  const loaderBar = document.getElementById('loader-bar');
  const loaderCount = document.getElementById('loader-count');
  const pct = (loadedCount / TOTAL_FRAMES) * 100;
  if (loaderBar) loaderBar.style.width = pct + '%';
  if (loaderCount) loaderCount.textContent = `${String(loadedCount).padStart(3,'0')} / ${TOTAL_FRAMES}`;
}

function preloadFrame(idx) {
  return new Promise(resolve => {
    const img = new Image();
    const done = () => { loadedCount++; updateLoaderProgress(); resolve(); };
    img.onload = done;
    img.onerror = done;
    img.src = framePath(idx);
    images[idx] = img;
  });
}

function loadBatch(start, end) {
  const tasks = [];
  for (let i = start; i < end; i++) tasks.push(preloadFrame(i));
  return Promise.all(tasks);
}

async function preloadFrames() {
  // 1) Lote inicial pequeño — bloqueante, para revelar la página rápido.
  const INITIAL = Math.min(48, TOTAL_FRAMES);
  await loadBatch(0, INITIAL);
  // 2) El resto en lotes, en segundo plano — no bloquea el primer render.
  (async () => {
    const BATCH = 96;
    for (let s = INITIAL; s < TOTAL_FRAMES; s += BATCH) {
      await loadBatch(s, Math.min(s + BATCH, TOTAL_FRAMES));
    }
  })();
}

function setupCinema() {
  const canvas = document.getElementById('cinema-canvas');
  const cinema = document.getElementById('cinema');
  if (!canvas || !cinema) return;
  const ctx = canvas.getContext('2d');
  const pin = cinema.querySelector('.cinema-pin');

  // Tamaño explícito en píxeles. En móvil, scrub más corto para que
  // el usuario no tenga que arrastrar el dedo durante minutos.
  function syncCinemaSize() {
    const vh = window.innerHeight;
    const mult = isMobileLayout() ? 4.2 : 6.0; // recorrido largo = scroll lento y fluido
    cinema.style.height = (vh * mult) + 'px';
    if (pin) pin.style.height = vh + 'px';
  }
  syncCinemaSize();

  function resizeCanvas() {
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const rect = canvas.getBoundingClientRect();
    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }

  let lastDrawn = -1;
  let lastMobile = isMobileLayout();
  function draw(idx) {
    idx = Math.max(0, Math.min(TOTAL_FRAMES - 1, Math.round(idx)));
    if (idx === lastDrawn) return;
    const img = images[idx];
    if (!img || !img.complete || img.naturalWidth === 0) return;
    const cw = canvas.clientWidth, ch = canvas.clientHeight;
    // Fondo botánico: relleno previo a dibujar el frame.
    ctx.fillStyle = '#0a1f17';
    ctx.fillRect(0, 0, cw, ch);
    const iw = img.naturalWidth, ih = img.naturalHeight;
    // Cover en todos los tamaños — el frame llena el viewport, sin bloques vacíos.
    const scale = Math.max(cw / iw, ch / ih);
    const dw = iw * scale, dh = ih * scale;
    ctx.drawImage(img, (cw - dw) / 2, (ch - dh) / 2, dw, dh);
    lastDrawn = idx;
  }

  resizeCanvas();
  draw(0);
  window.addEventListener('resize', () => {
    lastMobile = isMobileLayout();
    syncCinemaSize();
    resizeCanvas();
    lastDrawn = -1;
    draw(0);
    if (typeof ScrollTrigger !== 'undefined') ScrollTrigger.refresh();
  });

  // Scroll-scrubbing real 1:1 con GSAP ScrollTrigger.
  // El tween mapea progreso → índice, sin perseguir.
  if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') {
    console.warn('GSAP no disponible — fallback a scroll nativo.');
    // Fallback: rAF que lee scroll y dibuja el frame correspondiente.
    function nativeUpdate() {
      const rect = cinema.getBoundingClientRect();
      const total = cinema.offsetHeight - window.innerHeight;
      const scrolled = -rect.top;
      const progress = Math.max(0, Math.min(1, scrolled / total));
      const idx = Math.round(progress * (TOTAL_FRAMES - 1));
      draw(idx);
      updateOverlays(idx);
      requestAnimationFrame(nativeUpdate);
    }
    nativeUpdate();
    return;
  }
  gsap.registerPlugin(ScrollTrigger);

  // En móvil con scroll táctil + sin Lenis, un scrub mayor da más sensación de fluidez.
  // Con Lenis activo (desktop sin reduced-motion), scrub bajo = casi 1:1.
  const scrubVal = (isMobileLayout() || prefersReducedMotion()) ? 0.7 : 0.5;

  gsap.to({ frame: 0 }, {
    frame: TOTAL_FRAMES - 1,
    ease: 'none',
    scrollTrigger: {
      trigger: cinema,
      start: 'top top',
      end: 'bottom bottom',
      scrub: scrubVal,
      invalidateOnRefresh: true,
      onUpdate: (self) => {
        const idx = Math.round(self.progress * (TOTAL_FRAMES - 1));
        draw(idx);
        updateOverlays(idx);
      },
    },
  });

  // Setea clase `cinema-active` mientras el cine est\u00e1 en el viewport
  // \u2014 \u00fatil para reubicar el FAB en m\u00f3vil y evitar colisiones.
  ScrollTrigger.create({
    trigger: cinema,
    start: 'top bottom',
    end: 'bottom top',
    onToggle: (self) => {
      document.documentElement.classList.toggle('cinema-active', self.isActive);
    },
  });

  // Inicializa overlays en estado 0
  updateOverlays(0);
}

/* ----------------------------------------
   Lenis smooth scroll — sincronizado con ScrollTrigger
   ---------------------------------------- */
let lenisInstance = null;
function setupLenis() {
  if (typeof Lenis === 'undefined') return null;
  const lenis = new Lenis({
    duration: 1.05,
    easing: t => 1 - Math.pow(1 - t, 3),
    smoothWheel: true,
    touchMultiplier: 1.4,
  });
  // Tickeo via GSAP para mantener Lenis y ScrollTrigger en fase
  if (typeof gsap !== 'undefined') {
    gsap.ticker.add(time => lenis.raf(time * 1000));
    gsap.ticker.lagSmoothing(0);
  } else {
    function raf(t) { lenis.raf(t); requestAnimationFrame(raf); }
    requestAnimationFrame(raf);
  }
  if (typeof ScrollTrigger !== 'undefined') {
    lenis.on('scroll', ScrollTrigger.update);
  }
  lenisInstance = lenis;
  window.lenisInstance = lenis;
  return lenis;
}

/* ----------------------------------------
   Overlay sync: popups + intro fade + progress
   ---------------------------------------- */
function smoothstep(t) { t = Math.max(0, Math.min(1, t)); return t * t * (3 - 2 * t); }

function updateOverlays(idx) {
  // Intro overlay: fade out from frame 12-44 (was 6-22, scaled 2x)
  const intro = document.getElementById('cinema-intro');
  if (intro) {
    const o = 1 - smoothstep((idx - 29) / 77);
    intro.style.opacity = o;
    const cta = intro.querySelector('.cinema-overlay-cta');
    if (cta) cta.style.pointerEvents = o > 0.4 ? 'auto' : 'none';
  }
  const cue = document.getElementById('scroll-cue');
  if (cue) cue.style.opacity = 1 - smoothstep(idx / 48);

  // Popups
  POPUPS.forEach(pop => {
    const el = document.getElementById(`popup-${pop.id}`);
    if (!el) return;
    const dist = Math.abs(idx - pop.center);
    const t = 1 - smoothstep(dist / pop.range);
    el.style.opacity = t;
    if (t > 0.4) el.classList.add('is-visible');
    else el.classList.remove('is-visible');
  });

  // Progress dots — active tramo
  const tramoIdx = Math.min(5, Math.floor(idx / FRAMES_PER_TRAMO));
  document.querySelectorAll('.cinema-progress-item').forEach((it, i) => {
    it.classList.toggle('is-active', i === tramoIdx);
  });
}

/* ----------------------------------------
   Render popups
   ---------------------------------------- */
function renderPopups() {
  const root = document.getElementById('cinema-popups');
  if (!root) return;
  root.innerHTML = POPUPS.map(p => {
    const product = PRODUCTS.find(x => x.id === p.productId);
    if (!product) return '';
    return `
      <div class="product-popup" id="popup-${p.id}" style="--accent: ${p.accent};">
        <div class="product-popup-tag">${p.line}</div>
        <h3>${p.title} <em>${p.titleEm}</em></h3>
        <p class="product-popup-claim">${p.claim}</p>
        <ul class="product-popup-benefits">
          ${p.benefits.map(b => `<li>${b}</li>`).join('')}
        </ul>
        <div class="product-popup-foot">
          <div class="product-popup-price">
            <span class="product-popup-price-amount">$${product.price.toFixed(2)}</span>
            <span class="product-popup-price-unit">${product.format}</span>
          </div>
          <button class="btn btn-primary" data-add="${product.id}">
            Agregar
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M3 8h10M9 4l4 4-4 4" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </button>
        </div>
      </div>
    `;
  }).join('');

  root.querySelectorAll('[data-add]').forEach(btn => {
    btn.addEventListener('click', e => {
      e.stopPropagation();
      addToCart(btn.dataset.add);
    });
  });
}

/* ----------------------------------------
   Render progress indicator
   ---------------------------------------- */
const PROGRESS_LABELS = ['Preventivo', 'Kids', 'Sport', 'Concentrado', 'Healing Helper', 'VIVA'];
function renderProgress() {
  const root = document.getElementById('cinema-progress');
  if (!root) return;
  root.innerHTML = PROGRESS_LABELS.map((label, i) => `
    <div class="cinema-progress-item" data-tramo="${i}">
      <span class="cinema-progress-label">${label}</span>
      <span class="cinema-progress-dot"></span>
    </div>
  `).join('');
  // Make dots clickable to jump
  root.querySelectorAll('.cinema-progress-item').forEach((it, i) => {
    it.style.cursor = 'pointer';
    it.addEventListener('click', () => {
      const cinema = document.getElementById('cinema');
      const total = cinema.offsetHeight - window.innerHeight;
      const targetFrame = i * FRAMES_PER_TRAMO + Math.round(FRAMES_PER_TRAMO / 2); // mid of tramo
      const progress = targetFrame / (TOTAL_FRAMES - 1);
      const targetY = cinema.offsetTop + progress * total;
      if (lenisInstance) lenisInstance.scrollTo(targetY, { duration: 1.6 });
      else window.scrollTo({ top: targetY, behavior: 'smooth' });
    });
  });
}

/* ----------------------------------------
   Reveal on scroll (IntersectionObserver)
   ---------------------------------------- */
function setupReveal() {
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('is-in');
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -10% 0px' });
  document.querySelectorAll('.reveal, .reveal-stagger').forEach(el => io.observe(el));
}

/* ----------------------------------------
   Nav scroll state
   ---------------------------------------- */
function setupNav() {
  const nav = document.getElementById('nav');
  const announce = document.getElementById('announce');
  if (!nav) return;
  function onScroll() {
    const scrolled = window.scrollY > 30;
    nav.classList.toggle('is-scrolled', scrolled);
    if (announce) announce.classList.toggle('is-hidden', scrolled);
  }
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });
}

/* ----------------------------------------
   Catalog filters — deprecated, ahora cada línea es una card.
   (Se deja stub vacío por compatibilidad.)
   ---------------------------------------- */
function setupFilters() { /* noop */ }

/* ----------------------------------------
   Helpers de preferencias
   ---------------------------------------- */
function prefersReducedMotion() {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}
function isMobileLayout() {
  return window.matchMedia('(max-width: 760px)').matches;
}

/* ----------------------------------------
   Contadores animados — sección fundador
   ---------------------------------------- */
function setupCounters() {
  const els = document.querySelectorAll('[data-count-to]');
  if (!els.length) return;
  const reduce = prefersReducedMotion();
  function run(el) {
    const target = parseFloat(el.dataset.countTo) || 0;
    const suffix = el.dataset.countSuffix || '';
    if (reduce) { el.textContent = target + suffix; return; }
    const dur = 1500;
    const t0 = performance.now();
    function tick(now) {
      const p = Math.min(1, (now - t0) / dur);
      const eased = 1 - Math.pow(1 - p, 3);
      el.textContent = Math.round(target * eased) + suffix;
      if (p < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  }
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) { run(e.target); io.unobserve(e.target); }
    });
  }, { threshold: 0.6 });
  els.forEach(el => io.observe(el));
}

/* ----------------------------------------
   FAQ — acordeón exclusivo
   ---------------------------------------- */
function setupFAQ() {
  const items = Array.from(document.querySelectorAll('.faq-item'));
  if (!items.length) return;
  items.forEach(item => {
    item.addEventListener('toggle', () => {
      if (item.open) {
        items.forEach(other => { if (other !== item) other.open = false; });
      }
    });
  });
}

/* ----------------------------------------
   Boot
   ---------------------------------------- */
async function boot() {
  const bootT0 = performance.now();
  // Render dynamic content (sin importar el modo)
  renderPopups();
  renderProgress();
  renderCatalog();
  renderCart();
  setupNav();
  setupReveal();

  // Cart interactions — botones de cerrar (puede haber varios)
  document.getElementById('nav-cart').addEventListener('click', openCart);
  document.getElementById('cart-fab').addEventListener('click', openCart);
  document.querySelectorAll('[data-cart-close]').forEach(btn => {
    btn.addEventListener('click', closeCart);
  });
  document.getElementById('cart-backdrop').addEventListener('click', closeCart);
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeCart();
  });

  // CTAs hero — scroll suave a anclas
  document.querySelectorAll('[data-scroll-to]').forEach(el => {
    el.addEventListener('click', e => {
      const id = el.dataset.scrollTo;
      const target = document.getElementById(id);
      if (!target) return;
      e.preventDefault();
      const y = target.getBoundingClientRect().top + window.scrollY - 60;
      if (lenisInstance) lenisInstance.scrollTo(y, { duration: 1.4 });
      else window.scrollTo({ top: y, behavior: 'smooth' });
    });
  });

  setupCounters();
  setupFAQ();

  // Lenis solo si el usuario NO prefiere reducir movimiento.
  // El cine sigue funcionando con scroll nativo \u2014 el scrubbing es contenido.
  if (!prefersReducedMotion()) {
    setupLenis();
  } else {
    // Pausa loops decorativos
    document.documentElement.classList.add('reduce-motion');
  }

  // Preload + start cinema (siempre)
  await preloadFrames();
  setupCinema();
  // Espera a que el primer frame se pinte
  await new Promise(r => setTimeout(r, 200));
  // Tiempo mínimo de intro — para que la marca se alcance a leer sin prisa
  const MIN_INTRO = 3500;
  const elapsed = performance.now() - bootT0;
  if (elapsed < MIN_INTRO) {
    await new Promise(r => setTimeout(r, MIN_INTRO - elapsed));
  }
  hideLoader();
}

function hideLoader() {
  const loader = document.getElementById('loader');
  if (loader) loader.classList.add('is-hidden');
  // Reveal escalonado del hero — entrada pausada y legible
  const intro = document.getElementById('cinema-intro');
  if (intro) intro.classList.add('is-revealed');
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', boot);
} else {
  boot();
}
