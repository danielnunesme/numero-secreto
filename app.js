let listaDeNumerosSorteados = [];
let numeroLimite = 25;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;
exibirMensagemInicial();

function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag)
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'brazilian portuguese female',{rate:1.2});
}

function exibirMensagemInicial(){
    exibirTextoNaTela('h1','Jogo do número secreto');
    exibirTextoNaTela('p','Escolha um número entre 1 e 25');
}
 


function verificarChute() {
    let chute = document.querySelector('input').value;
    palavraTentativa = tentativas > 1 ? 'Tentativas':'Tentativa';
    let mensagemTentativa =(`Você descobriu o número secreto com ${tentativas} ${palavraTentativa}!`);
    if (chute == numeroSecreto) {
        exibirTextoNaTela('h1','Acertou!');
        exibirTextoNaTela('p', mensagemTentativa);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else{
        if (chute > numeroSecreto){
            exibirTextoNaTela('h1','Quase lá...');
            exibirTextoNaTela('p', `O número secreto é menor que ${chute}`);
        }else{
            exibirTextoNaTela('h1','Quase lá...');
            exibirTextoNaTela('p',`O número secreto é maior que ${chute}`);
        }
    } tentativas++;
    limparCampo()
 
}

function gerarNumeroAleatorio() {
   let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
   let quantidadeElementosLista = listaDeNumerosSorteados.length;
    if(quantidadeElementosLista == numeroLimite){
        listaDeNumerosSorteados = [];
    }

   if (listaDeNumerosSorteados.includes(numeroEscolhido)){
        return gerarNumeroAleatorio();
   }else{
        listaDeNumerosSorteados.push(numeroEscolhido);
        console.log(listaDeNumerosSorteados);
        return numeroEscolhido;
   }
        
}

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo(){
    numeroSecreto = gerarNumeroAleatorio();
    tentativas = 1;
    limparCampo();
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled',true);
}