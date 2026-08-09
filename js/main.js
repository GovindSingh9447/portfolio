(() => {
  const year = document.getElementById("y");
  if (year) year.textContent = String(new Date().getFullYear());

  const top = document.querySelector(".top");
  if (top) {
    const onScroll = () => {
      top.classList.toggle("is-scrolled", window.scrollY > 8);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  }

  // Reveal sections gently when they enter view
  const nodes = document.querySelectorAll(".section, .project");
  if ("IntersectionObserver" in window) {
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
            io.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.12 }
    );
    nodes.forEach((n) => {
      n.classList.add("will-reveal");
      io.observe(n);
    });
  }
})();
