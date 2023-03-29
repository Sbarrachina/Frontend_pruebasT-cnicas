//1- Coloca el código de la función invertirCadena aquí

function invertirCadena(cadena) {
    let resultado = '';
    
    for (let i = cadena.length - 1; i >= 0; i--) {
      resultado += cadena[i];
    }
    
    return resultado;
  }
  
  // Ejemplo de uso
  const cadenaOriginal = 'HOLA MUNDO';
  const cadenaInvertida = invertirCadena(cadenaOriginal);
  
  console.log(cadenaInvertida); // Debería mostrar 'odnum aloH' en la consola
  


// Ejemplo de uso Dos

const cadenaOriginal2 = 'HOLA SUPERMAN';
const cadenaInvertida2 = invertirCadena(cadenaOriginal2);

console.log(cadenaInvertida2); // Debería mostrar 'NAMREPUS ALOH' en la consola



//2-cómo contar cuántas veces se repite un carácter en una cadena en JavaScript:

function contarCaracteres(cadena, caracter) {
    let contador = 0;
    
    for (let i = 0; i < cadena.length; i++) {
      if (cadena[i] === caracter) {
        contador++;
      }
    }
    
    return contador;
  }
  
  // Ejemplo de uso
  const cadena = 'Hola mundo!';
  const caracter = 'o';
  const cantidad = contarCaracteres(cadena, caracter);
  
  console.log(`El caracter "${caracter}" se repite ${cantidad} veces en la cadena "${cadena}"`);
  

  //3-Implementación de una función Sum que reciba un array de números y devuelva su suma.

  function sum(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      sum += arr[i];
    }
    return sum;
  }
  
  const arr = [1, 2, 3,4,5];
  console.log(sum(arr)); // devuelve 6
  

  //4-distancia de Hamming:

  function hammingDistance(str1, str2) {
    if (str1.length !== str2.length) {
      return -1;
    }
  
    let distance = 0;
    for (let i = 0; i < str1.length; i++) {
      if (str1[i] !== str2[i]) {
        distance++;
      }
    }
  
    return distance;
  }
  
  console.log(hammingDistance('abc', 'abd')); // devuelve 1
  console.log(hammingDistance('abcdefg', 'abcdefh')); // devuelve 1
  console.log(hammingDistance('abcdefg', '123')); // devuelve -1
  console.log(hammingDistance('abcdefg', 'abc')); // devuelve -1
  
  
  

