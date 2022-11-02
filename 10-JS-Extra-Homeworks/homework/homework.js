// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto){
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí
 
   const arreglo = []; 
         
   for (let clave in objeto){
       arreglo.push([clave, objeto[clave]]); 
   }
    return arreglo;
}


function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí
 const nuevoObjeto = {};
 
 for (let i=0 ; i<string.length ; i++ ){
    if(Object.keys(nuevoObjeto).includes(string[i])){
      nuevoObjeto[string[i]] = nuevoObjeto[string[i]] + 1;
      continue;
    }
    nuevoObjeto[string[i]] = 1;
 }
 return nuevoObjeto;
}


function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí
  let palabra = "";
  let palabra2 = "";
  
  for (let i=0 ; i<s.length ; i++){
     if(s[i] === s[i].toUpperCase()){
     palabra += s[i];
     }
    else {
     palabra2 += s[i];
    }
  }
  palabra = palabra + palabra2;
  return palabra;
}


function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí
  let frase = str.split(" ");
  let newarray = frase.map(function (element){
     return element.split("").reverse().join("");
   }); 

  let frase1 = str
     .split(" ")
     .map(function (element){
     return element.split("").reverse().join("");
  })
     .join(" ");
     return frase1;
} 


function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí
  let texto = String(numero);
  let texto2 = "";
    
   for (let i=((texto.length)-1) ; i>=0 ; i--){
      texto2 += texto[i];
   }
     if (texto === texto2) {
        return "Es capicua";
     }
      else{
        return "No es capicua";
      } 
}


function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí
  let nuevaCadena = "";
  
  for(let i=0; i<(cadena.length) ; i++){
     if(cadena[i] !== "a" && cadena[i] !== "b" && cadena[i] !== "c"){
     nuevaCadena += cadena[i];
     }
  }
  return nuevaCadena;
}


function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí
  for (let i=0 ; i<arr.length ; i++){
  let text = arr[i];
  let j= i-1;
     while(j>=0 && text.length<arr[j].length){
     arr[j+1] = arr[j];
     j--;
     }
    arr[j+1]=text;
  }
  return arr;
}


function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí  
  let arreglo = [];
  for (let j=0; j<arreglo1.length ; j++){
    for(let i=0; i<arreglo2.length ; i++){
      if(arreglo1[j] === arreglo2[i] && (arreglo.includes(arreglo1[j])) === false){
      arreglo.push(arreglo1[j]);
      }
    }
  }
  return arreglo;
}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
   deObjetoAmatriz,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};

