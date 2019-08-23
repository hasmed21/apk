function validarFormulario(){
    var preg1 = document.getElementsByName('qu1');
    var preg2 = document.getElementsByName('qu2');
    var preg3 = document.getElementsByName('qu3');
    var preg4 = document.getElementsByName('qu4');

    var aciertos = 0;

//Validacion de la respuesta de la primera pregunta
    for(var i = 0; i < preg1.length; i++){
        if(preg1[i].checked){
    		var re = document.querySelector('input[name="qu1"]:checked').value;
    		
    		if (re == 'Santoryu') {
                $("label.p1").css({
                    "background-color": "green",
                });/*

                $("label.pre1").load(index.html , {
                    "<i class='fa fa-check-circle-o' aria-hidden='true'></i>";
                });          */       
                
    			//document.querySelector("label[for='pre1']").innerHTML = "<i class='fa fa-check-circle-o' aria-hidden='true'></i>";
                aciertos += 1;
    		}else{
                $("label.p1").css({
                    "background-color": "red",
                });
    			document.querySelector("label[for='pre1']").innerHTML = "<i class='fa fa-times-circle-o' aria-hidden='true'></i>";
             }
        }
    }
//Validar pregunta #2
    for(var i = 0; i < preg2.length; i++){
        if(preg2[i].checked){
    		var re2 = document.querySelector('input[name="qu2"]:checked').value;
    		
    		if (re2 == 'gomu gomu no mi') {
    			document.querySelector("label[for='pre2']").innerHTML = "<i class='fa fa-check-circle-o' aria-hidden='true'></i>";
                aciertos += 1;
    		}else{
    			document.querySelector("label[for='pre2']").innerHTML = "<i class='fa fa-times-circle-o' aria-hidden='true'></i>";
    		}
        }
    }

//Validar pregunta #3
    for(var i = 0; i < preg3.length; i++){
        if(preg3[i].checked){
    		var re3 = document.querySelector('input[name="qu3"]:checked').value;
    		
    		if (re3 == 'One piece') {
    			document.querySelector("label[for='pre3']").innerHTML = "<i class='fa fa-check-circle-o' aria-hidden='true'></i>";
    			banderaRBTN = true;
                aciertos += 1;
    		}else{
                $("label.p3").css({
                    "background-color": "red",
                });
    			document.querySelector("label[for='pre3']").innerHTML = "<i class='fa fa-times-circle-o' aria-hidden='true'></i>";
    		}
        }
    }
   
//Validar pregunta #4
    for(var i = 0; i < preg4.length; i++){
        if(preg4[i].checked){
    		var re4 = document.querySelector('input[name="qu4"]:checked').value;
    		
    		if (re4 == 'shanks') {
    			document.querySelector("label[for='pre4']").innerHTML = "<i class='fa fa-check-circle-o' aria-hidden='true'></i>";
                aciertos += 1;
    		}else{
    			document.querySelector("label[for='pre4']").innerHTML = "<i class='fa fa-times-circle-o' aria-hidden='true'></i>";
    		}
        }
    }

    alert("Tuviste un total de "+aciertos+" aciertos");

    return aciertos;
}