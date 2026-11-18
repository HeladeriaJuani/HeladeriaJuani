/* =====================================================================
   HELADERÍA JUANI · datos compartidos por la tienda (index.html)
   y el panel (admin.html)
   ===================================================================== */

/* ---------------------------------------------------------------------
   1) CONEXIÓN CON FIREBASE
   Pegá acá lo que te da Firebase al registrar la app web
   (Configuración del proyecto → Tus apps → SDK setup and configuration → Config).
   Mientras apiKey esté vacío, todo funciona en MODO PRUEBA: los datos se
   guardan solo en el navegador donde lo abrís.
   --------------------------------------------------------------------- */
export const firebaseConfig = {
  apiKey: "AIzaSyBCeGEA-GE6y3OBAtd4-2OYfvjhcpUOEjY",
  authDomain: "heladeriajuani.firebaseapp.com",
  projectId: "heladeriajuani",
  storageBucket: "heladeriajuani.firebasestorage.app",
  messagingSenderId: "609438690138",
  appId: "1:609438690138:web:31a6c606b74851e12e6163",
  measurementId: "G-BDFCHYC7JX"
};

// Cuentas que pueden entrar al panel (UID de Firebase → Authentication → Usuarios).
// Si agregás una cuenta nueva, sumá su UID acá Y en firestore.rules.
export const ADMINS = [
  "xSBlPwBS6eNLJYTVeaSuM912qA83",   // heladeriajuani12@gmail.com (Juani)
  "xo1fPfITIIWMCFU6bbh54tLlZJj1"    // roman.paz2015@gmail.com (Roman)
];

/* ---------------------------------------------------------------------
   2) DATOS DEL LOCAL (cambian poco; se editan acá)
   Precios, gustos, stock, alias y pausa se manejan desde el panel.
   --------------------------------------------------------------------- */
export const CONFIG = {
  nombre: "Heladería Juani",
  bajada: "Helados artesanales, siempre. Pedí por WhatsApp y te lo llevamos.",
  // WhatsApp del local: 549 + código de área sin el 0 + número sin el 15.
  whatsapp: "5491123835085",
  whatsappTexto: "11 2383-5085",
  direccion: "Av. Eva Perón 1693, Zeballos, Florencio Varela",
  direccionCorta: "Av. Eva Perón 1693, Zeballos",
  mapa: "https://maps.app.goo.gl/tgnLUXgpTTaRTJFy8",
  instagram: "",

  envio: {
    costo: 0,          // 0 = envío gratis
    gratisDesde: 0,    // monto desde el que el envío es gratis (0 = no se usa)
    zona: "hasta 5 km",
    nota: "Si estás a más de 5 km, el envío se arregla por WhatsApp."
  },

  // ["abre", "cierra"]. "00:00" = cierra a la medianoche. null = cerrado ese día.
  horarios: {
    lunes:     ["14:00", "00:00"],
    martes:    ["14:00", "00:00"],
    miercoles: ["14:00", "00:00"],
    jueves:    ["14:00", "00:00"],
    viernes:   ["14:00", "00:00"],
    sabado:    ["14:00", "00:00"],
    domingo:   ["14:00", "00:00"]
  },

  pagos: ["Efectivo", "Transferencia"],
  propinas: [500, 1000, 2000],    // montos sugeridos (solo con transferencia)
  hechoPor: "Roman Paz"
};

/* ---------------------------------------------------------------------
   3) MENÚ INICIAL
   Se usa en modo prueba y para cargar la base la primera vez
   (Panel → Productos → "Cargar el menú de la heladería").
   Después, el menú se cambia desde el panel, no desde acá.
   --------------------------------------------------------------------- */
