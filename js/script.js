// // ----------------------------
// // 🌐 Navbar Toggle
// // ----------------------------
// let menuIcon = document.querySelector("#menu-icon");
// let navbar = document.querySelector(".navbar");

// menuIcon.onclick = () => {
//   menuIcon.classList.toggle("bx-x");
//   navbar.classList.toggle("active");
// };

// // ----------------------------
// // 📜 Scroll Sections Active Links
// // ----------------------------
// let sections = document.querySelectorAll("section");
// let navLinks = document.querySelectorAll("header nav a");

// window.onscroll = () => {
//   sections.forEach((sec) => {
//     let top = window.scrollY;
//     let offset = sec.offsetTop - 150;
//     let height = sec.offsetHeight;
//     let id = sec.getAttribute("id");

//     if (top >= offset && top < offset + height) {
//       navLinks.forEach((links) => {
//         links.classList.remove("active");
//         document
//           .querySelector("header nav a[href*=" + id + "]")
//           .classList.add("active");
//       });
//     }
//   });

//   // Sticky Navbar
//   let header = document.querySelector("header");
//   header.classList.toggle("sticky", window.scrollY > 100);

//   // Remove navbar when clicking a link
//   menuIcon.classList.remove("bx-x");
//   navbar.classList.remove("active");
// };

// // ----------------------------
// // ✨ Scroll Reveal Animations
// // ----------------------------
// ScrollReveal({
//   distance: "80px",
//   duration: 2000,
//   delay: 200,
// });
// ScrollReveal().reveal(".home-content, .heading", { origin: "top" });
// ScrollReveal().reveal(".home-img, .services-container, .project-box, .contact form", { origin: "bottom" });
// ScrollReveal().reveal(".home-content h1, .about-img", { origin: "left" });
// ScrollReveal().reveal(".home-content p, .about-content", { origin: "right" });

// // ----------------------------
// // ⌨️ Typed JS Effect
// // ----------------------------
// const typed = new Typed(".multiple-text", {
//   strings: ["Full Stack Developer With Python"],
//   typeSpeed: 100,
//   backSpeed: 100,
//   backDelay: 1000,
//   loop: true,
// });

// // ----------------------------
// // 📩 EmailJS Integration (v3)
// // ----------------------------

// // ✅ Make sure this script tag is in your HTML before this file:
// {/* <script src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js"></script> */}

//     emailjs.init({ publicKey: "wT_ir2qmbP9lOgow_" }); // Replace with your actual public key


// document
//   .getElementById("contact-form")
//   .addEventListener("submit", function (e) {
//     e.preventDefault();

//     const btn = e.target.querySelector(".btn");
//     btn.value = "Sending...";

//     emailjs
//       .send("service_rnrkvws", "template_k73cvrs", {
//         from_name: document.getElementById("name").value,
//         from_email: document.getElementById("email").value,
//         phone: document.getElementById("phone").value,
//         subject: document.getElementById("subject").value,
//         message: document.getElementById("message").value,
//       })
//       .then(
//         function () {
//           alert("✅ Message sent successfully!");
//           document.getElementById("contact-form").reset();
//           btn.value = "Send Message";
//         },
//         function (error) {
//           alert("❌ Failed to send message. Please try again later.");
//           console.error("EmailJS Error:", error);
//           btn.value = "Send Message";
//         }
//       );
//   });
// ----------------------------
// 🌐 Navbar Toggle
// ----------------------------
let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};

// ----------------------------
// 📜 Scroll Sections Active Links
// ----------------------------
let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector("header nav a[href*=" + id + "]")
          .classList.add("active");
      });
    }
  });

  // Sticky Navbar
  let header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 100);

  // Remove navbar when clicking a link
  menuIcon.classList.remove("bx-x");
  navbar.classList.remove("active");
};

// ----------------------------
// ✨ Scroll Reveal Animations
// ----------------------------
ScrollReveal({
  distance: "80px",
  duration: 2000,
  delay: 200,
});
ScrollReveal().reveal(".home-content, .heading", { origin: "top" });
ScrollReveal().reveal(
  ".home-img, .services-container, .project-box, .contact form",
  { origin: "bottom" }
);
ScrollReveal().reveal(".home-content h1, .about-img", { origin: "left" });
ScrollReveal().reveal(".home-content p, .about-content", { origin: "right" });

// ----------------------------
// ⌨️ Typed JS Effect
// ----------------------------
const typed = new Typed(".multiple-text", {
  strings: ["Full Stack Developer With Python"],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true,
});

// ----------------------------
// 📩 EmailJS Integration (v3) ✅
// ----------------------------

// Initialize EmailJS (v3 syntax)
emailjs.init("wT_ir2qmbP9lOgow_"); // <-- your Public Key

// Handle form submit
document.getElementById("contact-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const btn = e.target.querySelector(".btn");
  btn.value = "Sending...";

  // Collect data
  const params = {
    from_name: document.getElementById("name").value,
    from_email: document.getElementById("email").value,
    phone: document.getElementById("phone").value,
    subject: document.getElementById("subject").value,
    message: document.getElementById("message").value,
  };

  // Send email
  emailjs.send("service_rnrkvws", "template_k73cvrs", params)
    .then(
      function (response) {
        console.log("SUCCESS!", response.status, response.text);
        showPopup("✅ Message sent successfully!");
        document.getElementById("contact-form").reset();
        btn.value = "Send Message";
      },
      function (error) {
        console.error("EmailJS Error:", error);
        showPopup("❌ Failed to send message. Please try again later.");
        btn.value = "Send Message";
      }
    );
});

// ----------------------------
// 💬 Simple Popup Function
// ----------------------------
function showPopup(message) {
  const popup = document.createElement("div");
  popup.textContent = message;
  popup.style.position = "fixed";
  popup.style.bottom = "30px";
  popup.style.right = "30px";
  popup.style.background = "#333";
  popup.style.color = "#fff";
  popup.style.padding = "12px 18px";
  popup.style.borderRadius = "8px";
  popup.style.fontSize = "16px";
  popup.style.zIndex = "9999";
  popup.style.boxShadow = "0 0 10px rgba(0,0,0,0.3)";
  popup.style.transition = "opacity 0.4s ease";
  document.body.appendChild(popup);

  setTimeout(() => {
    popup.style.opacity = "0";
    setTimeout(() => popup.remove(), 400);
  }, 2500);
}
