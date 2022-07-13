// function someFunc(arg) {													ЗАМЫКАНИЕ ПРИМЕР
// 	return function (num) {
// 	  return arg + num;
// 	};
//   }
//   let smth = someFunc(13); // после себя вернет тело вложенной функции;
//   console.log(smth(10));

//   function urlGenerator(domain) {
// 	return function (url) {
// 	  return `https://${url}.${domain}`;
// 	};
//   }
//   const comUrl = urlGenerator("com");
//   console.log(comUrl("google"));

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
//TODO 27. Filter unused digits
// function unusedDigits(...arg) {
//   const arrBasicNumbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
//   const arrArguments = [...arg.join("")];
//   let resultArr = arrBasicNumbers.filter(
//     (item) => !arrArguments.includes(item)
//   );
//   return String(resultArr.sort((a, b) => a - b).join(""));
// }
// ____________________________________________________
//* Лучшее Решение
// function unusedDigits(...args){
// 	return "0123456789".replace(new RegExp('['+args.join('')+']','g'), '')
//   }
// ____________________________________________________
//TODO 28.Parts of a list
// function partlist(arr) {
//   const result = [];
//   for (let i = 1; i < arr.length; i++) {
//     result.push([
//       arr.slice(0, i).join(" "),
//       arr.slice(i, arr.length).join(" "),
//     ]);
//   }
//   return result;
// }
// ____________________________________________________
//TODO 29. Largest 5 digit number in a series
// function solution(digits) {
//   const digitsArr = [...digits].map(Number);
//   if (digits.includes("9") && digits.indexOf("9") < digits.length - 4) {
//     const resultArr = [];
//     digitsArr.forEach((item, index) => {
//       if (item === 9) {
//         resultArr.push(+digitsArr.slice(index, index + 5).join(""));
//       }
//     });
//     return Math.max(...resultArr);
//   }
//   if (digits.includes("8") && digits.indexOf("8") < digits.length - 4) {
//     const resultArr = [];
//     digitsArr.forEach((item, index) => {
//       if (item === 8) {
//         resultArr.push(+digitsArr.slice(index, index + 5).join(""));
//       }
//     });
//     return Math.max(...resultArr);
//   }
//   if (digits.includes("7") && digits.indexOf("7") < digits.length - 4) {
//     const resultArr = [];
//     digitsArr.forEach((item, index) => {
//       if (item === 7) {
//         resultArr.push(+digitsArr.slice(index, index + 5).join(""));
//       }
//     });
//     return Math.max(...resultArr);
//   }
//   if (digits.includes("6") && digits.indexOf("6") < digits.length - 4) {
//     const resultArr = [];
//     digitsArr.forEach((item, index) => {
//       if (item === 6) {
//         resultArr.push(+digitsArr.slice(index, index + 5).join(""));
//       }
//     });
//     return Math.max(...resultArr);
//   }
//   if (digits.includes("5") && digits.indexOf("5") < digits.length - 4) {
//     const resultArr = [];
//     digitsArr.forEach((item, index) => {
//       if (item === 5) {
//         resultArr.push(+digitsArr.slice(index, index + 5).join(""));
//       }
//     });
//     return Math.max(...resultArr);
//   }
//   if (digits.includes("4") && digits.indexOf("4") < digits.length - 4) {
//     const resultArr = [];
//     digitsArr.forEach((item, index) => {
//       if (item === 4) {
//         resultArr.push(+digitsArr.slice(index, index + 5).join(""));
//       }
//     });
//     return Math.max(...resultArr);
//   }
//   if (digits.includes("3") && digits.indexOf("3") < digits.length - 4) {
//     const resultArr = [];
//     digitsArr.forEach((item, index) => {
//       if (item === 3) {
//         resultArr.push(+digitsArr.slice(index, index + 5).join(""));
//       }
//     });
//     return Math.max(...resultArr);
//   }
//   if (digits.includes("2") && digits.indexOf("2") < digits.length - 4) {
//     const resultArr = [];
//     digitsArr.forEach((item, index) => {
//       if (item === 2) {
//         resultArr.push(+digitsArr.slice(index, index + 5).join(""));
//       }
//     });
//     return Math.max(...resultArr);
//   }
//   if (digits.includes("1") && digits.indexOf("1") < digits.length - 4) {
//     const resultArr = [];
//     digitsArr.forEach((item, index) => {
//       if (item === 1) {
//         resultArr.push(+digitsArr.slice(index, index + 5).join(""));
//       }
//     });
//     return Math.max(...resultArr);
//   }
// }  //*При большом количестве у меня должно бстрее отработать
// ____________________________________________________
//* Лучшее Решение
// function solution(digits){
// 	let answer = 0;

// 	for (let i=0; i<digits.length; i++){
// 	  let number = digits.substr(i, 5);  //each loop iteration pulls the next 5 digits into a substring
// 	  if(Number(number) > answer){       //convert to number and compare against answer
// 		answer = Number(number);
// 	  }
// 	}
// 	return answer;
//   }
// ____________________________________________________
//TODO 30. Nice Array
// function isNice(arr) {
//   if (arr.length === 0) return false;
//   return arr.every((item) => arr.includes(item + 1) || arr.includes(item - 1));
// }
// ____________________________________________________
//TODO 31.Even and Odd !
// function evenAndOdd(num){
// 	let odd = [...String(num)].filter((item) => item%2 === 0 && item !== 0).join('');
// 	let even = [...String(num)].filter((item) => item%2 !== 0).join('') || 0 ;
// 	return [+odd, +even];
// }

