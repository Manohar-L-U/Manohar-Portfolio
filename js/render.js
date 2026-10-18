/* Builds the page from the content in data.js. */

export function esc(value) {
  return String(value == null ? "" : value).replace(/[&<>"']/g, (ch) => {
    return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[ch];
  });
}

// Text that still starts with TODO is highlighted so it is easy to find.
export function t(value) {
  const s = String(value == null ? "" : value);
  return s.startsWith("TODO") ? `<mark class="todo">${esc(s)}</mark>` : esc(s);
}

const $ = (sel, root = document) => root.querySelector(sel);

function renderHero() {
  const set = (key, value) => {
    const el = $(`[data-hero="${key}"]`);
    if (el) el.textContent = value;
  };
  set("location", site.location);
  set("role", site.role);
  set("tagline", site.tagline);
  set("status", site.status);

  const photo = $(".hero__photo img");
  if (photo) photo.alt = site.photoAlt;

  $("[data-socials]").innerHTML = socialItems([
    { label: "GitHub", href: site.github, text: site.githubLabel },
    { label: "LinkedIn", href: site.linkedin, text: site.linkedinLabel },
  ]);
}

function socialItems(list) {
  return list
    .map(
      (s) =>
        `<li><a href="${esc(s.href)}" target="_blank" rel="noopener">${esc(s.label)}<span class="sr-only"> (opens in a new tab)</span></a></li>`,
    )
    .join("");
}

function renderAbout() {
  $("[data-about]").innerHTML = about.paragraphs.map((p) => `<p>${esc(p)}</p>`).join("");
  $("[data-facts]").innerHTML = about.facts
    .map((f) => `<div class="fact"><dt>${esc(f.label)}</dt><dd>${t(f.text)}</dd></div>`)
    .join("");
}

function renderExperience() {
  $("[data-experience]").innerHTML = experience
    .map(
      (job) => `
      <li class="timeline__item reveal">
        <div class="timeline__meta">
          <p class="timeline__period">${esc(job.period)}</p>
          <p class="muted">${esc(job.type)}</p>
        </div>
        <div class="timeline__body">
          <h3>${esc(job.role)}</h3>
          <p class="timeline__company">${esc(job.company)} · ${esc(job.location)}</p>
          <p class="timeline__summary">${esc(job.summary)}</p>
          <ul class="bullets">${job.points.map((p) => `<li>${esc(p)}</li>`).join("")}</ul>
          <ul class="chips" aria-label="Technologies">${job.tech.map((x) => `<li>${esc(x)}</li>`).join("")}</ul>
        </div>
      </li>`,
    )
    .join("");
}

function projectVisual(project) {
  if (project.image) {
    return `<img class="project__image" src="${esc(project.image)}" alt="Screenshot of ${esc(project.title)}" width="960" height="600" loading="lazy" decoding="async" />`;
  }
  // No screenshot yet: show the architecture as a small numbered diagram instead.
  return `<ol class="pipeline" aria-label="How ${esc(project.title)} works">${project.steps
    .map((s) => `<li>${esc(s)}</li>`)
    .join("")}</ol>`;
}

function projectActions(project, index) {
  const buttons = [`<button class="btn btn--small" type="button" data-open="${index}">View details</button>`];
  if (project.liveUrl) {
    buttons.push(`<a class="btn btn--small btn--ghost" href="${esc(project.liveUrl)}" target="_blank" rel="noopener">Live demo</a>`);
  }
  if (project.githubUrl) {
    buttons.push(`<a class="btn btn--small btn--ghost" href="${esc(project.githubUrl)}" target="_blank" rel="noopener">GitHub</a>`);
  }
  return buttons.join("");
}

function renderProjects() {
  $("[data-projects]").innerHTML = projects
    .map(
      (p, i) => `
      <article class="project${p.featured ? " project--featured" : ""} reveal">
        <div class="project__visual">${projectVisual(p)}</div>
        <div class="project__body">
          <p class="project__period">${esc(p.period)}</p>
          <h3>${esc(p.title)}</h3>
          <p class="project__summary">${esc(p.summary)}</p>
          <ul class="chips" aria-label="Technologies">${p.tech.map((x) => `<li>${esc(x)}</li>`).join("")}</ul>
          <div class="project__actions">${projectActions(p, i)}</div>
        </div>
      </article>`,
    )
    .join("");
}

function renderSkills() {
  $("[data-skills]").innerHTML = skillGroups
    .map(
      (g) => `
      <div class="skill-group reveal">
        <h3>${esc(g.name)}</h3>
        <ul class="chips">${g.items.map((x) => `<li>${esc(x)}</li>`).join("")}</ul>
      </div>`,
    )
    .join("");
  $("[data-working]").textContent = `Working knowledge, not daily use: ${workingKnowledge.join(", ")}.`;
}

function renderEducation() {
  $("[data-education]").innerHTML = education
    .map(
      (e, i) => `
      <li class="entry reveal" style="--i:${i}">
        <p class="entry__title">${esc(e.degree)}</p>
        <p class="muted">${esc(e.institution)}</p>
        <p class="entry__meta">${[e.period, e.result].filter(Boolean).map(esc).join(" · ")}</p>
      </li>`,
    )
    .join("");
}

function renderCertifications() {
  $("[data-certifications]").innerHTML = certifications
    .map(
      (c, i) => `
      <li class="entry reveal" style="--i:${i}">
        <p class="entry__title">${esc(c.title)}</p>${
          c.issuer || c.date
            ? `
        <p class="entry__meta">${[c.issuer, c.date].filter(Boolean).map(esc).join(" · ")}</p>`
            : ""
        }
      </li>`,
    )
    .join("");
}

function renderAchievements() {
  $("[data-achievements]").innerHTML = achievements
    .map(
      (a) => `
      <li class="entry">
        <p class="entry__title">${esc(a.title)}</p>
        <p class="entry__meta">${esc(a.detail)}</p>
      </li>`,
    )
    .join("");
}

function renderContact() {
  $("[data-contact-links]").innerHTML = `
    <li><span class="muted">Email</span> <a href="mailto:${esc(site.email)}">${esc(site.email)}</a></li>
    <li><span class="muted">Phone</span> <a href="tel:${esc(site.phoneHref)}">${esc(site.phone)}</a></li>`;
}

function renderFooter() {
  $("[data-footer-socials]").innerHTML = socialItems([
    { label: "GitHub", href: site.github, text: site.githubLabel },
    { label: "LinkedIn", href: site.linkedin, text: site.linkedinLabel },
  ]);
  $("#year").textContent = new Date().getFullYear();
  $("[data-updated]").textContent = site.updated;
}

export function renderSite() {
  renderHero();
  renderAbout();
  renderExperience();
  renderProjects();
  renderSkills();
  renderEducation();
  renderCertifications();
  renderAchievements();
  renderContact();
  renderFooter();
}
