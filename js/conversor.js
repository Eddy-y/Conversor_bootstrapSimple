

function realizarOperacion()
{
    let resultado = 0;
    let temp = document.getElementById("txtN1").value;
    switch(document.getElementById("txtN2").value)
    {
        case "1": resultado = (temp - 32)/1.8; break;
        case "2": resultado = (temp - 273.15); break;
    }
    
    //Mostrar resultado
    document.getElementById('txtResultado').value = resultado;
}

function realizarOperacion2()
{
    let resultado = 0;
    let med = document.getElementById("txtN1-2").value;
    switch(document.getElementById("txtN2-2").value)
    {
        case "1": resultado = med*2.54; break;
        case "2": resultado = med*30.48; break;
        case "3": resultado = med*91.44; break;
        case "4": resultado = med*160934; break;
    }
    
    //Mostrar resultado
    document.getElementById('txtResultado-2').value = resultado;
}

function realizarOperacion3()
{
    let resultado = 0;
    let divisa = document.getElementById("txtN1-3").value;
    switch(document.getElementById("txtN2-3").value)
    {
        case "1": resultado = divisa*24.04; break;
        case "2": resultado = divisa*17.24; break;
        case "3": resultado = divisa*26.2; break;
        case "4": resultado = divisa*30.05; break;
    }
    
    //Mostrar resultado
    document.getElementById('txtResultado-3').value = resultado;
}