// function evenAndOdd(n){
// 	const f=(n,x)=>+[...n+''].filter(e=>e%2===x).join``
// 	return [f(n,0),f(n,1)]
//   }
// ____________________________________________________
//TODO 32. Substring fun
// function nthChar(words){
// 	let resultArr = [];
// 	words.forEach((item, index) => resultArr.push(item[index]))
// 	return resultArr.join('');
//   }
// ____________________________________________________
//* Лучшее Решение
// const nthChar = words => words.reduce((a, b, index) => a + b[index], "");
// ____________________________________________________
//TODO 33.Array Leaders (Array Series #3)
// function arrayLeaders(numbers) {
//   return numbers.filter(
//     (item, index, arr) =>
//       item > arr.slice(index + 1).reduce((acc, item) => (acc += item), 0)
//   );
// }
// ____________________________________________________
//TODO 34. Tetration
// function tetration(x, y) {
//   if (y === 0) return 1;
//   let sum = x;
//   for (let i = 1; i < y; i++) {
//     sum = Math.pow(x, sum);
//   }
//   return sum;
// }
// ____________________________________________________
// ____________________________________________________
//* Лучшее Решение    // РЕКУРСИЯ
// function tetration(x,y) {
// 	if (y == 0)
// 	  return 1;
// 	return x ** tetration(x, y-1);
//   }
//* Лучшее Решение
// const tetration = (x, y) => !y ? 1 : x ** tetration(x, y-1);
// ___________________________________________________
//TODO 35. Moves in squared strings (I)
// function vertMirror(strng) {
//   let arr = strng.split("\n");
//   console.log(strng);
//   let resultArr = arr.map((item) => [...item].reverse().join(""));
//   return resultArr.join("\n");
// }
// console.log(vertMirror("hSgdHQ\nHnDMao\nClNNxX\niRvxxH\nbqTVvA\nwvSyRu"));
// function horMirror(strng) {
//   let arr = strng.split("\n");
//   let resultArr = arr.reverse();
//   return resultArr.join("\n");
// }
// function oper(fct, s) {
//   return fct(s);
// }
// ____________________________________________________
//TODO 36.Four/Seven
// function fourSeven(n) {
//   while (n === 7) return 4;
//   while (n === 4) return 7;
//   return 0;
// }
// ____________________________________________________
//* Лучшее Решение
// function fourSeven(n){
// 	// Your Code Here
// 	let results = {
// 	  7 : 4,
// 	  4 : 7,
// 	}
// 	return results[n] || 0
//   }
// ____________________________________________________
//TODO 37. Count the Digit
// function nbDig(n, d) {
//   let arrayNumbers = [];
//   for (let i = 0; i <= n; i++) {
//     arrayNumbers.push(i * i);
//   }
//   let re = new RegExp(d, "g");
//   console.log(arrayNumbers.join("").match(re));
//   return arrayNumbers.join("").match(re).length;
// }
// ____________________________________________________
//TODO 38. Responsible Drinking
// function hydrate(s) {
// 	let number = [...s.replace(/\D/g, "")].reduce((acc, str) => acc += Number(str), 0);
// 	return  number === 1 ? `${number} glass of water` : `${number} glasses of water`
//   }
// ____________________________________________________
//* Лучшее Решение
// const hydrate = (s, w = [...s].filter(x => !isNaN(x)).reduce((a, b) => a + +b, 0)) => `${w} glass${w === 1 ? '' : 'es'} of water`;
// ____________________________________________________
//TODO 39. Battle of the characters (Easy)
// function battle(x, y) {
//   let firstNum = [...x].reduce((acc, str) => acc + (str.charCodeAt() - 64), 0);
//   let secondNum = [...y].reduce((acc, str) => acc + (str.charCodeAt() - 64), 0);
//   return firstNum > secondNum ? x : secondNum > firstNum ? y : `Tie!`;
// }
// ____________________________________________________
//TODO 40. Filter Long Words
// function filterLongWords(sentence, n) {
//   return sentence.split(' ').filter((item) => item.length > n);
// }
// ____________________________________________________
//TODO 41. Are the numbers in order?
// function inAscOrder(arr) {
//   return arr.every((item, index, array) => index+1 !== array.length ? array[index] < array[index+1] : true);
// }
// ____________________________________________________
//* Лучшее Решение
// function inAscOrder(arr) {
//   for(let i = 0; i < arr.length; i++) {
//     if(arr[i] > arr[i+1]) return false;
//   }
//   return true;
// }
// ____________________________________________________
//* Лучшее Решение
// function inAscOrder(arr) {
//   return arr.every((_,i) => i === 0 || arr[i] > arr[i-1] ); // _ просто обозначает символ который мы не используем, для того чтобы получить доступ ко в 2 аргументу

// ____________________________________________________
//TODO 42. Simple equation reversal
// function solve(eq) {
//   console.log(eq.split(/([*+-/])/g));
//   return eq
//     .split(/([*+-/])/)
//     .reverse()
//     .join("");
// }
// solve("e*q/100+b");

// ____________________________________________________
//TODO 43. Dot Calculator
// function dotCalculator(equation) {
//   let arr = equation
//     .split(/\* | \+ | \- | \/\//g)
//     .map((item) => (item = item.trim().length));
//   let operator = equation.replace(/[.\s]/g, "");
//   if (operator === `+`) return ".".repeat(arr[0] + arr[1]);
//   if (operator === `-`) {
//     if (arr[0] - arr[1] <= 0) return "";
//     return ".".repeat(arr[0] - arr[1]);
//   }
//   if (operator === `*`) return ".".repeat(arr[0] * arr[1]);
//   if (operator === `//`) {
//     if (arr[0] / arr[1] < 1) return "";
//     return ".".repeat(arr[0] / arr[1]);
//   }
// }
// ____________________________________________________
//* Лучшее Решение
// const dotCalculator = (equation) => {
//   const operations = {
//     '+' : (a, b) => a + b,
//     '-' : (a, b) => a - b,
//     '*' : (a, b) => a * b,
//     '//': (a, b) => a / b,
//   };
//   const [left, operator, right] = equation.split(' ');
//   return '.'.repeat(operations[operator](left.length, right.length));
// }
// ____________________________________________________
//TODO! 44.Fun with lists: lastIndexOf
// function lastIndexOf(head, value) {
//   if (head === null || head.length === 0) return -1;
//   for (let i = head.length - 1; i > -1; i--) {
//     if (head[i] === value) return i;
//   }
//   return -1;
// }
// console.log(lastIndexOf([1, 2, 3, 3], 3));

