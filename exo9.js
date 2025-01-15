function numberType(num) {
	if (num < 0) {
		return "Négatif";
	} else {
		return "Positif";
	}
}

// Exemple de test
console.log(numberType(-5)); // Output attendu : "Négatif"
