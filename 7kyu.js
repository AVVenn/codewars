// ____________________________________________________
//TODO 1. Flatten and sort an array
// let array = [[3, 2, 1], [7, 9, 8], [6, 4, 5]];
// console.log([].concat(...array).sort((a,b) => a - b));
// ____________________________________________________
//TODO 2. Sum of integers in string
// function sumOfIntegersInString(s){
// 	let num = s.match(/\d*/g);
// 	return num.reduce((acc, num) => acc += Number(num), 0);
//   }
// ____________________________________________________
//TODO 3. Sort Numbers
// function solution(nums){
// 	return nums !== null && nums.length > 0 ? nums.sort((a,b) => a - b) : []
//   }
// ____________________________________________________
//TODO 4. Simple Fun #238: Tennis Game Points
// let obj = {
// 	'love': 0,
// 	'15': 1,
// 	'30': 2,
// 	'40': 3
//   }
  
//   function tennisGamePoints(score) {
// 	let arr = score.split(`-`);
// 	arr[1] === `all` ? arr[1] = arr[0]  : arr[1];
// 	  return obj[arr[0]] + obj[arr[1]]
//   }
// ____________________________________________________
//TODO 5. Exclamation marks series #7: Remove words from the sentence if it contains one exclamation mark
// function remove (string) {
// 	let arr = string.split(` `);
// 	let newArr = arr.filter((item) => (!item.includes(`!`) || item.match(/!/g).length > 1));   
//   let str = newArr.join(` `);
// 	return str;
// }
// ____________________________________________________
//* Лучшее Решение
// function remove(s){
// 	return s.split(' ').filter(i => i.split('!').length != 2).join(' ');
//   }
// ____________________________________________________
//TODO 6. Driving School Series #2
// function cost (mins) { 
// 	return (mins - 5)/60 < 1 ? 30 : 30 + Math.ceil(((mins - 60 - 5)/30))*10;
//   } 
// ____________________________________________________
//TODO 7. Remove consecutive duplicate words
// const removeConsecutiveDuplicates = s => {
// 	let arr = s.split(` `);
// 	let result = arr.reduce((acc, word, index, array) => array[index] !== array[index + 1] ? acc+= ` ${word}` : acc,"");
// 	return result.trim();
//   }
// ____________________________________________________
//* Лучшее Решение
// const removeConsecutiveDuplicates = s => s.replace(/\b(\w+)(?: \1)+\b/g, '$1')
// ____________________________________________________
//TODO 8. Sum of Minimums!
// function sumOfMinimums(arr) {
// 	return arr.map((item) => item = Math.min(...item)).reduce((acc, item) => acc += item, 0);
//   }
// ____________________________________________________
//TODO 9. Largest pair sum in array
// function largestPairSum (numbers) {
// 	let sortArr = numbers.sort((a,b) => a - b);
// 	return sortArr[sortArr.length - 2] + sortArr[sortArr.length - 1];
//   }
// ____________________________________________________
//TODO 10. What comes after?
// function comes_after(str,l) {
// 	let arr = [...str].filter((item, index, arr) => arr[index - 1] === l.toLowerCase() || arr[index - 1] === l.toUpperCase());
// 	return arr.join(``).replace(/\W|\d|_/g, "");
// }
// ____________________________________________________
//TODO 11. Mumbling 
// function accum(s) {
// 	let arr = s.split(``);
// 	return arr.map((char, index) => char = char.toUpperCase() + char.toLowerCase().repeat(index)).join(`-`);
// }
// ____________________________________________________
//TODO 12. JavaScript Array Filter
// function getEvenNumbers(arr){
// 	return arr.filter((number) => number%2 === 0);
//   }
// ____________________________________________________
//TODO 13. Move 10
// function moveTen(s){
// 	return [...s].map((item) => item = item.codePointAt(0) + 10 <= 122 ? String.fromCharCode(item.codePointAt(0) + 10) 
// : String.fromCharCode(97 + item.codePointAt(0) + 9 - 122 )).join(``);
// }
// ____________________________________________________
	// let arr = s.split(``);
	// let newArr = arr.map((char) => { if (char.codePointAt(0) + 10 < 122) {
	// 									char = String.fromCharCode(char.codePointAt(0) + 10);
	// 								} else {
	// 								char = String.fromCharCode(char.codePointAt(0) +10 - 122 + 97);
	// 								}
	// 								return char;
	// 							});
	// 							console.log(newArr);
	// return newArr.join(`-`);