// ____________________________________________________
//TODO 44. Thinking & Testing : How many "word"?
// function testit(s) {
// 	const arrWord = s.toLowerCase().match(/[word]/gi);
// 	const str = arrWord.join();
// 	let count1 = 0;
// 	let count2 = 0;
// 	for (let i = 0; i < str.length; i++) {
// 	  if (str[i] === "w" && count1 === 0) {
// 		count1++;
// 		count2 += 0.25;
// 	  }
// 	  if (str[i] === "o" && count1 === 1) {
// 		count1++;
// 		count2 += 0.25;
// 	  }
// 	  if (str[i] === "r" && count1 === 2) {
// 		count1++;
// 		count2 += 0.25;
// 	  }
// 	  if (str[i] === "d" && count1 === 3) {
// 		count1 = 0;
// 		count2 += 0.25;
// 	  }
// 	}
// 	return Math.floor(count2);
//   }
// ____________________________________________________
//* Лучшее Решение
// function testit(s) {
// 	return (s.match(/w.*?o.*?r.*?d/ig) || []).length; 												*РАЗБРАТЬСЯ
// }
// ____________________________________________________
//TODO 45.  Numerical Palindrome #1
// function palindrome(num) {
//   if (typeof num !== "number" || num < 0 || !Number.isInteger(num)) {
//     return "Not valid";
//   }
//   return Number([...(num + "")].reverse().join("")) === num;
// }
// ____________________________________________________
//TODO 46. Remove All The Marked Elements of a List
// Array.prototype.remove_ = function(arr, valuesArr){
// 	return arr.filter((item, index) => !valuesArr.includes(item))
//   }
// ____________________________________________________
//TODO 47. Simple Fun #144: Distinct Digit Year
// function distinctDigitYear(year) {
//   for (let i = year + 1; ; i++) {
//     let arr = i + "";
//     let set = new Set(arr);
//     let uniqueArr = [...set];
//     let str = uniqueArr.join("");
//     if (str.length > 3) return i;
//   }
// }
//! ____________________________________________________															ВАЖНО
//* Лучшее Решение
// function distinctDigitYear(year) {
// 	do{year++}while(new Set(year.toString()).size<4);															УДАЛЕНИЕ ДУБЛИКАТОВ ЧЕРЕЗ new Set
// 	return year;
//   }
// ____________________________________________________
//TODO 48. See You Next Happy Year
// function nextHappyYear(year){
// 	for (let i = year + 1; ; i++) {
// 	  let arr = i + "";
// 	  let set = new Set(arr);
// 	  let uniqueArr = [...set];
// 	  let str = uniqueArr.join("");
// 	  if (str.length > 3) return i;
// 	}
//   }
// ____________________________________________________
//* Лучшее Решение
// function nextHappyYear(a){
// 	while(new Set([...++a+'']).size<4);
// 	return a;
//   }
// ____________________________________________________
//TODO 49. Vowel Count
// function getCount(str) {
//   let justVowelArr = str.match(/[aeiou]/gi);
//   return justVowelArr ? justVowelArr.length : 0;
// }
// ____________________________________________________
//* Лучшее Решение
// function getCount(str) {
// 	return (str.match(/[aeiou]/ig)||[]).length;
//   }
// ____________________________________________________
//TODO 50. Square Every Digit
// function squareDigits(num) {
//   let arrNum = [...String(num)].map((item) => (+item) ** 2);
//   return +arrNum.join("");
// }
// ____________________________________________________
//TODO 51. Disemvowel Trolls
// function disemvowel(str) {
//   return str.replace(/[aeiou]/gi, "");
// }
// ___________________________________________________
//TODO 52. Highest and Lowest
// function highAndLow(numbers) {
//   let arr = numbers.split(" ").map(Number);
//   let maxNum = Math.max(...arr);
//   let minNum = Math.min(...arr);
//   return `${maxNum} ${minNum}`;
// }
// ___________________________________________________
//TODO 53. Descending Order
// function descendingOrder(n) {
//   if (String(n).length < 2) return n;
//   const arrNum = [...String(n)].map(Number).sort((a, b) => b - a);
//   return +arrNum.join("");
// }
// ____________________________________________________
//* Лучшее Решение
// function descendingOrder(n) {
//   return parseInt(String(n).split("").sort().reverse().join(""));
// }
// ___________________________________________________
//TODO 54. Get the Middle Character
// function getMiddle(s) {
//   let l = s.length;
//   if (l < 3) return s;
//   return l % 2 === 0 ? s.slice(l / 2 - 1, l / 2 + 1) : s[Math.floor(l / 2)];
// }
// ___________________________________________________
//TODO 55. You're a square!
// let isSquare = function (n) {
//   return Number.isInteger(Math.sqrt(n));
// };
// ____________________________________________________
//* Лучшее Решение
// function isSquare(n) {
//   return Math.sqrt(n) % 1 === 0;														Проверка на целое число  Math.sqrt(n) % 1 === 0
// }
// ___________________________________________________
//TODO 56. Isograms
// function isIsogram(str){
// 	return [...new Set(str.toLowerCase())].join("").length === str.length
//   }
// ____________________________________________________
//* Лучшее Решение
// function isIsogram(str){
// 	return new Set(str.toUpperCase()).size == str.length;
//   }
// ___________________________________________________
//TODO 57. Exes and Ohs
// function XO(str) {
// 	const x = str.match(/x/gi) || [];
// 	const o = str.match(/o/gi) || [];
//    return x.length === o.length
//  }
// ___________________________________________________
//TODO 58. Shortest Word
// function findShort(s) {
//   let resultStr = s
//     .split(" ")
//     .reduce((acc, item) => (acc.length > item.length ? (acc = item) : acc));
//   return resultStr.length;
// }
// ____________________________________________________
//* Лучшее Решение
// function findShort(s){
//     return Math.min(...s.split(" ").map (s => s.length));
// }
// ___________________________________________________
//TODO 59. Jaden Casing Strings
// function toJadenCase() {
//   return this.split(" ")
//     .map((word) => word[0].toUpperCase() + word.slice(1))
//     .join(" ");
// }
// ___________________________________________________
//TODO 60. Complementary DNA
// let obj = {
//     'A': 'T',
//     'T': 'A',
//     'G': 'C',
//     'C': 'G',
//   }
// function DNAStrand(dna){
//   if (dna.length === 0) return "";
//   return [...dna].map((item) => obj[item]).join('');
// }
// ____________________________________________________
//* Лучшее Решение
// function DNAStrand(dna) {
// 	return dna.replace(/./g, function(c) {
// 	  return DNAStrand.pairs[c]
// 	})
//   }

