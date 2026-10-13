
/* ===== PERSONAL SETTINGS ===== */
const SETTINGS = {
  name: "BAYJID",
  email: "mdbiplobislam195@gmail.com",
  // Bangladesh example: 8801XXXXXXXXX
  // Replace with your own number in international format.
  whatsapp: "8801726405564"
};

/* Update page title and year */
document.title = `${SETTINGS.name} | AI Automation Expert`;

const year = document.getElementById("year");
if (year) year.textContent = new Date().getFullYear();

const contactEmail = document.getElementById("contactEmail");
if (contactEmail) contactEmail.textContent = SETTINGS.email;

/* Update logo text */
document.querySelectorAll(".logo").forEach((logo) => {
  logo.innerHTML = `✳ ${SETTINGS.name.toUpperCase().replace(/\s+/g, "")}`;
});

/* Mobile navigation */
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

if (menuToggle && navLinks) {
  menuToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
    menuToggle.textContent = isOpen ? "✕" : "☰";
  });

  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("open");
      menuToggle.setAttribute("aria-expanded", "false");
      menuToggle.textContent = "☰";
    });
  });
}

/* Reveal elements on scroll */
const revealItems = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  revealItems.forEach((item) => observer.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add("is-visible"));
}

/* Back-to-top button */
const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
  if (backToTop) {
    backToTop.classList.toggle("visible", window.scrollY > 450);
  }
}, { passive: true });

if (backToTop) {
  backToTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

/* WhatsApp button */
const whatsappButton = document.getElementById("whatsappButton");
const validWhatsApp = /^\d{10,15}$/.test(SETTINGS.whatsapp);

if (whatsappButton && validWhatsApp) {
  whatsappButton.href =
    `https://wa.me/${SETTINGS.whatsapp}?text=` +
    encodeURIComponent("Hi! I saw your portfolio and would like to discuss a project.");
} else if (whatsappButton) {
  whatsappButton.href = "#contact";
  whatsappButton.removeAttribute("target");
  whatsappButton.addEventListener("click", (event) => {
    event.preventDefault();
    document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
    alert("Please add your WhatsApp number in script.js first.");
  });
}

/* Contact form: opens visitor's email application */
const contactForm = document.getElementById("contactForm");
const formNote = document.getElementById("formNote");

if (contactForm) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const formData = new FormData(contactForm);
    const name = String(formData.get("name") || "").trim();
    const email = String(formData.get("email") || "").trim();
    const message = String(formData.get("message") || "").trim();

    if (!name || !email || !message) return;

    if (SETTINGS.email === "hello@example.com") {
      formNote.textContent =
        "First, replace hello@example.com with your real email in script.js.";
      formNote.style.color = "#fbbf24";
      return;
    }

    const subject = encodeURIComponent(`Portfolio inquiry from ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nProject details:\n${message}`
    );

    window.location.href =
      `mailto:${SETTINGS.email}?subject=${subject}&body=${body}`;

    formNote.textContent =
      "Your email app should open with your message prepared.";
  });
}
