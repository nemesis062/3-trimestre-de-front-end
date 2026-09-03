async function buscarCEP() {
    const inpuit_cep = document.getElementById('cep').value;
    const resultado = document.getElementById('resultado');

    resultado.innerHTML = "buscando dados na API..."
    
    try{
        const resposta = await fetch(`https://viacep.com.br/ws/${inpuit_cep}/json/`)     
        const dados = await resposta.json();
        
        if(dados.erro){
            resultado.innerHTML = "<p>CEP não enconrado!</p>"
            return;
        }
        resultado.innerHTML = `<p><strong>logradouro:</strong>${dados.logradouro}</p>
                            <p><strong>bairro:</strong>${dados.bairro}</p>
                            <p><strong>localidade:</strong>${dados.localidade}</p>
                            <p><strong>UF:</strong>${dados.uf}</p>`
    }catch(erro){
        resultado.innerHTML = "<p> Erro ao conectar com API</p>"
    } 
}