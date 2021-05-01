$("#botao-frase").click(fraseAleatoria);
$("#botao-frase-id").click(buscaFrase);

function fraseAleatoria(){ //para fazer uma função ajax, uso a requisição .get, o endereço pra onde quero passar a função, e o retorno é a variável data
    $("#spinner").toggle();

    $.get("http://localhost:3000/frases", trocaFraseAleatoria) //data retorna um array que tem vários objetos dentro
    .fail(function(){
        $("#erro").toggle();
        setTimeout(function(){
            $("#erro").toggle();
        }, 3000);
    })
    .always(function(){// always sempre executa o que eu passo pra ela, tendo dado certo ou errado
        $("#spinner").toggle()
    }) 
}

function trocaFraseAleatoria(data) {
    var frase = $(".frase");
    var numeroAleatorio = Math.floor(Math.random() * data.length);

    frase.text(data[numeroAleatorio].texto);
    atualizaTamanhoFrase();
    atualizaTempoInicial(data[numeroAleatorio].tempo);
}

function buscaFrase(){
    $("#spinner").toggle();
    var fraseId = $("#frase-id").val();
    var dados = {id: fraseId}; //criacao do objeto JS que guarda a id

    $.get("http://localhost:3000/frases", dados, trocaFrase)
    .fail(function(){
        $("#erro").toggle();
        setTimeout(function(){
            $("#erro").toggle();
        }, 3000);
    })
    .always(function(){
        $("#spinner").toggle();
    });
}

function trocaFrase(data){
    var frase = $(".frase");
    frase.text(data.texto);
    atualizaTamanhoFrase();
    atualizaTempoInicial(data.tempo);
}