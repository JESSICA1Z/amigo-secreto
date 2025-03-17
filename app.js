//Variable array, para almacenar los nombres de amigos
let amigos = [];
//Funcionn para agregar amigos
function agregarAmigo() {
    let input = document.getElementById("amigo");
    let amigo = input.value.trim();

    if (amigo === "") {
        alert("Porfavor, inserte un nombre.");
        return;
    }
    amigos.push(amigo);
    input.value = "";
    actualizarLista();
}
//Funcion para actualizar lista de amigos
function actualizarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    for (let i = 0; i < amigos.length; i++) {
        let li = document.createElement("li");
        li.textContent = amigos[i];
        lista.appendChild(li);
    }
}
//Función para sortear los amigos
function sortearAmigo() {
    if (amigos.length === 0) {
        alert("Agrega al menos un nombre de tus amigos antes de sortear.");
        return;
    }
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    let amigoSeleccionado = amigos[indiceAleatorio];
    document.getElementById("resultado").innerText = "El amigo secreto es: " + amigoSeleccionado;
}
