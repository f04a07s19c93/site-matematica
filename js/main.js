const criarContas = require('./criar_contas')
$(function () {

        $("#acao").click(function () {
                var assunto = $("#inputAssunto option:selected").val();
                var quantidade = $("#inputQuantidade").val();
                var dificuldade = $("input[name='options']:checked").val()
                var confirmar = confirm("Assunto: " + assunto + "\n" + "Quantidade: " + quantidade + "\n" + "Dificuldade:" + dificuldade, "Confirme por favor");
                if (confirmar) {
                        criarContas(assunto, quantidade, dificuldade)
                }
        });

        function acaoContas() {
                alert('aqui vai rolar as contas!!')
        }  
})