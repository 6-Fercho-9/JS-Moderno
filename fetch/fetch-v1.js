const url = "https://jsonplaceholder.typicode.com/comments";
async function obtenerDatosDeAPI(){
    try {
        const response = await fetch(url);
        const res = await response.json();
        console.log(res);
    } catch (error) {
        console.error(error?.message);
    }
}

async function obtenerDatav2 (url) {
  fetch(url)
    .then((response) => response.json())
    .then((json) => console.log(json))
    .catch((error) => {
        console.error("Error al obtener los datos:", error?.message);
    })
}
obtenerDatosDeAPI();

