let contador = 0;
/* trabalhando em algumas funçoes aleatorias para o resto do site */
function registrarAvistamento() {
    contador++;

    const textoNumero = document.getElementById('numero-avistamentos');

    textoNumero.innerText = contador;
}


function consultarHumor() {
    const humores = []

    let num = Math.floor(Math.random()*humores.length)

    const humor = document.getElementById('humorJC');

    humor.innerText = humores[num];
}
/* trabalhando em algumas funçoes aleatorias para o resto do site */
function abrirTermos() {
    const popup = document.getElementById('modal-termos');
    popup.style.display = 'block';
}

function fecharTermos() {
    const popup = document.getElementById('modal-termos');
    popup.style.display = 'none';
}

const checkbox = document.getElementById('check-mostrar-senha');

function mostrarSenha() {
    const campoSenha = document.getElementById('senha-usuario');
    if(campoSenha.type == 'password') {
        campoSenha.type = 'text'; }

    else {
    campoSenha.type ='password';
    }
    }

checkbox.addEventListener('click', mostrarSenha);