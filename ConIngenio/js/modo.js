document.addEventListener("DOMContentLoaded", () => {
    const btnModo = document.getElementById("modo-btn");

    if (!btnModo) return;

    // aplicar estado guardado ANTES de click
    if (localStorage.getItem("modo") === "oscuro") {
        document.body.classList.add("dark-mode");
        btnModo.textContent = "☀️";
    }

    btnModo.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");

        const modo = document.body.classList.contains("dark-mode");

        localStorage.setItem("modo", modo ? "oscuro" : "claro");
        btnModo.textContent = modo ? "☀️" : "🌙";
    });
});