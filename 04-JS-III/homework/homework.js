// No cambies los nombres de las funciones.

const { stringify } = require("git-url-parse");

function devolverPrimerElemento(array) {
  // Devuelve el primer elemento de un  array (pasado por parametro)
  // Tu código:
  devolverPrimerElemento = array[0];
  return devolverPrimerElemento;
}


function devolverUltimoElemento(array) {
  // Devuelve el último elemento de un array
  // Tu código:
  var ultimo = (array.length) - 1;
  devolverUltimoElemento = array[ultimo];
  return devolverUltimoElemento;
}


function obtenerLargoDelArray(array) {
  // Devuelve el largo de un array
  // Tu código:
  obtenerLargoDelArray = array.length;
  return obtenerLargoDelArray;
}


function incrementarPorUno(array) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Aumenta cada entero por 1
  // y devuelve el array
  // Tu código:
  for (let i=0 ; i<(array.length) ; i++){
      array[i]+=1;
  }
  incrementarPorUno = array;
  return incrementarPorUno;
}


function agregarItemAlFinalDelArray(array, elemento) {
  // Añade el "elemento" al final del array
  // y devuelve el array
  // Tu código:
  array.push(elemento);
  agregarItemAlFinalDelArray = array;
  return agregarItemAlFinalDelArray;
}


function agregarItemAlComienzoDelArray(array, elemento) {
  // Añade el "elemento" al comienzo del array
  // y devuelve el array
  // Pista: usa el método `.unshift`
  // Tu código:
  array.unshift(elemento);
  agregarItemAlComienzoDelArray = array;
  return agregarItemAlComienzoDelArray;
}


function dePalabrasAFrase(words) {
  // "palabras" es un array de strings/cadenas
  // Devuelve un string donde todas las palabras estén concatenadas
  // con espacios entre cada palabra
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
  // Tu código:
  let frasestring = words.join(' ');
  dePalabrasAFrase = frasestring;
  return dePalabrasAFrase;
}


function arrayContiene(arr, item) {
  // Comprueba si el elemento existe dentro de "array"
  // Devuelve "true" si está, o "false" si no está
  // Tu código:
  if (arr.includes(item) === true){
    arrayContiene = true;
    return arrayContiene;
  }
  else {
    arrayContiene = false;
    return arrayContiene;
  }
}


function agregarNumeros(numeros) {
  // "numeros" debe ser un arreglo de enteros (int/integers)
  // Suma todos los enteros y devuelve el valor
  // Tu código:
  var suma = 0;
  for (let i=0 ; i<(numeros.length) ; i++){
      suma += numeros[i]; 
  } 
  agregarNumeros = suma;
  return agregarNumeros;
}


function promedioResultadosTest(resultadosTest) {
  // "resultadosTest" debe ser una matriz de enteros (int/integers)
  // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
  // Tu código:
  var suma = 0;
  for (let i=0 ; i<(resultadosTest.length) ; i++){
      suma += resultadosTest[i]; 
  } 
  agregarNumeros = suma/resultadosTest.length;
  return agregarNumeros;
}



function numeroMasGrande(numeros) {
  // "numeros" debe ser una matriz de enteros (int/integers)
  // Devuelve el número más grande
  // Tu código:
   var grande; 

   for (let i=0 ; i<(numeros.length) ; i++){
    var n=0;
    for (let j=0 ; j<(numeros.length) ; j++){
      if (numeros[i] > numeros[j]){
          n+=1;
      }
    if (n === ((numeros.length)-1)){
       grande = numeros[i];
    }
    }
   }
  numeroMasGrande = grande;
  return numeroMasGrande;
}


function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto
  // Si no se pasan argumentos devuelve 0. Si se pasa un argumento, simplemente devuélvelo
  // Escribe tu código aquí:
  let mu=1;
  
  if (arguments.length === 0){
    multiplicarArgumentos = 0;
    return multiplicarArgumentos;
  }
  else if (arguments.length === 1){
    multiplicarArgumentos = arguments[0];
    return multiplicarArgumentos;
  }
  else {
    for (let i=0; i<(arguments.length); i++){
        mu *= arguments[i]; 
    }
  multiplicarArgumentos = mu;
  return multiplicarArgumentos;
  }
}


function cuentoElementos(arreglo){
  //Realiza una función que retorne la cantidad de los elementos del arreglo cuyo valor es mayor a 18.
  //Escribe tu código aquí
  //var mayor;
  var n=0;

  for (let i=0; i<(arreglo.length); i++){
    if (arreglo[i] > 18){
        n+=1;
    }
  }
  cuentoElementos = n;
  return cuentoElementos;
}
          
function diaDeLaSemana(numeroDeDia) {
  //Suponga que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente. 
  //Realiza una función que dado el número del día de la semana, retorne: Es fin de semana
  //si el día corresponde a Sábado o Domingo y “Es dia Laboral” en caso contrario. 
  //Escribe tu código aquí   
  switch (numeroDeDia){
  case 1: diaDeLaSemana = "Es fin de semana"; break;
  case 2: diaDeLaSemana = "Es dia Laboral"; break;
  case 3: diaDeLaSemana = "Es dia Laboral"; break;
  case 4: diaDeLaSemana = "Es dia Laboral"; break;
  case 5: diaDeLaSemana = "Es dia Laboral"; break;
  case 6: diaDeLaSemana = "Es dia Laboral"; break;
  case 7: diaDeLaSemana = "Es fin de semana"; break;
  } 
  return diaDeLaSemana;
} 


