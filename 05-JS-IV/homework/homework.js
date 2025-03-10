// No cambies los nombres de las funciones.

const { stringify } = require("git-url-parse");

function crearGato (nombre, edad) {
  // Crear un nuevo objeto con la propiedad "nombre" y el valor definido como el argumento "nombre".
  // Agrega una propiedad al objeto con el nombre "edad" y usa el valor definido en el argumento "edad"
  // Agrega un método (funcion) llamado "meow" que devuelva el string "Meow!"
  // Devuelve el objeto
  // Tu código:
  const nuevoObjeto = {
        nombre: nombre,
        edad: edad,
        meow: function(){
            return ("Meow!");
        }
  };
  crearGato = nuevoObjeto;
  return crearGato;
}

function agregarPropiedad (objeto, property) {
  // Agrega una propiedad al objeto (argumento "objeto") con el valor `null`
  // Devuelve el objeto
  // NOTA: El nombre de la propiedad no es "propiedad", el nombre es el valor del argumento llamado "property" (una cadena/string)
  // Tu código:
     // Object.defineProperty(object, [property], {
     //   value: null});
     objeto[property] =null; 
     agregarPropiedad = objeto;
     return agregarPropiedad;
}

function invocarMetodo (objeto, metodo) {
  // "metodo" es una cadena que contiene el nombre de un método (funcion) en el objeto
  // Invoca ese método
  // Nada necesita ser devuelto ("returned")
  // Tu código:
  objeto[metodo]();
}

function multiplicarNumeroDesconocidoPorCinco (objetoMisterioso) {
  // "objetoMisterioso" tiene una propiedad llamada "numeroMisterioso"
  // Multiplica el numeroMisterioso por 5 y devuelve el producto
  // Tu código:
  var mult; 
  mult = objetoMisterioso.numeroMisterioso * 5;
  multiplicarNumeroDesconocidoPorCinco = mult;
  return multiplicarNumeroDesconocidoPorCinco; 
}

function eliminarPropiedad (objeto, unaPropiedad) {
  // Elimina la propiedad de objeto cuyo nombre está pasado por el parametro unaPropiedad
  // tip: tenes que usar bracket notation
  // Devuelve el objeto
  // Tu código:
  delete objeto[unaPropiedad];
  eliminarPropiedad = objeto;
  return eliminarPropiedad;
}

function nuevoUsuario (nombre, email, password) {
  // Crea un nuevo objeto con las propiedades coincidiendo con los argumentos que se pasan a la función
  // Devuelve el objeto
  // Tu código:
  const newuser = {
    nombre: nombre,
    email: email,
    password: password
  }
  nuevoUsuario = newuser;
  return nuevoUsuario;
}

function tieneEmail (usuario) {
  // Devuelve "true" si el usuario tiene un valor definido para la propiedad "email"
  // De lo contratio, devuelve "false"
  // Tu código:
    if (usuario.email){
    tieneEmail = true;
    return tieneEmail;
    }
    tieneEmail = false;
    return tieneEmail;
}

function tienePropiedad (objeto, propiedad) {
  // Devuelve "true" si el objeto (parámetro "objeto") tiene una propiedad (key) cuyo nombre es igual al valor del argumento "propiedad"
  // "propiedad" es un string
  // De lo contrario, devuelve "false"
  // Tu código:
  for (let clave in objeto){
     if (clave === propiedad){
       tienePropiedad = true;
       return tienePropiedad;
     }
  }
  tienePropiedad = false;
  return tienePropiedad;
}

function verificarPassword (usuario, password) {
  // Comprueba si la "password" enviada coincide con la propiedad "password" del objeto "usuario"
  // Devuelve "true" si coinciden
  // De lo contrario, devuelve "false"
  // Tu código:
  if (usuario["password"] === password){
    verificarPassword = true;
    return verificarPassword;
  }
  else {
    verificarPassword = false;
    return verificarPassword;
  }
}

function actualizarPassword (usuario, nuevaPassword) {
  // Reemplaza la contraseña existente en el objeto "usuario" con el valor de "nuevaPassword"
  // Devuelve el objeto
  // Tu código:
  usuario["password"] = nuevaPassword;
  actualizarPassword = usuario;
  return actualizarPassword;
}

function agregarAmigo (usuario, nuevoAmigo) {
  // "usuario" tiene una propiedad llamada "amigos" que es un array
  // Agrega "nuevoAmigo" al final de ese array
  // Devuelve el objeto "usuario"
  // Tu código:
  usuario.amigos.push(nuevoAmigo);
  agregarAmigo = usuario;
  return agregarAmigo;
}

function pasarUsuarioAPremium (usuarios) {
  // "usuarios" es un array de objetos "usuario"
  // Cada objeto "usuario" tiene la propiedad "esPremium"
  // Define cada propiedad "esPremium" de cada objeto como "true"
  // Devuelve el array de usuarios
  // Tu código:
  usuarios.forEach(objects => {
  objects.esPremium = true;
  });
  pasarUsuarioAPremium = usuarios;
  return pasarUsuarioAPremium;
}

function sumarLikesDeUsuario (usuario) {
  // "usuario" tiene una propiedad llamada "posts" que es un array
  // "posts" es un array de objetos "post"
  // Cada objeto "post" tiene una propiedad llamada "likes" que es un entero (int/integer)
  // Suma todos los likes de todos los objetos "post"
  // Devuelve la suma
  // Tu código:
  let sum = 0;

  usuario.posts.forEach(objects => {
  sum += objects.likes;
  });
  sumarLikesDeUsuario = sum;
  return sumarLikesDeUsuario;
}

function agregarMetodoCalculoDescuento (producto) {
  // Agregar un método (función) al objeto "producto" llamado "calcularPrecioDescuento"
  // Este método debe multiplicar el "precio" del "producto" ("producto.precio" o "producto[precio]") y "porcentajeDeDescuento" para obtener el descuento
  // El método resta el descuento del precio y devuelve el precio con descuento
  // Devuelve el objeto "producto" al final de la función
  // Ejemplo:
  // producto.precio -> 20
  // producto.porcentajeDeDescuento -> 0.2 (o simplemente ".2")
  // producto.calcularPrecioDescuento() -> 20 - (20 * 0.2)
  // Tu código:
  producto["calcularPrecioDescuento"] = function() { 
  let des = 0;
  des = (producto["precio"]) - ((producto["precio"]) * (producto["porcentajeDeDescuento"]));
      return des;  
  }
  agregarMetodoCalculoDescuento = producto;
  return agregarMetodoCalculoDescuento;
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  crearGato,
  agregarPropiedad,
  invocarMetodo,
  multiplicarNumeroDesconocidoPorCinco,
  eliminarPropiedad,
  nuevoUsuario,
  tieneEmail,
  tienePropiedad,
  verificarPassword,
  actualizarPassword,
  agregarAmigo,
  pasarUsuarioAPremium,
  sumarLikesDeUsuario,
  agregarMetodoCalculoDescuento
}
