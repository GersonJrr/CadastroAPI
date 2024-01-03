document.addEventListener("DOMContentLoaded", function () {

    const pessoalista = document.getElementById('pessoa-lista');

    function renderTable(data) {
        pessoalista.innerHTML = "";

        data.forEach(pessoa => {
            const row = document.createElement('tr');

            row.innerHTML = `
                <td>${pessoa.pessoaId}</td>
                <td>${pessoa.primeiroNome}</td>
                <td>${pessoa.nomeMeio}</td>
                <td>${pessoa.ultimoNome}</td>
                <td>${pessoa.cpf}</td>
                <td>
                    <button onclick="abrirTelaEditar(${pessoa.pessoaId})">Editar</button>
                    <button onclick="excluirPessoa(${pessoa.pessoaId})">Excluir</button>
                </td>
            `;

            pessoalista.appendChild(row);
        });
    }

    function feachPessoas() {
        fetch("https://localhost:7091/api/Pessoa/GetAll")
            .then(response => response.json())
            .then(data => renderTable(data))
            .catch(error => console.error("Erro ao buscar dados da Api"));
    }
    feachPessoas();
});

function abrirTelaCreate() {
    const criarIframe = document.getElementById('meuBox');
    criarIframe.src = 'create.html';
    document.getElementById('meuBox').style.display = 'block';
    
}


function abrirTelaEditar(pessoaId) {
    const editarIframe = document.getElementById('meuIFrame');
    editarIframe.src = `editar.html?id=${pessoaId}`;
    document.getElementById('meuBox').style.display = 'block';
    
}


