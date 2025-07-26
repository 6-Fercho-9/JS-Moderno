const url1 = "https://jsonplaceholder.typicode.com/comments";
const url2 = "https://jsonplaceholder.typicode.com/todos";
const url3 = "https://jsonplaceholder.typicode.com/users";

const llamarAPIJSONPlaceHolder = async() => {
    try {

        const inicio = performance.now();
        console.log(inicio)
        const response1 = await fetch(url1);
        const data = await response1.json();
        //console.log(data);

        const response2 = await fetch(url2);
        const data2 = await response2.json();
        //console.log(data2);

        const response3 = await fetch(url3);
        const data3 = await response3.json();
        //console.log(data3);
        const final = performance.now();
        console.log(final);
    } catch (error) {
        console.error(error?.message);
    }
}

const consultar2 = async () => {
    const inicio = performance.now();
    console.log(inicio);
    //ejecutar varias consultas en paralelo (hilos)
    const [response1,response2,response3] = await Promise.all([fetch(url1),fetch(url2),fetch(url3)]);
    const [json1,json2,json3] = await Promise.all([response1.json(),response2.json(),response3.json()]);
    const final = performance.now();
    console.log(final);
} 
//llamarAPIJSONPlaceHolder();
consultar2();
