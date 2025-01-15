function sumNumbers(n) {
	let nombre = 0;
	for (let i = 1; i <= n; i++) {
		nombre += i;
	}
	return nombre;
}

// Exemple de test
console.log(sumNumbers(5)); // Output attendu : 15