// ____________________________________________________
//* Лучшее Решение
	// function moveTen(s) {
	// 	let alphabet = 'abcdefghijklmnopqrstuvwxyz';
	// 	let move10 = 'klmnopqrstuvwxyzabcdefghij';
	// 	return s.replace(/[a-z]/g, x => move10[alphabet.indexOf(x)]);
	//   }
// ____________________________________________________
//TODO 14.  Spoonerize Me  
// function spoonerize(words) {
//     let arr = words.split(` `);
//     let firstLetter = arr[0][0];
//     let secondLetter = arr[1][0];
//     arr[0] = secondLetter + arr[0].slice(1);
//     arr[1] = firstLetter + arr[1].slice(1);
//     return arr.join(` `);
// }
// ____________________________________________________
//* Лучшее Решение
// const spoonerize = words => words.replace(/^(.)(.* )(.)(.*)$/, '$3$2$1$4');
// ____________________________________________________
//* Лучшее Решение
// function spoonerize(words) {
//     let word = words.split(' ')
//     return [word[1][0] + word[0].slice(1), word[0][0] + word[1].slice(1)].join(' ')
// }
// ____________________________________________________
//TODO 15. last digits of a number
// function lastDigit(n, d) {
// 	let arr = String(n).split(``);
// 	if(d > arr.length) {
// 	  return arr.map(Number);
// 	} 
// 	if(d <= 0) {
// 	  return [];
// 	}
// 	return arr.slice(arr.length - d).map(Number);
//   }
// ____________________________________________________
//* Лучшее Решение
// function lastDigit(n, d) {
// 	return d <= 0 ? [] : [...""+n].slice(-d).map(x => +x)
//   }
// ____________________________________________________
//TODO 16. String Merge!
// function stringMerge(string1, string2, letter){
// 	let indexOne = string1.indexOf(letter);
// 	let firstPart = string1.slice(0, indexOne);
// 	let indexTwo = string2.indexOf(letter);
// 	let secondPart = string2.slice(indexTwo);
// 	return firstPart+secondPart;
//   }
// ____________________________________________________
//* Лучшее Решение
// stringMerge = (a, b, l) => a.slice(0, a.indexOf(l)) + b.slice(b.indexOf(l));
// ____________________________________________________
//TODO 17. Double Every Other
// function doubleEveryOther(a) {
// 	return a.map((item, index) => index%2 !== 0 ? item*2 : item);
//   }
// ____________________________________________________
//TODO 18. 16+18=214
// function add(num1, num2) {
// 	let numOne = num1 + '';
// 	let numTwo = num2 + ``;
// 	let largestLength = num1 > num2 ? (num1+'').length: (num2+'').length;
// 	let arr1 = [...numOne].map(Number).reverse();
// 	let arr2 = [...numTwo].map(Number).reverse();
// 	let arrResult = [];
// 	for (let i = 0; i < largestLength; i++) {
// 	  if(typeof arr1[i] === `number` && typeof arr2[i] === `undefined`){
// 		arrResult.push(arr1[i]);
// 	  } else if (typeof arr2[i] === `number` && typeof arr1[i] === `undefined`){
// 		arrResult.push(arr2[i]);
// 	  } else { 
// 		arrResult.push(arr1[i]+arr2[i]);
// 	  }
// 	}
// 	return +arrResult.reverse().map(String).join(``);
// }
// console.log(add(2, 11));
// ____________________________________________________
//* Лучшее Решение
// function add(a,b) {
//     let s = ""
    
