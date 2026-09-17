// Dr. Justin Sudhakar — Portfolio
// Mobile navigation drawer

(function () {
  const toggle = document.getElementById("menuToggle");
  const close = document.getElementById("menuClose");
  const drawer = document.getElementById("mobileNav");
  const backdrop = document.getElementById("mobileNavBackdrop");

  if (!toggle || !drawer) return;

  function openDrawer() {
    drawer.classList.add("is-open");
    toggle.setAttribute("aria-expanded", "true");
    document.body.style.overflow = "hidden";
  }

  function closeDrawer() {
    drawer.classList.remove("is-open");
    toggle.setAttribute("aria-expanded", "false");
    document.body.style.overflow = "";
  }

  toggle.addEventListener("click", openDrawer);
  close && close.addEventListener("click", closeDrawer);
  backdrop && backdrop.addEventListener("click", closeDrawer);

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && drawer.classList.contains("is-open")) {
      closeDrawer();
    }
  });

  // Close the drawer whenever a nav link inside it is used
  drawer.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", closeDrawer);
  });
})();