//   DNAStrand.pairs = {
// 	A: 'T',
// 	T: 'A',
// 	C: 'G',
// 	G: 'C',
//   }
// ___________________________________________________
//TODO 61. Credit Card Mask
// function maskify(cc) {
// 	if (cc.length < 5) return cc;
// 	let lengthCC = cc.length
// 	return '#'.repeat(lengthCC-4)+cc.slice(lengthCC-4);
//   }
// ____________________________________________________
//* Лучшее Решение
// function maskify(cc) {
// 	return cc.slice(0, -4).replace(/./g, '#') + cc.slice(-4);
//   }
// ___________________________________________________
//TODO 62. Beginner Series #3 Sum of Numbers
// function getSum(a, b){
// 	if( a === b ) return a;
// 	let sum = 0;
// 	let minNum = Math.min(a, b);
// 	let maxNum = Math.max(a, b);
// 	for(let i = minNum; i <= maxNum; i++){
// 	  sum += i;
// 	}
// 	return sum;
//   }
// ____________________________________________________
//* Лучшее Решение
// const GetSum = (a, b) => {
// 	let min = Math.min(a, b),
// 		max = Math.max(a, b);
// 	return (max - min + 1) * (min + max) / 2;
//   }
// ___________________________________________________
//TODO 63. Sum of two lowest positive integers
// function sumTwoSmallestNumbers(numbers) {
// 	const sortArr = numbers.sort((a, b) => a - b);
// 	return sortArr[0] + sortArr[1]
//   }
// ___________________________________________________
//TODO 64.Two to One
// function longest(s1, s2) {
//   const strNew = [...new Set([...(s1 + s2)])].sort().join("");
//   return strNew;
// }
// ___________________________________________________
//TODO 65. Growth of a Population
// function nbYear(p0, percent, aug, p) {
// 	let sum = Math.floor(p0);
// 	for (let i = 0; ; i++) {
// 	  if (Math.floor(sum) >= p) return i;
// 	  sum = Math.floor(sum) * (1 + percent / 100) + Math.floor(aug);
// 	}
// 	return i;
//   }
// ___________________________________________________
//TODO 66.Find the next perfect square!
// function findNextSquare(sq) {																ПРОВЕРКА НА ЦЕЛОЕ ЛИ ЧИСЛО    root % 1 === 0
//   const sqNew = Math.sqrt(sq);
//   if (!Number.isInteger(sqNew)) return -1;
//   return (sqNew + 1) ** 2;
// }
// ___________________________________________________
//TODO 67. Friend or Foe?
// function friend(friends){
// 	return friends.filter((name) => name.length === 4);
//   }
// ___________________________________________________
//TODO 68. Categorize New Member
// function openOrSenior(data){
// 	return data.map((player) => player[0] >= 55 && player[1] > 7 ? 'Senior' : 'Open')
//   }
// ___________________________________________________
//TODO 69. Printer Errors
// function printerError(s) {
//   const arrError = s.match(/[n-z]/gi);
//   const countError = arrError === null ? 0 : arrError.length
//   return `${countError}/${s.length}`;
// }
// ____________________________________________________
//* Лучшее Решение
// const printerError = ($) => [ ($.match(/[n-z]/g) || []).length, $.length ].join('/')
// ___________________________________________________
//TODO 70.Regex validate PIN code
// function validatePIN (pin) {
//   if(/\D/.test(pin)) return false;
//   return (pin.length === 4 || pin.length === 6) && /\d+/.test(pin)
// }
// ____________________________________________________
//* Лучшее Решение
// function validatePIN(pin) {                                   ПОНРАВИЛОСЬ
//   return /^(\d{4}|\d{6})$/.test(pin)
// }
// ___________________________________________________
//TODO 71. Is this a triangle?
// function isTriangle(a,b,c){
//   let max = Math.max(a, b, c);
//    let sum = a + b + c;
//    return sum - max > max;
//  }
// ___________________________________________________
//TODO 72. Ones and Zeros
// const binaryArrayToNumber = arr => {
//   return parseInt(+arr.join(''), 2)
// };
// ___________________________________________________
//TODO 73.Number of People in the Bus
// const number = function(busStops){
//   return busStops.reduce((acc, arr) => acc+=arr[0]-arr[1], 0)
// }
// ___________________________________________________
//TODO 74.Find the divisors!
// function divisors(integer) {
//   const arr = [];
//   for(let i = 2; i < integer; i++) {
//     if (integer % i === 0) {
//       arr.push(i);
//     }
//   }
//   return arr.length > 0 ? arr : `${integer} is prime`
// };
// ___________________________________________________
//TODO 75. Odd or Even?
// function oddOrEven(array) {
//   if(array.length === 0) return 'even'
//   return array.reduce((acc, num) => acc+=num) % 2 === 0 ? 'even' : 'odd'
// }
// ___________________________________________________
//TODO 76. String ends with?
// function solution(str, ending){
//   const lengthEnding = ending.length;
//   const substr = str.slice(str.length - lengthEnding);
//   return substr === ending
// }
// ___________________________________________________
//TODO 77. Reverse words
// function reverseWords(str) {
//   return str.split(" ").map((item) => [...item].reverse().join("")).join(" ");
// }
// ___________________________________________________
//TODO 78. Remove the minimum
// function removeSmallest(numbers) {
//   let copyNumbers = [...numbers];
//   if(numbers.length === 0 || numbers.length === 1 ) return [];
//   const minNum = Math.min(...numbers);
//   const indexMinNum = numbers.indexOf(minNum);
//   copyNumbers.splice(indexMinNum, 1);
//   return copyNumbers;
// }
// ____________________________________________________
//* Лучшее Решение
// const removeSmallest = numbers => numbers.filter((n,i) => i !== numbers.indexOf(Math.min(...numbers)));
// ___________________________________________________
//TODO 79. The highest profit wins!
// function minMax(arr){
// 	return [Math.min(...arr), Math.max(...arr)];
//   }
// ___________________________________________________
//TODO 80. Testing 1-2-3
// const number = function (array) {
//   if (array.length === 0) return [];
//   return array.map((item, index) => `${index + 1}: ${item}`);
// };
// ___________________________________________________
//TODO 81. Don't give me five!
// function dontGiveMeFive(start, end) {
//   let counter = 0;
//   for (let i = start; i < end + 1; i++) {
//     console.log(i);
//     if (!String(i).includes("5")) {
//       counter++;
//     }
//     console.log(counter);
//   }
//   return counter;
// }
// ___________________________________________________
//TODO 82.Money, Money, Money

// function calculateYears(principal, interest, tax, desired) {
// 	for(let i = 0; ; i++){
// 		if (principal >= desired) return i;
// 		principal += principal * interest * (1 - tax);
// 	}
//   }

// ИЛИ

// 	let counter = 0;
// function calculateYears(principal, interest, tax, desired) {
// 	if (principal >= desired) {
// 	  return counter;
// 	};
// 	principal += principal * interest * (1 - tax);
// 	counter++;
// 	console.log(counter, principal);
// 	return calculateYears(principal, interest, tax, desired);
//   }
// ___________________________________________________
//TODO 83. Find the stray number
// function stray(numbers) {
// 	let newArr= numbers.sort((a,b) => a - b);
// 	return newArr[newArr.length - 1] === newArr[newArr.length - 2] ? newArr[0] : newArr[newArr.length - 1];
//   }
// ____________________________________________________
//* Лучшее Решение
// const stray = nums => nums.reduce((a, b) => a ^ b);

