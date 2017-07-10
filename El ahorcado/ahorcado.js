//Para poder ver el proceso del juego, es necesaria la consola
function obtenerPalabraSecreta() {
  var libreriaPalabras = ["m u l t i m e d i a", "i n t e r n a u t a", "s e r v i d o r", "p r o t o c o l o", "c o r t a f u e g o s",
  "n a v e g a d o r", "n o d o", "m a r c o", "p a g i n a", "t e l a r a ñ a",
  "d e s c a r g a r", "v i r t u a l", "m e m o r i a", "d i s c o", "l o c a l",
  "c o n e c t a r", "d e s c o n e c t a r", "e n c a m i n a d o r", "i n t e r n e t", "d o m i n i o",
  "d i n a m i c o", "h i p e r v i n c u l o", "e n l a c e", "m a r c a d o r", "o r d e n a d o r", "l a p i z", "o f i m a t i c a", "i n f o r m e" ];

   var indice = Math.round ( Math.random() * 27 )
   var cadena = new String( libreriaPalabras[indice] )
   var palabra = cadena.split(" ")
  return palabra;
}
var hombre =  [       "________\n",
                      "   |\n",
                      "   |\n",
                      "   |\n",
                      "   O\n",
                      "  /|\\\n",
                      "  / \\\n",
                      "        \n",
                      "        \n",
                      "________\n"];
var palabra = obtenerPalabraSecreta ();
//Declaramos un array para poder compararlo
var palabraAdivinar = adivinarPalabra(palabra);
//Hacemos una función que nos entregue los valores de la palabra para adivinar en x
function adivinarPalabra (palabra){
  var x = [];
  for (var i = 0; i < palabra.length; i++){
    x[i] = "*";
  }
  return x;
}
console.log(adivinarPalabra(palabra));
//Una función que devuelve el valor booleano cuando compara las palabras
function compararPalabra (palabra, palabraAdivinar){
  var palabraString = palabra.toString().replace(/,/g,"");
  var palabraAdivinarString = palabraAdivinar.toString().replace(/,/g,"");
  if (palabraString == palabraAdivinarString){
    return true;
  } else {
    return false;
  }
}
//Función que determinar el juego
function intentos(palabra){
  var n = 0;
  for (var i = 0; n < 10; i++){
    var bo = false;
    var user = prompt("Lo has intentado " + (parseInt(i)+1) + " veces \n Ingresa aquí la posible letra");
    for (var j = 0; j < palabra.length; j++){
      if(user.toLowerCase() == palabra[j]){
        bo = true;
        palabraAdivinar[j] = user;
        console.log("Sí! ¡Correcto! \n Palabra: " + palabraAdivinar.toString().replace(/,/g," "));
      }
    }
    if(bo == false){
      n += 1;
      console.log("¡Incorrecto!, vas a matar a un hombre :( \n Sigue intentando y sálvalo \n" + hombre.slice(0,n));
    }
    if(compararPalabra(palabra, palabraAdivinar) == true){
      alert("Felicitaciones, ganaste! :)");
      console.log("Felicitaciones, ganaste! :)");
      break;
    }
    else if ((n==10) && (compararPalabra(palabra, palabraAdivinar) == false)){
      alert("Lo siento, mataste a un hombre :(");
      console.log("Lo siento, mataste a un hombre :( \n" + hombre + "\n La palabra era " + palabra.toString().replace(/,/g, " "));
    }
  }
}
//Función para poder comenzar el juego
function jugar (){
  alert("Hola, adivina la siguiente palabra \n" + palabraAdivinar.toString().replace(/,/g, " "));
  console.log("Hola, adivina la siguiente palabra \n" + palabraAdivinar.toString().replace(/,/g, " "));
  intentos(palabra);
}
jugar();
