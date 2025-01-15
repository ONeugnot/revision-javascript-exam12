function printNumbers(n) {
	let array = [];
	for (let i = 1; i <= n; i++) {
		array.push(i);
	}

	return array;
}

// Exemple de test
let resultat = printNumbers(5); // Output attendu : 1, 2, 3, 4, 5

console.log(resultat);
