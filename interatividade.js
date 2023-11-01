const requestURL = "https://raw.githubusercontent.com/WesleyBanagouro/API-CIdades/main/cidades.json"; // Json com as cidades.
const request = new XMLHttpRequest(); // Cria uma nova instancia utilizando a API XMLHttpRequest, que mantem a conversa e troca de dados entre cliente e servidor
const inputCidade = document.querySelector('.search');
const sugestoes = document.querySelector('.suggestions');

request.open("GET", requestURL); //Abre uma página com o metodo GET

request.responseType = "json"; // Especifica para converter a resposta da request em json 
request.send(); //Envia a request com o metodo send()

request.onload = function () {// Evento onload que chama a função quando a request retornar com os dados
  cidades();
};

let filtro = []; // Define a variável filtro como um array vazio.
function cidades() { 
  const estados = request.response;
  const arrayEstados = estados.UF;
  const inputSearch = inputCidade.value;
  inputCidade.addEventListener('change', cidades);
  inputCidade.addEventListener('keyup', cidades);
  var i = 0;
  if (inputSearch.length > 0){
    filtro = arrayEstados.filter(estado => estado.nome.includes(inputSearch));
  }else {
    console.log('preencha alguma coisa');
  };
  sugestoes.innerHTML = "";
  filtro.forEach(estado => {
    sugestoes.innerHTML += `<li>${estado.nome}</li>`;
  });
}
