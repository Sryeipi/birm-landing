/* ============================================================
   BIRM® — Checkout flow
   Maneja: paginas del drawer (cart → checkout → success),
   formato + validación de tarjeta, submit simulado,
   integración con cart de app.js.
   ============================================================ */

(function () {
  'use strict';

  /* ----------------------------------------
     Detección de marca por BIN
     ---------------------------------------- */
  function detectBrand(num) {
    const n = num.replace(/\D/g, '');
    if (/^4/.test(n)) return 'visa';
    if (/^(5[1-5]|2[2-7])/.test(n)) return 'mastercard';
    if (/^3[47]/.test(n)) return 'amex';
    if (/^3(0[0-5]|6|8|9)/.test(n)) return 'diners';
    if (/^6/.test(n)) return 'discover';
    return null;
  }
  const BRAND_LABELS = {
    visa: 'VISA',
    mastercard: 'Mastercard',
    amex: 'AMEX',
    diners: 'Diners',
    discover: 'Discover',
  };

  /* ----------------------------------------
     Formateadores
     ---------------------------------------- */
  function formatCardNumber(raw, brand) {
    const n = raw.replace(/\D/g, '').slice(0, brand === 'amex' ? 15 : 16);
    if (brand === 'amex') {
      return n.replace(/^(\d{0,4})(\d{0,6})(\d{0,5}).*/, (_, a, b, c) =>
        [a, b, c].filter(Boolean).join(' '));
    }
    return n.replace(/(\d{4})(?=\d)/g, '$1 ').trim();
  }
  function formatExp(raw) {
    const n = raw.replace(/\D/g, '').slice(0, 4);
    if (n.length < 3) return n;
    return n.slice(0, 2) + '/' + n.slice(2);
  }

  /* ----------------------------------------
     Vistas del drawer (cart | checkout | success)
     ---------------------------------------- */
  const drawer = document.getElementById('cart-drawer');
  function setView(view) {
    if (!drawer) return;
    drawer.dataset.view = view;
    drawer.querySelectorAll('.cart-view').forEach(el => {
      const match = el.dataset.view === view;
      if (match) el.removeAttribute('hidden');
      else el.setAttribute('hidden', '');
    });
    // Scroll body de la vista al inicio
    const active = drawer.querySelector(`.cart-view[data-view="${view}"]`);
    if (active) {
      const scrollable = active.querySelector('.cart-body, .cart-checkout-form, .checkout-success');
      if (scrollable) scrollable.scrollTop = 0;
    }
  }

  /* ----------------------------------------
     Actualiza totales en TODAS las vistas
     ---------------------------------------- */
  function refreshTotals() {
    const total = (typeof window.cartTotal === 'function') ? window.cartTotal() : 0;
    const count = (typeof window.cartCount === 'function') ? window.cartCount() : 0;
    const totalStr = '$' + total.toFixed(2);

    const subEl = document.getElementById('cart-subtotal');
    const totalEl = document.getElementById('cart-total');
    const payAmount = document.getElementById('cart-pay-amount');
    const checkoutTotal = document.getElementById('checkout-total');
    const submitAmount = document.getElementById('checkout-submit-amount');
    const summary = document.getElementById('checkout-summary');

    if (subEl) subEl.textContent = totalStr;
    if (totalEl) totalEl.textContent = totalStr;
    if (payAmount) payAmount.textContent = totalStr;
    if (checkoutTotal) checkoutTotal.textContent = totalStr;
    if (submitAmount) submitAmount.textContent = totalStr;
    if (summary) summary.textContent = `${count} ${count === 1 ? 'producto' : 'productos'}`;

    // Deshabilita el botón si carrito vacío
    const payBtn = document.getElementById('cart-pay-card');
    const waBtn = document.getElementById('cart-pay-wa');
    if (payBtn) payBtn.disabled = total <= 0;
    if (waBtn) waBtn.disabled = total <= 0;
  }
  // Exponer para que app.js la llame tras cambios del cart
  window.checkoutRefreshTotals = refreshTotals;

  /* ----------------------------------------
     Wiring inputs de tarjeta — formato + preview en vivo
     ---------------------------------------- */
  const fCard = document.getElementById('f-card');
  const fName = document.getElementById('f-name');
  const fExp = document.getElementById('f-exp');
  const fCvv = document.getElementById('f-cvv');
  const cardPreview = document.getElementById('card-preview');
  const numPreview = document.getElementById('card-number-preview');
  const namePreview = document.getElementById('card-name-preview');
  const expPreview = document.getElementById('card-exp-preview');
  const brandLabel = document.getElementById('card-brand');

  function applyBrand(brand) {
    if (!cardPreview) return;
    cardPreview.dataset.brand = brand || '';
    if (brandLabel) brandLabel.textContent = brand ? BRAND_LABELS[brand] : '···';
  }

  if (fCard) {
    fCard.addEventListener('input', () => {
      const brand = detectBrand(fCard.value);
      fCard.value = formatCardNumber(fCard.value, brand);
      applyBrand(brand);
      const visible = fCard.value
        ? fCard.value.padEnd(brand === 'amex' ? 17 : 19, '•')
        : '•••• •••• •••• ••••';
      if (numPreview) numPreview.textContent = visible;
    });
  }
  if (fName) {
    fName.addEventListener('input', () => {
      const v = fName.value.toUpperCase().slice(0, 26);
      fName.value = fName.value.slice(0, 26);
      if (namePreview) namePreview.textContent = v || 'NOMBRE APELLIDO';
    });
  }
  if (fExp) {
    fExp.addEventListener('input', () => {
      fExp.value = formatExp(fExp.value);
      if (expPreview) expPreview.textContent = fExp.value || 'MM/AA';
    });
  }
  if (fCvv) {
    fCvv.addEventListener('input', () => {
      fCvv.value = fCvv.value.replace(/\D/g, '').slice(0, 4);
    });
  }

  /* ----------------------------------------
     Validación simple del formulario
     ---------------------------------------- */
  function validateCheckout() {
    const errors = [];
    const card = (fCard?.value || '').replace(/\s/g, '');
    if (card.length < 13) errors.push({ field: 'f-card', msg: 'Número incompleto' });
    if (!fName?.value || fName.value.length < 3) errors.push({ field: 'f-name', msg: 'Nombre requerido' });
    const exp = (fExp?.value || '');
    if (!/^\d{2}\/\d{2}$/.test(exp)) errors.push({ field: 'f-exp', msg: 'Formato MM/AA' });
    if (!fCvv?.value || fCvv.value.length < 3) errors.push({ field: 'f-cvv', msg: 'CVV inválido' });
    const email = document.getElementById('f-email');
    if (email && !/^\S+@\S+\.\S+$/.test(email.value || '')) errors.push({ field: 'f-email', msg: 'Email inválido' });
    const phone = document.getElementById('f-phone');
    if (phone && (!phone.value || phone.value.length < 7)) errors.push({ field: 'f-phone', msg: 'Teléfono requerido' });
    const addr = document.getElementById('f-addr');
    if (addr && (!addr.value || addr.value.length < 5)) errors.push({ field: 'f-addr', msg: 'Dirección requerida' });
    return errors;
  }

  function clearErrors() {
    document.querySelectorAll('.checkout-field.has-error').forEach(el => el.classList.remove('has-error'));
    document.querySelectorAll('.field-msg').forEach(el => el.remove());
  }

  function showErrors(errors) {
    clearErrors();
    errors.forEach(({ field, msg }) => {
      const input = document.getElementById(field);
      const wrap = input?.closest('.checkout-field');
      if (!wrap) return;
      wrap.classList.add('has-error');
      const m = document.createElement('span');
      m.className = 'field-msg';
      m.textContent = msg;
      wrap.appendChild(m);
    });
    if (errors.length) {
      const first = document.getElementById(errors[0].field);
      first?.focus();
      first?.closest('.cart-checkout-form')?.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }

  /* ----------------------------------------
     Submit (simulación)
     ---------------------------------------- */
  const form = document.getElementById('checkout-form');
  if (form) {
    form.addEventListener('submit', e => {
      e.preventDefault();
      const errors = validateCheckout();
      if (errors.length) { showErrors(errors); return; }
      clearErrors();

      const btn = document.getElementById('checkout-submit');
      const txt = document.getElementById('checkout-submit-text');
      if (!btn || !txt) return;
      btn.disabled = true;
      btn.classList.add('is-loading');
      const oldText = txt.textContent;
      txt.textContent = 'Procesando…';

      // Simula procesamiento (~1.6s)
      setTimeout(() => {
        btn.disabled = false;
        btn.classList.remove('is-loading');
        txt.textContent = oldText;

        // Render success
        renderSuccessOrder();
        setView('success');

        // Vacía el carrito tras el "pago"
        if (typeof window.clearCart === 'function') {
          window.clearCart();
        }
      }, 1600);
    });
  }

  function renderSuccessOrder() {
    const root = document.getElementById('success-order');
    if (!root || typeof window.getCart !== 'function') return;
    const items = window.getCart();
    const PRODUCTS = window.PRODUCTS || [];
    const total = (typeof window.cartTotal === 'function') ? window.cartTotal() : 0;
    if (!items.length) { root.innerHTML = ''; return; }
    const orderId = 'BIRM-' + Date.now().toString(36).toUpperCase().slice(-6);
    root.innerHTML = `
      <div class="success-order-head">
        <span>Pedido</span>
        <strong>#${orderId}</strong>
      </div>
      <ul>
        ${items.map(i => {
          const p = PRODUCTS.find(p => p.id === i.id);
          if (!p) return '';
          return `<li>
            <span>${p.name} <em>×${i.qty}</em></span>
            <span>$${(p.price * i.qty).toFixed(2)}</span>
          </li>`;
        }).join('')}
      </ul>
      <div class="success-order-total">
        <span>Total cobrado</span>
        <strong>$${total.toFixed(2)}</strong>
      </div>
    `;
  }

  /* ----------------------------------------
     Botones que cambian de vista
     ---------------------------------------- */
  document.getElementById('cart-pay-card')?.addEventListener('click', () => {
    if ((window.cartCount?.() ?? 0) === 0) return;
    setView('checkout');
  });

  document.getElementById('cart-pay-wa')?.addEventListener('click', () => {
    if (typeof window.checkoutWhatsApp === 'function') window.checkoutWhatsApp();
  });

  document.querySelectorAll('[data-cart-back]').forEach(btn => {
    btn.addEventListener('click', () => setView('cart'));
  });

  // Permite a app.js / botones externos abrir checkout directo (buy-now)
  window.openCheckout = () => setView('checkout');
  window.checkoutSetView = setView;
  window.openCart = window.openCart || (() => {}); // shim

  /* ----------------------------------------
     Init
     ---------------------------------------- */
  setView('cart');
  refreshTotals();
})();
