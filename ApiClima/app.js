const UrlBase = "https://api.openweathermap.org/data/2.5/weather";
const ApiKey = "34e07a6722a1b743de73012d7a553514"
const btnCiudad = document.querySelector('#btnCiudad');
const inputCity = document.querySelector('#city');

const fetApi = url => fetch(url).then(response => response.json());

async function getClima(lat,lon, apiKey){
    const url = `${ UrlBase }?lat=${lat}&lon=${lon}&appid=${apiKey}`;
    const clima = await fetApi(url);
    console.log(clima);
    const temperature =(clima.main.temp-273.15).toFixed(2);
    document.querySelector('#left h2').innerHTML = clima.name;
    pintaTemp(temperature );
    pintaFondo(temperature);
}


async function getClimaByCity(city, apiKey){
    const url = `${ UrlBase}?q=${ city }&appid=${ apiKey }`;
    const clima = await fetApi(url);
    console.log(clima);
    const temperature =(clima.main.temp-273.15).toFixed(2);
    document.querySelector('#left h2').innerHTML = clima.name;
    pintaTemp(temperature );
    pintaFondo(temperature);
}


function pintaTemp(temp){
    const h3 = document.querySelector('h3');
    if (temp < 15){
        h3.innerHTML = `${ temp } °C ❄❄❄❄`;
    } else if (temp < 22){
        h3.innerHTML = `${ temp } °C ⛅⛅⛅⛅`;
    }else {
        h3.innerHTML = `${ temp } °C 🌞🔥🌞🔥`;
    }
}
   
function pintaFondo(temp){
    const fondo = document.querySelector('body');
    if(temp < 15){
        fondo.style.background = '#a8f3da';
    }else if (temp < 22){
        fondo.style.background = '#FFFF88';
    }else{
        fondo.style.background = '#fab400';
    }
}

navigator.geolocation.getCurrentPosition(
    position =>{
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;
        getClima(lat,lon, ApiKey);
    }
)

btnCiudad.addEventListener('click', () => {
    const city = inputCity.value;
    if(city){
        getClimaByCity(city, ApiKey);
    }
});