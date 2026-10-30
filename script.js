// DOUBLE POOL website settings
// Add your real company email below before publishing.
// Example: const COMPANY_EMAIL = "hello@yourdomain.com";
const COMPANY_EMAIL = "";

const menuButton = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");
menuButton.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", String(isOpen));
  menuButton.textContent = isOpen ? "×" : "☰";
});
document.querySelectorAll(".nav a").forEach(link => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
    menuButton.setAttribute("aria-expanded", "false");
    menuButton.textContent = "☰";
  });
});
document.getElementById("year").textContent = new Date().getFullYear();

document.getElementById("contactForm").addEventListener("submit", event => {
  event.preventDefault();
  if (!COMPANY_EMAIL) {
    alert("The contact form is ready. Website owner: please add the company email in script.js (COMPANY_EMAIL) before publishing.");
    return;
  }
  const data = new FormData(event.currentTarget);
  const subject = encodeURIComponent("Website enquiry — DOUBLE POOL");
  const body = encodeURIComponent(
    `Name: ${data.get("name")}\nEmail: ${data.get("email")}\nService: ${data.get("service")}\n\nMessage:\n${data.get("message")}`
  );
  window.location.href = `mailto:${COMPANY_EMAIL}?subject=${subject}&body=${body}`;
});
