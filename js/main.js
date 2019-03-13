$(function(){

    function criarContas(assunt, quant, dificul){
for(x =1;x<=quant;x++){
    input_x = $("<input>")
             tr = $("<tr>");
             tr.append("<td>"+x+"</td>"+
             "<td>"+"1+1+33+3333"+"</td>"+
             "<td>"+"<input type='text' >"+"<input type='button' id='btncorrecao' class='btn btn-success' value='ok'>" +"</td>"+
             "<td>"+"certo ou errado"+"</td>");
             $("#corpoTabela").append(tr);
            }
    }
$("#acao").click(function(){
 var assunto = $("#inputAssunto option:selected").val();
    var quantidade = $("#inputQuantidade").val();
    var dificuldade = $("input[name='options']:checked").val() 
var confirmar = confirm("Assunto: "+assunto +"\n"+"Quantidade: "+quantidade+"\n"+"Dificuldade:"+dificuldade,"Confirme por favor");
if(confirmar){
   criarContas(assunto, quantidade, dificuldade)
}
});

$("#btncorrecao").click(function(){
alert('teste btn ok');
});
})