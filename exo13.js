function countVowels(str) {
	let nbvoyelles = 0;
	let voyelles = ["aeiouyAEIOUY"];
	for (let mot of str) {
		if (voyelles.includes(mot)) {
			nbvoyelles++;
		}
	}
	return nbvoyelles;
}
  // Exemple de test
  console.log(countVowels("javascript")); // Output attendu : 3
    