const GUSTOS_INICIALES = [
  // [nombre, categoría, color, textura, color de la textura]
  ["Crema americana", "cremas", "#F8F2E4"],
  ["Granizado", "cremas", "#F8F2E4", "granizado", "#2E1A12"],
  ["Crema flan", "cremas", "#EDC67A"],
  ["Crema rusa", "cremas", "#F1DFB8"],
  ["Crema del cielo", "cremas", "#A9D6EE"],
  ["Mascarpone", "cremas", "#F6EEDB"],
  ["Sambayón con almendras", "cremas", "#F0CE6E", "trozos", "#B98A55"],
  ["Menta granizada", "cremas", "#BCE4C8", "granizado", "#2E1A12"],
  ["Tramontana", "especiales", "#ECDAB3", "trozos", "#6B3F22"],
  ["Banana split", "especiales", "#F3E19C", "granizado", "#4A2C1F"],
  ["Mantecol", "especiales", "#D9B98A", "trozos", "#A77B4A"],
  ["Chocotorta", "especiales", "#C9A27E", "trozos", "#3A2119"],
  ["Pistacho", "especiales", "#B7C98A"],
  ["Dulce de leche bombón", "ddl", "#B47237", "trozos", "#3A2119"],
  ["Dulce de leche granizado", "ddl", "#C68A4E", "granizado", "#3B2317"],
  ["Chocolate Juani", "chocolates", "#4A2A1D"],
  ["Chocolate marquise", "chocolates", "#3E2219"],
  ["Chocolate suizo", "chocolates", "#5C3627", "trozos", "#2A140D"],
  ["Chocolate Marroc", "chocolates", "#6B4330", "trozos", "#C9A06A"],
  ["Nutella", "chocolates", "#6E4128"],
  ["Chocolate con pasas al rhum", "chocolates", "#4F2E20", "trozos", "#24100A"],
  ["Chocolate con almendras", "chocolates", "#5C3627", "trozos", "#E4CDA4"],
  ["Limón", "frutales", "#F2EC9B"],
  ["Mousse de limón", "frutales", "#F5F0BE"],
  ["Frutilla especial", "frutales", "#EE7F93", "trozos", "#B5203B"],
  ["Cereza a la crema", "frutales", "#F2B3C4", "trozos", "#9B1B3A"],
  ["Maracuyá a la crema", "frutales", "#F6CF6A", "granizado", "#3A2A12"]
];

export const MENU_INICIAL = {
  categorias: [
    { id: "potes", nombre: "Potes", tipo: "potes" },
    { id: "cremas", nombre: "Cremas", tipo: "gustos" },
    { id: "especiales", nombre: "Especiales", tipo: "gustos" },
    { id: "ddl", nombre: "Dulces de leche", tipo: "gustos" },
    { id: "chocolates", nombre: "Chocolates", tipo: "gustos" },
    { id: "frutales", nombre: "Frutales", tipo: "gustos" },
    { id: "extras", nombre: "Extras", tipo: "productos" }
  ],
  productos: [
    { id: "cuarto", nombre: "¼ kg", categoria: "potes", precio: 6000, gustos: 2, hay: true },
    { id: "medio", nombre: "½ kg", categoria: "potes", precio: 9000, gustos: 3, hay: true },
    { id: "kilo", nombre: "1 kg", categoria: "potes", precio: 16000, gustos: 4, hay: true },
    ...GUSTOS_INICIALES.map(([nombre, categoria, color, textura, s]) => ({
      id: "g-" + slug(nombre), nombre, categoria, color, textura: textura || "", s: s || "", hay: true
    })),
    { id: "cucurucho", nombre: "Cucurucho", categoria: "extras", precio: 500, detalle: "Por unidad", hay: true }
  ],
  alias: "",
  titular: "",
  pausado: false,
  mensajePausa: ""
};

export const TIPOS_CATEGORIA = {
  potes: "Potes (tamaños, con precio y cantidad de gustos)",
  gustos: "Gustos de helado (sin precio)",
  productos: "Productos con precio (cucuruchos, postres…)"
};

/* =====================================================================
   Utilidades
   ===================================================================== */
export function slug(t) {
  return String(t).normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase()
    .replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}
export const clonar = (x) => JSON.parse(JSON.stringify(x));
export const nuevoId = () => Math.random().toString(36).slice(2, 10) + Date.now().toString(36).slice(-3);

const plata = new Intl.NumberFormat("es-AR", { style: "currency", currency: "ARS", maximumFractionDigits: 0 });
export const fmt = (n) => plata.format(Math.round(Number(n) || 0));
export const esc = (s) => String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
export const soloNumero = (v) => Number(String(v ?? "").replace(/\D/g, "")) || 0;

