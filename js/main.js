(() => {
  const year = document.getElementById("y");
  if (year) year.textContent = String(new Date().getFullYear());

  const top = document.querySelector(".top");
  if (top) {
    const onScroll = () => {
      top.classList.toggle("is-scrolled", window.scrollY > 10);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  }

  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const nodes = document.querySelectorAll(".band, .work, .timeline-item");
  if (!reduce && "IntersectionObserver" in window) {
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          entry.target.classList.add("in-view");
          io.unobserve(entry.target);
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -6% 0px" }
    );
    nodes.forEach((n, i) => {
      n.classList.add("will-reveal");
      n.style.transitionDelay = `${Math.min(i % 4, 3) * 0.05}s`;
      io.observe(n);
    });
  } else {
    nodes.forEach((n) => n.classList.add("in-view"));
  }
})();
