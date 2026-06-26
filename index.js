// ====== ROTAÇÃO E TELA CHEIA ======
function deitarTela() {
    const elementoPrincipal = document.documentElement;

    if (elementoPrincipal.requestFullscreen) {
        elementoPrincipal.requestFullscreen().then(() => {
            if (screen.orientation && screen.orientation.lock) {
                screen.orientation.lock('landscape').catch((err) => {
                    console.log("A rotação automática foi rejeitada ou não é suportada: ", err);
                });
            }
        });
    }
}

document.addEventListener('click', () => {
    deitarTela();
}, { once: true });


// ====== INTERAÇÕES DO LAYOUT (SÓ RODAM COM O HTML PRONTO) ======
document.addEventListener("DOMContentLoaded", () => {
    
    // 1. Controle da Sidebar (Movido para cá para evitar erros de 'null')
    const toggleBtn = document.getElementById("toggleBtn");
    const sidebar = document.querySelector(".sidebar");
    const main = document.querySelector(".main-content");

    // Verifica se os elementos realmente existem na tela antes de add o evento
    if (toggleBtn && sidebar && main) {
        toggleBtn.addEventListener("click", () => {
            sidebar.classList.toggle("hidden");
            main.classList.toggle("full");
        });
    }

    // 2. Efeito de Mudar o Protagonista no Fundo (Hover)
    const navItems = document.querySelectorAll(".nav-item");
    const heroBg = document.getElementById("hero-bg");

    if (heroBg) {
        navItems.forEach(item => {
            item.addEventListener("mouseenter", () => {
                const rawBg = item.getAttribute("data-bg");
                if (rawBg) {
                    // Pega apenas o nome do arquivo final, removendo quaisquer pastas/caminhos antigos
                    const novoBg = rawBg.split('/').pop();
                    heroBg.style.backgroundImage = `url('${novoBg}')`;
                }
            });
        });
    }
});