function isPalindrome(str) {
	let length = str.split("").reverse().join("");
	if (str === length) {
		return true;
	} else {
		return false;
	}
}
console.log(isPalindrome("radar")); // Output attendu : true
