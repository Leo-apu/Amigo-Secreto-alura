const listaAmigos = document.getElementById("listaAmigos");
const boton = document.querySelector(".button-draw");

estadoBoton();
function estadoBoton() {
    if (listaAmigos.children.length < 2) {
        boton.disabled = true;
    } else {
        boton.disabled = false;
    }
}

function agregarAmigo() {
    const amigo = document.getElementById("amigo").value;

    if (amigo.trim() === "") {
        alert("Por favor, ingresa un nombre de amigo.");
        return;
    }

    const amigos = document.getElementById("listaAmigos");
    const amigoItem = document.createElement("li");
    amigoItem.textContent = amigo;
    amigos.appendChild(amigoItem);
    document.getElementById("amigo").value = "";
    estadoBoton();
}



function sortearAmigo() {
    const amigos = document.querySelectorAll("#listaAmigos li");
    const amigoSecreto = amigos[Math.floor(Math.random() * amigos.length)];
    const resultado = document.getElementById("resultado");
    resultado.textContent = "El amigo secreto es: " + amigoSecreto.textContent;

    const listaAmigos = document.getElementById("listaAmigos");
    while (listaAmigos.firstChild) {
        listaAmigos.removeChild(listaAmigos.firstChild);
    }

    estadoBoton();
}

