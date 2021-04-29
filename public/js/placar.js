$("#botao-placar").click(mostraPlacar);


function inserePlacar(){
    
    var corpoTabela = $(".placar").find("tbody");
    var usuario = "Aline";
    var numPalavras = $("#contador-palavras").text();
    //var botaoExcluir = "<a href='#'><i class='small material-icons'>delete</i></a>"
    
    var linha = novaLinha(usuario, numPalavras);
    linha.find(".botao-excluir").click(excluiLinha);

    corpoTabela.prepend(linha);     
    /*var linha = "<tr>"+
                    "<td>"+ usuario + "</td>"+
                    "<td>"+ numPalavras + "</td>"+
                    "<td>"+ botaoExcluir + "</td>"+
                "</tr>";*/  
    $(".placar").slideDown(500);
    scrollPlacar();
}

function scrollPlacar(){
    var posicaoPlacar = $(".placar").offset().top; // offset é dá a posição em que determinado elemento se encontra na página.
    $("html, body").animate( // a função animate recebe dois parâmetros: o primeiro é um objeto JavaScript com as propriedades que quero animar; o segundo é o tempo que a animação vai durar 
    {
        scrollTop: posicaoPlacar
    }, 1000);
}

function novaLinha(usuario, palavras){
    var linha = $("<tr>");
    var colunaUsuario = $("<td>").text(usuario);
    var colunaPalavras = $("<td>").text(palavras);
    var colunaExcluir = $("<td>");

    var link = $("<a>").attr("href", "#").addClass("botao-excluir");
    var icone = $("<i>").addClass("small").addClass("material-icons").text("delete");

     // Icone dentro do <a>
    link.append(icone);

    // <a> dentro do <td>
    colunaExcluir.append(link);

    // Os três <td> dentro do <tr>
    linha.append(colunaUsuario);
    linha.append(colunaPalavras);
    linha.append(colunaExcluir);

    return linha;
}

function excluiLinha(){
    event.preventDefault();
    var linha = $(this).parent().parent();
    linha.fadeOut();
    setTimeout(function(){
        linha.remove();
    },1000);
}
// fadeOut não remove, ele vai esmaecendo o texto até ficar com o display none; tem que remover depois, mas usando o seTimeOut, que me permite setar o tempo em que eu quero que desapareça. Existe o fadeIn, para aparecer aos poucos, e o fadeToggle, pra alternar.

function mostraPlacar(){
    $(".placar").stop().slideToggle(1000);
    // $(".placar").css("display", "block"); ->>> posso substituir o estilo do css pelo toggle
    // slideDown e slideUp servem para ir mostrando aos poucos o texto selecionado; o slideToggle alterna entre pra cima e pra baixo 
}

//O jQuery possui a função is que permite consultar uma pseudo class. Toda vez que um elemento esta com display diferente de none ele ganha a pseudo classe :visible . A função is retorna true caso o elemento esteja visível. Se ele estiver visível, precisamos escondê-lo e isso é feito através da função hide. Para exibir o elemento, é usada a função show.

//A função toogleClass (não confundir com a função toggle) adiciona uma classe caso ela não exista no elemento. Se existir, ela remove a classe.

//A função toggle é um atalho para as funções hide e show. Quando ela é chamada para um elemento visível, o elemento fica invisível. Quando é chamada para um elemento invisível, ela torna o elemento visível.

//O jQuery possui a função hasClass que retorna true se um elemento possui ou não uma classe. Na condição, removemos a classe invisivel caso o elemento já a tenha e a adicionamos caso ele não a tenha. Todo esse processo é feito a cada clique do usuário.