const facil = require('./dificuldades/facil')
const medio = require('./dificuldades/medio')
const dificil = require('./dificuldades/dificil')

function criarContas(assunt, quant, dificul) {
    for (x = 1; x <= quant; x++) {
        input_x = $("<input>")
        tr = $("<tr>");
        var selecaoDificuldade = function () {
            if (dificul == "facil") {
                return facil(assunt, x);
            }
            if (dificul == "media") {
                return medio(assunt, x);
            }
            if (dificul == "dificil") {
                return dificil(assunt, x);
            }
        }

        tdExercicio = $("<td>" + selecaoDificuldade() + "</td>"); //conta
        tdDificuldade = $("<td>" + dificul + "</td>");

        tr.append("<td>" + x + "</td>");
        tr.append(tdDificuldade)
        tr.append(tdExercicio);
        tr.append("<td>" + "certo ou errado" + "</td>")
        $("#corpoTabela").append(tr);
        /* td2 = $("<td>");
         inputText = $("<input type='text' >")//campo texto
         inputButton = $("<input type='button' class='btn btn-success btncorrecao' value='ok'>")//campo botao
                 inputButton.click(function(){
                     acaoContas();
                 });
         td2.append(inputText);
         td2.append(inputButton);
         tr.append(td2);*/



    }
}




module.exports = criarContas