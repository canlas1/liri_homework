
var input = process.argv;
console.log(input);

var operator = input[2];
var num1 = input[3];
var num2 = input[4];

console.log(operator);
console.log(num1);
console.log(num2);

//The parseFloat() function parses a string and returns a floating point number.

//This function determines if the first character in the specified string is a number. If it is, it parses the string until it reaches the end of the number, and returns the number as a number, not as a string.

if(operator === 'add'){
	console.log(parseFloat(num1) + parseFloat(num2));

}

else if(operator === 'subtract'){
	console.log(parseFloat(num1) - parseFloat(num2));

}

else if(operator === 'multiply'){
	console.log(parseFloat(num1) * parseFloat(num2));
	
}

else if(operator === 'divide'){
	console.log(parseFloat(num1) / parseFloat(num2));
	
}

else if(operator === 'remainder'){
	console.log(parseFloat(num1) % parseFloat(num2));
	
}

else if(operator === 'exp'){
	console.log(parseFloat(num1) ^ parseFloat(num2));
	
}

else{
	console.log('not found');
}


















