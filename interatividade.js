const requestURL = "https://raw.githubusercontent.com/WesleyBanagouro/API-CIdades/main/cidades.json";
const request = new XMLHttpRequest();

request.open("GET", requestURL);

request.responseType = "json";
request.send();

request.onload = function () {
    const estados = request.response;
    console.log(estados);
  };