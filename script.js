
// Aqui você pode futuramente carregar vídeos dinamicamente
console.log("Site de fugas do FiveM carregado!");
}

// Scroll Animation
const elements = document.querySelectorAll(".fade-in");

function checkFade() {
  const trigger = window.innerHeight * 0.9;
  elements.forEach(el => {
    const top = el.getBoundingClientRect().top;
    if (top < trigger) {
      el.classList.add("visible");
    }
  });
}

window.addEventListener("scroll", checkFade);
window.addEventListener("load", checkFade);

// Validação do link TikTok
function validarLinkTikTok() {
  const link = document.getElementById("link").value;
  if (!link.startsWith("https://vm.tiktok.com/")) {
    alert("Por favor, envie o link no formato: https://vm.tiktok.com/...");
    return false;
  }
  return true;
}