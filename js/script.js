// Highlight menu aktif berdasarkan URL
document.addEventListener("DOMContentLoaded", function () {
  const menuLinks = document.querySelectorAll(".menu-horizontal a");
  const currentURL = window.location.href;

  menuLinks.forEach(link => {
    if (currentURL.includes(link.getAttribute("href"))) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });
});

// (Opsional) Scroll ke atas
const scrollButton = document.createElement("button");
scrollButton.innerText = "⬆️ Ke Atas";
scrollButton.id = "scrollTop";
document.body.appendChild(scrollButton);

scrollButton.style.position = "fixed";
scrollButton.style.bottom = "20px";
scrollButton.style.right = "20px";
scrollButton.style.padding = "10px";
scrollButton.style.backgroundColor = "#00ffc8";
scrollButton.style.color = "#000";
scrollButton.style.border = "none";
scrollButton.style.borderRadius = "10px";
scrollButton.style.cursor = "pointer";
scrollButton.style.display = "none";
scrollButton.style.zIndex = "1000";

window.addEventListener("scroll", () => {
  scrollButton.style.display = window.scrollY > 300 ? "block" : "none";
});

scrollButton.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// RATING BINTANG
document.addEventListener("DOMContentLoaded", () => {
  const stars = document.querySelectorAll(".star");
  const info = document.querySelector(".rate-info");

  if (stars.length > 0) {
    stars.forEach(star => {
      star.addEventListener("click", () => {
        const rating = star.dataset.value;
        stars.forEach(s => s.classList.remove("active"));
        for (let i = 0; i < rating; i++) {
          stars[i].classList.add("active");
        }
        info.textContent = `Terima kasih! Kamu memberi rating ${rating} bintang.`;
      });
    });
  }
});

// === FITUR PENCARIAN GAME ===
const inputCari = document.getElementById("cariGame");
if (inputCari) {
  inputCari.addEventListener("input", () => {
    const keyword = inputCari.value.toLowerCase();
    const games = document.querySelectorAll(".game-card");

    games.forEach(card => {
      const nama = card.dataset.nama.toLowerCase();
      if (nama.includes(keyword)) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
  });
}

// === LOADER EFEK ===
window.addEventListener("load", () => {
  const loader = document.getElementById("loader");
  if (loader) loader.style.display = "none";
});
