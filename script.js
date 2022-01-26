
/* Reglas de encriptación: 
"e" es convertido para "enter" 
"i" es convertido para "imes"
"a" es convertido para "ai"
"o" es convertido para "ober"
"u" es convertido para "ufat"
Solo letras minusculas
No se permite acentuación de palabras 
*/

/* Reglas de desencriptación: 
"enter" es convertido para "e" 
"imes" es convertido para "i"
"ai" es convertido para "a"
"ober" es convertido para "o"
"ufat" es convertido para "u"
Solo letras minusculas
No se permite acentuación de palabras   
*/
let encriptButton = document.querySelector("#btn-encriptar");
let desencriptButton=document.getElementById("btn-desencriptar");
let inputTexto=document.querySelector("#input-texto");
let mensaje = document.querySelector("#mensaje");
let mensajeCopiar=document.getElementById("btn-copy");
encriptButton.addEventListener("click", encriptacion);
desencriptButton.addEventListener("click", Desencriptacion);
mensajeCopiar.addEventListener("click",copiar);

function validarMayusculas(texto){
        for(let i=0;i<texto.length;i++){
                if(texto.charAt(i)==texto.charAt(i).toUpperCase()){
                        return true;
                }
        }
}
function validarNumeros(texto){
        var valoresAceptados = /\d/;
       if (texto.match(valoresAceptados)){
          return true;
       } else {
        return false;
      }
}
function validarAcentos(texto){
        var acentos="ÀÈÌÒÙÁÉÍÓÚ";
        for(i=0; i<texto.length; i++){
                if (acentos.indexOf(texto.charAt(i).toUpperCase(),0)!=-1){
                   return true;
                }
             }
             return false;
}
function encriptacion(event){
        event.preventDefault();
        let texto=inputTexto.value;
        if(validarMayusculas(texto)||validarNumeros(texto)||validarAcentos(texto)){
                alert("No se pueden encriptar mayusculas,numeros,acentos ni caracteres especiales");
                mensaje.value="No se pueden encriptar mayusculas,numeros,acentos ni caracteres especiales";
        }else{
               texto=validarReglasEncriptacion(texto);
                mensaje.value=texto;
        }
  
}
function Desencriptacion(event){
        event.preventDefault();
        let texto=inputTexto.value;
        if(validarMayusculas(texto)||validarNumeros(texto)||validarAcentos(texto)){
                alert("No se pueden encriptar mayusculas,numeros,acentos ni caracteres especiales");
                mensaje.value="No se pueden encriptar mayusculas,numeros,acentos ni caracteres especiales";
        }else{
               texto=validarReglasDesencriptacion(texto);
                mensaje.value=texto;
        }
  
}
function validarReglasEncriptacion(texto){
        texto= texto.replaceAll("e","enter");
        texto= texto.replaceAll("i","imes");
        texto=texto.replaceAll("a","ai");
        texto=texto.replaceAll("o","ober");
        texto=texto.replaceAll("u","ufat");
        return texto;
}
function validarReglasDesencriptacion(texto){
        texto= texto.replaceAll("enter","e");
        texto= texto.replaceAll("imes","i");
        texto=texto.replaceAll("ai","a");
        texto=texto.replaceAll("ober","o");
        texto=texto.replaceAll("ufat","u");
        return texto;
}
function copiar(){
        var content = document.getElementById('mensaje');
        content.select();
        document.execCommand('copy');
            alert("Copiado!!");
}


/* Reglas de desencriptación: 
"enter" es convertido para "e" 
"imes" es convertido para "i"
"ai" es convertido para "a"
"ober" es convertido para "o"
"ufat" es convertido para "u"
Solo letras minusculas
No se permite acentuación de palabras   
*/
