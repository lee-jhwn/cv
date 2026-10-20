// Renders news, theme cards, publications and demos from pubs.js and content.js.

const TAGS = ["Speech", "Articulatory", "Brain", "Biosignal", "Streaming", "Music"];
const esc = s => s.replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
const tag = t => `<span class="tag tag-${t}">${t}</span>`;
const $ = sel => document.querySelector(sel);

function authorsHTML(list) {
  const fmt = a => (a.startsWith("Jihwan Lee") ? `<strong>${esc(a)}</strong>` : esc(a));
  if (list.length <= 8) return list.map(fmt).join(", ");
  const head = list.slice(0, 6).map(fmt).join(", ");
  const tail = list.slice(6).map(fmt).join(", ");
  return `${head}<span hidden>, ${tail}</span> <button class="more-btn" type="button"
    onclick="this.previousElementSibling.hidden=false;this.remove()">+${list.length - 6} more</button>`;
}

function pubHTML(p) {
  const links = Object.entries(p.links).map(([k, u]) => `<a class="plink" href="${u}">${k}</a>`).join("");
  const title = p.links.paper ? `<a href="${p.links.paper}">${esc(p.title)}</a>` : esc(p.title);
  return `<li class="pub">
    <div>${p.tags.map(tag).join("")}${p.award ? `<span class="tag tag-Award">&#9733; ${p.award}</span>` : ""}</div>
    <div class="pub-title">${title}</div>
    <div class="pub-authors">${authorsHTML(p.authors)}</div>
    <div class="pub-meta"><span class="venue">${esc(p.venue)}</span>${links ? `<span class="plinks">${links}</span>` : ""}</div>
  </li>`;
}

function initPubs() {
  const state = { tag: null, first: false };
  const list = $("#pubs"), bar = $("#filters");

  function draw() {
    const ps = PUBS.filter(p => (!state.tag || p.tags.includes(state.tag)) && (!state.first || p.first));
    if (!ps.length) { list.innerHTML = `<p class="empty">No papers match this filter.</p>`; return; }
    const years = [...new Set(ps.map(p => p.year))];
    list.innerHTML = years.map(y =>
      `<h3 class="year">${y}</h3><ul class="pubs">${ps.filter(p => p.year === y).map(pubHTML).join("")}</ul>`).join("");
  }
  function drawBar() {
    bar.innerHTML =
      `<button class="chip ${!state.tag ? "on" : ""}" data-t="" aria-pressed="${!state.tag}">All</button>` +
      TAGS.map(t => `<button class="chip ${state.tag === t ? "on" : ""}" data-t="${t}" aria-pressed="${state.tag === t}">${t}</button>`).join("") +
      `<label class="first"><input type="checkbox" ${state.first ? "checked" : ""}> First-author only</label>`;
    bar.querySelectorAll(".chip").forEach(b => (b.onclick = () => { state.tag = b.dataset.t || null; drawBar(); draw(); }));
    bar.querySelector("input").onchange = e => { state.first = e.target.checked; draw(); };
  }
  drawBar(); draw();
  return t => { state.tag = t; drawBar(); draw(); };
}

function initThemes(setTag) {
  $("#themes").innerHTML = THEMES.map(([t, name, desc]) =>
    `<button class="theme" style="--c:var(--t-${t})" data-t="${t}"><h3>${name}</h3><p>${desc}</p></button>`).join("");
  document.querySelectorAll(".theme").forEach(b => (b.onclick = () => {
    setTag(b.dataset.t);
    $("#publications").scrollIntoView({ behavior: "smooth" });
  }));
}

$("#newslist").innerHTML = NEWS.map(([d, t]) => `<li><span class="date">${d}</span><span>${t}</span></li>`).join("");
$("#demolist").innerHTML = DEMOS.map(d => `<div class="demo"><div>${tag(d.tag)}</div><h3>${d.title}</h3><p>${d.text}</p>
  <div class="demo-links">${d.links.map(([k, u]) => (u ? `<a href="${u}">${k}</a>` : `<span class="soon">${k}</span>`)).join("")}</div></div>`).join("");
initThemes(initPubs());

const header = $(".site-header");
const onScroll = () => header.classList.toggle("scrolled", window.scrollY > 8);
window.addEventListener("scroll", onScroll, { passive: true });
onScroll();
