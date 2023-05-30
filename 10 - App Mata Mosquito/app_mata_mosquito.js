


var altura = 1000 //VARIÁVEL PARA DEIXAR AS COORDENADAS COM NUMEROS INTEIROS

var largura = 1000 //VARIÁVEL PARA DEIXAR AS COORDENADAS COM NUMEROS INTEIROS



var vidas = 1 //VARIÁVEL PARA CONTABILIZAR AS VIDAS NO JOGO

var tempo = 15 //TEMPO DO CRONOMETRO DO JOGO

var nivel = window.location.search// RECUPERA TUDO QUE ESTIVER APÓS O PONTO DE INTERROGAÇÃO NA URL

nivel = nivel.replace('?', '') //SUBSTITUI O PONTO DE INTERROGAÇÃO POR VAZIO

var criaMosquitoTempo = 2500 //VARIAVEL APLICADA TEMPO DOS MOSQUITOS EM TELA PARA ESCOLHA DO NIVEL

// CONDIÇÃO PARA TEMPO DOS MOSQUITOS EM CADA NIVEL
if(nivel === 'facil'){
    criaMosquitoTempo = 2500
}
else if(nivel === 'medio'){
    criaMosquitoTempo = 1800
}
else if(nivel === 'dificil'){
    criaMosquitoTempo = 1000
}

//                 DIMENSIONAMENTO DO JOGO

function dimensaoJogo(){ //função para redimensionar a tela do jogo aplicada na TAG BODY
    altura = window.innerHeight // INNER == INTERNO, ACESSA A ALTURA DA PAGINA

    largura = window.innerWidth // INNER == INTERNO, ACESSA A LARGURA DA PAGINA

    console.group(largura, altura)

}

dimensaoJogo()

//                 CRONOMETRO DO JOGO

var cronometro = setInterval(function(){
    tempo--
    document.getElementById('cronometro').innerHTML = tempo //INNER == INTERNO OU ENTRE //ACESSA O ID='CRONOMETRO' DO HTML E DEFINE UM CONTEUDO A ELE

    if(tempo <= 0){
        clearInterval(posicao_random) //ISSO TIRA OS MOSQUITOS ALEATÓRIOS DAS PAGINAS INICIO, VITORIA E GAME OVER. //BOM... PELO MENOS ERA NÉ

        document.location.href = 'game_over_app_mata_mosquito.html' //ISSO DEFINE O LOCAL DA REMOÇÃO

    }
    if(vidas >= 0 && tempo == 0){// CONDIÇÃO PARA DAR A VITÓRIA AO JOGADOR
        document.location.href = 'vitoria_app_mata_mosquito.html' //REDIRECIONAMENTO PARA A PAGINA DA VITORIA
        clearInterval(posicao_random)//ISSO TIRA OS MOSQUITOS ALEATÓRIOS DAS PAGINAS INICIO, VITORIA E GAME OVER. //BOM... PELO MENOS ERA NÉ
    }
    

}, 1000)


//                   CRIANDO POSIÇÕES RANDÔMICAS

function posicaoRandom(){

    //REMOVENDO O MOSQUITO ANTERIOR
    if(document.getElementById('mosquito')){ //ESSA CONDIÇÃO VERIFICA SE O 'ID MOSQUITO' EXISTE, presente na linha58
        document.getElementById('mosquito').remove() //CASO EXISTA, ELE REMOVERÁ

        if(vidas > 3){// SE A PERDA DE VIDAS FOR MAIOR QUE 3 O JOGO ACABA
            window.location.href ='game_over_app_mata_mosquito.html'// REDIRECIONAMENTO PARA A PAGINA DE GAME OVER
            
        }
        else{
            //USANDO A LOGICA, A STRING 'vida' sera concatenada com a variavel vidas, que esta atribuida a 1
            //NO HTML, EXISTEM ID's 'vida1', 'vida2' e 'vida3' //REPREPESENTANDO A PERDA DE CORAÇÃO
            
            document.getElementById('vida' + vidas).src = "imagens/coracao_vazio.png"
            //CONFORME O JOGADOR NÃO CONSEGUIR MATAR OS MOSQUITOS
            //SERA INCREMENTADO A CONCATENAÇÃO DAS ID' vida1, 2 e 3, ocasionando A PERDA DE CORAÇÕES
            vidas++
        }
        

        
    }


    //criando valores aleatórios
    var positionX = Math.floor(Math.random() * largura) - 90 //arredondando o numero das coordenadas do eixo X e evitando, em 90px, que passem do maximo da tela
    var positionY = Math.floor(Math.random() * altura) - 90 //arredondando o numero das coordenadas do eixo Y e evitando, em 90px, que passem do maximo da tela


    // ja que foi subtraido 90px de cada eixo pode ocorrer do eixo se igualar a zero
    //assim causando em um eixo de valor negativo fazendo com que o mosquito suma da tela
    //para isso criamos essa condição
    if (positionX < 0){
        positionX = 0
    }
    if(positionY < 0){
        positionY = 0
    }

    console.log(positionX, positionY)


    //                    CRIANDO ELEMENTO HTML
    var mosquito = document.createElement('img') //criou a tag IMG

    mosquito.src = 'imagens/mosca.png' // atribuindo o "src" para usar a imagem desejada

     //criando uma classe 'mosquito1' a TAG IMG e aplicando o estilo css que são os tamanhos dos mosquitos
     //atribuindo a ela a aleatoriedade dos tamanhos dos mosquitos com a função 'tamanhoRandom()'
     // e , com a função lados(), fazendo um ladoA e ladoB, para os mosquitos girarem na horizontal
    mosquito.className = tamanhoRandom() + ' ' + lados()

    // acessando o STYLE CSS e posicionando os elementos em coordenandas randomicas
    mosquito.style.left = positionX + 'px' //concatenando e formando a coordenada em pixels no eixo X
    mosquito.style.top = positionY + 'px' //concatenando e formando a coordenada em pixels no eixo Y
    mosquito.style.position = 'absolute' //para que essas coordenandas se mantenham absolutas na tela

    mosquito.id='mosquito'

    mosquito.onclick = function(){
        this.remove()
    }

    document.body.appendChild(mosquito)//acessando o BODY e adicionando a imagem pelo método appendChild
}

posicaoRandom()

//                   CRIANDO TAMANHOS RANDÔMICAS

function tamanhoRandom(){

    var classe = Math.floor(Math.random() * 3)

    switch(classe){ //criando condição para cada mosquito a partir da definição do estilo css
        case 0:
            return 'mosquito1'
        case 1:
            return 'mosquito2'
        case 2 :
            return 'mosquito3'
        case 3:
            return 'mosquito4'
    }
}

console.log(tamanhoRandom())

//                   CRIANDO MUDANÇA RANDÔMICAS DE LADO DA IMAGEM

function lados(){
    var lados = Math.floor(Math.random() * 2)

    switch(lados){
        case 0:
            return 'ladoA'
        case 1:
            return 'ladoB'
    }

}
lados()


//                   FAZENDO COM QUE O MOSQUITO DESPAREÇA E APAREÇA EM TEMPO DETERMINADO
var posicao_random = setInterval(function(){
    posicaoRandom()
}, criaMosquitoTempo)





function reiniciar(){
    window.location.href = 'app_mata_mosquito.html'
}



function iniciarJogo(){
    var nivel = document.getElementById('nivel').value


    if(nivel === ''){
        alert('Selecione um nivel para iniciar o jogo')
        return false
    }
    window.location.href = 'inicial_app_mata_mosquito.html'
    window.location.href = 'app_mata_mosquito.html?' + nivel


}
