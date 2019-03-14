$(function(){

    function criarContas(assunt, quant, dificul){
        for(x =1;x<=quant;x++){
                    input_x = $("<input>")
                    tr = $("<tr>");
                var selecaoDificuldade =function (){
                                        if(dificul=="facil"){                                           
                                         return facil(assunt,x);
                                        }if(dificul=="media"){
                                           return     medio(assunt,x);
                                        }if(dificul=="dificil"){
                                              return    dificil(assunt,x);}
                                        }

                    tdExercicio =$("<td>"+selecaoDificuldade() +"</td>");//conta
                    tdDificuldade = $("<td>"+ dificul +"</td>");
                    
                    tr.append("<td>"+x+"</td>"); 
                    tr.append(tdDificuldade)                   
                    tr.append(tdExercicio);    
                    tr.append( "<td>"+"certo ou errado"+"</td>")              
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

$("#acao").click(function(){
        var assunto = $("#inputAssunto option:selected").val();
        var quantidade = $("#inputQuantidade").val();
        var dificuldade = $("input[name='options']:checked").val() 
        var confirmar = confirm("Assunto: "+assunto +"\n"+"Quantidade: "+quantidade+"\n"+"Dificuldade:"+dificuldade,"Confirme por favor");
        if(confirmar){
                criarContas(assunto, quantidade, dificuldade)
        }
});

function acaoContas(){
    alert('aqui vai rolar as contas!!')
}
/* dificuldade*/
function facil(assunto,contador){
        if(assunto=="Multiplicação"){
               return  multiplicacao_facil(x);
        }if(assunto=="MMC"){
                return mmc_facil(x);
        }if(assunto=="MDC"){
                return mdc_facil(x);    
        }
} 
function medio (assunto,contador){   
        if(assunto=="Multiplicação"){
                return    multiplicacao_medio(x)
       }if(assunto=="MMC"){
               return mmc_medio(x);
       }if(assunto=="MDC"){
        return mdc_medio(x);    
}
}
function dificil(assunto,contatdor){
       if(assunto=="Multiplicação"){
                 return   multiplicacao_dificil(x)        
       }if(assunto=="MMC"){
        return mmc_dificil(x);
       } if(assunto=="MDC"){
        return mdc_dificil(x);    
}
}
/*formulas */
function multiplicacao_facil (x){
               /*multiplicação simples com 2 valores e numeros inteiros positivos*/ 
       if (x<=4){
                return (Math.round(Math.random() * 100  )) + " × " +(Math.round(Math.random() * 100  ))+ "="
        } if(x >= 5 && x < 10 ){
                return (Math.round(Math.random() * 100  )) + " × " +(Math.round(Math.random() * 100  )) + " × " + (Math.round(Math.random() * 100  ))+ "=";        
        }
       if (x >=10 ){
                return (Math.round(Math.random() * 100  )) + " × " +(Math.round(Math.random() * 100  )) + " × " +
                 (Math.round(Math.random() * 100  ))+ " × " +      (Math.round(Math.random() * 100  ))+ "=";
        }
}
/*MULTIPLICAÇÃO*/ 
function multiplicacao_medio (x){
        /*multiplicação com numeros negativos*/
if (x<=3){
         return ((Math.round(Math.random() * 100))-(Math.round(Math.random() * 100 ))) + " × " +((Math.round(Math.random() * 100))-(Math.round(Math.random() * 100 )))+ "="
 } if(x >= 4 && x < 10 ){
         return ((Math.round(Math.random() * 100))-(Math.round(Math.random() * 100 ))) + " × " +((Math.round(Math.random() * 100))-(Math.round(Math.random() * 100 ))) + " × " + ((Math.round(Math.random() * 100))-(Math.round(Math.random() * 100 )))+ 
         " × " + ((Math.round(Math.random() * 100))-(Math.round(Math.random() * 100 )))+ " =";        
 }
if (x >=10 ){
         return ((Math.round(Math.random() * 100))-(Math.round(Math.random() * 100 ))) + " × " +((Math.round(Math.random() * 100))-(Math.round(Math.random() * 100 ))) + " × " +
         ((Math.round(Math.random() * 100))-(Math.round(Math.random() * 100 )))+ " × " +     ((Math.round(Math.random() * 100))-(Math.round(Math.random() * 100 )))+
         " × " +     ((Math.round(Math.random() * 100))-(Math.round(Math.random() * 100 )))+ " =";
 }
}
function multiplicacao_dificil(x){
        return (parseFloat((Math.random() * 100)- (Math.random() * 100)).toFixed(2)) + " × " +
        (parseFloat((Math.random() * 100)- (Math.random() * 100)).toFixed(2))+" ="
}

/*MMC*/ 
function mmc_facil(x){
return "MMC( " +(Math.round(Math.random() * 100))+" , "+(Math.round(Math.random() * 100)) +") ="
}
function mmc_medio(x){
        return "MMC( " +(Math.round(Math.random() * 500))+" , "+(Math.round(Math.random() * 500)) + " , "+
        +(Math.round(Math.random() * 500))+ ") ="
}
function mmc_dificil(x){
   return "MMC( " +(Math.round(Math.random() * 1000))+" , "+(Math.round(Math.random() * 1000))   + " , "+
        (Math.round(Math.random() * 1000))+  ") ="
}
/*MDC*/ 
function mdc_facil(x){
        return "MDC( " +(Math.round(Math.random() * 100+50))+" , "+(Math.round(Math.random() * 100+50)) +") ="
        }
function mdc_medio(x){
                return "MDC( " +(Math.round(Math.random() * 500+50))+" , "+(Math.round(Math.random() * 500+50)) + " , "+
                +(Math.round(Math.random() * 500))+ ") ="
        }
function mdc_dificil(x){
           return "MDC( " +(Math.round(Math.random() * 1000+50))+" , "+(Math.round(Math.random() * 1000+50))   + " , "+
                (Math.round(Math.random() * 1000))+  ") ="
        }





})