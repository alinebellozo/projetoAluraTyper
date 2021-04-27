var tempoInicial = $("#tempo-digitacao").text();
var campo = $(".campo-digitacao");

//$(document).ready(function(){ -> quando a página estiver pronta, chama o que está dentro da função
$(function(){    
    atualizaTamanhoFrase();
    inicializaContadores();
    inicializaCronometro();
    $("#botao-reiniciar").click(reiniciaJogo); // posso trocar on.("click") por .click

});

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

    var tempoRestante = $("#tempo-digitacao").text();
    campo.one("focus", function(){ // focus é um evento que detecta quando o usuário entra no campo clicando ou usando tab
        var cronometroID = setInterval(function(){
            tempoRestante--;
            $("#tempo-digitacao").text(tempoRestante);
            if (tempoRestante < 1){
                campo.attr("disabled", true);
                clearInterval(cronometroID);
                campo.addClass("campo-desativado");
            }
        },1000);
    });
}

function reiniciaJogo(){
    campo.attr("disabled", false);
    campo.val("");
    $("#contador-palavras").text("0");
    $("#contador-caracteres").text("0");
    $("#tempo-digitacao").text(tempoInicial);
    inicializaCronometro();
}

