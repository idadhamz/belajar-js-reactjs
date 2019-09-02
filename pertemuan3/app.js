const apiUrl = 'https://swapi.co/api/people/';

async function getApi(){
    const response = await fetch(apiUrl);
    const json = await response.json();

    console.log(json);
}

getApi();