
var phrase = prompt('Ingresa la frase a decodificar');
var unicode = [];
function cipher (str){

if (typeof str !== 'string' || str === undefined) { //*Diferencia si hay números o es un campo vacío*
  
  return "Solo se codifica letras";
  
}else{
 
  var array = str.split(""); //*Divide el frase ingresada en carácteres

  for (i = 0; i<=array.length; i++); //*Recorre el arreglo*
  unicode.push("i".charCodeAt(0)); //* Deposita cada número (ASCII en el arreglo unicode)*
   
}
  for (i = 0; i <=unicode.length; i++) { //*Aplica la fórmula para obtener el nuevo número según el parámetro de espacios establecidos = 33*
    (i - 65 + 33) % 33 + 65
    return unicode
  }
  
  
  return;
}

function decipher (cipher) //*Esta función cifra el número obtenido a la nueva letra*

String.fromCharCode()

cipher(phrase);
