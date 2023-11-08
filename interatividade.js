const requestURL = "https://raw.githubusercontent.com/WesleyBanagouro/API-CIdades/main/cidades.json"; //Armazena a URL que contem o JSON em uma variavel
const request = new XMLHttpRequest(); //Cria uma nova instancia para utilizar a API XMLHttpRequest, permite fazer requisições assincronas
const inputCidade = document.querySelector('.search'); //Pega o elemento com a classe "search"
const sugestoes = document.querySelector('.suggestions'); //Pega o elemento com a classe "suggestions"

request.open("GET", requestURL); // Com a API e o metodo open, abre a URL com o metodo GET
request.responseType = "json"; // Identifica a resposta do request como arquivo JSON
request.send(); // Envia a request com o metodo send

request.onload = function () {
  cidades();
}; // Executa a função cidades apos concluido a request

let filtro = []; //Inicializa um array vazio

function cidades() {
  const estados = request.response; // Armazena a resposta da request em uma variavel
  const arrayEstados = estados.UF; // seleciona o array UF que esta dentro do objeto do JSON e armazena em uma variavel
  const inputSearch = inputCidade.value; //Pega o valor digitado no campo de pesquisa

  inputCidade.addEventListener('change', cidades); //Adiciona um listener para o evento change no campo de pesquisa e executa a função cidade
  inputCidade.addEventListener('keyup', cidades); //Adiciona um listener para o evento change no campo de pesquisa e executa a função cidade 

  if (inputSearch.length > 0) {
    filtro = arrayEstados.filter(estado => estado.nome.includes(inputSearch)); //PEsquisa na lista array pelo caracter que foi digitado
  } else {
    sugestoes.innerHTML = ""; // Limpa a lista de sugestões quando o campo estiver vazio
    return; // Retorna para interromper a execução da função
  }

  sugestoes.innerHTML = "";
  filtro.forEach(estado => {
    sugestoes.innerHTML += `<li>${estado.nome}</li>`; // coloca o nome dos estados que foram digitados
  });
}
