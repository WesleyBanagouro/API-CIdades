const requestURL = "https://raw.githubusercontent.com/WesleyBanagouro/API-CIdades/main/cidades.json"; // Json com as cidades.
const request = new XMLHttpRequest(); // Cria uma nova instancia utilizando a API XMLHttpRequest, que mantem a conversa e troca de dados entre cliente e servidor
const inputCidade = document.querySelector('.search');

request.open("GET", requestURL); //Abre uma página com o metodo GET

request.responseType = "json"; // Especifica para converter a resposta da request em json 
request.send(); //Envia a request com o metodo send()

request.onload = function () {// Evento onload que chama a função quando a request retornar com os dados
  cidades();
};

function cidades() { 
  const estados = request.response;
  const arrayEstados = estados.UF;
  const inputSearch = inputCidade.value;
  inputCidade.addEventListener('change', cidades);
  inputCidade.addEventListener('keyup', cidades);

  // Este loop garante que o array `arrayEstados` esteja preenchido antes de tentar acessar o índice `i`.
  var i = 0;
  const filtro = [];
  while(i < arrayEstados.length) {
    if (arrayEstados[i].nome.includes(inputSearch)) {
      filtro.push(arrayEstados[i].nome)
    }
    i++;
  };
  console.log(filtro);
  
  /*arrayEstados.filter(function() {
    return 
  })*/
  
}
