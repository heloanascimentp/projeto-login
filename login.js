/* 
Codigo de validação do furmulario de login
*/
function validar(){
    let email = document.getElementById('email').value;
    let senha = document.getElementById('password').value;
    if(!email || !senha){
        alert("campo de prenchimento obrigatorio, por favor preencher")
    }else{
        alert("campos preenchidos com sucesso")
    }

}