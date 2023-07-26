/* 
Codigo de validação do furmulario de login
*/
function validar(){
    let email = document.getElementById('email').value;
    let senha = document.getElementById('password').value;
    if(!email || !senha){
        alert("campo de prenchimento obrigatorio, por favor preencher");
    }else{
        window.location.href = "aula2.html";
    }

}

// cria lista de usuario dentro de um array

var dadosLista = [];

function salvarUser(){
    let nomeUser = document.getElementById("nomeUser").value;

    if(nomeUser){
        dadosLista.push(nomeUser);
        criaLista();
        document.getElementById("nomeUser").value = '';
    }else{
        alert ("usuario por favor preenche o campo nome");
    }
}

// funcão para criação de lista na tabela

function criaLista(){
    let tabela = document.getElementById("tabela").innerHTML = "<tr><th>Nome usuario</th><th>acões</th></tr>";

    // laço de repeticão para criar nome ne tabela 
    for(let i=0;i <= (dadosLista.length -1);i++){
        tabela += "<tr><td>" + dadosLista[i] + "</td><td><button class ='btn btn-success' onclick='editar(this.parentNode.parentNode.rowindex)'>editar</button><button class ='btn btn-danger' onclick='excluir(this.parentNode.parentNode.rowindex)'>excluir</button></td></tr>";
    document.getElementById('tabela').innerHTML = tabela;
    }
}

// função para editar nome
function editar(i){
    document.getElementById("nomeUser").value = dadosLista[(i - 1)];
    dadosLista.splice(dadosLista[(i - 1)], 1);
}

// função para excluir nome
function excluir(i){
    dadosLista.splice((i - 1), 1);
    document.getElementById('tabela').deleteRow(i);
}