var pessoas = ['MATEUS','MIRELE','DOMINGOS','RAIMUNDO','DANIELA','RAIKELE','JACKESON','RONERSON','CARLINDO','JHONSON','ITAMAR','CREUZA','VALDEMIR','JOSELIA','FILIPI','PRETA'];

var tela = document.querySelector('canvas');
var tabuleiro = tela.getContext('2d');
var letras = [];
var palavraCorreta = "";
var erros = 0;
var palavraSecreta = "";
var fimJogo = false;
var x;
var y;
var eixo1;

function escolherPalSec(){
    var palavra = pessoas[Math.floor(Math.random()*pessoas.length)]
    palavraSecreta = palavra
    return palavra
}

function escreverTracos(){
    eixo1 = tela.width / 2
    tabuleiro.lineWidth = 6
    tabuleiro.lineCap = 'round'
    tabuleiro.lineJoin = "round"
    tabuleiro.strokeStyle = '#0A3871'
    tabuleiro.beginPath()
    var eixo = Math.floor((tela.width/2)/palavraSecreta.length)
    console.log(eixo1)
    x = Math.floor(eixo1*0.834) //equivalente a 500 em tela de 1200 de largura
    y = Math.floor(eixo1*0.750) //equivalente a 450 em tela de 1200 de largura
    console.log('x ' + x)
    console.log('y ' + y)
    for(var i = 0; i < palavraSecreta.length; i++){
        tabuleiro.moveTo(x+(eixo*i), y)
        tabuleiro.lineTo(x+(eixo1*0.083)+(eixo*i), y)
    }
    tabuleiro.stroke()
    tabuleiro.closePath()
}

function letraCorreta(index){
    tabuleiro.font = 'bold 52px Arial'
    tabuleiro.fillStyle = '#0A3871'
    var eixo = Math.floor((tela.width/2)/palavraSecreta.length)
    x = Math.floor(eixo1*0.842)
    y = Math.floor(eixo1*0.733)
    tabuleiro.fillText(palavraSecreta[index], x+(eixo*index), y)
}

function letraIncorreta(letra, errosLeft){
    tabuleiro.font = 'bold 40px Arial'
    tabuleiro.fillStyle = '#0A3871'
    x = Math.floor(eixo1*0.892)
    y = Math.floor(eixo1*0.867)
    tabuleiro.fillText(letra, x+((eixo1*0.066)*(errosLeft)), y, eixo1*0.066)
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
        x = Math.floor(eixo1*1.444)
        y = Math.floor(eixo1*0.333)
        tabuleiro.fillStyle = '#008000'
        tabuleiro.fillText('Parabéns,', x, y)
        tabuleiro.fillText('você venceu!',eixo1*1.417, eixo1*0.417)
        fimJogo = true
    }else if(erros >= 9){
        x = Math.floor(eixo1*1.442)
        y = Math.floor(eixo1*0.400)
        tabuleiro.fillStyle = '#ff0000'
        tabuleiro.fillText('Você perdeu!', x, y)
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


