const listaAmigos = document.getElementById("listaAmigos");
const boton = document.querySelector(".button-draw");
const amigosArray = [];

estadoBoton();
function estadoBoton() {
    if (amigosArray.length < 2) {
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

    amigosArray.push(amigo);

    const amigos = document.getElementById("listaAmigos");
    const amigoItem = document.createElement("li");
    amigoItem.textContent = amigo;
    amigos.appendChild(amigoItem);
    document.getElementById("amigo").value = "";
    estadoBoton();
    console.log(amigosArray);
}



function sortearAmigo() {
    /* const amigos = document.querySelectorAll("#listaAmigos li");
    const amigoSecreto = amigos[Math.floor(Math.random() * amigos.length)];
    const resultado = document.getElementById("resultado");
    resultado.textContent = "El amigo secreto es: " + amigoSecreto.textContent; */

    /* const listaAmigos = document.getElementById("listaAmigos");
    while (listaAmigos.firstChild) {
        listaAmigos.removeChild(listaAmigos.firstChild);
    } */

    const amigoSecreto = amigosArray[Math.floor(Math.random() * amigosArray.length)];
    const resultado = document.getElementById("resultado");
    resultado.textContent = "El amigo secreto es: " + amigoSecreto;

    // Limpiamos la lista HTML, pero mantenemos el array intacto
    while (listaAmigos.firstChild) {
        listaAmigos.removeChild(listaAmigos.firstChild);
    }

    amigosArray.length = 0; 
    estadoBoton();
}

