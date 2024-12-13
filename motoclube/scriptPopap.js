const btnMostrarPopup = document.getElementById('suspenderBtn');
const btnFecharPopup = document.getElementById('btnFecharPopup');
const popup = document.getElementById('popup');

btnMostrarPopup.addEventListener('click', function() {
    popup.style.display = 'flex';
});

btnFecharPopup.addEventListener('click', function() {
    popup.style.display = 'none';
});

document.querySelector('.popup h2').innerText = 'Novo Título';
document.querySelector('.popup p').innerText = 'Novo texto para o aviso!';
