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
    $(this).parent().parent().remove();
}