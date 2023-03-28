
// PRUEBA UNO 

// En JavaScript, se ha definido un arreglo "usuarios" que contiene objetos 
//  que representan a cada usuario, y se ha utilizado un ciclo "forEach" 
//  para recorrer el arreglo y crear un elemento "li" para cada usuario.
//  El texto que se muestra en cada "li" se ha creado concatenando los 
//   valores de cada propiedad del objeto usuario es decir, se ha juntado la
//    información que se encuentra en diferentes partes del objeto llamado "usuario",
//     y se ha unido en una sola cadena de texto (un "string").


const usuarios = [
    { nombre: 'Juan', edad: 24, ciudad: 'Madrid' },
    { nombre: 'Pedro', edad: 32, ciudad: 'Barcelona' },
    { nombre: 'Ana', edad: 19, ciudad: 'Valencia' },
  ];
  
  const lista = document.getElementById('usuarios');
  
  usuarios.forEach(usuario => {
    const li = document.createElement('li');
    li.textContent = `${usuario.nombre}, ${usuario.edad}, ${usuario.ciudad}`;
    lista.appendChild(li);
  });
  
//   PRUEBA DOS

// En este ejemplo, hemos creado una función llamada "convertirAMayusculas" que
// recibe una cadena de texto como parámetro y devuelve la misma cadena en mayúsculas.
// Para ello, hemos utilizado un ciclo "for" para recorrer cada carácter de la cadena
// y convertirlo a su correspondiente letra mayúscula utilizando el código ASCII de
// cada carácter.

function convertirAMayusculas(texto) {
    let resultado = '';
    
    for (let i = 0; i < texto.length; i++) {
      const codigo = texto.charCodeAt(i);
      
      if (codigo >= 97 && codigo <= 122) {
        resultado += String.fromCharCode(codigo - 32);
      } else {
        resultado += texto[i];
      }
    }
    
    return resultado;
  }
  
//   Esto imprimirá el resultado de la función en la consola del navegador
//   o del entorno de programación que estés utilizando.

  console.log(convertirAMayusculas('Hola, Mundo soy Sandra!')); // imprimirá "HOLA, MUNDO SOY SANDRA!"


//   PRUEBA TRES

// En este ejemplo hemos creado una función llamada "factorial" que recibe un número como parámetro y devuelve el factorial de ese número. 
// El factorial de un número es el producto de todos los números enteros positivos desde 1 hasta ese número. 
// Por ejemplo, el factorial de 5 es 5 x 4 x 3 x 2 x 1 = 120.
// La función utiliza una estructura de control "if-else" para comprobar si el número es 0 o 1, ya que en esos casos el factorial es siempre 1. 
// Si el número no es 0 ni 1, la función se llama a sí misma de forma recursiva para calcular el factorial del número anterior, y lo multiplica por 
// el número actual para obtener el resultado final. La recursión termina cuando se alcanza el caso base (cuando el número es 0 o 1).


function factorial(numero) {
    if (numero === 0 || numero === 1) {
      return 1;
    } else {
      return numero * factorial(numero - 1);
    }
  }
  
// Aquí estamos llamando a la función factorial(5) 
// y pasando el número 5 como argumento. Luego, utilizamos
// console.log() para imprimir el resultado de la función en la consola.

console.log(factorial(5,)); // Imprimirá el factorial de 5 en la consola: 120
