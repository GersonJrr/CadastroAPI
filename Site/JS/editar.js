function editarRegistro(primeiroNome, nomeMeio, ultimoNome, CPF) {
    const body = {
        primeiroNome: primeiroNome,
        nomeMeio: nomeMeio,
        ultimoNome: ultimoNome,
        CPF: CPF,
    };

    fetch(`https://localhost:7091/api/Pessoa/UpdateByid/${pessoaId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    })
    .then(response => {
        if (!response.ok) {
            throw new Error(`Erro na requisição: ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        console.log('Registro atualizado com sucesso:', data);
    })
    .catch(error => {
        console.error('Erro durante a atualização:', error);
    });
}





