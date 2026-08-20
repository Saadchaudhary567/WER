/* ==========================================================================
   KITCHZEN — shared chrome, cart engine, toast
   ========================================================================== */

const CART_KEY = "kitchzen_cart";

function getCart(){
  try{
    return JSON.parse(localStorage.getItem(CART_KEY)) || [];
  }catch(e){ return []; }
}
function saveCart(cart){
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
  updateCartCount();
}
function addToCart(id, qty = 1){
  const cart = getCart();
  const line = cart.find(l => l.id === id);
  if(line){ line.qty += qty; } else { cart.push({ id, qty }); }
  saveCart(cart);
}
function removeFromCart(id){
  saveCart(getCart().filter(l => l.id !== id));
}
function setQty(id, qty){
  const cart = getCart();
  const line = cart.find(l => l.id === id);
  if(line){ line.qty = Math.max(1, qty); saveCart(cart); }
}
function cartCount(){
  return getCart().reduce((sum, l) => sum + l.qty, 0);
}
function cartLinesWithProducts(){
  return getCart()
    .map(l => ({ ...l, product: getProduct(l.id) }))
    .filter(l => l.product);
}
function cartSubtotal(){
  return cartLinesWithProducts().reduce((sum, l) => sum + l.product.price * l.qty, 0);
}
function updateCartCount(){
  document.querySelectorAll("[data-cart-count]").forEach(el => {
    el.textContent = cartCount();
  });
}

function showToast(message){
  let toast = document.querySelector(".toast");
  if(!toast){
    toast = document.createElement("div");
    toast.className = "toast";
    toast.innerHTML = `<span class="dot"></span><span class="toast-text"></span>`;
    document.body.appendChild(toast);
  }
  toast.querySelector(".toast-text").textContent = message;
  toast.classList.add("show");
  clearTimeout(toast._t);
  toast._t = setTimeout(() => toast.classList.remove("show"), 2400);
}

function fmt(n){
  return "$" + n.toFixed(2).replace(/\.00$/, "");
}

/* ---- header / footer, injected into any page with a mount point ---- */
function renderHeader(active){
  const el = document.getElementById("site-header");
  if(!el) return;
  const items = [
    ["index.html", "Home"],
    ["shop.html", "Shop"],
    ["about.html", "About"],
    ["about.html#contact", "Contact"],
  ];
  el.innerHTML = `
    <div class="wrap">
      <a href="index.html" class="logo"><span class="z">k</span>itchzen</a>
      <nav class="main-nav">
        ${items.map(([href, label]) => `<a href="${href}" class="${active===label ? 'active' : ''}">${label}</a>`).join("")}
      </nav>
      <div class="header-actions">
        <a href="cart.html" class="cart-link">
          <span class="icon-btn">${ICONS.bag}</span>
          <span>Cart</span>
          <span class="cart-count" data-cart-count>0</span>
        </a>
      </div>
    </div>`;
  updateCartCount();
}

function renderFooter(){
  const el = document.getElementById("site-footer");
  if(!el) return;
  el.innerHTML = `
    <div class="wrap">
      <div class="footer-grid">
        <div class="footer-brand">
          <a href="index.html" class="logo"><span class="z">k</span>itchzen</a>
          <p>Tools for a calmer counter — thoughtfully made cookware, utensils, storage, and small appliances.</p>
        </div>
        <div class="footer-col">
          <h4>Shop</h4>
          <ul>
            <li><a href="shop.html?cat=Cookware">Cookware</a></li>
            <li><a href="shop.html?cat=Utensils">Utensils</a></li>
            <li><a href="shop.html?cat=Storage">Storage</a></li>
            <li><a href="shop.html?cat=Appliances">Appliances</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h4>Company</h4>
          <ul>
            <li><a href="about.html">About</a></li>
            <li><a href="about.html#contact">Contact</a></li>
            <li><a href="cart.html">Cart</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h4>Follow</h4>
          <ul>
            <li><a href="#">Instagram</a></li>
            <li><a href="#">Pinterest</a></li>
            <li><a href="#">Newsletter</a></li>
          </ul>
        </div>
      </div>
      <div class="footer-bottom">
        <span>© 2026 Kitchzen. Cook calmly.</span>
        <span>Made for the quiet end of the counter.</span>
      </div>
    </div>`;
}

function bindNewsletterForms(){
  document.querySelectorAll(".nl-form").forEach(form => {
    form.addEventListener("submit", e => {
      e.preventDefault();
      showToast("You're on the list — welcome to Kitchzen.");
      form.reset();
    });
  });
}

document.addEventListener("DOMContentLoaded", () => {
  updateCartCount();
  bindNewsletterForms();
});
