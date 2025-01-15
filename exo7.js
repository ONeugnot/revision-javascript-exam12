function checkAge(age) {
	if (age >= 18) {
		return "T MAJEUR GG";
	} else {
		return "BAHAH T MINEUR";
	}
}

// Exemple de test
console.log(checkAge(8)); // Output attendu : "Majeur"
