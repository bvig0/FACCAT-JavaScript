let codUsuario = parseInt(prompt("Digite o código do usuário:"))

   if(codUsuario == 1234){
    let senha = parseInt(prompt("Digite a senha:"))
    if(senha == 9999){
        alert("Acesso permitido.")
    }
    else{
        alert("Senha incorreta! Acesso negado.")
    }
   }
   else{
    alert("Usuário inválido!")
   }