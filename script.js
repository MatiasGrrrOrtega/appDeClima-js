let baseUrl = 'https://api.openweathermap.org/data/2.5/weather';
let api_key = 'e410fd5aa2f28406dd62bb085b5fbfe3';
let difKelvin = 273.15;
let botonDeBusqueda = document.getElementById('botonBusqueda');

botonDeBusqueda.addEventListener('click', () => {
    const ciudad = document.getElementById('ciudadEntrada').value;
    if (ciudad) {
        fetchCiudad(ciudad);
    }
});

function fetchCiudad(ciudad) {
    fetch(`${baseUrl}?q=${ciudad}&appid=${api_key}`)
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        mostrarDatosClima(data);
    });    
}

function mostrarDatosClima(data) {
    console.log(data);
    const divDatosClima = document.getElementById('datosClima');
    divDatosClima.innerHTML = '';
    
    const ciudadNombre = data.name;
    const temperatura = data.main.temp - difKelvin;
    const humedad = data.main.humidity;
    const descripcion = data.weather[0].description;
    const icon = data.weather[0].icon;

    const divCiudadTitulo = document.createElement('h2');
    divCiudadTitulo.textContent = ciudadNombre;

    const divTemperatura = document.createElement('p');
    divTemperatura.textContent = `La temperatura es: ${temperatura}ºC`;

    const divHumedad = document.createElement('p');
    divHumedad.textContent = `La humedad es: ${humedad}%`;

    const divDescripcion = document.createElement('p');
    divDescripcion.textContent = `El clima es: ${descripcion}`;

    const divIcono = document.createElement('img');
    let urlIcon =`https://openweathermap.org/img/wn/${icon}@2x.png`;
    divIcono.src = urlIcon;

    divDatosClima.appendChild(divCiudadTitulo);
    divDatosClima.appendChild(divTemperatura);
    divDatosClima.appendChild(divHumedad);
    divDatosClima.appendChild(divIcono);
    divDatosClima.appendChild(divDescripcion);
}