const ZONA = "America/Argentina/Buenos_Aires";
/** "2026-11-18" en hora de Argentina */
export function claveDia(fecha = new Date()) {
  return new Intl.DateTimeFormat("en-CA", { timeZone: ZONA, year: "numeric", month: "2-digit", day: "2-digit" }).format(fecha);
}
export const inicioDia = (clave) => new Date(clave + "T00:00:00-03:00");
export function sumarDias(clave, n) {
  const d = new Date(clave + "T12:00:00-03:00");
  d.setUTCDate(d.getUTCDate() + n);
  return claveDia(d);
}
/** 0 = domingo … 6 = sábado */
export const diaSemana = (clave) => new Date(clave + "T12:00:00-03:00").getUTCDay();
export const horaAR = (ms) => new Intl.DateTimeFormat("es-AR", { timeZone: ZONA, hour: "2-digit", minute: "2-digit", hourCycle: "h23" }).format(new Date(ms));

/** Nombre de pote lindo: "1/4 kg" → { grande: "¼", chico: "kg" } */
export function textoPeso(nombre) {
  const n = String(nombre).replace(/\b1\/4\b/g, "¼").replace(/\b1\/2\b/g, "½").replace(/\b3\/4\b/g, "¾").trim();
  const m = n.match(/^([\d¼½¾.,]+)\s*(kg|g|gr|grs)?$/i);
  return m ? { grande: m[1], chico: m[2] || "", corto: true, texto: n } : { grande: n, chico: "", corto: false, texto: n };
}

/** Color para los puntitos/trozos de un gusto nuevo, según qué tan claro es */
export function colorTextura(hex) {
  const h = String(hex).replace("#", "");
  if (h.length !== 6) return "#3A2119";
  const [r, g, b] = [0, 2, 4].map((i) => parseInt(h.slice(i, i + 2), 16) / 255);
  return 0.2126 * r + 0.7152 * g + 0.0722 * b > 0.5 ? "#3A2119" : "#E8D9C0";
}

export function normalizarMenu(d) {
  d = d || {};
  return {
    categorias: Array.isArray(d.categorias) ? d.categorias : [],
    productos: Array.isArray(d.productos) ? d.productos : [],
    alias: d.alias || "",
    titular: d.titular || "",
    pausado: !!d.pausado,
    mensajePausa: d.mensajePausa || ""
  };
}

/* ---------- Horario del local (siempre en hora de Argentina) ---------- */
const DIAS = ["domingo", "lunes", "martes", "miercoles", "jueves", "viernes", "sabado"];
export const DIAS_LINDOS = { domingo: "Domingo", lunes: "Lunes", martes: "Martes", miercoles: "Miércoles", jueves: "Jueves", viernes: "Viernes", sabado: "Sábado" };
export { DIAS };
const aMin = (hhmm) => { const [h, m] = hhmm.split(":").map(Number); return h * 60 + m; };
export function ahoraAR() {
  const p = new Intl.DateTimeFormat("en-US", { timeZone: ZONA, weekday: "short", hour: "2-digit", minute: "2-digit", hourCycle: "h23" }).formatToParts(new Date());
  const get = (t) => p.find((x) => x.type === t).value;
  return { dia: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].indexOf(get("weekday")), min: (Number(get("hour")) % 24) * 60 + Number(get("minute")) };
}
function tramo(diaIdx) {
  const h = CONFIG.horarios[DIAS[(diaIdx + 7) % 7]];
  if (!h) return null;
  const abre = aMin(h[0]); let cierra = aMin(h[1]);
  if (cierra <= abre) cierra += 1440;
  return { abre, cierra, txtAbre: h[0], txtCierra: h[1] };
}
export function estadoLocal() {
  const { dia, min } = ahoraAR();
  const hoy = tramo(dia), ayer = tramo(dia - 1);
  if (ayer && ayer.cierra > 1440 && min + 1440 < ayer.cierra) return { abierto: true, txt: `Abierto · hasta las ${ayer.txtCierra}` };
  if (hoy && min >= hoy.abre && min < hoy.cierra) return { abierto: true, txt: `Abierto · hasta las ${hoy.txtCierra}` };
  if (hoy && min < hoy.abre) return { abierto: false, txt: `Cerrado · abre hoy a las ${hoy.txtAbre}` };
  for (let i = 1; i <= 7; i++) {
    const t = tramo(dia + i);
    if (t) return { abierto: false, txt: `Cerrado · abre ${i === 1 ? "mañana" : "el " + DIAS_LINDOS[DIAS[(dia + i) % 7]].toLowerCase()} a las ${t.txtAbre}` };
  }
  return { abierto: false, txt: "Cerrado" };
}

