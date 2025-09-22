let amigos = [];

// Función para agregar un amigo a la lista
function agregarAmigo() {
  const input = document.getElementById("amigo");
  const nombre = input.value.trim();

  // Validación de entrada
  if (nombre === "") {
    alert("Por favor, ingresa un nombre válido.");
    return;
  }

  // Agregar al array
  amigos.push(nombre);

  // Mostrar lista en pantalla
  mostrarLista();

  // Limpiar el campo y enfocar
  input.value = "";
  input.focus();
}

// Función para mostrar los amigos en la lista
function mostrarLista() {
  const lista = document.getElementById("listaAmigos");
  lista.innerHTML = "";

  amigos.forEach((nombre) => {
    const li = document.createElement("li");
    li.textContent = nombre;
    lista.appendChild(li);
  });
}

// Función para sortear un amigo secreto
function sortearAmigo() {
  if (amigos.length === 0) {
    alert("Agrega al menos un nombre antes de sortear.");
    return;
  }

  const indice = Math.floor(Math.random() * amigos.length);
  const amigoSorteado = amigos[indice];

  const resultado = document.getElementById("resultado");
  resultado.innerHTML = `<li> El amigo secreto es: <strong>${amigoSorteado}</strong></li>`;
}