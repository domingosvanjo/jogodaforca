var pessoas = ['MATEUS','MIRELE','DOMINGOS','RAIMUNDO','DANIELA','RAIKELE','JACKESON','RONERSON','CARLINDO','JHONSON','ITAMAR','CREUZA','VALDEMIR','JOSELIA','FILIPI','PRETA'];

var tabuleiro = document.querySelector('canvas').getContext('2d');
var letras = [];
var palavraCorreta = "";
var erros = 0;
var palavraSecreta = "";
var fimJogo = false;

function escolherPalSec(){
    var palavra = pessoas[Math.floor(Math.random()*pessoas.length)]
    palavraSecreta = palavra
    console.log(palavra)
    return palavra
}

function escreverTracos(){
    tabuleiro.lineWidth = 6
    tabuleiro.lineCap = 'round'
    tabuleiro.lineJoin = "round"
    tabuleiro.strokeStyle = '#0A3871'
    tabuleiro.beginPath()
    var eixo = 600/palavraSecreta.length
    for(var i = 0; i < palavraSecreta.length; i++){
        tabuleiro.moveTo(500+(eixo*i),450)
        tabuleiro.lineTo(550+(eixo*i),450)
    }
    tabuleiro.stroke()
    tabuleiro.closePath()
}

function letraCorreta(index){
    tabuleiro.font = 'bold 52px Arial'
    tabuleiro.fillStyle = '#0A3871'
    var eixo = 600/palavraSecreta.length
    tabuleiro.fillText(palavraSecreta[index],505+(eixo*index),440)
   }

function letraIncorreta(letra, errosLeft){
    tabuleiro.font = 'bold 40px Arial'
    tabuleiro.fillStyle = '#0A3871'
    tabuleiro.fillText(letra, 535+(40*(errosLeft)),520,40)
}

function verifLetraCorreta(key){
    if(letras.length < 1 || letras.indexOf(key) < 0){
        letras.push(key)
        return false
    }else{
        letras.push(key.toUpperCase())
        return true
    }
}

function addLetraCorreta(i){
    palavraCorreta +=palavraSecreta[i].toUpperCase()
}

function addLetraIncorreta(letra){
    if(palavraSecreta.indexOf(letra)<= 0){
        erros += 1
    }
}


document.onkeydown=(e) => {
    var letra = e.key.toUpperCase()
    
    if(fimJogo) return
    
    if(!verifLetraCorreta(e.key)){
        if(palavraSecreta.includes(letra)){
           
            for(var i = 0; i < palavraSecreta.length; i++){
                if(palavraSecreta[i] == letra){
                    letraCorreta(i)
                    addLetraCorreta(palavraSecreta.indexOf(letra))
                }
            }
        }
        else{
            if(e.keyCode > 64 && e.keyCode < 91){
                if (!verifLetraCorreta(e.key)) return
                addLetraIncorreta(letra)
                letraIncorreta(letra,erros)
                desenhaForca(erros)
            }
        }
        verifStatus(palavraCorreta, erros)
    } 
}

function verifStatus(pCorreta, erros){
    tabuleiro.font = 'bold 52px Arial'
    if(pCorreta.length == palavraSecreta.length){
        tabuleiro.fillStyle = '#008000'
        tabuleiro.fillText('Parabéns,',865,200)
        tabuleiro.fillText('você venceu!',850,250)
        fimJogo = true
    }else if(erros >= 9){
        tabuleiro.fillStyle = '#ff0000'
        tabuleiro.fillText('Você perdeu!',865,240)
        fimJogo = true
    }
}
/*
document.body.addEventListener('keydown', function (event) {
    const key = event.key;
    const code = event.keyCode;
    console.log(`Key: ${key}, Code ${code}`);
    if(key.charAt >= 'A'){
        console.log('Presionado ' + key)
    }
  });
*/


