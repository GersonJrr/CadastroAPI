using CadastroPessoaApi.Service;
using CadastroPessoaApi.ViewModel;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace CadastroPessoaApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PessoaController : ControllerBase
    {
        [HttpGet("GetAll")]

        public IEnumerable<PessoaViewModel> GetAll()
        {
            var service = new ServicePessoa();
            return service.GetAll();
        }
        [HttpGet("GetById/{pessoaId}")]

        public PessoaViewModel GetById(int pessoaId)
        {
            var service = new ServicePessoa();
            return service.GetById(pessoaId);

        }
        [HttpGet("GetByPrimeiroNome/{primeiroNome}")]
        public PessoaViewModel GetByPrimeiroNome(string primeiroNome)
        {
            var service = new ServicePessoa();
            return service.GetByPrimeiroNome(primeiroNome);
        }

        [HttpPut("UpdateById/{pessoaId}")]
        public void UpdateById(int pessoaId, string novoNome)
        {
            var service = new ServicePessoa();
            service.UpdateById(pessoaId, novoNome);
        }
        [HttpPost("Create")]

        public IActionResult Create(PessoaViewModel pessoa)
        {
            var service = new ServicePessoa();
            var resultado = service.Create(pessoa);

            var result = new
            {
                Success = true,
                Data = resultado,
            };

            return Ok(result);
        }
    }

}