function empiezaConNueve(n) {
  //Desarrolle una función que recibe como parámetro un número entero n. Debe retornar true si el entero 
  //inicia con 9 y false en otro caso.
  //Escribe tu código aquí
  if (n > 8 && n < 10){
     empiezaConNueve = true;
     return empiezaConNueve;
  }
  else if (n > 89 && n < 100){
    empiezaConNueve = true;
    return empiezaConNueve;
 }
 else if (n > 899 && n < 1000){
  empiezaConNueve = true;
  return empiezaConNueve;
}
else if (n > 8999 && n < 10000){
  empiezaConNueve = true;
  return empiezaConNueve;
}
else if (n > 89999 && n < 100000){
  empiezaConNueve = true;
  return empiezaConNueve;
}
else if (n < 0 ){
  empiezaConNueve = false;
  return empiezaConNueve;
}
else if (n > 0 && n < 8){
  empiezaConNueve = false;
  return empiezaConNueve;
}
 else {
    empiezaConNueve = false;
    return false;
  }
}


function todosIguales(arreglo) {
  //Escriba la función todosIguales, que indique si todos los elementos de un arreglo son iguales:
  //retornar true, caso contrario retornar false.
  //Escribe tu código aquí  
  var n=0;

  for (let i=1 ; i<(arreglo.length) ; i++){
    if (arreglo[i] === arreglo[i-1]){
        n+=1;
    }
  }
  if (n === ((arreglo.length)-1)){
      todosIguales = true;
      return todosIguales;
  }
   else{
      todosIguales = false;
      return false;
   }
} 


function mesesDelAño(array) {
  //Dado un array que contiene algunos meses del año desordenados, recorrer el array buscando los meses de 
  // "Enero", "Marzo" y "Noviembre", guardarlo en nuevo array y retornarlo.
  //Si alguno de los meses no está, devolver: "No se encontraron los meses pedidos"
  // Tu código:
  const año = [];

  for (let i=0 ; i<(array.length) ; i++){
    if (array.includes("Enero") === true){
      if (array.includes("Marzo") === true){
        if (array.includes("Noviembre") === true){
          if ((array[i] === ("Enero")) || (array[i] === ("Marzo")) || (array[i] === ("Noviembre"))){
             año.push(array[i]);
          }
          else{
           continue;
          }
        }
      }
    }
    else {
      mesesDelAño = "No se encontraron los meses pedidos";
      return mesesDelAño;
      break;
    }
  } 
  mesesDelAño = año;
  return mesesDelAño;
}

 
function mayorACien(array) {
  //La función recibe un array con enteros entre 0 y 200. Recorrer el array y guardar en un nuevo array sólo los
  //valores mayores a 100 (no incluye el 100). Finalmente devolver el nuevo array.
  // Tu código:
  const ma = [];

  for (let i=0 ; i<(array.length) ; i++){
    if (array[i] > 100) {
       ma.push(array[i]);
    }
  }
  mayorACien = ma;
  return mayorACien;
}


function breakStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array. 
  //Devolver el array
  //Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse la ejecución y 
  //devolver: "Se interrumpió la ejecución"
  //Pista: usá el statement 'break'
  // Tu código:
  const nuevo = [];
  let ite = 0;
  let numero2 = numero;

  for (let i=0 ; i<10 ; i++){
      ite += 1;
    if (ite === numero2){
       breakStatement = "Se interrumpió la ejecución";
       return breakStatement;
       break;
    }

    if(ite !== numero2) {
      numero2 += 2;
      nuevo.push(numero2);
    }
  }
  breakStatement = nuevo;
  return breakStatement;
}


function continueStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array.    
  //Devolver el array
  //Cuando el número de iteraciones alcance el valor 5, no se suma en ese caso y se continua con la siguiente iteración
  //Pista: usá el statement 'continue'
  // Tu código:
  const nuevo = [];
  let ite = 0;
  let numero2 = numero;

  for (let i=0 ; i<10 ; i++){
      ite += 1;
    if (ite === 5){
       continue;
    }
    if(ite !== 5) {
    numero2 += 2;
   nuevo.push(numero2);
    }
    }
  breakStatement = nuevo;
  return breakStatement;
}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  devolverPrimerElemento,
  devolverUltimoElemento,
  obtenerLargoDelArray,
  incrementarPorUno,
  agregarItemAlFinalDelArray,
  agregarItemAlComienzoDelArray,
  dePalabrasAFrase,
  arrayContiene,
  agregarNumeros,
  promedioResultadosTest,
  numeroMasGrande,
  multiplicarArgumentos,
  cuentoElementos,
  diaDeLaSemana,
  empiezaConNueve,
  todosIguales,
  mesesDelAño,
  mayorACien,
  breakStatement,
  continueStatement
};
