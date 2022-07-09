var tela = document.querySelector('canvas');
var tabuleiro = tela.getContext('2d');
var botInJogo = document.querySelector('#inJogo');
var novaPalavra = document.querySelector('#novPalavra');
var rodape = document.querySelector("#rodape");
var input = document.querySelector('.nova');
var divpalNova = document.querySelector('#palNova')
var divLabel = document.querySelector("#mcarac")
var caracEspec = 0;

var alturaTela = window. screen. height;
var larguraTela = window. screen. width;

console.log('altura ' + alturaTela)
console.log('largura ' + larguraTela)

botInJogo.addEventListener('click', function(){   //iniciar jogo e novo jogo
    if (botInJogo.value=='Iniciar jogo' || botInJogo.value == 'Novo jogo'){
        botInJogo.value = 'Novo jogo';
        novaPalavra.value = 'Desistir';
        botInJogo.classList.add('botoes');
        novaPalavra.classList.add('botoes');
        inicJogo();
    }else if (botInJogo.value=='Salvar e começar'){
        
        if(VerifPalavra(input.value.toUpperCase())){
            pessoas.push(input.value.toUpperCase())
            botInJogo.value = 'Novo jogo';
            novaPalavra.value = 'Desistir';
            botInJogo.classList.add('botoes');
            novaPalavra.classList.add('botoes');
            divpalNova.classList.add('invisivel')
            divLabel.classList.add('invisivel')
            inicJogo();
        }
    }
})

novaPalavra.addEventListener('click', function(){       //Adicionar nova palavra
    if (novaPalavra.value=='Adicionar nova palavra'){
        divLabel.classList.remove('invisivel')
        divpalNova.classList.remove('invisivel')
        divpalNova.classList.add('centrTudo')

        botInJogo.value = 'Salvar e começar';
        novaPalavra.value = 'Cancelar';
        botInJogo.classList.add('botoes');
        novaPalavra.classList.add('botoes');

    }else if(novaPalavra.value=='Cancelar' || novaPalavra.value=='Desistir'){
        divLabel.classList.add('invisivel')
        divpalNova.classList.add('invisivel')
        botInJogo.value = 'Iniciar jogo';
        novaPalavra.value = 'Adicionar nova palavra';
        botInJogo.classList.remove('botoes');
        novaPalavra.classList.remove('botoes');
        tela.width=1;
        tela.height=1;
    }
})

function criarCanvas(){
    var x = Math.floor(larguraTela*0.878);
    var y = Math.floor(alturaTela*0.700);
    
    tela.width = x;
    tela.height = y;

    tabuleiro.fillStyle = 'white';
    tabuleiro.fillRect(0,0, x, y);
}

function inicJogo(){
    criarCanvas();
    letras = [];
    palavraCorreta = "";
    erros = 0;
    palavraSecreta = "";
    fimJogo = false;
    desenhaForca(0);
    escreverTracos(escolherPalSec());   
}

function VerifPalavra(palavra){
    
        if(palavra.length >= 3 && palavra.length <=8 ){
            if(caracEspec > 0){
                alert('Por favor digite novamente sem os caracteres especiais, acentos gráficos ou números')
                input.value=""
                caracEspec=0
                return false
            }
            for(var i=0; i < pessoas.length; i++){
                if(pessoas[i] == palavra){
                    alert('Não foi possível inserir sua palavra porque ela já existe na lista. Escolha outra!')
                    return false
                }
            }
        }else{
            alert('Insira uma palavra com no mínimo 3 letras e no máximo 8')
            return false
        }
    return true
    
}

document.body.addEventListener('keydown', function (e) {
    
    const code = e.keyCode;
   
    if(code > 16 && code < 19){
        caracEspec++;
    }else if(code > 47 && code < 58){
        caracEspec++;
    }else if(code > 185 && code < 193){
        caracEspec++;
    }else if(code > 218 && code < 223){
        caracEspec++;
    }

  });