//     while(a+b) {
//         s = a%10 + b%10 + s
//         a = a/10|0
//         b = b/10|0
//     }
    
//     return +s
// }
// ____________________________________________________
//TODO 19. CubeSummation
// function cubeSum(n, m){
//   let biger = Math.max(n,m);
//   let smaller = Math.min(n,m);
//   let result = 0;
//   for(let i = biger; smaller < i; i--) {
//     result +=  i**3;
//   }
//   return result;
// }
// ____________________________________________________
//TODO 20. Previous multiple of three
// const prevMultOfThree = n => { 
// 	if(n%3 === 0) return n;
// 	n = Math.floor(n/10);
// 	if (n < 3) return null;
// 	return prevMultOfThree(n);
//   }
// ____________________________________________________
//TODO 21. Playing with Sets : Union
// function union(s1, s2){
// 	return new Set([...s1, ...s2]);
//   }
// ____________________________________________________
//TODO 22. Collision Detection
// function collision(x1, y1, radius1, x2, y2, radius2) {
// 	return radius1+radius2 >= Math.sqrt((x2 - x1)**2+(y2 - y1)**2);
//   }
// ____________________________________________________
//TODO 23. Exclamation marks series #3: Remove all exclamation marks from sentence except at the end
// function remove (string) {
// 	let exclamation = string.match(/!*$/);
// 	return string.replace(/!/g,"")+exclamation;
//   }
// ____________________________________________________
//TODO 24. Binary Addition
// function addBinary(a,b) {
// 	return (a+b).toString(2);
//   }
// ____________________________________________________
//TODO 25. List Filtering
// function filter_list(l) {
// 	return l.filter((item) => typeof item === `number`);
//   }
// ____________________________________________________
//TODO 26. Exclamation marks series #13: Count the number of exclamation marks and question marks, return the product
// function product (string) {
// 	let countExclamation = string.match(/!/g) === null ? null : string.match(/!/g).length;
// 	let countQuestion = string.match(/\?/g) === null ? null : string.match(/\?/g).length;
// 	return countQuestion === null ? 0 : countExclamation*countQuestion;
//   }
// ____________________________________________________
//TODO 27.



















//! Не работает проверка на `1`
// Keyboard handler
// let obj  = {
// 	"1": `!`,
// 	"2": `@`,
// 	"3": `#`,
// 	"4": `$`,
// 	"5": `%`,
// 	"6": `^`,
// 	"7": `&`,
// 	"8": `*`,
// 	"9": `(`,
// 	"0": `)`,
// }
// function handler(key, isCaps = false, isShift = false) {
//     if(  typeof key !== `string` || key === key.toUpperCase() || key.length > 1 ) {
//       return 'KeyError';
//     }
//     if (arguments.length === 1) {
//       return key;
//     }
//     if (arguments.length === 2 && arguments[1] === true ) {
//       return key.toUpperCase();
//     } 
//     if (arguments.length === 2 && arguments[1] === false) {
//       return key;
//     }
//     if (arguments.length === 3 && arguments[1] === arguments[2]) {
//       return key;
//     }
//     if (arguments.length === 3 && arguments[1] === true && arguments [2] === false) {
//       return key.toUpperCase();
//     }
//    if (arguments.length === 3 && arguments[1] === false && arguments [2] === true) {
//       if(isNaN(key)) {
//         return key.toUpperCase();
//       } else {
// 		return obj.key;
//       }
//     }
// }




// 	"[": "{",
// 	"]": `}`,
// 	";": `:`,
// 	"'": `"`,
// 	",": `<`,
// 	".": `>`,
// 	"/": `?`,
// 	"`": `~`,
// }