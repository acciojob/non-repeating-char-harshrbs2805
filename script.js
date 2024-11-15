function firstNonRepeatedChar(str) {

	let charCount={}
	for(let char of str){
		charCount[char]=(charCount[char]||0)+1
	}

	for(let item in charCount){
		if(charCount[item]==1){
			console.log(item)
			return item
		}
	}
	return null

	
 // Write your code here
}
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 
