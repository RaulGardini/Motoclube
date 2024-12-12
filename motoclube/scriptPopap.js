// script.js

// Obter elementos do HTML
const btnMostrarPopup = document.getElementById('suspenderBtn');
const btnFecharPopup = document.getElementById('btnFecharPopup');
const popup = document.getElementById('popup');

// Mostrar o popup
btnMostrarPopup.addEventListener('click', function() {
    popup.style.display = 'flex'; // Exibe o popup
});

// Fechar o popup
btnFecharPopup.addEventListener('click', function() {
    popup.style.display = 'none'; // Esconde o popup
});

document.querySelector('.popup h2').innerText = 'Novo Título';
document.querySelector('.popup p').innerText = 'Novo texto para o aviso!';
