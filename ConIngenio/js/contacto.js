// Obtener elementos del DOM
const form = document.getElementById("formulario");
const nombre = document.getElementById("nombre");
const correo = document.getElementById("correo");
const mensaje = document.getElementById("mensaje");
const tipo = document.getElementById("tipo");

// Configuracion del modal
const modal = new bootstrap.Modal(document.getElementById("confirmModal"));

// Evento submit del formulario
form.addEventListener("submit", function (e) {
    e.preventDefault();

    limpiarErrores();
    let valido = true;

// Validaciones

    // Validar nombre vacio
    if (nombre.value.trim() === "") {
        mostrarError(nombre, "El nombre es obligatorio");
        valido = false;
    }

    // Validar correo con expresion regular
    if (!validarCorreo(correo.value)) {
        mostrarError(correo, "Correo no válido");
        valido = false;
    }

    // Validar mensaje vacio 
    if (mensaje.value.trim() === "") {
        mostrarError(mensaje, "El mensaje es obligatorio");
        valido = false;
    }

    // si todo es valido 
    if (valido) {
        // Mostrar datos en modal
        document.getElementById("modalNombre").textContent = nombre.value;
        document.getElementById("modalCorreo").textContent = correo.value;
        document.getElementById("modalMensaje").textContent = mensaje.value;
        document.getElementById("modalTipo").textContent = tipo.value;

        modal.show();

        // Mostrar datos en consola
        console.log("Nombre:", nombre.value);
        console.log("Correo:", correo.value);
        console.log("Mensaje:", mensaje.value);
        console.log("Tipo:", tipo.value);
    }
});

// Confirmar envío
document.getElementById("confirmSend").addEventListener("click", () => {
    modal.hide();
    alert("Formulario enviado correctamente");
    form.reset();
});

// Funciones auxiliares
// Muestra mensaje de error debajo del input
function mostrarError(input, mensaje) {
    const errorDiv = input.nextElementSibling;
    errorDiv.textContent = mensaje;
}

// Limpia todos los errores del formulario
function limpiarErrores() {
    document.querySelectorAll(".error-message").forEach(el => el.textContent = "");
}

// Valida formato de correo electrónico
function validarCorreo(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

document.addEventListener("DOMContentLoaded", () => {

    const btnModo = document.getElementById("modo-btn");

    if (!btnModo) return;

    btnModo.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");

        if (document.body.classList.contains("dark-mode")) {
            localStorage.setItem("modo", "oscuro");
            btnModo.textContent = "☀️";
        } else {
            localStorage.setItem("modo", "claro");
            btnModo.textContent = "🌙";
        }
    });

    // cargar estado guardado
    if (localStorage.getItem("modo") === "oscuro") {
        document.body.classList.add("dark-mode");
        btnModo.textContent = "☀️";
    } else {
        btnModo.textContent = "🌙";
    }
});

