const requestURL = "https://raw.githubusercontent.com/WesleyBanagouro/API-CIdades/main/cidades.json";
const request = new XMLHttpRequest();
const inputCidade = document.querySelector('.search');
const sugestoes = document.querySelector('.suggestions');

request.open("GET", requestURL);
request.responseType = "json";
request.send();

request.onload = function () {
  cidades();
};

let filtro = [];

function cidades() {
  const estados = request.response;
  const arrayEstados = estados.UF;
  const inputSearch = inputCidade.value;

  inputCidade.addEventListener('change', cidades);
  inputCidade.addEventListener('keyup', cidades);

  if (inputSearch.length > 0) {
    filtro = arrayEstados.filter(estado => estado.nome.includes(inputSearch));
  } else {
    sugestoes.innerHTML = ""; // Limpa a lista de sugestões quando o campo estiver vazio
    return; // Retorna para interromper a execução da funçãoo
  }

  sugestoes.innerHTML = "";
  filtro.forEach(estado => {
    sugestoes.innerHTML += `<li>${estado.nome}</li>`;
  });
}
