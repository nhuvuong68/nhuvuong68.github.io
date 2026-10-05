const $ = (sel) => document.querySelector(sel);
const esc = (s = "") => String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
const set = (sel, html) => { const el = $(sel); if (el) el.innerHTML = html; return el; };
const map = (arr, fn) => (arr || []).map(fn).join("");

// Ảnh thiếu -> hiện khối màu thay vì icon ảnh vỡ
const img = (src, alt, cls = "") =>
  `<div class="img-wrap ${cls}"><img src="${esc(src)}" alt="${esc(alt)}" loading="lazy" onerror="this.parentNode.classList.add('missing');this.remove()"></div>`;
const tags = (list) => `<div class="tags">${map(list, (t) => `<span>${esc(t)}</span>`)}</div>`;
const caseHref = (c) => `project.html?id=${encodeURIComponent(c.id)}`;

/* ---------- Theme ---------- */
document.querySelectorAll(".theme-toggle").forEach((btn) =>
  btn.addEventListener("click", () => {
    const root = document.documentElement;
    const dark = root.dataset.theme ? root.dataset.theme === "dark" : matchMedia("(prefers-color-scheme: dark)").matches;
    root.dataset.theme = dark ? "light" : "dark";
    try { localStorage.setItem("theme", root.dataset.theme); } catch (e) {}
  })
);
set("#year", new Date().getFullYear());

/* ---------- Shared sections ---------- */
function renderShared() {
  document.querySelectorAll(".cv-link").forEach((a) => (a.href = PROFILE.cv));
  set("#dna", map(PROFILE.dna, (d) => `<div class="card-plain"><h3>${esc(d.title)}</h3><p>${esc(d.text)}</p></div>`));
  set("#closing", map(PROFILE.closing, (l) => `<span>${esc(l)}</span>`));
  set("#contact-links", `
    <a class="btn btn-primary" href="mailto:${esc(PROFILE.email)}">✉ ${esc(PROFILE.email)}</a>
    <a class="btn btn-ghost" href="${esc(PROFILE.linkedin)}" target="_blank" rel="noopener">LinkedIn</a>
    <a class="btn btn-ghost" href="${esc(PROFILE.github)}" target="_blank" rel="noopener">GitHub</a>
    <a class="btn btn-ghost" href="${esc(PROFILE.cv)}" download>Download CV</a>`);
}

/* ---------- Home ---------- */
const cover = (c) => `
  <div class="cover"><span class="cover-num">${esc(c.number)}</span><span class="cover-tags">${map(c.tags.slice(0, 3), (t) => `<span>${esc(t)}</span>`)}</span></div>`;

function renderHome() {
  set("#eyebrow", esc(PROFILE.eyebrow));
  set("#headline", esc(PROFILE.headline));
  set("#title", esc(PROFILE.title));
  set("#intro", esc(PROFILE.intro));
  const avatar = $("#avatar");
  avatar.src = PROFILE.avatar;
  avatar.onerror = () => avatar.remove();

  set("#story", map(PROFILE.story, (p) => `<p>${esc(p)}</p>`));
  set("#stages", map(PROFILE.stages, (s, i) => `<li><span class="num">${i + 1}</span><div><h3>${esc(s.title)}</h3><p>${esc(s.text)}</p></div></li>`));
  set("#framework", map(PROFILE.framework, (s) => `
    <li><span class="num">${esc(s.n)}</span><h3>${esc(s.title)}</h3><p>${esc(s.text)}</p><p class="proof">${esc(s.proof)}</p></li>`));

  set("#cases", map(CASES, (c) => `
    <a class="case-card${c.flagship ? " flagship" : ""}" href="${caseHref(c)}">
      ${cover(c)}
      <div class="case-card-body">
        <span class="eyebrow">Case ${esc(c.number)}${c.flagship ? " · Flagship" : ""}</span>
        <h3>${esc(c.title)}</h3>
        <p>${esc(c.summary)}</p>
        <span class="read">Read case study →</span>
      </div>
    </a>`));

  set("#other", `<h3>Other work</h3>${map(OTHER_WORK, (o) =>
    `<a href="${esc(o.href)}" target="_blank" rel="noopener"><strong>${esc(o.title)} ↗</strong> <span class="muted">${esc(o.text)}</span></a>`)}`);

  const ai = PROFILE.ai;
  set("#ai", `<p class="lead">${esc(ai.text)}</p>
    <div class="ai-row"><span class="muted">Tools</span>${tags(ai.tools)}</div>
    <div class="ai-row"><span class="muted">Used for</span>${tags(ai.uses)}</div>`);
  set("#contact-sub", `${esc(PROFILE.name)} · ${esc(PROFILE.location)}`);
}

