var tela = document.querySelector('canvas');
var tabuleiro = tela.getContext('2d');

function desenhaForca(parte){
    tabuleiro.lineWidth = 6
    tabuleiro.lineCap = 'round'
    tabuleiro.lineJoin = "round"
    tabuleiro.strokeStyle = '#0A3871'
    tabuleiro.beginPath()
    var eixo = tela.width/2
        
    if(parte == 0){
        tabuleiro.moveTo(eixo,350)
        tabuleiro.lineTo(eixo+250,350)
    }else if(parte == 1){
        tabuleiro.moveTo(eixo+50,350)
        tabuleiro.lineTo(eixo+50,100)
    }else if(parte == 2){
        tabuleiro.moveTo(eixo+50,100)
        tabuleiro.lineTo(eixo+150,100)
    }else if(parte == 3){
        tabuleiro.moveTo(eixo+150,100)
        tabuleiro.lineTo(eixo+150,160)
    }else if(parte == 4){
        tabuleiro.arc(eixo+150,190,30,0,2*3.14)
        tabuleiro.stroke()
        tabuleiro.closePath()
        desenhaCara('#0A3871')
    }else if(parte == 5){      //torax
        tabuleiro.moveTo(eixo+150,220)
        tabuleiro.lineTo(eixo+150,270)
    }else if(parte == 6){
        tabuleiro.moveTo(eixo+150,270)
        tabuleiro.lineTo(eixo+120,320)
    }else if(parte == 7){
        tabuleiro.moveTo(eixo+150,270)
        tabuleiro.lineTo(eixo+180,320)
    }else if(parte == 8){    //braço esquerdo
        tabuleiro.moveTo(eixo+150,240)
        tabuleiro.lineTo(eixo+120,270)
    }else if(parte == 9){
        tabuleiro.moveTo(eixo+150,240)
        tabuleiro.lineTo(eixo+180,270)
        tabuleiro.font = 'bold 25px Arial'
        //desenhaCara('white')
        tabuleiro.fillText('x', eixo+133,187)
        tabuleiro.fillText('x', eixo+153,187)
        //tabuleiro.fillText('x', eixo+143,206)
    }
    tabuleiro.stroke()
    tabuleiro.closePath()

}

function desenhaCara(cor){
        tabuleiro.lineWidth = 3
        var eixo = tela.width/2
        tabuleiro.strokeStyle = cor
        tabuleiro.beginPath()
        tabuleiro.arc(eixo+140,180,5,0,2*3.14)
        tabuleiro.stroke()
        tabuleiro.closePath()
        tabuleiro.beginPath()
        tabuleiro.arc(eixo+160,180,5,0,2*3.14)
        tabuleiro.stroke()
        tabuleiro.closePath()
        tabuleiro.beginPath()
        tabuleiro.moveTo(eixo+145,200)
        tabuleiro.lineTo(eixo+155,200)
        tabuleiro.stroke()
        tabuleiro.closePath()
}