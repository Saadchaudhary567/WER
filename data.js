/* ==========================================================================
   KITCHZEN — product data + icon library
   All icons are hand-built line art (stroke=currentColor) so the whole
   catalog reads as one consistent, calm sketchbook — no stock photography.
   ========================================================================== */

const ICONS = {
  skillet: `<svg viewBox="0 0 100 100" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="42" cy="50" r="26"/><ellipse cx="42" cy="42" rx="18" ry="6" opacity=".35"/><path d="M66 46 L90 40"/><path d="M90 40 L96 44"/><path d="M90 40 L88 33"/></svg>`,
  dutchoven: `<svg viewBox="0 0 100 100" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 46 h56 a2 2 0 0 1 2 2 v6 c0 14 -13 24 -30 24 s-30 -10 -30 -24 v-6 a2 2 0 0 1 2 -2z"/><rect x="30" y="38" width="40" height="8" rx="2"/><circle cx="50" cy="32" r="3"/><path d="M16 50 h-6" /><path d="M84 50 h6"/></svg>`,
  spatula: `<svg viewBox="0 0 100 100" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M46 14 C34 14 30 26 34 34 C38 42 46 40 46 50 L46 86"/><path d="M46 50 C46 40 54 42 58 34 C62 26 58 14 46 14"/><path d="M40 86 h12"/></svg>`,
  knife: `<svg viewBox="0 0 100 100" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 62 L64 24 C74 16 84 24 78 34 L46 74 Z"/><path d="M46 74 L30 90"/><path d="M30 90 L20 80"/></svg>`,
  jar: `<svg viewBox="0 0 100 100" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="30" y="30" width="40" height="56" rx="4"/><rect x="26" y="18" width="48" height="12" rx="3"/><path d="M38 30 v-4 M62 30 v-4"/></svg>`,
  canister: `<svg viewBox="0 0 100 100" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M32 28 h36 l-4 54 a4 4 0 0 1 -4 4 h-20 a4 4 0 0 1 -4 -4 Z"/><rect x="28" y="18" width="44" height="10" rx="2"/><circle cx="50" cy="14" r="3"/></svg>`,
  kettle: `<svg viewBox="0 0 100 100" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M24 54 C24 40 34 32 48 32 C62 32 70 40 70 54 L70 62 C70 74 60 82 48 82 C36 82 24 74 24 62 Z"/><path d="M70 50 C82 50 84 62 74 66"/><path d="M40 32 C40 24 46 20 48 14"/><circle cx="48" cy="10" r="2.5"/><rect x="20" y="58" width="10" height="6" rx="2"/></svg>`,
  mixer: `<svg viewBox="0 0 100 100" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M34 40 C34 24 66 24 66 40 L66 46 h-32 Z"/><path d="M66 42 h10 a4 4 0 0 1 4 4 v2 a4 4 0 0 1 -4 4 h-10"/><path d="M28 58 h44 v18 a6 6 0 0 1 -6 6 h-32 a6 6 0 0 1 -6 -6 Z"/><circle cx="50" cy="70" r="5"/></svg>`,
  ripple: `<svg viewBox="0 0 100 100" fill="none" stroke="currentColor" stroke-width="1.4"><circle cx="50" cy="50" r="8"/><circle cx="50" cy="50" r="22" opacity=".6"/><circle cx="50" cy="50" r="36" opacity=".3"/></svg>`,
  plus: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M12 5 v14 M5 12 h14"/></svg>`,
  bag: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M6 8 h12 l1 13 H5 Z"/><path d="M9 8 v-2 a3 3 0 0 1 6 0 v2"/></svg>`,
  arrow: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12 h14 M13 6 l6 6 -6 6"/></svg>`,
};

const CATEGORY_ICON = {
  Cookware: ICONS.dutchoven,
  Utensils: ICONS.knife,
  Storage: ICONS.jar,
  Appliances: ICONS.mixer,
};

const PRODUCTS = [
  {
    id: "cast-iron-skillet",
    name: "Cast-Iron Skillet",
    category: "Cookware",
    price: 68,
    tag: "Bestseller",
    icon: ICONS.skillet,
    desc: "A pre-seasoned 10-inch skillet that goes from stovetop to oven without complaint. Gets better with every meal you cook in it.",
    detail: ["Weight: 2.3 kg", "Diameter: 25 cm", "Oven safe to 260°C", "Pre-seasoned"],
  },
  {
    id: "ceramic-dutch-oven",
    name: "Ceramic Dutch Oven",
    category: "Cookware",
    price: 142,
    tag: "New",
    icon: ICONS.dutchoven,
    desc: "Slow braises, weeknight stews, Sunday bread — this enamelled pot holds heat evenly and sits well on the table, too.",
    detail: ["Capacity: 5.5 L", "Enamelled cast iron", "Oven safe to 230°C", "Dishwasher safe"],
  },
  {
    id: "olive-wood-spatula",
    name: "Olive Wood Spatula",
    category: "Utensils",
    price: 14,
    tag: null,
    icon: ICONS.spatula,
    desc: "Carved from a single piece of olive wood. Gentle on every pan, and the grain gets warmer with age.",
    detail: ["Length: 30 cm", "Solid olive wood", "Hand wash", "Naturally antibacterial"],
  },
  {
    id: "chefs-knife-trio",
    name: "Chef's Knife Trio",
    category: "Utensils",
    price: 89,
    tag: "Bestseller",
    icon: ICONS.knife,
    desc: "Chef, paring, and serrated — the three blades that handle nearly everything, forged from high-carbon steel.",
    detail: ["3-piece set", "High-carbon steel", "Full tang", "Comes with sheaths"],
  },
  {
    id: "glass-storage-set",
    name: "Glass Storage Set",
    category: "Storage",
    price: 46,
    tag: null,
    icon: ICONS.jar,
    desc: "Five borosilicate containers with bamboo lids, sized for leftovers, lunches, and pantry staples alike.",
    detail: ["5-piece set", "Borosilicate glass", "Bamboo lids", "Freezer & oven safe"],
  },
  {
    id: "bamboo-pantry-canisters",
    name: "Bamboo Pantry Canisters",
    category: "Storage",
    price: 38,
    tag: null,
    icon: ICONS.canister,
    desc: "Airtight canisters that keep flour, rice, and grains fresh — and make the pantry shelf look like it belongs to someone calm.",
    detail: ["Set of 3", "Airtight seal", "Bamboo lid", "1.2 L each"],
  },
  {
    id: "slow-drip-kettle",
    name: "Slow-Drip Kettle",
    category: "Appliances",
    price: 76,
    tag: "New",
    icon: ICONS.kettle,
    desc: "A gooseneck kettle for pour-over mornings — precise flow, quick boil, and a handle that stays cool.",
    detail: ["Capacity: 1 L", "Gooseneck spout", "Stovetop, all types", "Cool-touch handle"],
  },
  {
    id: "compact-stand-mixer",
    name: "Compact Stand Mixer",
    category: "Appliances",
    price: 210,
    tag: null,
    icon: ICONS.mixer,
    desc: "Small footprint, real torque. Three attachments included for dough, batter, and whipped cream at 2am.",
    detail: ["4.5 L bowl", "3 attachments", "6 speeds", "Counter footprint: 22×20 cm"],
  },
];

function getProduct(id){
  return PRODUCTS.find(p => p.id === id);
}