/* ---------- Case study blocks ---------- */
const head = (b) => `${b.kicker ? `<p class="eyebrow">${esc(b.kicker)}</p>` : ""}${b.heading ? `<h2>${esc(b.heading)}</h2>` : ""}`;
const note = (b) => (b.note ? `<p class="note">ⓘ ${esc(b.note)}</p>` : "");

const phoneItem = (it) =>
  it.box
    ? `<div class="sig">${esc(it.box)}</div>`
    : `<div class="field"><small>${esc(it.label)}</small><span>${esc(it.value)}</span>${it.tag ? `<em>${esc(it.tag)}</em>` : ""}</div>`;

const BLOCKS = {
  text: (b) => `${head(b)}${b.body ? `<p class="lead">${esc(b.body)}</p>` : ""}`,
  quote: (b) => `${head(b)}<blockquote>${esc(b.text)}</blockquote>`,
  flow: (b) => `${head(b)}
    <ol class="flow">${map(b.steps, (s, i) => `<li class="${(b.highlight || []).includes(i) ? "hl" : ""}"><strong>${esc(s)}</strong></li>`)}</ol>${note(b)}`,
  columns: (b) => `${head(b)}<div class="cols">${map(b.cols, (c) => `
    <div class="card-plain"><h3>${esc(c.title)}</h3><ul>${map(c.items, (i) => `<li>${esc(i)}</li>`)}</ul></div>`)}</div>`,
  cards: (b) => `${head(b)}<div class="cards">${map(b.items, (c) => `<div class="card-plain"><h3>${esc(c.title)}</h3><p>${esc(c.text)}</p></div>`)}</div>`,
  table: (b) => `${head(b)}${b.intro ? `<p class="muted">${esc(b.intro)}</p>` : ""}
    <div class="table-wrap"><table class="pairs">
      <thead><tr>${map(b.headers, (h) => `<th>${esc(h)}</th>`)}</tr></thead>
      <tbody>${map(b.rows, (r) => `<tr>${map(r, (v, i) => `<td>${i ? "→ " : ""}${esc(v)}</td>`)}</tr>`)}</tbody>
    </table></div>
    ${b.after ? `<p class="after">${esc(b.after)}</p>` : ""}${note(b)}`,
  metrics: (b) => `${head(b)}<div class="stats">${map(b.items, (s) => `<div class="stat"><strong>${esc(s.value)}</strong><span>${esc(s.label)}</span></div>`)}</div>${note(b)}`,
  phones: (b) => `${head(b)}
    <div class="phones">${map(b.screens, (s, i) => `
      <div class="phone-step">
        <div class="phone"><div class="phone-bar">${esc(s.title)}</div>
          <div class="phone-body">${map(s.items, phoneItem)}<div class="phone-btn">${esc(s.btn)}</div></div>
        </div>
        <p class="step-label">${i + 1}. ${esc(s.title)}</p>
        <p class="step-why">${esc(s.why)}</p>
      </div>`)}</div>${note(b)}`,
  admin: (b) => `${head(b)}
    <div class="split"><p class="muted">${esc(b.text)}</p>
      <div class="admin">
        <div class="admin-bar">Admin · ${esc(b.setting)}</div>
        ${map(b.options, (o) => `
          <div class="admin-row">
            <div><small>${esc(o.plant)}</small><span class="radio">◉ ${esc(o.kpi)}</span></div>
            <div class="kpi"><small>${esc(o.kpi)}</small><strong>${esc(o.value)}</strong></div>
          </div>`)}
      </div>
    </div>${note(b)}`,
  // Before / After: hai làn quy trình đặt cạnh nhau
  beforeafter: (b) => `${head(b)}
    <div class="ba">${map([b.before, b.after], (lane, li) => `
      <div class="ba-lane ${li ? "after" : "before"}">
        <span class="ba-label">${esc(lane.label)}</span>
        <ol>${map(lane.steps, (s, i) => `<li class="${(lane.pain || []).includes(i) ? "pain" : ""}"><span>${i + 1}</span>${esc(s)}</li>`)}</ol>
      </div>`)}</div>
    ${b.legend ? `<p class="note"><span class="swatch"></span>${esc(b.legend)}</p>` : ""}`,
  // Hub: nhiều nhóm user cùng nối vào một hồ sơ trung tâm
  hub: (b) => `${head(b)}
    <div class="hub">
      <div class="hub-sources">${map(b.sources, (s) => `<div class="hub-src"><strong>${esc(s.title)}</strong><small>${esc(s.text)}</small></div>`)}</div>
      <div class="hub-arrows" aria-hidden="true">${map(b.sources, () => "<span>↓</span>")}</div>
      <div class="hub-core"><strong>${esc(b.core.title)}</strong><div class="hub-chips">${map(b.core.items, (i) => `<span>${esc(i)}</span>`)}</div></div>
    </div>${note(b)}`,
  // Plants: N nhà máy xếp vòng quanh một sản phẩm, đánh dấu các nhà máy đã đến
  plants: (b) => {
    const cx = 200, cy = 200, r = 150;
    const dots = Array.from({ length: b.count }, (_, i) => {
      const a = (i / b.count) * 2 * Math.PI - Math.PI / 2;
      return { x: cx + r * Math.cos(a), y: cy + r * Math.sin(a), hl: (b.visited || []).includes(i) };
    });
    return `${head(b)}
    <div class="plants">
      <svg viewBox="0 0 400 400" role="img" aria-label="${esc(b.count)} plants connected to one product">
        ${map(dots, (d) => `<line x1="${cx}" y1="${cy}" x2="${d.x.toFixed(1)}" y2="${d.y.toFixed(1)}" class="pl-line"/>`)}
        <circle cx="${cx}" cy="${cy}" r="${r}" class="pl-ring"/>
        ${map(dots, (d) => `<circle cx="${d.x.toFixed(1)}" cy="${d.y.toFixed(1)}" r="${d.hl ? 12 : 9}" class="${d.hl ? "pl-visit" : "pl-dot"}"/>`)}
        <circle cx="${cx}" cy="${cy}" r="70" class="pl-core"/>
        <text x="${cx}" y="${cy - 4}" class="pl-t1">${esc(b.core)}</text>
        <text x="${cx}" y="${cy + 20}" class="pl-t2">${esc(b.coreSub)}</text>
      </svg>
      <div class="plants-legend">
        ${map(b.legend, (l, i) => `<p><span class="${i ? "lg-visit" : "lg-dot"}"></span>${esc(l)}</p>`)}
        ${b.text ? `<p class="muted">${esc(b.text)}</p>` : ""}
      </div>
    </div>${note(b)}`;
  },
  image: (b) => `<div class="split"><div>${head(b)}${b.text ? `<p class="muted">${esc(b.text)}</p>` : ""}${note(b)}</div>${img(b.image, b.heading, "shot")}</div>`,
  embed: (b) => `${head(b)}<div class="embed"><iframe title="${esc(b.heading)}" src="${esc(b.src)}" loading="lazy" allowfullscreen></iframe></div>${note(b)}`,
};

