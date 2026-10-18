import { renderSite } from "./render.js";
import { initNav } from "./nav.js";
import { initReveal } from "./reveal.js";
import { initProjectDialog } from "./projects.js";
import { initContact } from "./contact.js";

// Animations only run when this script is working, so the page is never left hidden.
document.documentElement.classList.add("js");

renderSite();
initNav();
initProjectDialog();
initContact();
initReveal();
