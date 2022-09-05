

function nadador(){

	var idade = document.getElementById("idade").value;
    var nomeNadador = document.getElementById("NomeNadador").value;

    if(idade >= 5 && idade <= 7){
        document.getElementById("categoria").innerHTML = "Infantil A";
    }else if(idade >= 8 && idade <= 11){
        document.getElementById("categoria").innerHTML = "Infantil B";
    }else if(idade >= 12 && idade <= 13){
        document.getElementById("categoria").innerHTML = "Juvenil A";
    }else if(idade >= 14 && idade <= 17){
        document.getElementById("categoria").innerHTML = "Juvenil B";
    }else if(idade >=18){
        document.getElementById("categoria").innerHTML = "Adulto";
    }
}