/* ---------- Cuánto suma un pedido entregado a las ventas del día ---------- */
export function deltasPedido(p) {
  const propina = Number(p.propina) || 0;
  const vendido = (Number(p.total) || 0) - propina;
  const web = p.origen === "web";
  const transf = p.pago === "Transferencia";
  const gustos = {};
  (p.items || []).forEach((it) => (it.gustos || []).forEach((g) => { gustos[g] = (gustos[g] || 0) + (Number(it.cantidad) || 1); }));
  return {
    total: vendido,
    ventas: 1,
    ventasWeb: web ? 1 : 0,
    ventasMostrador: web ? 0 : 1,
    vendidoWeb: web ? vendido : 0,
    vendidoMostrador: web ? 0 : vendido,
    efectivo: transf ? 0 : vendido,
    transferencia: transf ? vendido : 0,
    propinas: propina,
    gustos
  };
}
function sumarDeltas(acum, d, signo = 1) {
  for (const [k, v] of Object.entries(d)) {
    if (k === "gustos") {
      acum.gustos = acum.gustos || {};
      for (const [g, n] of Object.entries(v)) acum.gustos[g] = (acum.gustos[g] || 0) + signo * n;
    } else acum[k] = (acum[k] || 0) + signo * v;
  }
  return acum;
}
export { sumarDeltas };

/* =====================================================================
   Conexión: Firebase si está configurado, si no, modo prueba
   ===================================================================== */
/** Traduce un error de Firebase a algo entendible, para saber qué revisar */
export function explicarError(e) {
  const code = String((e && (e.code || e.name)) || "");
  const msg = String((e && e.message) || e || "");
  if (code === "permission-denied" || /insufficient permissions/i.test(msg))
    return { codigo: "permission-denied", ayuda: "Firestore rechazó la lectura: faltan publicar las reglas de firestore.rules (Firestore → Reglas → Publicar)." };
  if (/does not exist/i.test(msg) || code === "not-found")
    return { codigo: "base-inexistente", ayuda: "No existe la base de Firestore, o tiene otro ID. Tiene que ser Firestore (no Realtime Database) con el ID (default)." };
  if (/dynamically imported module|Importing a module script failed|Failed to fetch/i.test(msg))
    return { codigo: "sin-firebase", ayuda: "El navegador no pudo descargar Firebase: sin internet o un bloqueador de anuncios." };
  if (code === "unavailable" || /offline/i.test(msg))
    return { codigo: "sin-conexion", ayuda: "No hubo respuesta de Firestore: sin internet, o la base de Firestore todavía no está creada." };
  return { codigo: code || "desconocido", ayuda: msg.slice(0, 220) };
}

const VERSION_FIREBASE = "12.12.0";
const urlFB = (m) => `https://www.gstatic.com/firebasejs/${VERSION_FIREBASE}/firebase-${m}.js`;

export async function conectar() {
  if (!firebaseConfig.apiKey) return crearDemo();
  try {
    return await crearFirebase();
  } catch (e) {
    console.error("No se pudo conectar con Firebase", e);
    return { modo: "error", error: e };
  }
}

