let local = document.getElementById("local")
// Seleciona o elemento HTML com o ID "local" e o armazena na variável "local"
let bairro = document.getElementById("bairro")
// Seleciona o elemento HTML com o ID "bairro" e o armazena na variável "bairro"

function buscarcep(){
// Função que busca informações do CEP

    var valor = document.getElementById("pesquisar").value
    // Obtém o valor digitado pelo usuário no campo de texto com o ID "pesquisar"


    let resultado = `https://viacep.com.br/ws/${valor}/json/`
    // Constrói a URL para fazer a requisição à API usando o CEP digitado



    fetch(resultado)
    // Faz a requisição à API ViaCEP para obter as informações do CEP

    .then(response => response.json()) // Converte a resposta para JSON
    .then(data =>{
        console.log(data);// Exibe os dados no console para verificação
        uf.innerHTML += data.uf //Insere o UF no elemento "UF"
        cidade.innerHTML += data.localidade // Insere a cidade no elemento "cidade"   
        local.innerHTML += data.logradouro // Insere o logradouro (rua/avenida) no elemento "local"
        bairro.innerHTML += data.bairro  //Insere o bairro no elemento "bairro"
    })
}

function limpar(){
// Função que limpa os campos e reseta os textos

    
    document.getElementById("pesquisar").value = ""
    // Limpa o campo de texto onde o usuário digitou o CEP

    document.getElementById("uf").innerHTML = "UF: "
    // Reseta o texto do elemento "UF"

    document.getElementById("cidade").innerHTML = "Cidade: "
    // Reseta o texto do elemento "Cidade"

    document.getElementById("bairro").innerHTML = "Local: "
    // Reseta o texto do elemento "Local"

    document.getElementById("local").innerHTML = "Bairro: "
    // Reseta o texto do elemento "Bairro"
}