using CadastroPessoaApi.Data;
using CadastroPessoaApi.ViewModel;

namespace CadastroPessoaApi.Service
{
    public class ServicePessoa
    {
        public IEnumerable<PessoaViewModel> GetAll()
        {
            var repository = new Repository();
            return repository.GetAll().ToList();
        }
        public PessoaViewModel GetById(int pessoaId) 
        {
            var repository = new Repository();
            return repository.GetById(pessoaId);
        }
        public PessoaViewModel GetByPrimeiroNome(string primeiroNome)
        {
            var repository = new Repository();
            return repository.GetByPrimeiroNome(primeiroNome);
        }
        public void UpdateById(int pessoaId, string novoNome)
        {
            var repository = new Repository();
            repository.UpdateById(pessoaId, novoNome);
        }
        public dynamic Create(PessoaViewModel pessoa)
        {
            if (pessoa == null)
                return "Os dados são obrigatorios";
            if (pessoa != null && string.IsNullOrEmpty(pessoa.nomeMeio))
                return "O campo nomeMeio é obrigatório";
            if (pessoa != null && string.IsNullOrEmpty(pessoa.ultimoNome))
                return "O campo ultimoNome é obrigatório";
            if (pessoa != null && string.IsNullOrEmpty(pessoa.CPF))
                return "O campo CPF é obrigatório";

            var repository = new Repository();
            return repository.Create(pessoa);
        }

    }

}
