function detectPlusPetit(nombre1, nombre2) {
	if (nombre1 < nombre2) {
		return nombre1;
	} else if (nombre2 < nombre1) {
		return nombre2;
	} else {
		return nombre1;
	}
}

console.log(detectPlusPetit(5, 6));