async function crearFirebase() {
  const [{ initializeApp }, fs] = await Promise.all([import(urlFB("app")), import(urlFB("firestore"))]);
  const {
    getFirestore, doc, getDoc, setDoc, collection, query, where, orderBy, onSnapshot,
    runTransaction, serverTimestamp, increment, writeBatch, documentId, getDocs, Timestamp
  } = fs;
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);
  const refMenu = doc(db, "tienda", "menu");
  let au = null, auth = null;

  const incs = (d, s) => {
    const o = {};
    for (const [k, v] of Object.entries(d)) {
      if (k === "gustos") {
        const g = {};
        for (const [n, c] of Object.entries(v)) g[n] = increment(s * c);
        if (Object.keys(g).length) o.gustos = g;
      } else o[k] = increment(s * v);
    }
    return o;
  };
  const aPedido = (snap) => {
    const x = snap.data({ serverTimestamps: "estimate" });
    return { ...x, id: snap.id, creadoMs: x.creado && x.creado.toMillis ? x.creado.toMillis() : Date.now() };
  };

  return {
    modo: "firebase",

    async leerMenu() {
      const s = await getDoc(refMenu);
      return s.exists() ? normalizarMenu(s.data()) : null;
    },

    /** Guarda el pedido sin esperar y devuelve el código para el mensaje de WhatsApp */
    crearPedidoWeb(p) {
      const ref = doc(collection(db, "pedidos"));
      const codigo = ref.id.slice(0, 5).toUpperCase();
      setDoc(ref, { ...p, codigo, origen: "web", estado: "nuevo", dia: claveDia(), creado: serverTimestamp() })
        .catch((e) => console.error("No se pudo guardar el pedido", e));
      return codigo;
    },

    async guardarMenu(mutar) {
      return runTransaction(db, async (tx) => {
        const s = await tx.get(refMenu);
        const m = normalizarMenu(s.exists() ? s.data() : clonar(MENU_INICIAL));
        mutar(m);
        tx.set(refMenu, { ...m, actualizado: serverTimestamp() });
        return m;
      });
    },

    async iniciarAuth() {
      if (au) return;
      au = await import(urlFB("auth"));
      auth = au.getAuth(app);
    },
    alCambiarSesion(cb) {
      return au.onAuthStateChanged(auth, async (u) => {
        if (!u) return cb(null);
        let admin = ADMINS.includes(u.uid);
        if (!admin) {
          try { admin = (await getDoc(doc(db, "admins", u.uid))).exists(); } catch (e) { admin = false; }
        }
        cb({ email: u.email, uid: u.uid, admin });
      });
    },
    entrar: (email, clave) => au.signInWithEmailAndPassword(auth, email, clave),
    salir: () => au.signOut(auth),

    escucharPedidos(cb) {
      const hoy = Timestamp.fromDate(inicioDia(claveDia()));
      let a = [], b = [];
      const emitir = () => {
        const m = new Map();
        [...a, ...b].forEach((p) => m.set(p.id, p));
        cb([...m.values()].sort((x, y) => y.creadoMs - x.creadoMs));
      };
      const err = (e) => cb(null, e);
      const u1 = onSnapshot(query(collection(db, "pedidos"), where("creado", ">=", hoy), orderBy("creado", "desc")),
        (s) => { a = s.docs.map(aPedido); emitir(); }, err);
      const u2 = onSnapshot(query(collection(db, "pedidos"), where("estado", "==", "nuevo")),
        (s) => { b = s.docs.map(aPedido); emitir(); }, err);
      return () => { u1(); u2(); };
    },

    async cambiarEstado(id, nuevo) {
      await runTransaction(db, async (tx) => {
        const ref = doc(db, "pedidos", id);
        const s = await tx.get(ref);
        if (!s.exists()) return;
        const p = s.data();
        if (p.estado === nuevo) return;
        const res = doc(db, "resumen", p.dia);
        if (p.estado === "entregado") tx.set(res, incs(deltasPedido(p), -1), { merge: true });
        if (nuevo === "entregado") tx.set(res, incs(deltasPedido(p), 1), { merge: true });
        tx.update(ref, { estado: nuevo, actualizado: serverTimestamp() });
      });
    },

    async crearVentaMostrador(v) {
      const ref = doc(collection(db, "pedidos"));
      const dia = claveDia();
      const p = { ...v, codigo: ref.id.slice(0, 5).toUpperCase(), origen: "mostrador", estado: "entregado", dia, creado: serverTimestamp() };
      const lote = writeBatch(db);
      lote.set(ref, p);
      lote.set(doc(db, "resumen", dia), incs(deltasPedido(p), 1), { merge: true });
      await lote.commit();
    },

    async borrarPedido(id) {
      await runTransaction(db, async (tx) => {
        const ref = doc(db, "pedidos", id);
        const s = await tx.get(ref);
        if (!s.exists()) return;
        const p = s.data();
        if (p.estado === "entregado") tx.set(doc(db, "resumen", p.dia), incs(deltasPedido(p), -1), { merge: true });
        tx.delete(ref);
      });
    },

    async leerResumen(desde, hasta) {
      const s = await getDocs(query(collection(db, "resumen"), where(documentId(), ">=", desde), where(documentId(), "<=", hasta)));
      return s.docs.map((d) => ({ ...d.data(), dia: d.id }));
    }
  };
}

