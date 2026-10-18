/* Scroll reveals. Hero text is handled by CSS on load; this covers everything further down. */

export function initReveal() {
  const items = [...document.querySelectorAll(".reveal, .reveal-in")];
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // Stagger the hero entrance lines.
  document.querySelectorAll(".hero .reveal-in").forEach((el, i) => {
    el.style.setProperty("--delay", `${120 + i * 90}ms`);
  });

  if (reduce || !("IntersectionObserver" in window)) {
    items.forEach((el) => el.classList.add("is-visible"));
    return;
  }

  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        io.unobserve(entry.target);
      });
    },
    { rootMargin: "0px 0px -8% 0px", threshold: 0.12 },
  );

  items.forEach((el) => {
    if (el.closest(".hero")) {
      // Hero items animate on load, not on scroll.
      requestAnimationFrame(() => el.classList.add("is-visible"));
    } else {
      io.observe(el);
    }
  });
}
