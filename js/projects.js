import { t } from "./render.js";

/* Project details dialog. Uses the native <dialog>, so Escape, focus return and inert background come for free. */

export function initProjectDialog() {
  const dialog = document.getElementById("project-dialog");
  const list = document.querySelector("[data-projects]");
  if (!dialog || !list) return;

  const title = document.getElementById("dialog-title");
  const period = document.getElementById("dialog-period");
  const body = document.getElementById("dialog-body");

  function open(index) {
    const p = projects[index];
    if (!p) return;

    title.textContent = p.title;
    period.textContent = p.period;

    const d = p.details;
    const section = (heading, content) => `<section class="dialog__section"><h4>${heading}</h4>${content}</section>`;
    const bullets = (items) => `<ul class="bullets">${items.map((x) => `<li>${t(x)}</li>`).join("")}</ul>`;

    body.innerHTML = [
      section("My work", bullets(d.work)),
      section("Technologies", `<ul class="chips">${p.tech.map((x) => `<li>${t(x)}</li>`).join("")}</ul>`),
      d.evaluation ? section("Evaluation", `<p>${t(d.evaluation)}</p>`) : "",
      d.dataSource ? section("Data", `<p>${t(d.dataSource)}</p>`) : "",
      d.results ? section("Results", `<p>${t(d.results)}</p>`) : "",
      section("My leadership", `<p>${t(d.leadership)}</p>`),
      section("How I handled situations", `<p>${t(d.problems)}</p>`),
    ].join("");

    body.scrollTop = 0;
    if (typeof dialog.showModal === "function") {
      dialog.showModal();
    } else {
      // Very old browsers without <dialog>: show it inline rather than doing nothing.
      dialog.setAttribute("open", "");
    }
  }

  list.addEventListener("click", (event) => {
    const button = event.target.closest("[data-open]");
    if (button) open(Number(button.dataset.open));
  });

  const close = () => {
    if (typeof dialog.close === "function") dialog.close();
    else dialog.removeAttribute("open");
  };

  dialog.querySelector("[data-close]").addEventListener("click", close);

  // A click on the backdrop (the dialog element itself, outside its inner box) closes it.
  dialog.addEventListener("click", (event) => {
    if (event.target === dialog) close();
  });
}
