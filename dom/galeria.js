const contenedor = document.querySelector('.container');
const main = document.getElementById('main')

function getImagen(e){
    const image = e.target.getAttribute('src');
    main.src=image;
}

contenedor.addEventListener('click', getImagen);