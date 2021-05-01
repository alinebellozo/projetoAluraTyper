var tempoInicial = $("#tempo-digitacao").text();
var campo = $(".campo-digitacao");

//$(document).ready(function(){ -> quando a página estiver pronta, chama o que está dentro da função
$(function(){    
    atualizaTamanhoFrase();
    inicializaContadores();
    inicializaCronometro();
    inicializaMarcadores();
    $("#botao-reiniciar").click(reiniciaJogo); // posso trocar on.("click") por .click
    atualizaPlacar();
    $('#usuarios').selectize({
        create: true,
        sortField: 'text'
    });

    $(".tooltip").tooltipster();

});

function atualizaTempoInicial(tempo){
    tempoInicial = tempo;
    $("#tempo-digitacao").text(tempo);
}



function atualizaTamanhoFrase(){
    var frase = $(".frase").text(); //$ = função jQuery
    var numPalavras = frase.split(" ").length; //split serve para "quebrar" a frase em como a gente quiser. Nesse caso, separa por espaços
    var tamanhoFrase = $("#tamanho-frase");
    tamanhoFrase.text(numPalavras); //a função .text funciona para pegar ou para atribuir o valor
}


function inicializaContadores(){
    campo.on("input", function(){
        var conteudo = campo.val();
        var qtdPalavras = conteudo.split(/\S+/).length - 1; // \S+ expressão regular que busca vários tipos de espaço vazio
        $("#contador-palavras").text(qtdPalavras);
        var qtdCaracteres = conteudo.length;
        $("#contador-caracteres").text(qtdCaracteres);
    });
}

function inicializaCronometro(){
    campo.one("focus", function(){ // focus é um evento que detecta quando o usuário entra no campo clicando ou usando tab
        var tempoRestante = $("#tempo-digitacao").text();
        var cronometroID = setInterval(function(){
            tempoRestante--;
            $("#tempo-digitacao").text(tempoRestante);
            if (tempoRestante < 1){
                clearInterval(cronometroID);
                finalizaJogo();
            }
        },1000);
    });
}

function finalizaJogo(){
    campo.attr("disabled", true);
    campo.toggleClass("campo-desativado"); // toggleClass serve para aplicar a classe, se estiver sem, e remover a classe, se estiver com
    inserePlacar();
}

function inicializaMarcadores(){
    campo.on("input", function(){
        var frase = $(".frase").text();
        var digitado = campo.val();
        var comparavel = frase.substr(0, digitado.length);
        
        if(digitado == comparavel){
            campo.addClass("campo-correto");
            campo.removeClass("campo-errado");
        }else{
            campo.addClass("campo-errado");
            campo.removeClass("campo-correto");
        }
    });
}



function reiniciaJogo(){
    campo.attr("disabled", false);
    campo.val("");
    $("#contador-palavras").text("0");
    $("#contador-caracteres").text("0");
    $("#tempo-digitacao").text(tempoInicial);
    inicializaCronometro();
    campo.toggleClass("campo-desativado");
    campo.removeClass("campo-errado");
    campo.removeClass("campo-correto");
}

