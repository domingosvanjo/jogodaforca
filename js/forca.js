var tela = document.querySelector('canvas');
var tabuleiro = tela.getContext('2d');

function desenhaForca(parte){
    if(alturaTela < 700){
        tabuleiro.lineWidth = 2
    }else{
        tabuleiro.lineWidth = 6
    }
    tabuleiro.lineCap = 'round'
    tabuleiro.lineJoin = "round"
    tabuleiro.strokeStyle = '#0A3871'
    tabuleiro.beginPath()
    var eixo = tela.width/2  //599,5
    var x
    var y
        
    if(parte == 0){   //base da forca
        y = Math.floor(eixo*0.583)
        x = Math.floor(eixo*0.417)
        tabuleiro.moveTo(eixo,y)
        tabuleiro.lineTo(eixo+x, y)

    }else if(parte == 1){  //traço vertical
        y = Math.floor(eixo*0.583)
        x = Math.floor(eixo*0.0834)
        tabuleiro.moveTo(eixo+x, y)
        tabuleiro.lineTo(eixo+x, eixo*0.166)

    }else if(parte == 2){  //traço horizontal
        y = Math.floor(eixo*0.166)
        x = Math.floor(eixo*0.0834)
        tabuleiro.moveTo(eixo+x, y)
        tabuleiro.lineTo(eixo+x+y, y)

    }else if(parte == 3){  //segundo traço vertical
        y = Math.floor(eixo*0.166)
        x = Math.floor(eixo*0.250)
        tabuleiro.moveTo(eixo+x, y)
        tabuleiro.lineTo(eixo+x, x+5)

    }else if(parte == 4){  //cabeça
        y = Math.floor(eixo*0.316)  //189
        x = Math.floor(eixo*0.250)  //749
        tabuleiro.arc(eixo+x, y, eixo*0.050,0,2*3.14)
        tabuleiro.stroke()
        tabuleiro.closePath()
        desenhaCara('#0A3871')

    }else if(parte == 5){      //torax
        y = Math.floor(eixo*0.366)
        x = Math.floor(eixo*0.250)
        tabuleiro.moveTo(eixo+x, y)
        tabuleiro.lineTo(eixo+x, y+(eixo*0.083))

    }else if(parte == 6){   //perna esquerda
        y = Math.floor(eixo*0.450)
        x = Math.floor(eixo*0.250)
        tabuleiro.moveTo(eixo+x, y)
        tabuleiro.lineTo(eixo+(eixo*0.200),eixo*0.533)

    }else if(parte == 7){  //perna direita
        y = Math.floor(eixo*0.450)
        x = Math.floor(eixo*0.250)
        tabuleiro.moveTo(eixo+x, y)
        tabuleiro.lineTo(eixo+(eixo*0.300), eixo*0.533)

    }else if(parte == 8){    //braço esquerdo
        y = Math.floor(eixo*0.400)
        x = Math.floor(eixo*0.250)
        tabuleiro.moveTo(eixo+x, y)
        tabuleiro.lineTo(eixo+(eixo*0.200), eixo*0.450)

    }else if(parte == 9){  //braço direito
        y = Math.floor(eixo*0.400)
        x = Math.floor(eixo*0.250)
        tabuleiro.moveTo(eixo+x, y)
        tabuleiro.lineTo(eixo+(eixo*0.300), eixo*0.450)
        if(alturaTela < 700){
            tabuleiro.font = 'bold 0.4em Arial'
        }else{
            tabuleiro.font = 'bold 1em Arial'
        }
        tabuleiro.fillStyle = '#ff0000'
        if(alturaTela < 700){
            tabuleiro.fillText('o', eixo+(eixo*0.223),eixo*0.309)
            tabuleiro.fillText('o', eixo+(eixo*0.257),eixo*0.309)
        }else{
            tabuleiro.fillText('O', eixo+(eixo*0.223),eixo*0.309)
            tabuleiro.fillText('O', eixo+(eixo*0.257),eixo*0.309)
        }
    }
    tabuleiro.stroke()
    tabuleiro.closePath()

}

function desenhaCara(cor){
    var eixo = tela.width/2
    y = Math.floor(eixo*0.300)
    x = Math.floor(eixo*0.233)

    if(alturaTela < 700){
        tabuleiro.lineWidth = 1
    }else{
        tabuleiro.lineWidth = 3
    }
    tabuleiro.strokeStyle = cor
    tabuleiro.beginPath()
    tabuleiro.arc(eixo+x, y, eixo*0.008, 0, 2*3.14)
    tabuleiro.stroke()
    tabuleiro.closePath()
    tabuleiro.beginPath()
    tabuleiro.arc(eixo+(eixo*0.266), y, eixo*0.008, 0, 2*3.14)
    tabuleiro.stroke()
    tabuleiro.closePath()
    tabuleiro.beginPath()
    tabuleiro.moveTo(eixo+(eixo*0.241),eixo*0.333)
    tabuleiro.lineTo(eixo+(eixo*0.258),eixo*0.333)
    tabuleiro.stroke()
    tabuleiro.closePath()
}