/* ---------- Modo prueba: todo queda en este navegador ---------- */
function crearDemo() {
  const K = { menu: "juani-prueba-menu", pedidos: "juani-prueba-pedidos", sesion: "juani-prueba-sesion" };
  const memoria = {};
  const leer = (k, def) => {
    try { const v = localStorage.getItem(k); return v ? JSON.parse(v) : def; }
    catch (e) { return k in memoria ? clonar(memoria[k]) : def; }
  };
  const escribir = (k, v) => {
    memoria[k] = clonar(v);
    try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) { /* sin almacenamiento */ }
  };
  const borrar = (k) => { delete memoria[k]; try { localStorage.removeItem(k); } catch (e) {} };
  const oyentes = new Set();
  let cbSesion = null;
  const visibles = () => {
    const hoy = claveDia();
    return leer(K.pedidos, []).filter((p) => p.dia === hoy || p.estado === "nuevo").sort((a, b) => b.creadoMs - a.creadoMs);
  };
  const avisar = () => { const v = visibles(); oyentes.forEach((cb) => cb(v)); };
  try { window.addEventListener("storage", (e) => { if (e.key === K.pedidos) avisar(); }); } catch (e) {}
  const conCambios = (fn) => { const ps = leer(K.pedidos, []); fn(ps); escribir(K.pedidos, ps); avisar(); };

  return {
    modo: "prueba",
    async leerMenu() { const m = leer(K.menu, null); return m ? normalizarMenu(m) : null; },
    crearPedidoWeb(p) {
      const id = nuevoId();
      const codigo = id.slice(0, 5).toUpperCase();
      conCambios((ps) => ps.push({ ...clonar(p), id, codigo, origen: "web", estado: "nuevo", dia: claveDia(), creadoMs: Date.now() }));
      return codigo;
    },
    async guardarMenu(mutar) {
      const m = normalizarMenu(leer(K.menu, null) || clonar(MENU_INICIAL));
      mutar(m);
      escribir(K.menu, m);
      return m;
    },
    async iniciarAuth() {},
    alCambiarSesion(cb) { cbSesion = cb; setTimeout(() => cb(leer(K.sesion, null)), 0); return () => { cbSesion = null; }; },
    async entrar(email) { const s = { email: email || "prueba@juani", uid: "prueba", admin: true }; escribir(K.sesion, s); cbSesion && cbSesion(s); },
    async salir() { borrar(K.sesion); cbSesion && cbSesion(null); },
    escucharPedidos(cb) {
      oyentes.add(cb);
      setTimeout(avisar, 0);
      const t = setInterval(avisar, 5000);
      return () => { oyentes.delete(cb); clearInterval(t); };
    },
    async cambiarEstado(id, nuevo) { conCambios((ps) => { const p = ps.find((x) => x.id === id); if (p) p.estado = nuevo; }); },
    async crearVentaMostrador(v) {
      const id = nuevoId();
      conCambios((ps) => ps.push({ ...clonar(v), id, codigo: id.slice(0, 5).toUpperCase(), origen: "mostrador", estado: "entregado", dia: claveDia(), creadoMs: Date.now() }));
    },
    async borrarPedido(id) { conCambios((ps) => { const i = ps.findIndex((x) => x.id === id); if (i >= 0) ps.splice(i, 1); }); },
    async leerResumen(desde, hasta) {
      const dias = {};
      leer(K.pedidos, []).forEach((p) => {
        if (p.estado !== "entregado" || p.dia < desde || p.dia > hasta) return;
        dias[p.dia] = sumarDeltas(dias[p.dia] || { dia: p.dia }, deltasPedido(p));
      });
      return Object.values(dias);
    },
    /** Solo en modo prueba: borra todo lo cargado */
    reiniciar() { [K.menu, K.pedidos].forEach(borrar); avisar(); }
  };
}