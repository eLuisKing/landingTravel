const darkModeweb = document.getElementById('moonWeb');
const darkModemovil = document.getElementById('moonMovil');
const html = document.querySelector('html');

const activeMode = () => {
    html.classList.toggle('dark')
}

darkModeweb.addEventListener('click',() => activeMode());
darkModemovil.addEventListener('click',() => activeMode());