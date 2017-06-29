function DefineParametrosAnalise (cabecalho, respostas, diferencas, tipoSaida = "csv", userName){
	this.cabecalho = cabecalho;
	this.respostas = respostas;
	this.diferencas = diferencas;
    this.nomeUsuario = userName;

    // Corrige Array da versao JSON que tem "ditado:" como elemento 0
    if(cabecalho.length > diferencas.length){
        cabecalho.splice(0, 1);
    }

	this.msg = function(){
		return "FUNCIONOU!!!!!!!!!";
	}

	this.saida = function(){

		var saidaResult;

        switch(tipoSaida) {
            case "htmlTable":
                saidaResult += "<table>";
                
                $.each(respostas, function(chave, valorAtual){

                    $.each(valorAtual, function(chave2, valorCampo){

                            saidaResult += "<tr>";
                            saidaResult += "<td>"+userName+"</td>"+"<td>"+(chave2+1)+"</td><td>"+cabecalho[chave]+"</td>";
                            saidaResult += "<td>"+valorCampo+"</td>";
                            saidaResult += "<td>"+diferencas[chave][chave2]+"</td>";
                            saidaResult += "</tr>";

                        console.log(userName + ";" + cabecalho[chave] + ";" + valorCampo + ";" + diferencas[chave][chave2]);                        

                    }); // END - $.each(valorAtual, function(chave2, valorCampo)

                }); // END - $.each(respostas, function(chave, valorAtual)

                saidaResult += "</table>";

                break;
            case "textList":
                saidaResult = "textList";
                break;
            case "json":
                saidaResult = "json";
                break;
            case "csv":
                
                $.each(respostas, function(chave, valorAtual){

                    $.each(valorAtual, function(chave2, valorCampo){

                            saidaResult += "<br />"+userName+";"+(chave2+1)+";"+cabecalho[chave]+";";
                            saidaResult += valorCampo+";";
                            saidaResult += diferencas[chave][chave2]+"";

                        console.log(userName + ";" + cabecalho[chave] + ";" + valorCampo + ";" + diferencas[chave][chave2]);                        

                    }); // END - $.each(valorAtual, function(chave2, valorCampo)

                }); // END - $.each(respostas, function(chave, valorAtual)
                break;
        } // END - this.saida = function()

		return saidaResult	
	}
}