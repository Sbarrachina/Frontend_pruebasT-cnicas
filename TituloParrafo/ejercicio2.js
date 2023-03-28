
//Test DOs Cambio del color fondo botón

function cambiarColor() {
	const colores = ["red", "blue", "green", "yellow", "orange", "purple"];
	const colorAleatorio = colores[Math.floor(Math.random() * colores.length)];
	document.body.style.backgroundColor = colorAleatorio;
}