function renderCase() {
  const id = new URLSearchParams(location.search).get("id");
  const c = CASES.find((x) => x.id === id);
  const root = $("#case");
  if (!c) {
    root.innerHTML = `<h1>Case study not found</h1><p><a href="index.html#work">Back to all case studies</a></p>`;
    return;
  }
  document.title = `${c.title} — Nhu Vuong`;
  const next = CASES[(CASES.indexOf(c) + 1) % CASES.length];
  root.innerHTML = `
    <header class="case-head">
      <p class="eyebrow">Case study ${esc(c.number)}</p>
      <h1>${esc(c.title)}</h1>
      ${tags(c.tags)}
      <p class="lead">${esc(c.summary)}</p>
      <dl class="meta">${map(c.meta, (m) => `<div><dt>${esc(m.k)}</dt><dd>${esc(m.v)}</dd></div>`)}</dl>
    </header>
    ${map(c.blocks, (b) => `<section class="block block-${b.type}">${(BLOCKS[b.type] || (() => ""))(b)}</section>`)}
    <a class="next" href="${caseHref(next)}"><span class="muted">Next — Case ${esc(next.number)}</span><strong>${esc(next.title)} →</strong></a>`;
}

renderShared();
if ($("#cases")) renderHome();
if ($("#case")) renderCase();
