
function imprimirHTML (M) {
  var n = M.length;
  for (var i = 0; i < n; i++) {
        console.log(M[i]) ;
  }
}
function imprimirMatriz (M) {
  var n = M.length;
  for (var i = 0; i < n; i++) {
        console.log(M[i]) ;
  }
}
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
var hombre =  [        "________",
                       "   |\n",
                       "   |\n",
                       "   |\n",
                       "   O\n",
                        "  /|\\\n",
                       "  / \\\n",
                       "         ",
                       "         ",
                       "________"];
var palabra = obtenerPalabraSecreta ();
console.log(palabra);
//imprimirMatriz(hombre);
function mostrarPalabra (palabra){
  var x = [];
  for (var i = 0; i < palabra.length; i++){
    x[i] = "*";
  }
  return x;
}
//console.log(mostrarPalabra(palabra));
var juego = mostrarPalabra(palabra);
function userLetras (palabra){
  var alerta = alert("Adivina la siguiente palabra \n" + juego);
  for(var i = 0; i < 10; i++){
    var user = prompt("Intento " + (parseInt(i)+1) + " de 10 \n Ingrese aquí su letra");
    for (var j = 0; j < palabra.length; j++){
      if(user == palabra[j]){
        juego[j] = user;
      }
    }
    var res = alert(juego);
    if( juego == palabra){
      break;
      alert("Ganaste!! " + juego);
    }
    else if ((juego !== palabra) && (i == 9)){
      alert("Acabas de matar a un hombre, la palabra era " + palabra);
    }
  }

}
userLetras(palabra);