// ___________________________________________________
//TODO 84. Breaking chocolate problem
// function breakChocolate(n, m) {
//   if (n < 1 || m < 1) return 0;
//   return n * m - 1;
// }
// ___________________________________________________
//TODO 85. Count the divisors of a number
// function getDivisorsCnt(n){
//     let counter = 0;
//     for(let i = 1; i <= n; i++) {
//       if(n % i === 0) counter++
//     }
//     return counter;
// }
// ___________________________________________________
//TODO 85.Find the middle element
// function gimme(triplet) {
//   const newArr = [...triplet].sort((a, b) => a - b); //!!!!!!!!!!!!!!!!!!!!! НЕ ЗАБЫВАЙ
//   console.log(newArr);
//   const middleNum = newArr[1];
//   return triplet.indexOf(middleNum);
// }
// ___________________________________________________
//TODO 86. Make a function that does arithmetic!
// function arithmetic(a, b, operator){
// 	switch(operator){
// 		case 'add': return a + b;
// 		case 'subtract': return a - b;
// 		case 'multiply': return a * b;
// 		case 'divide': return a / b;
// 	}
//   }
// ____________________________________________________
//* Замена switch
// const arithmetic = (a, b, operator) => ({
// 	'add'     : a + b,
// 	'subtract': a - b,
// 	'multiply': a * b,
// 	'divide'  : a / b
//   }[operator]);
// ___________________________________________________
//TODO 87. Sum of a sequence
// const sequenceSum = (begin, end, step) => {
// 	if(begin >= end) return 0;
// 	let sum = 0;
// 	for(let i = begin; i <= end; i += step){
// 	  sum += i;
// 	}
// 	return sum;
//   };
// ___________________________________________________
//TODO 88. Sort array by string length
// function sortByLength (array) {
// 	return arr ay.sort((a, b) => a.length - b.length);
//   };
// ___________________________________________________
//TODO 89.Round up to the next multiple of 5
// function roundToNext5(n){
// 	if(n% 5 === 0 ) return n;
// 	for(let i = n; ; i++){
// 	  if(i % 5 === 0) return i;
// 	}
//   }
// ____________________________________________________
//* Лучшее Решение
// function roundToNext5(n){
// 	return Math.ceil(n/5)*5;
//   }
// ___________________________________________________
//TODO 90. Two Oldest Ages
// function twoOldestAges(ages) {
//   const newAges = [...ages].sort((a, b) => a - b);
//   return newAges.slice(-2);
// }
// ___________________________________________________
//TODO 91. Two fighters, one winner.
// function declareWinner(f1, f2, firstAttacker) {
//   if (firstAttacker === f1.name) {
//     return Math.ceil((f2.health - f1.damagePerAttack) / f1.damagePerAttack) >=
//       f1.health / f2.damagePerAttack
//       ? f2.name
//       : f1.name;
//   }
//   if (firstAttacker === f2.name) {
//     return Math.ceil((f1.health - f2.damagePerAttack) / f2.damagePerAttack) >=
//       f2.health / f1.damagePerAttack
//       ? f1.name
//       : f2.name;
//   }
// }
// ___________________________________________________
//TODO 92. Maximum Multiple
// function maxMultiple(divisor, bound){
// 	return bound % divisor === 0 ? bound : Math.floor(bound / divisor) * divisor
//   }
// ____________________________________________________
//* Лучшее Решение
// function maxMultiple(divisor, bound) {
//   return bound - (bound % divisor);
// }
// ___________________________________________________
//TODO 93. Anagram Detection
// let isAnagram = function (test, original) {
//   let newTest = [...test.toLowerCase()].sort();
//   let newOriginal = [...original.toLowerCase()].sort();
//   return newTest.join("") === newOriginal.join("");
// };
// ___________________________________________________
//TODO 94. Simple Fun #176: Reverse Letter
// function reverseLetter(str) {
//   let newStr = str.replace(/\W|\d|_/gi, "");
//   return [...newStr].reverse().join("");
// }
// ____________________________________________________
//* Лучшее Решение
// reverseLetter=(s)=>s.replace(/[^a-z]/gi,'').split('').reverse().join('');
// ___________________________________________________
//TODO 95. Factorial   						РЕКУРСИЯ
// let sum = 1;
// function factorial(n) {
//   if (n < 0 || n > 12) return throw new Error("RangeError");
//   if (n === 0) return 1;
//   if (n === 1) return sum;
//   sum *= n;
//   n--;
//   return factorial(n);
// }
// ___________________________________________________
// function factorial(n) {
// 	if (n < 0 || n > 12) throw new Error("RangeError");
// 	if (n === 0) return 1;
// 	let sum = 1;
// 	for(let i = n; i >= 1; i--) {
// 	  sum *= i
// 	}
// 	return sum;
//   }
// ___________________________________________________
//TODO 96.Summing a number's digits
// function sumDigits(number) {
//   return [...String(number).replace(/\D/gi, "")]
//     .map((num) => (num = Math.abs(+num)))
//     .reduce((acc, num) => (acc += num));
// }
// ___________________________________________________
//TODO 197. Check the exam
// function checkExam(array1, array2) {
//   const arr = array2.map((char, index) =>
//     char === array1[index] ? 4 : char === "" ? 0 : -1
//   );
//   const result = arr.reduce((acc, num) => (acc += num));
//   return result < 0 ? 0 : result;
// }
// ___________________________________________________
//TODO 198. Find the capitals
// const capitals = function (word) {
// 	return [...word].map((char, index) => char.toUpperCase() === char ? index : -1).filter((num) => num >= 0)
// };
// ___________________________________________________
//TODO 99. Small enough? - Beginner

