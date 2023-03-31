
//Ejercicio Uno ( triangulo)

let linea = '';
for (let i = 1; i <= 7; i++) {
  linea += '#';
  console.log(linea);
}

// fizzbuzz 

for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}

// Tablero de ajedrez 

let size = 8; // tamaño de la cuadrícula

let board = ""; // inicializamos la cuadrícula como un string vacío

for (let y = 0; y < size; y++) { // recorremos filas
  for (let x = 0; x < size; x++) { // recorremos columnas
    if ((x + y) % 2 === 0) { // si la suma de fila y columna es par, agregamos espacio
      board += " ";
    } else { // si no, agregamos #
      board += "#";
    }
  }
  board += "\n"; // agregamos salto de línea al final de cada fila
}

console.log(board); // mostramos la cuadrícula en la consola
