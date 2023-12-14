function createPessoa(){
    const primeiroNome = document.getElementById("firstName").value
    const segundoNome = document.getElementById("middleName").value
    const ultimoNome = document.getElementById("lastName").value
    const cpf = document.getElementById("cpf").value

    const data ={
        primeiroNome:primeiroNome,
        nomeMeio:segundoNome,
        ultimoNome:ultimoNome,
        cpf:cpf,
    }


    fetch("https://localhost:7228/api/Pessoa/Create",{
        method:'POST',
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }).then(response =>{
        if(!response.ok){
            alert("ERRO AO CRIAR PESSOA!")
        }
        alert("pessoa criada com sucesso!")
        window.location.href = "index.html";
    })
}