// function smallEnough(a, limit) {
//   const arrSort = a.sort((a, b) => a - b);
//   console.log(arrSort);
//   return arrSort[arrSort.length - 1] <= limit;
// }
// ____________________________________________________
//* Лучшее Решение
// function smallEnough(a, limit){
// 	return Math.max(...a) <= limit
//   }
// ___________________________________________________
//TODO 100. Form The Minimum
// function minValue(values){
// 	const newValues = [...(new Set(values))];
// 	return +(newValues.sort((a,b) => a - b).join(''));
//   }
// ___________________________________________________
//TODO 101. Remove anchor from URL
// function removeUrlAnchor(url){
// 	return url.replace(/(#.+)/gi, "");
//   }
// ___________________________________________________
//TODO 102. Fix string case
// function solve(s) {
//   const newArr = [...s.replace(/\s/gi, "")];
//   const countUpperCase = newArr.reduce(
//     (acc, char) => (char === char.toUpperCase() ? (acc = acc + 1) : acc),
//     0
//   );
//   console.log(newArr);
//   console.log(countUpperCase);
//   return newArr.length - countUpperCase < countUpperCase
//     ? s.toUpperCase()
//     : s.toLowerCase();
// }
// ____________________________________________________
//* Лучшее Решение
// const solve = (s) =>
//   s.replace(/[A-Z]/g, "").length < s.length / 2
//     ? s.toUpperCase()
//     : s.toLowerCase();
// ___________________________________________________
//TODO 102. Maximum Length Difference
// function mxdiflg(a1, a2) {
//   if (a1.length === 0 || a2.length === 0) return -1;
//   const newA1 = a1.map((item) => item.length);
//   const newA2 = a2.map((item) => item.length);
//   const maxA1 = Math.max(...newA1);
//   const maxA2 = Math.max(...newA2);
//   const minA1 = Math.min(...newA1);
//   const minA2 = Math.min(...newA2);
//   return Math.abs(maxA1 - minA2) > Math.abs(maxA2 - minA1)
//     ? Math.abs(maxA1 - minA2)
//     : Math.abs(maxA2 - minA1);
// }
// ____________________________________________________
//* Лучшее Решение
// function mxdiflg(a1, a2) {
//   if (a1.length === 0 || a2.length === 0) return -1;
//   let l1 = a1.map((str) => str.length);
//   let l2 = a2.map((str) => str.length);
//   return Math.max(
//     Math.max(...l1) - Math.min(...l2),
//     Math.max(...l2) - Math.min(...l1)
//   );
// }
// ___________________________________________________
//TODO 103. Alternate capitalization
// function capitalize(s){
//   const oneArr =  [...s].map((str, index) => index%2 === 0 ? str.toUpperCase() : str);
//   const secondArr = [...s].map((str, index) => index%2 !== 0 ? str.toUpperCase() : str);
//   return [oneArr.join(""), secondArr.join("")];
// };
// ___________________________________________________
//TODO 104. Remove duplicate words
// function removeDuplicateWords (s) {
//   return [...new Set(s.split(' '))].join(" ");
// }
// ___________________________________________________
//TODO 105. The Coupon Code
// function checkCoupon(enteredCode, correctCode, currentDate, expirationDate){
//   return enteredCode === correctCode && Date.parse(currentDate) <= Date.parse(expirationDate)
// }
// ___________________________________________________
//TODO 106. Row Weights
// function rowWeights(array){
//   let arrTeamB =  array.filter((item, index) => index%2 === 0);
//   let arrTeamA = array.filter((item, index) => index%2 !== 0);
//   return [ arrTeamB.length === 0 ? 0 : arrTeamB.reduce((acc,num) => acc+=num), arrTeamA.length === 0 ? 0 : arrTeamA.reduce((acc, num) => acc+=num)]
// }
// ___________________________________________________
//TODO 107. Factorial
// function factorial(n){
//   let sum = 1;
//   for(let i = n; i > 0 ; i--) {
//     sum*=i;
//   }
//   return sum
// }
// ____________________________________________________
//* Лучшее Решение
// const factorial = n => n ? factorial(n - 1) * n : 1;
// ___________________________________________________
//TODO 108. Deodorant Evaporator
// function evaporator(content, evap_per_day, threshold){
//   let countDay = 0;
//   let minVal = content*(threshold/100);
//   for(let i = 0; ; i++) {
//     if (content < minVal) return i;
//     content *= (100 - evap_per_day)/100;
//   }
// }
// ___________________________________________________
//TODO 109. Sum of angles
// function angle(n) {
//   return 180*(n-2)
// }
// ___________________________________________________
//TODO 110. Sorted? yes? no? how?
// function isSortedAndHow(array) {
//   const newArr = array.join();
//   const ascending = [...array].sort((a,b) => a - b);
//   const descending = [...array].sort((a,b) => b - a);
//   return newArr === ascending.join()
//     ? "yes, ascending"
//     : newArr === descending.join()
//     ? "yes, descending"
//     : "no"
// }
// ___________________________________________________
//TODO 111. Thinkful - String Drills: Repeater
// function repeater(string, n){
//   return string.repeat(n)
// }
// ___________________________________________________
//TODO 112. Alphabet war
// function alphabetWar(fight) {
//   let objLeft = {
//     w: 4,
//     p: 3,
//     b: 2,
//     s: 1,
//   };

//   let objRight = {
//     m: 4,
//     q: 3,
//     d: 2,
//     z: 1,
//   };

//   const leftSideSum = [...fight]
//     .map((item) => objLeft[item] || 0)
//     .reduce((acc, item) => (acc += item));
//   const rightSideSum = [...fight]
//     .map((item) => objRight[item] || 0)
//     .reduce((acc, item) => (acc += item));

