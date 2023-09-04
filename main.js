const btnSortear = document.querySelector('.sortear');
const textarea = document.querySelector('textarea');
const tagResultado = document.querySelector('.resultado p');
const  popUpResultado = querySelector('.resultado');
function pegarDadosFormulario() {
    const valorCampo = textarea.value;
    const listaNomes = valorCampo.split(",");
    const TamanhoArry = listaNomes.length;
    const posicaoNome = gerarNumeroAleatorio(TamanhoArry);
    const nome = listaNomes[posicaoNome]

    mostraResultado(nome);
    textarea.value = ""
}

btnSortear.addEventListener("click", pegarDadosFormulario);

function gerarNumeroAleatorio(TamanhoArry){
    return Math.floor(Math.random()*(TamanhoArry -0)+0);
}

function mostraResultado(nome){
    tagResultado.innerHTML = `Resultado: ${nome}`
    popUpResultado.classList.add("resultado");

}