function excluirPessoa(pessoaId) {
    if (confirm("Deseja realmente excluir esta pessoa?")) {
        fetch(`https://localhost:7091/api/Pessoa/DeleteById/${pessoaId}`, {
            method: 'DELETE',
        })
        .then(response => {
            if (response.ok) {
                window.location.reload();
            } 
        })
        .catch(error => {
            console.error(`Erro ao buscar dados da Api${error}`);
        });
    }
}