//   return leftSideSum > rightSideSum
//     ? "Left side wins!"
//     : leftSideSum < rightSideSum
//     ? "Right side wins!"
//     : "Let's fight again!";
// }
// ___________________________________________________
//TODO 113. Love vs friendship
// function wordsToMarks(string){
//   let objLetter = {
//     a: 1,
//     b: 2,
//     c: 3,
//     d: 4,
//     e: 5,
//     f: 6,
//     g: 7,
//     h: 8,
//     i: 9,
//     j: 10,
//     k: 11,
//     l: 12,
//     m: 13,
//     n: 14,
//     o: 15,
//     p: 16,
//     q: 17,
//     r: 18,
//     s: 19,
//     t: 20,
//     u: 21,
//     v: 22,
//     w: 23,
//     x: 24,
//     y: 25,
//     z: 26
//   };
//   return [...string].reduce((acc, char) => acc+=objLetter[char], 0)
// }
// ____________________________________________________
//* Лучшее Решение
// const wordsToMarks = s => [...s].reduce((res, c) => res += c.charCodeAt() - 96, 0)
// ___________________________________________________
//TODO 114. Reverse a Number
// function reverseNumber(n) {
// 	let newNum = [...(Math.abs(n) + '')].reverse().join('');
// 	return n >= 0 ? +newNum : -newNum;
// 	}
// ___________________________________________________
//TODO 115. Coding Meetup #1 - Higher-Order Functions Series - Count the number of JavaScript developers coming from Europe
// function countDevelopers(list) {
// 	let filterList = list.filter((developer) => developer.continent === 'Europe' && developer.language === 'JavaScript')
// 	return filterList.length
//   }
// ___________________________________________________
//TODO 116. Predict your age!
// function predictAge(...arr){
// 	return Math.floor((Math.sqrt(arr.map((number) => number**2).reduce((acc,number) => acc += number)))/2)
//  }
// ____________________________________________________
//* Лучшее Решение
// function predictAge(...n){
// 	return (Math.hypot(...n)/2)>>0
//  }
// ___________________________________________________
//TODO 117. Sum of the first nth term of Series
// function SeriesSum(n) {
//   let sum = 1;
//   if (n === 0) return "0.00";
//   for (let i = 1; i < n; i++) {
//     sum += 1 / (1 + 3 * i);
//   }
//   return sum.toFixed(2);
// }
// ___________________________________________________
//TODO 118. Triangular Treasure
// function triangular(n) {
//   if (n < 1) return 0;
//   return (n * (n + 1)) / 2;
// }
// ___________________________________________________
//TODO 119. Find the vowels
// function vowelIndices(word) {
//   let arr = [...word].map((char, ind) =>
//     "aeiouy".includes(char.toLowerCase()) ? (char = ind + 1) : char
//   );
//   return arr.filter((char) => typeof char === "number");
// }
// ___________________________________________________
//TODO 120. Most digits
// function findLongest(array) {
//   return array.reduce((acc, num) =>
//     acc.toString().length >= num.toString().length ? acc : num
//   );
// }
// ___________________________________________________
//TODO 121. Sum of Triangular Numbers
// function sumTriangularNumbers(n) {
//   if (n < 1) return 0;
//   let sum = 0;
//   for (let i = n; i > 0; i--) {
//     sum += (i * (i + 1)) / 2;
//     console.log(sum);
//   }
//   return sum;
// }
// ___________________________________________________
//TODO 122. Even numbers in an array
// function evenNumbers(array, number) {
// 	const filteredArr = array.filter((num) => num%2 === 0);
// 	return filteredArr.slice(-(number))
//   }
// ___________________________________________________
//TODO 123. Maximum Product
// function adjacentElementsProduct(array) {
//   return array.reduce(
//     (acc, num, index, arr) =>
//       arr[index + 1] && num * arr[index + 1] > acc
//         ? num * array[index + 1]
//         : acc,
//     array[0] * array[1]
//   );
// }
// ___________________________________________________
//TODO 124. No oddities here
// function noOdds( values ){
// 	return values.filter((item) => item % 2 === 0)
//   }
// ___________________________________________________
//TODO 125. Bumps in the Road
// function bump(x) {
//   const numberN = (x.match(/n/gi) || []).length;
//   return numberN > 15 ? "Car Dead" : "Woohoo!";
// }
// ___________________________________________________
//TODO 126. Sum of odd numbers
// function rowSumOddNumbers(n) {
//   return n ** 3;
// }
// ___________________________________________________
//TODO 127. Palindrome chain length
//цикл
// const palindromeChainLength = (n) => {
// 	for (let i = 0; ; i++) {
// 	  const reversedString = [...(n + "")].reverse().join("");
// 	  if (reversedString === n + "") {
// 		return i;
// 	  }
// 	  n += Number(reversedString);
// 	}
//   };

//   console.log(palindromeChainLength(89));
// ___________________________________________________
// рекурсиЯ

// function rowSumOddNumbers(n) {
//   return n ** 3;
// }

// const getReversedString = (n) => {
//   const reversedArr = [...(n + "")].reverse();
//   return reversedArr.join("");
// };

// const isPalindrome = (n) => {
//   console.log(getReversedString(n), n + "");
//   return getReversedString(n) === n + "";
// };

// let counter = 0;

// const palindromeChainLength = (n) => {
//   if (isPalindrome(n)) {
//     return counter;
//   }
//   counter++;

//   const reversedNumber = +getReversedString(n);
//   return palindromeChainLength(n + reversedNumber);
// };
// _________________________________________________________
// ___________________________________________________
//TODO 128. Fizz Buzz
// const fizzbuzz = (n) => {
//   const arr = [];
//   for (let i = 1; i <= n; i++) {
//     if (i % 3 === 0 && i % 5 === 0) {
//       arr.push("FizzBuzz");
//     } else if (i % 3 === 0) {
//       arr.push("Fizz");
//     } else if (i % 5 === 0) {
//       arr.push("Buzz");
//     } else {
//       arr.push(i);
//     }
//   }
//   return arr;
// };
// ____________________________________________________
//* Лучшее Решение
// let fizzify = fizzbuzz = function(n){
//   return Array.apply(null, new Array(n)).map(function(e, i){
//     return (++i % 3 ? '' : 'Fizz' ) + (i % 5 ? '' : 'Buzz') || i;
//   });
// }
// ___________________________________________________
//TODO 129. Halving Sum
// function halvingSum(n) {
// 	let sum = n;
// 	for(let i = 2; i <= n; i *=2){
// 		sum += Math.floor(n/i)
// 	}
// 	return sum
//   }
// ___________________________________________________
//TODO 130. Minimize Sum Of Array (Array Series #1)
// function minSum(arr) {
//   const sortedArr = [...arr].sort((a, b) => a - b);
//   console.log(sortedArr);
//   return (
//     sortedArr.reduce(
//       (acc, num, index, arr) => (acc += num * arr[arr.length - (index + 1)]),
//       0
//     ) / 2
//   );
// }
// ___________________________________________________
//TODO 131. Alphabet symmetry

// const alphabet = ["a", "b", "c", "d", "e",  "f", "g","h", "i", "j", "k", "l", "m",
//					 "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
// function solve(arr) {
//   return arr.map((str) =>
//     [...str].reduce(
//       (acc, char, index) =>
//         (acc += char.toLowerCase() === alphabet[index] ? 1 : 0),
//       0
//     )
//   );
// }
// ___________________________________________________
//TODO 132. Power of two
// function isPowerOfTwo(n){
// 	for (let i = n; i >= 1; i/=2) {
// 	  if (i === 2 || i === 1) return true;
// 	}
// 	return false
//   }

