const navLinks = Array.from(document.querySelectorAll(".nav-link"));
const sections = Array.from(document.querySelectorAll("main section[id]"));
const revealBlocks = Array.from(document.querySelectorAll(".reveal"));
const filterButtons = Array.from(document.querySelectorAll(".filter-btn"));
const projectCards = Array.from(document.querySelectorAll(".project-card"));
const yearEl = document.getElementById("year");

if (yearEl) {
  yearEl.textContent = String(new Date().getFullYear());
}

// Highlight active section in navigation while scrolling.
const sectionObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      const id = entry.target.getAttribute("id");
      navLinks.forEach((link) => {
        link.classList.toggle("active-link", link.getAttribute("href") === `#${id}`);
      });
    });
  },
  {
    threshold: 0.35,
    rootMargin: "-25% 0px -45% 0px"
  }
);

sections.forEach((section) => sectionObserver.observe(section));

// Reveal blocks with a subtle fade and slide when entering viewport.
const revealObserver = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("in-view");
      observer.unobserve(entry.target);
    });
  },
  { threshold: 0.12 }
);

revealBlocks.forEach((block) => revealObserver.observe(block));

// Filter projects by category tags in data-category.
filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const filter = button.dataset.filter || "all";

    filterButtons.forEach((btn) => btn.classList.remove("active-filter"));
    button.classList.add("active-filter");

    projectCards.forEach((card) => {
      const categories = (card.dataset.category || "").split(" ");
      const matches = filter === "all" || categories.includes(filter);
      card.classList.toggle("is-hidden", !matches);
    });
  });
});