// function isPowerOfTwo(n){  					- не работает с большими числами
// 	return ( Math.log(n) / Math.log(2) )%1 === 0													//!Проверка на целое ли число %1 === 0
//    }
// ____________________________________________________
//* Лучшее Решение
// function isPowerOfTwo(n){
//     return Number.isInteger(Math.log2(n));											//! Проверка через логарифм является ли число степенью
// }
// ___________________________________________________
//TODO 133. Greet Me
// const greet = (name) => {
// 	let changedName = name[0].toUpperCase() + name.slice(1).toLowerCase()
// 	return `Hello ${changedName}!`
//   };
// _____________________________________________________________________________________________________________________________________
//TODO 134. Boiled Eggs
// function cookingTime(eggs) {
// 	return eggs > 8 ? Math.ceil(eggs/8)*5 : eggs > 0 ? 5 : 0
//   }
// _____________________________________________________________________________________________________________________________________
//TODO 135. Find the nth Digit of a Number
// const findDigit = function(num, nth){
// 	num = Math.abs(num);
// 	if(nth <= 0) return -1;
// 	if (String(num).length < nth) return 0;
// 	let arrReversedString = [...String(num)].reverse();
// 	return +arrReversedString[nth-1]
//   }
// _____________________________________________________________________________________________________________________________________
//TODO 136. Sum of Cubes
// function sumCubes(n){
// 	let sum = 0;
// 	for (let i = 0; i <= n; i++){
// 	  sum += i**3;
// 	}
// 	return sum
//   }
// _____________________________________________________________________________________________________________________________________
//TODO 137.Gauß needs help! (Sums of a lot of numbers).
// const  f = (n) => n > 0 && n%1 === 0 ? ((1+n)/2)*n : false
// _____________________________________________________________________________________________________________________________________
//TODO 138. Simple beads count
// function countRedBeads(n) {
// 	return n < 2 ? 0 : (n-1)*2
//   }
// _____________________________________________________________________________________________________________________________________
//TODO 139. Sort the Gift Code
// function sortGiftCode(code){
// 	return [...code].sort().join("")
//   }

// _____________________________________________________________________________________________________________________________________
//TODO 140. Alphabetical Addition
// function addLetters(...letters) {
//   if (letters.length === 0) return "z";
//   let sum = letters.reduce((acc, char) => (acc += char.charCodeAt() - 96), 0);
//   let koff = sum > 26 ? Math.floor(sum / 26) : 1;
//   if (sum - 26 * koff === 0) return "z";
//   if (sum > 26) return String.fromCodePoint(sum - 26 * koff + 96);
//   return String.fromCodePoint(sum + 96);
// }
// ____________________________________________________
//* Лучшее Решение
// function addLetters(...letters) {
//     return String.fromCharCode((letters.reduce( (a,b) => a+b.charCodeAt(0)-96, 0)+25)%26+97);
// }
// _____________________________________________________________________________________________________________________________________
//TODO 141. Number of Decimal Digits
// function digits(n) {
// 	return  (n + "").length
//   }
// _____________________________________________________________________________________________________________________________________
//TODO 142. Averages of numbers
// function averages(numbers) {
// 	if (numbers === null || numbers.length < 2 ) return [];
// 	let result = [];
// 	for(let i = 0; i < numbers.length - 1; i++) {
// 	  result.push((numbers[i] + numbers[i + 1]) / 2)
// 	}
// 	return result
//   }
// _____________________________________________________________________________________________________________________________________
//TODO 143. All unique
// function hasUniqueChars(str){
//   const set = new Set(str);
//   return str.length === [...set].length
// }
// _____________________________________________________________________________________________________________________________________
//TODO 144.  Sum of Odd Cubed Numbers
// function cubeOdd(arr) {
//   if(arr.find((item) => typeof item !== "number") === undefined) {
//      return arr.map((item) => item**3).reduce((acc, num) => num%2 !== 0 ? acc +=num : acc, 0)
//     }
//   return undefined
// }
// ____________________________________________________
//* Лучшее Решение
// let cubeOdd = a => {
//   var isNumeric = a.every(x=>!isNaN(x))
//   return isNumeric ? a.filter(n=>n%2).reduce((s,n)=>s+(n*n*n),0) : undefined
// }
//_____________________________________________________________________________________________________________________________________
//TODO 145. Coding Meetup #3 - Higher-Order Functions Series - Is Ruby coming?
// function isRubyComing(list) {
// 	return list.some((item) => item.language === 'Ruby')
//   }
//_____________________________________________________________________________________________________________________________________
//TODO 146. Coding Meetup #2 - Higher-Order Functions Series - Greet developers
function greetDevelopers(list) {
  return list.map((item) => ({
    ...item,
    greeting: `Hi ${item.firstName}, what do you like the most about ${item.language}?`,
  }));
}
//_____________________________________________________________________________________________________________________________________
//TODO 147. Build a square
// function generateShape(integer) {
// 	return new Array(integer).fill("+".repeat(integer)).join("\n");
//   }
//_____________________________________________________________________________________________________________________________________
//TODO 148.Simple Fun #152: Invite More Women?
// function inviteMoreWomen(L) {
// 	return L.reduce((acc, item) => acc+=item, 0) > 0
//    }
//_____________________________________________________________________________________________________________________________________
//TODO 149. Automorphic Number (Special Numbers Series #6)
// function automorphic(n){
//   let result = n**2;
//      let str = result +''
//   return +str.slice(-String(n).length) === n ? "Automorphic" : 'Not!!'
//  }
//_____________________________________________________________________________________________________________________________________
//TODO 150. Leap Years
// let isLeapYear = (year) =>
//   year % 400 === 0 ? true : year % 100 === 0 ? false : year % 4 === 0;
// ____________________________________________________
//* Лучшее Решение
// function isLeapYear(year) {
//   return (year % 100 !== 0 && year % 4 === 0) || year % 400 === 0;
// }
//_____________________________________________________________________________________________________________________________________
//TODO 151. Simple remove duplicates
// function solve(arr) {
//   let uniqVal = [...new Set(arr)];
//   uniqVal.sort((a, b) => arr.lastIndexOf(a) - arr.lastIndexOf(b));
//   return uniqVal;
// }
// // ____________________________________________________
// //* Лучшее Решение
// function solve(arr){
//   return arr.filter((val,i) => arr.lastIndexOf(val) == i);
// }
//_____________________________________________________________________________________________________________________________________

//!   let arr1 = smallCharArr.filter(																						ВАЖНО
//!     (item, index) => smallCharArr.indexOf(item) === index
// ___________________________________________________
//!   [...new Set(A)]   a - array
