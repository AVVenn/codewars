// repeat && replace && charCodeAt() parseInt(4px) - второй аргумент система исчисления  parseFloat('12.5em')   str.endsWith('?')  .padStart          encodeURIComponent(user)
//TODO 1.   String repeat
// function repeatStr (number, string) {
// 	let arr = new Array(number);
// 	return arr.fill(string).join(``);
// }
// console.log(repeatStr(5,`Hello`));
// ___________________________________________________________________________________________________________
// function  repeatStr (number, string)  {
// 	let word = '';
// 	for (let i = 0; i <= number; i++) {
// 		word += string;
// 	}
// 	return word;
// }
// console.log(repeatStr(5,`Hello`));
//   _____________________________________________________________________________________________________ 
//  * ЛУЧШЕЕ РЕШЕНИЕ
// repeatStr = (n, s) => s.repeat(n)
// _____________________________________________________________________________________________________
//todo 2.  Find the Remainder
// function remainder(a, b){
// 	if (a > b && a === 0 ){
// 		return  NaN;
// 	} else if (b > a && b === 0 ) {
// 		return NaN;
// 	} 
// 	return (a > b) ? a % b : b % a;
// }
// console.log( remainder(6, -3) );
//return ((b % a ) + a ) % a;
//   _____________________________________________________________________________________________________ 
//  * ЛУЧШЕЕ РЕШЕНИЕ
// function remainder(a, b){
// 	let min = Math.min(a,b);
// 	let max = Math.max(a,b);
// 	return min ? max % min : NaN;
// }
// _____________________________________________________________________________________________________
//todo  3  For Twins: 2. Math operations
// function iceBrickVolume(radius, bottleLength, rimLength) {
// 	return 2*(radius**2)*(bottleLength - rimLength);    (длинна*ширина*высота)  Высоту нашли:(bottleLength - rimLength) ,  длинна это 2 радиуса, 
//  }
// _____________________________________________________________________________________________________
//todo  4 Convert a Boolean to a String
// function booleanToString(b){
// 	return b ? 'true' : 'false';
//   }
// _____________________________________________________________________________________________________
//todo  5  Basic variable assignment
// let a =  "code";
// let b ="wa.rs";
// let name = a + b;
// _____________________________________________________________________________________________________
//todo  6  Even or Odd
// let even_or_odd = number => number%2 === 0 ? 'Even' : 'Odd';
// console.log(even_or_odd(-1));
// _____________________________________________________________________________________________________
//todo  7  DNA to RNA Conversion
// function DNAtoRNA(dna) {
// 	return  dna.split(``).map( letter => letter === `T` ? letter = `U`: letter).join(``);
//  }
// console.log (DNAtoRNA(`TTTT`));
//*решить циклом;
// _____________________________________________________________________________________________________
//* ЛУЧШЕЕ РЕШЕНИЕ
// function DNAtoRNA(dna){
// 	return dna.replace(/T/g, 'U');
// }
// _____________________________________________________________________________________________________
//todo  8 Convert boolean values to strings 'Yes' or 'No'.
//   let boolToWord = bool => bool === true ?`Yes` :  `No`; 
//   console.log(boolToWord(true));
// _____________________________________________________________________________________________________
//todo  9 Convert a String to a Number!
// let stringToNumber = function(str){
// 	return +str;
// }
// _____________________________________________________________________________________________________
//todo 10  Reversed Strings
// function solution(str){
// 	return str.split(``).reverse().join(``);
//   }
// _____________________________________________________________________________________________________
//todo 11  What's the real floor?
// function getRealFloor(n) {
// 	if(n > 0 && n < 13) {
// 	  return n-1;
// 	} else if (n > 13) {
// 	  return n-2;
// 	} 
// 	return n;
//   }
// _____________________________________________________________________________________________________
//* ЛУЧШЕЕ РЕШЕНИЕ
// function getRealFloor(n) {
// 	return n > 13 ? n - 2 : n > 0 ? n - 1 : n;
//   }
// _____________________________________________________________________________________________________
//todo 12 //Subtract the sum
// let obj = {
// 	1:"kiwi",
// 	2:"pear",
// 	3:"kiwi",
// 	4:"banana",
// 	5:"melon",
// 	6:"banana",
// 	7:"melon",
// 	8:"pineapple",
// 	9:"apple",
// 	10:"pineapple",
// 	11:"cucumber",
// 	12:"pineapple",
// 	13:"cucumber",
// 	14:"orange",
// 	15:"grape",
// 	16:"orange",
// 	17:"grape",
// 	18:"apple",
// 	19:"grape",
// 	20:"cherry",
// 	21:"pear",
// 	22:"cherry",
// 	23:"pear",
// 	24:"kiwi",
// 	25:"banana",
// 	26:"kiwi",
// 	27:"apple",
// 	28:"melon",
// 	29:"banana",
// 	30:"melon",
// 	31:"pineapple",
// 	32:"melon",
// 	33:"pineapple",
// 	34:"cucumber",
// 	35:"orange",
// 	36:"apple",
// 	37:"orange",
// 	38:"grape",
// 	39:"orange",
// 	40:"grape",
// 	41:"cherry",
// 	42:"pear",
// 	43:"cherry",
// 	44:"pear",
// 	45:"apple",
// 	46:"pear",
// 	47:"kiwi",
// 	48:"banana",
// 	49:"kiwi",
// 	50:"banana",
// 	51:"melon",
// 	52:"pineapple",
// 	53:"melon",
// 	54:"apple",
// 	55:"cucumber",
// 	56:"pineapple",
// 	57:"cucumber",
// 	58:"orange",
// 	59:"cucumber",
// 	60:"orange",
// 	61:"grape",
// 	62:"cherry",
// 	63:"apple",
// 	64:"cherry",
// 	65:"pear",
// 	66:"cherry",
// 	67:"pear",
// 	68:"kiwi",
// 	69:"pear",
// 	70:"kiwi",
// 	71:"banana",
// 	72:"apple",
// 	73:"banana",
// 	74:"melon",
// 	75:"pineapple",
// 	76:"melon",
// 	77:"pineapple",
// 	78:"cucumber",
// 	79:"pineapple",
// 	80:"cucumber",
// 	81:"apple",
// 	82:"grape",
// 	83:"orange",
// 	84:"grape",
// 	85:"cherry",
// 	86:"grape",
// 	87:"cherry",
// 	88:"pear",
// 	89:"cherry",
// 	90:"apple",
// 	91:"kiwi",
// 	92:"banana",
// 	93:"kiwi",
// 	94:"banana",
// 	95:"melon",
// 	96:"banana",
// 	97:"melon",
// 	98:"pineapple",
// 	99:"apple",
// 	100:"pineapple"
// }
// function SubtractSum(n){
// 	n -= [...(n+'')].map((str) => str = +str).reduce((acc,num) => acc+= num);
// 	if (n<100){
// 	  return obj[n];
// 	}
// 	return SubtractSum(n);
//   }
//   console.log(SubtractSum(325));
// _____________________________________________________________________________________________________
//todo 13 ASCII Total
// function uniTotal (str) {
// 	return [...str].reduce( (acc, item)=> acc += item.codePointAt(),0);   //* charCodeAt()
//  }
//   console.log(uniTotal(`aaa`));
// _____________________________________________________________________________________________________
//todo 14 Correct the mistakes of the character recognition software
// function correct(string){
// 	return [...string].map( (char) => +char === 5 
//                               ? char = `S`
//                               : char.charCodeAt() === 48  						//* супер выкрутился
//                               ? char = `O`
//                               : +char === 1 
//                               ? char = `I`
//                               : char
//   ).join(``);
// }
// console.log(correct(`50me pe0ple th1nk ab0ut y0u`));
// _____________________________________________________________________________________________________
//* лУЧШЕЕ РЕШЕНИЕ
// correct = s => s.replace(/0/g,'O').replace(/1/g,'I').replace(/5/g,'S')
// _____________________________________________________________________________________________________
// //todo 15 Kids drink toddy.
// function peopleWithAgeDrink(old) {
// 	if (old < 14) {
// 	  return 'drink toddy';
// 	} else if ( old < 18) {
// 	  return 'drink coke';
// 	} else if (old < 21) {
// 	  return 'drink beer';
// 	}
// 	return `drink whisky`;
//   };
// _____________________________________________________________________________________________________
// //* лУЧШЕЕ РЕШЕНИЕ
// const peopleWithAgeDrink = (age) =>
//   age < 14 ? "drink toddy" :
//   age < 18 ? "drink coke" :
//   age < 21 ? "drink beer" : "drink whisky"
// _____________________________________________________________________________________________________
// todo 16 Switch it Up!
// function switchItUp(number){
// 	switch(number) {
// 	  case 0:
// 		return 'Zero';
// 	  case 1:
// 		return 'One';
// 	  case 2:
// 		return 'Two';
// 	  case 3:
// 		return 'Three';
// 	  case 4:
// 		return  'Four';
// 	  case 5:
// 		return 'Five';
// 	  case 6:
// 		return 'Six';
// 	  case 7:
// 		return 'Seven';
// 	  case 8:
// 		return 'Eight';
// 	  case 9:
// 		return 'Nine';
// 	  default:
// 		return 'Unknown number';
// 	}
//   }
//   console.log(switchItUp(2))
// _____________________________________________________________________________________________________
// todo 17 Transportation on vacation
// function rentalCarCost(d) {
// 	return d >= 7 ? 40 * d - 50 : d >= 3 ? 40 * d - 20 : d*40;
//   }
//   console.log(rentalCarCost(7));
// _____________________________________________________________________________________________________
// //* лУЧШЕЕ РЕШЕНИЕ
//   const rentalCarCost = d => d * 40 - ((d > 6) ? 50 : ((d > 2) ? 20 : 0));
// _____________________________________________________________________________________________________
// todo 18 Transportation on vacation
// function getAge(inputString){
// 	return parseInt(inputString);
// }
// console.log (getAge(`4px`));
// _____________________________________________________________________________________________________
// todo 19  Can we divide it?
// function isDivideBy(number, a, b) {
// 	return number % a === 0 && number % b === 0 ? true : false; 
//   }
//   console.log(isDivideBy(45, -5, 9));
// _____________________________________________________________________________________________________
// //* лУЧШЕЕ РЕШЕНИЕ
// const isDivideBy = (number, a, b) => number % a === 0 && number % b === 0;
// _____________________________________________________________________________________________________
// todo 20  Calculate BMI
// function bmi(weight, height) {
// 	let bmi = weight/height**2;
// 	return bmi <= 18.5 ? 'Underweight'
// 		:  bmi <= 25.0 ?  'Normal'
// 		:  bmi <= 30.0 ?  'Overweight' : 'Obese';
//   }
// _____________________________________________________________________________________________________
// todo 21 Century From Year
// function century(year) {
// 	let str = year+'';
// 	let TwoLastNumber= +(str.slice(str.length-2));
// 	console.log(TwoLastNumber);
// 	return TwoLastNumber === 0 ? Math.trunc(year/100) : Math.trunc(year/100) + 1;
// }
// console.log(century(1900));
// _____________________________________________________________________________________________________
// //* лУЧШЕЕ РЕШЕНИЕ
// const century = year => Math.ceil(year/100)   -  Math.ceil - окргление в большую сторону;
// _____________________________________________________________________________________________________
// todo 22 Convert a Number to a String!
// function numberToString(num) {
// 	return String(num);
//   }
//   _____________________________________________________________________________________________________
// function numberToString(num) {
// 	return num.toString();
//   }
//   _____________________________________________________________________________________________________
// todo 23 Beginner Series #4 Cockroach
// function cockroachSpeed(s) {
// 	return Math.trunc(s*27.7777778);
// }
//   _____________________________________________________________________________________________________
// todo 24 Third Angle of a Triangle
// function otherAngle(a, b) {
// 	return 180-a-b;
//   }
//   _____________________________________________________________________________________________________
// todo 25 Twice as old
// function twiceAsOld(dadYearsOld, sonYearsOld) {
// 	let differenceOld = dadYearsOld - sonYearsOld; 
// 	sonYearsOld = 0;
// 	for (;;) {
// 		if (differenceOld/sonYearsOld === 2) {
// 			return Math.abs(dadYearsOld-differenceOld);
// 		} 
// 		differenceOld++;
// 		sonYearsOld++;
// 	} 
// }
// console.log(twiceAsOld(55, 30));
// _____________________________________________________________________________________________________
// //* лУЧШЕЕ РЕШЕНИЕ
// function twiceAsOld(dadYearsOld, sonYearsOld) {
// return Math.abs(dadYearsOld - 2 * sonYearsOld);
//   }
// _____________________________________________________________________________________________________
// todo 26 Volume of a Cuboid
//   class Kata {
// 	static getVolumeOfCuboid(length, width, height) {
// 	  return length*width*height;
// 	}
//   }
// console.log (Kata.getVolumeOfCuboid(6.3, 2, 5));
// _____________________________________________________________________________________________________
// todo 27 Get Nth Even Number
// function nthEven(n){
// 	return 2*(n-1);
//   }
// _____________________________________________________________________________________________________
//! todo 28 Beginner Series #2 Clock
// Clock shows h hours, m minutes and s seconds after midnight.
// Your task is to write a function which returns the time since midnight in milliseconds.
// Example:
// h = 0
// m = 1
// s = 1
// result = 61000
// Input constraints:
// 0 <= h <= 23
// 0 <= m <= 59
// 0 <= s <= 59
// _____________________________________________________________________________________________________
// todo 29  Simple multiplication
// function simpleMultiplication(number) {
//     return number % 2 === 0 ? number * 8 : number * 9;
// }
// _____________________________________________________________________________________________________
// todo 30  Area or Perimeter
// const areaOrPerimeter = function(l , w) {
//   return l === w ? l*w : 2*(l+w);
// };
// _____________________________________________________________________________________________________
// todo 31 Grasshopper - Messi goals function
// function goals (laLigaGoals, copaDelReyGoals, championsLeagueGoals) {
// 	return laLigaGoals + copaDelReyGoals + championsLeagueGoals;
// }
// _____________________________________________________________________________________________________
// todo 32 Is n divisible by x and y?
// function isDivisible(n, x, y) {
// 	return n % x === 0 && n % y === 0
//   }
// _____________________________________________________________________________________________________
// todo 33 You Can't Code Under Pressure #1
// function doubleInteger(i) {
// 	return 2*i;
//   }
// _____________________________________________________________________________________________________
// todo 34 Function 3 - multiplying two numbers
// function multiply (n,m) {
// 	return n*m;
//   }
// _____________________________________________________________________________________________________
// todo 35 Return Negative
// function makeNegative(num) {
// 	return num > 0 ? -num : num;
//   }
// _____________________________________________________________________________________________________
// //*Лучшее решение
// function makeNegative(num) {
// 	return -Math.abs(num);
//   }
// _____________________________________________________________________________________________________
// todo 36  Beginner Series #1 School Paperwork
// function paperwork(n, m) {
//   return n <= 0 || m <= 0 ? 0 : n*m;
// }
// _____________________________________________________________________________________________________
// todo 37  Grasshopper - Variable Assignment Debug
// let a = "dev"
// let b = "Lab"
// let name = a + b;
// _____________________________________________________________________________________________________
// todo 38 Grasshopper - Basic Function Fixer
// function addFive(num) {
//   let total = num + 5;
//   return total;
// }
// _____________________________________________________________________________________________________
// todo 39 Grasshopper - Terminal game move function
// function move (position, roll) {
//   return position+roll*2;
// }
// _____________________________________________________________________________________________________
// todo 40  Expressions Matter
// function expressionMatter(a, b, c) {
//   return Math.max( a + b + c, a * b * c, (a * b) + c, (a + b) * c, a + (b * c), a * (b + c));
// }
// _____________________________________________________________________________________________________
// todo 41 Opposite number
// function opposite(number) {
//   return -(number);
// }
// _____________________________________________________________________________________________________
// todo 42 Opposites Attract
// function lovefunc(flower1, flower2){
//   return flower1 % 2 === 0 && flower2 % 2 !== 0 
//           || flower1 % 2 !== 0 && flower2 % 2 === 0 ? true : false; 
// }
// _____________________________________________________________________________________________________
// //*Лучшее решение
// function lovefunc(flower1, flower2){
//   return flower1 % 2 !== flower2 % 2;
// }
// _____________________________________________________________________________________________________
// todo 43 Keep Hydrated
// function litres(time) {
//   return Math.floor(time*0.5);
// }
// _____________________________________________________________________________________________________
// todo 44 Function 2 - squaring an argument
// let square = number => number**2;
// _____________________________________________________________________________________________________
// todo 45  Function 1 - hello world
// let greet = () => `hello world!`;
// todo 46  Grasshopper - Summation
// let summation = function (num) {
//   let sum = 0;
//   for (let i = 1; i <= num; i++){
//     sum += i; 
//   }
//   return sum;
// }
// _____________________________________________________________________________________________________
//* Лучшее решение
// const summation = n => n * (n + 1) / 2;
// _____________________________________________________________________________________________________
// todo 47 What is between?
// function between(a, b) {
//   let arr = [];
//   for(let i = a; i <= b ;i++){
//     arr.push(i);
//   }
//   return arr;
// }
// _____________________________________________________________________________________________________
//* Лучшее решение
// const between = (a, b) => Array.from(new Array(b-a+1), (_, i) => a + i);
// _____________________________________________________________________________________________________
// todo 48  Lario and Muigi Pipe Problem
// function pipeFix(numbers){
//   let arr = [];
//   for (let i = numbers[0]; i <= numbers[numbers.length-1]; i++){
//     arr.push(i);
//   }
//   return arr;
//  }
// _____________________________________________________________________________________________________
//* Лучшее решение
// let pipeFix = nums => Array.from({ length: nums.pop() - nums[0] + 1 }, (v, i) => i + nums[0]);
// todo 49 Squash the bugs
// №1
// function findLongest(str) {
//   let arr = str.split(" ");
//   let long = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i].length > long) {
//       long = arr[i].length;
//     }
//   }
//     return long;
// }
// _____________________________________________________________________________________________________
// №2
// let findLongest = str => str.split(` `).reduce((acc, item) => {
//   if(item.length > acc){
//     acc = item.length;
//   }
//   return acc;
// }, 0);
// console.log(findLongest("The quick white fox jumped around the massive dog"));
// _____________________________________________________________________________________________________
//* Лучшее решение
// const findLongest = str =>
//   Math.max(...str.split(` `).map(val => val.length));
// _____________________________________________________________________________________________________
// todo 50  Keep up the hoop
// function hoopCount (n) {
//   return n > 9 ?  "Great, now move on to tricks" : "Keep at it until you get it";
// }
// _____________________________________________________________________________________________________
// todo 51  Difference of Volumes of Cuboids
// let findDifference = (a,b) => Math.abs( a.reduce((acc, number) => acc *= number) - b.reduce((acc, number) => acc *= number));
// _____________________________________________________________________________________________________
// todo 52 Calculate average
// function find_average(array) {
//   if (array.length === 0) {
//     return 0;
//   }
//   let sum = array.length > 0 ?array.reduce((acc, number) => acc += number) : 0;
//   return sum/array.length;
// };
// _____________________________________________________________________________________________________
// todo 53 Will you make it?
// const zeroFuel = (distanceToPump, mpg, fuelLeft) => mpg*fuelLeft >= distanceToPump;
// _____________________________________________________________________________________________________
// todo 54 Sum The Strings
// function sumStr(a,b) {
//   return (+a + +b)+''  
// }
// _____________________________________________________________________________________________________
// todo 55 Remove First and Last Character
// function removeChar(str){
//   return str.slice(1,-1);
//  };
// _____________________________________________________________________________________________________
// todo 56 Double Char
// function doubleChar(str) {
//   return [...str].map((char) => char = char.repeat(2)).join(``);
// }
// console.log(doubleChar(`string`));
// _____________________________________________________________________________________________________
// todo 57 Find the smallest integer in the array
// class SmallestIntegerFinder {
//   findSmallestInt(args) {
//     return Math.min(...args);
//   }
// }
// _____________________________________________________________________________________________________
// todo 58 greeting statement
// function greet(name){
//   return `Hello, ${name} how are you doing today?`
// }
// _____________________________________________________________________________________________________
//! todo 59  Area of a Square
// function squareArea(A){
//   let square = (( 4 * A ) / ( 2 * Math.PI))**2;
//   return Number(square.toFixed(2));
// }
// console.log(squareArea(2));
// _____________________________________________________________________________________________________
// function squareArea(A){
//   // Calculate the circumference of A 
//   const circumference = A * 4;
//   // Calculate the radius of A
//   const radius = circumference / (Math.PI * 2);
//   // Calculate the area of the square, rounded to 2 decimal places
//   const area = Number((radius**2).toFixed(2));
//   // Return the result
//   return area;
// }
// _____________________________________________________________________________________________________
// todo 60 USD => CNY
// function usdcny(usd) {
//   return `${(usd*6.75).toFixed(2)} Chinese Yuan`;
// }
// console.log(usdcny(2));
// _____________________________________________________________________________________________________
// todo 61 Thinkful - Logic Drills: Traffic light
// function updateLight(current) {
//   return current === 'green' ? 'yellow' : current === 'yellow' ? 'red' : "green"; 
// }
// _____________________________________________________________________________________________________
// todo 62 Reversed sequence
// const reverseSeq = n => {
//   let arr = [];
//   for(let i = n; i >= 1; i--){
//     arr.push(i);
//   }
//   return arr
// };
// _____________________________________________________________________________________________________
// todo 63 Reversed Words
// function reverseWords(str){
//   return str.split(` `).reverse().join(` `);
// }
// _____________________________________________________________________________________________________
// todo 64 Reverse List Order
// function reverseList(list) {
//   return list.reverse();
// }
// _____________________________________________________________________________________________________
// todo 65  Is it even?
// function testEven(n) {
//   return n % 2 === 0 && Math.trunc(n) === n;
// }
// _____________________________________________________________________________________________________
// * Лучшее решение
// function testEven(n) {
//   return n%2===0;
// }
// _____________________________________________________________________________________________________
// todo 66  Is it even?
// let laLigaGoals = 43;
// let championsLeagueGoals = 10;
// let copaDelReyGoals = 5;
// let totalGoals =  laLigaGoals + championsLeagueGoals + copaDelReyGoals;
// console.log(totalGoals());
// _____________________________________________________________________________________________________
// todo 67 Find Maximum and Minimum Values of a List
// var min = function(list){
//   return Math.min(...list);
// }
// var max = function(list){
//   return Math.max(...list);
// }
// _____________________________________________________________________________________________________
// todo 68 Remove exclamation marks
// function removeExclamationMarks(s) {
//   return [...s].filter((char) => char !== `!`).join(``);
// }
// _____________________________________________________________________________________________________
//*Лучшие решения:
// function removeExclamationMarks(s) {
//   return s.replace(/!/gi, '');
// }
// _____________________________________________________________________________________________________
// function removeExclamationMarks(s) {
//   return s.split('!').join('');
// }
// _____________________________________________________________________________________________________
// todo 69 Grasshopper - Personalized Message
// function greet (name, owner) {
//   return name === owner ? 	'Hello boss': 'Hello guest';
// }
// _____________________________________________________________________________________________________
// todo 70 Basic Mathematical Operations
// function basicOp(operation, value1, value2){
//   return operation === '+' ? value1+value2 : 
//   operation === '-' ? value1-value2 :
//   operation === '*' ? value1*value2 : value1/value2;
// }
// _____________________________________________________________________________________________________
//*Лучшие решениe:
// function basicOp(operation, value1, value2) {
//   switch (operation) {
//       case '+':
//           return value1 + value2;
//       case '-':
//           return value1 - value2;
//       case '*':
//           return value1 * value2;
//       case '/':
//           return value1 / value2;
//       default:
//           return 0;
//   }
// }
// _____________________________________________________________________________________________________________
// function basicOp(o, a, b) {
//   return eval(a+o+b);
// }
// _____________________________________________________________________________________________________
//todo  71 Return Two Highest Values in List
// function twoHighest(arr) {
//   if (arr.length === 0) {
//     return [];
//   }
//   let arrSort = arr.sort((a,b) => a - b).reverse();
//   let arrSortFilter =  arrSort.filter((number, index) => arrSort.indexOf(number) === index);
//   return arrSortFilter.length > 1 ? arrSortFilter.slice(0,2) : [arrSortFilter[0]];
// }
// console.log(twoHighest([]));
// _____________________________________________________________________________________________________
// //* Лучшее решение
// function twoHighest(arr) {
//   return [...new Set(arr)].sort((a, b) => b - a).slice(0, 2)
// }
// _____________________________________________________________________________________________________
// const twoHighest = a => a
//   .filter((e, i) => i === a.lastIndexOf(e))
//   .sort((x, y) => y - x)
//   .slice(0, 2);
// _____________________________________________________________________________________________________
// todo 72  Invert values
// function invert(array) {
//   return array.map((number) => number = -number);
// }
// _____________________________________________________________________________________________________
// todo 73 Will there be enough space?
// function enough(cap, on, wait) {
//   return wait <= cap-on ? 0 : Math.abs(cap-on-wait);
// }
// _____________________________________________________________________________________________________
//* Лучшее решение
// function enough(cap, on, wait) {
//   return Math.max(wait + on - cap, 0);
// }
// _____________________________________________________________________________________________________
// todo 74 How good are you really?
// function betterThanAverage(classPoints, yourPoints) {
//   return [...classPoints].reduce((acc, nbr) => acc += nbr)/classPoints.length < [...classPoints, yourPoints].reduce((acc, nbr) => acc += nbr)/[...classPoints, yourPoints].length
// }
// _____________________________________________________________________________________________________
//* Лучшее решение
// function betterThanAverage(classPoints, yourPoints) {
//   return yourPoints > classPoints.reduce((a, b) => a + b, 0) / classPoints.length; 
// }
// _____________________________________________________________________________________________________
// todo 74  Are You Playing Banjo?
// function areYouPlayingBanjo(name) {
//   return name[0].toLowerCase() === `r` ? `${name} plays banjo` : `${name} does not play banjo`
// }
// _____________________________________________________________________________________________________
// todo 75 Kata Example Twist
// let websites = new Array(1000).fill('codewars');
// _____________________________________________________________________________________________________ 10/12
// todo 76   My head is at the wrong end!
// function fixTheMeerkat(arr) {
//   return arr.reverse();
// }
// _____________________________________________________________________________________________________
// todo 77   Get the mean of an array
// function getAverage(marks){
//   return Math.trunc((marks.reduce((acc, number) => acc +=number))/marks.length);
// }
// _____________________________________________________________________________________________________
// todo 78 Is it a palindrome?
// function isPalindrome(x) {
//   return [...x].reverse().join('') === x;
// }
// function isPalindrome(x) {
//   return [...x].reverse().join('').toLowerCase() === x.toLowerCase();
// }
// _____________________________________________________________________________________________________
// todo 79 Hex to Decimal
// function hexToDec(hexString){
//   return parseInt(hexString, 16);
// }
// _____________________________________________________________________________________________________
// todo 80 Freudian translator
// function toFreud(string) {
//   return string === "" ? "" : string.split(` `).map ((word) => word = `sex`).join(' ');
// }
// _____________________________________________________________________________________________________
//* Лучшее решение
// var toFreud=s=>s.replace(/[^ ]+/g,'sex');
// let toFreud = s => s.replace(/\w+/g, 'sex');
// function toFreud(string) {
//   return string.replace(/\S+/g, 'sex');
// }
// _____________________________________________________________________________________________________
// todo 81 Multiplication table for number
// function multiTable(number) {
//   let str = ``;
//   for (let i = 1; i < 11; i++) {
//     str += `${i} * ${number} = ${i*number}\n`
//   }
//   return str.trim();
// } 
// console.log(multiTable(5));
// _____________________________________________________________________________________________________
// todo 82 Enumerable Magic #25 - Take the First N Elements
// function take(arr, n) {
//   return arr.slice(0, n);
// }
// _____________________________________________________________________________________________________
// todo 83 Define a card suit
// function defineSuit(card) {
//   return card.includes(`♣`) ? `clubs` : card.includes(`♦`) 
//     ? 'diamonds' : card.includes(`♥`) 
//     ? 'hearts' :'spades';
// }
// _____________________________________________________________________________________________________
//* Лучшее решение
// function defineSuit(card) {
//   const s = {
//     "♣": "clubs",
//     "♠": "spades",
//     "♦": "diamonds",
//     "♥": "hearts"
//   }
//   return s[card.charAt(card.length - 1)]
// }
// _____________________________________________________________________________________________________
// todo 84  Grasshopper - Debug sayHello
// function sayHello(name) {
//   return `Hello, ${name}`
// }
// _____________________________________________________________________________________________________
// todo 85 How old will I be in 2099?
// function calculateAge(yearBorn, expectedYear) {
//   if(yearBorn === expectedYear){
//     return "You were born this very year!";
//   } else if (expectedYear - yearBorn < 0 && Math.abs(expectedYear - yearBorn) > 1) {
//     return `You will be born in ${Math.abs(expectedYear - yearBorn)} years.`;
//   } else if (expectedYear - yearBorn < 0 && Math.abs(expectedYear - yearBorn) === 1 ) {
//     return "You will be born in 1 year.";
//   } else if (expectedYear - yearBorn > 0 && expectedYear - yearBorn === 1) {
//     return "You are 1 year old.";
//   } else if (expectedYear - yearBorn > 0 && expectedYear - yearBorn > 1) {
//     return `You are ${expectedYear - yearBorn} years old.`;
//   }
// };
// _____________________________________________________________________________________________________
// todo 86 Remove duplicates from list
// function distinct(a) {
//   return a.filter((number, index) => a.indexOf(number) === index);
// }
// _____________________________________________________________________________________________________
//* Лучшее решение 
// function distinct(a) {
//   return [...new Set(a)];
// }
// _____________________________________________________________________________________________________
// todo 87 Hello, Name or World!
// function hello(name) {
//   return name !== undefined && name !=="" ? `Hello, ${name[0].toUpperCase() + name.slice(1).toLowerCase()}!` : "Hello, World!";
// }
// console.log(hello(`anddr`));
// _____________________________________________________________________________________________________
//* Лучшее решение 
// const hello = s =>
//   `Hello, ${s ? (s[0].toUpperCase() + s.slice(1).toLowerCase()) : 'World'}!`;
// _____________________________________________________________________________________________________
// todo 88 Name on billboard
// function billboard(name, price = 30){
//   return [...name].map( (char) => char = price).reduce((acc, num) => acc += num);
// } 
// _____________________________________________________________________________________________________
// todo 89  All Star Code Challenge #18
// function strCount(str, letter){  
//   return ([...str].filter((char) => char === letter)).length
// }
// _____________________________________________________________________________________________________
// //* Лучшее решение
// function strCount(str, letter){  
//   return str.split(letter).length-1
// }
// _____________________________________________________________________________________________________
// todo 90 Short Long Short
// function solution(a, b){
//   return a.length > b.length ? b+a+b : a+b+a;
// } 
// _____________________________________________________________________________________________________
//todo  91 MakeUpperCase
// function makeUpperCase(str) {
//   return str.toUpperCase();
// }
// _____________________________________________________________________________________________________
//todo  92 Sort and Star
// function twoSort(s) {
//   return [...s.sort()[0]].join(`***`);
// }
// _____________________________________________________________________________________________________
//todo  93 Find Multiples of a Number
// function findMultiples(integer, limit) {
//   let arr = [];
//   for (let i = integer; i <= limit; i+=integer) {
//     arr.push(i);
//   }
//   return arr;
// }
// console.log(findMultiples(5, 7));
// _____________________________________________________________________________________________________
//todo  94 Ensure question
// function ensureQuestion(s) {
//   return s[s.length-1] === `?` ? s : s+`?`
// }
// _____________________________________________________________________________________________________
// //* Лучшее решение
// const ensureQuestion = s => s.endsWith('?') ? s : s+'?'
// _____________________________________________________________________________________________________
//todo  95 Jenny's secret message
// function greet(name){
//   if(name === "Johnny")
//     return "Hello, my love!";
//   return "Hello, " + name + "!";
// }
// _____________________________________________________________________________________________________
//todo  96  Grasshopper - Function syntax debugging
// function main (verb, noun) {
//   return verb + noun;
// }
// _____________________________________________________________________________________________________
//todo  97 The Feast of Many Beasts
// function feast(beast, dish) {
//   return beast[0] === dish[0] && beast[beast.length - 1] === dish[dish.length -1];
// }
// _____________________________________________________________________________________________________
//todo  98 altERnaTIng cAsE <=> ALTerNAtiNG CaSe - test не работает
// String.prototype.toAlternatingCase = function () {
//   return this.split("").map(char => char === char.toUpperCase() ? char.toLowerCase() : char.toUpperCase()).join('')
// }
// #2
// String.prototype.toAlternatingCase = function () {
//   let arr = [65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90];
//   return [...this].map((char) => arr.includes(char.codePointAt(0)) ? char.toLowerCase() : char.toUpperCase()).join(``); 
// }
// _____________________________________________________________________________________________________
//todo  99  Exclamation marks series #2: Remove all exclamation marks from the end of sentence
// function remove(s){
//   if(!s.endsWith(`!`)){
//     return s   
// } 
//   s = s.slice(0, s.length-1);
//   return remove(s);
// }
// _____________________________________________________________________________________________________
// //* Лучшее решение
// const remove = s => s.replace(/!+$/, '');
// _____________________________________________________________________________________________________
//todo  100 Fundamentals: Return
// function add(a,b){
//   return a+b;
// }
// function divide(a,b){
//   return a/b;
// }
// function multiply(a,b){
//   return a*b;
// }
// function mod(a,b){
//   return a%b;
// }
// function exponent(a,b){
//   return Math.pow(a, b);
// }
// function subt(a,b){
//   return a-b;
// }
// _____________________________________________________________________________________________________
//todo  101 Compare within margin 
// function closeCompare(a, b, margin = 0){
//   return Math.abs(a - b) <= margin || a - b === 0 ? 0 : a - b > 0 ?  1 : -1;
// }
// _____________________________________________________________________________________________________
// //* Лучшее решение
// function closeCompare(a, b, m = 0){
//   return Math.abs(a - b) <= m? 0: Math.sign(a - b);
// }
// _____________________________________________________________________________________________________
//todo  102  Count of positives / sum of negatives
// function countPositivesSumNegatives(input) {
//   if(input === null || input.length === 0 ) {
//     return [];
//   }
//   let positive = input.reduce ((acc, num) => num > 0 ? acc = ++acc : acc, 0);
//   let negative = input.reduce ((acc, number) => number < 0 ? acc += number: acc, 0); 
//   let arr = [positive, negative];
//   return arr;
// }
// console.log(countPositivesSumNegatives([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]));
// _____________________________________________________________________________________________________
//todo  102 Alan Partridge II - Apple Turnover
// function apple(x){
//   return x**2 > 1000 ? 'It\'s hotter than the sun!!' : 'Help yourself to a honeycomb Yorkie for the glovebox.';
//  }
// _____________________________________________________________________________________________________
//todo  103 Generate range of integers
// function generateRange(min, max, step){
//   let arr = [];
//   for(let i = min;i<=max; i+=step){
//       arr.push(i);
//   }
//   return arr;
// }
// _____________________________________________________________________________________________________
//todo  104 Count the number of cubes with paint on
// const quarterOf = (month) => month < 4 ? 1 : month < 7 ? 2 : month < 10 ? 3 : 4;
// _____________________________________________________________________________________________________
// //* Лучшее решение
// const quarterOf = m => Math.ceil(m/3);
// _____________________________________________________________________________________________________
//todo  105 Multiple of index
// function multipleOfIndex(array) {
//   return array.filter((number,index) => number%index === 0 );
// }
// _____________________________________________________________________________________________________
//todo  106 Name Shuffler
// function nameShuffler(str){
//   return str.split(` `).reverse().join(` `);
// }
// _____________________________________________________________________________________________________
//todo  107  Remove String Spaces
// function noSpace(x){
//   return x.replace(/\s/g , "");
// }
// _____________________________________________________________________________________________________
//todo  108  Well of Ideas - Easy Version
// function well(x){
//   return x.filter((item) => item === 'good').length > 2 ? 'I smell a series!'
//    : x.filter((item) => item === 'good').length > 0 ? 'Publish!' 
//    : 'Fail!'
// }
// _____________________________________________________________________________________________________
//todo  109 Sum Mixed Array
// function sumMix(x){
//   return x.reduce((acc, item) => acc +=(parseInt(item)),0);
// }
// _____________________________________________________________________________________________________
//todo  110  Holiday VIII - Duty Free
// function dutyFree(normPrice, discount, hol){
//   return Math.floor(hol/(normPrice*(discount/100)));
// }
// _____________________________________________________________________________________________________
//todo  111 Fake Binary
// function fakeBin(x){
//   return [...x].map((item) => +item < 5 ? `0` : `1`).join(``);
// }
// _____________________________________________________________________________________________________
//todo  112 The Wide-Mouthed frog!
// function mouthSize(animal) {
//   return animal.toLowerCase() === `alligator` ? `small` : `wide`;
// }
// console.log(mouthSize(`alligator`));
// _____________________________________________________________________________________________________
//todo  113 FIXME: Replace all dots
// var replaceDots = function(str) {
//   return str.replace(/\./g, '-');
// }
// _____________________________________________________________________________________________________
//todo  114 Square(n) Sum
// function squareSum(numbers){
//   return numbers.reduce((acc, item) => acc+=item**2,0);
// }
// _____________________________________________________________________________________________________
//todo  115  Count by X
// function countBy(x, n) {
//   let z = [];
//   for (let i = x; i <= n*x; i += x) {
//     z.push(i);
//   }
//   return z;
// }
// _____________________________________________________________________________________________________
//todo  116 Gravity Flip
// const flip = (d, a) => d === 'R' ? a.sort((a, b) => a - b) : a.sort((a,b) => b - a) ; 
// _____________________________________________________________________________________________________
//todo  117 Cat years, Dog years
// let humanYearsCatYearsDogYears = function(humanYears) {
//   let catYears = humanYears === 1 ? 15 : humanYears === 2 ? 24 : 24+((humanYears-2)*4);
//   let dogYears = humanYears === 1 ? 15 : humanYears === 2 ? 24 : 24+((humanYears-2)*5);
//   let arr = [humanYears];
//   arr.push(catYears, dogYears);
//   return arr;
// }
// console.log(humanYearsCatYearsDogYears(2));
// _____________________________________________________________________________________________________
// //* Лучшее решение
// var humanYearsCatYearsDogYears = function(y) {
//   if (y == 1) return [1, 15, 15]
//   if (y == 2) return [2, 24, 24]
//   return [y, (y-2) * 4 + 24, (y-2) * 5 + 24]
// }
// _____________________________________________________________________________________________________
//todo  118  Grasshopper - If/else syntax debug
// function checkAlive (health) {
//   if (health <= 0) {
//     return false;
//   }
//     return true;
// }
// _____________________________________________________________________________________________________
//todo  119 Powers of 2
// function powersOfTwo(n){
//   let arr = [];
//   for(let i = 0; i <= n; i++){
//     arr.push(2**i);
//   }
//   return arr;
// }
// _____________________________________________________________________________________________________
//todo  120 How many lightsabers do you own?
// function howManyLightsabersDoYouOwn(name) {
//   return name === `Zach` ? 18 : 0;
//  }
// _____________________________________________________________________________________________________
//todo  121 Geometry Basics: Distance between points in 2D
// function distanceBetweenPoints(a, b) {
//   return Math.sqrt((a.x-b.x)**2+(a.y-b.y)**2);
// }
// _____________________________________________________________________________________________________
// //* Лучшее решение
// function distanceBetweenPoints(a, b) {
//   return Math.hypot(a.x - b.x, a.y - b.y);
// }
// _____________________________________________________________________________________________________
//todo  122 Do you speak "English"?
// function spEng(sentence){
//   return sentence.toLowerCase().includes(`english`);
// }
// _____________________________________________________________________________________________________
// //* Лучшее решение
// function spEng(s){
//   return /english/i.test(s)
// }
// _____________________________________________________________________________________________________
//todo  123 pick a set of first elements
// function first(arr, n=1) {
//   return arr.slice(0,n);
//  }
// _____________________________________________________________________________________________________
//todo  124  Pre-FizzBuzz Workout #1
// function preFizz(n) {
//   let arr = [];
//   for (let i = 1; i <= n ; i++ ){
//     arr.push(i);
//   }
//   return arr;
// }
// _____________________________________________________________________________________________________
//! //* Лучшее решение 
// const preFizz = n => Array.from({length: n}, (_, i) => i + 1)
// _____________________________________________________________________________________________________
//todo  125 Price of Mangoes
// function mango(quantity, price){
//   return (quantity- Math.floor(quantity/3))*price;
// }
// _____________________________________________________________________________________________________
//todo  126 Swap Values
// function swapValues(arr) {
//   let temp = arr[0];
//   arr[0] = arr[1];
//   arr[1] = temp;
//   return arr;
// }
// console.log(swapValues([1,2]));
// _____________________________________________________________________________________________________
//todo  127 Miles per gallon to kilometers per liter
// function converter (mpg) {
//   return +(mpg * 1.609344 / 4.54609188).toFixed(2);
// }
// _____________________________________________________________________________________________________
//todo  128 Template Strings
// let TempleStrings = function(obj, feature) {
//   return  `${obj} are ${feature}`;
// }
// _____________________________________________________________________________________________________
//!  129 Logical calculator
// function logicalCalc(array, op){
//   if(array.includes(`False`) && op === `AND`){
//     return false;
//   } else if (!array.includes(`False`) && op === `AND`){
//     return true;
//   } else if (array.includes(`True`) && op === `OR`) {
//     return true;
//   } else if (!array.includes(`True`) && op === `OR`) {
//     return false;
//   } else if (array.every((bool) => bool === true), op === `XOR`) {
//     return false;
//   }  else if (array.every((bool) => bool === false), op === `XOR`) {
//     return false;
//   } else {
//     return true;
//   };
// _____________________________________________________________________________________________________
//todo  130 101 Dalmatians - squash the bugs, not the dogs!
// function howManyDalmatians (number) {
//   let dogs  = ["Hardly any", "More than a handful!", "Woah that's a lot of dogs!", "101 DALMATIANS!!!"] 
//   let respond = number <= 10 ? dogs[0] : number <= 50 ? dogs[1] : number === 101 ? dogs[3] : dogs[2];
//   return respond;
// }
// _____________________________________________________________________________________________________
//todo  131 Is this my tail?
// function correctTail(body, tail) {
//   if (tail[0] === body[body.length-1]){
//     return true;
//   }
//     return false;
// }
// _____________________________________________________________________________________________________
//todo  132 Find numbers which are divisible by given number
// function divisibleBy(numbers, divisor){
//   return numbers.filter((item) => item%divisor === 0);
// }
// _____________________________________________________________________________________________________
//todo  133 !!!!!!!!!!!!!!!!!!!!!!!! check best solution
// function mergeArrays(arr1, arr2) {
//   return [...arr1,...arr2].filter((num, index) => [...arr1,...arr2].indexOf(num) === index).sort((a, b) => a - b);
// }
// _____________________________________________________________________________________________________
//todo  134 Stringy Strings
// function stringy(size) {
//   let arr = [];
//   for (let i = 0 ; i < size; i++) {
//     i%2 === 0 ? arr.push(1) : arr.push(0);
//   }
//   return arr.join(``);
// }
// _____________________________________________________________________________________________________
//todo  135 Regular Ball Super Ball
// class Ball {
//   constructor (ballType = `regular`) {
//     this.ballType = ballType;
//   }
// }
// _____________________________________________________________________________________________________
// //* Лучшее решение
// var Ball = function(ballType) {
//   this.ballType = ballType || 'regular';
// };
// _____________________________________________________________________________________________________
//todo  136 Is he gonna survive?
// function hero(bullets, dragons){
//   return bullets >= dragons*2;
// }
// _____________________________________________________________________________________________________
//todo  137  UEFA EURO 2016
// function uefaEuro2016(teams, scores){
//   return scores[0] > scores[1] ? `At match ${teams[0]} - ${teams[1]}, ${teams[0]} won!` : scores[0] < scores[1] ? `At match ${teams[0]} - ${teams[1]}, ${teams[1]} won!` : `At match ${teams[0]} - ${teams[1]}, teams played draw.`
// }
// _____________________________________________________________________________________________________
//todo  138 Vowel remover
// function shortcut(string) {
//   return string.replace(/[aeiou]/g, "");
// }
// _____________________________________________________________________________________________________
//todo  139 Did she say hallo?
// function validateHello(greetings) {
//   return /(hello|ciao|salut|hallo|hola|ahoj|czesc)/i.test(greetings) 
//  }
//* Лучшеее решение
// const validateHello = greetings => /h[ae]llo|ciao|salut|hola|ahoj|czesc/i.test(greetings);
// _____________________________________________________________________________________________________
//todo  140 Regexp Basics - is it a digit?
// String.prototype.digit = function() {
//   return (/^\d$/g).test((this));
// };
// _____________________________________________________________________________________________________
//todo  141  Simple validation of a username with regex
// function validateUsr(username) {
//   return /^([a-z0-9_]){4,16}$/.test(username);
// }
// _____________________________________________________________________________________________________
//todo  142 Safen User Input Part I - htmlspecialchars
// function htmlspecialchars(formData) {
//   return formData.replace(/&/g, "&amp;")
//                  .replace(/</g, "&lt;")
//                  .replace(/>/g, "&gt;")
//                  .replace(/"/g, "&quot;");
// }
// _____________________________________________________________________________________________________
//! Лучшеее решение
// function htmlspecialchars(formData) {
//   return formData.replace(/[<>"&]/g, ch => ({"<":"&lt;",">":"&gt;","\"":"&quot;","&":"&amp;"}[ch]));
// }
// _____________________________________________________________________________________________________
//todo  143  Enumerable Magic #1 - True for All?
// function all( arr, fun ){
//   return arr.every(fun);
// }
// _____________________________________________________________________________________________________
//todo  144 Is it a number?
// function isDigit(s) {
//   return +s === parseFloat(s);
// }
// _____________________________________________________________________________________________________
//!  todo 145 Count the number of cubes with paint on
// let countSquares = function(cuts){
//   return (cuts ? 6 * Math.pow(cuts, 2) + 2 : 1)
// }
// _____________________________________________________________________________________________________
//todo 146 A wolf in sheep's clothing
// function warnTheSheep(queue) {
//   return queue.indexOf(`wolf`) === queue.length-1 ? "Pls go away and stop eating my sheep" : `Oi! Sheep number ${queue.length - 1 - queue.indexOf(`wolf`)}! You are about to be eaten by a wolf!`;
// } 
// _____________________________________________________________________________________________________
//todo 147  Total pressure calculation
// function solution(M1, M2, m1, m2, V, T) {
//   M1 = m1 * 0.001/M1;
//   M2 = m2 * 0.001/M2;
//   T = T + 273.15;
// let R = 0.082;
// return (((M1 + M2) * R * T) / V) * 1000;
// }
// _____________________________________________________________________________________________________
//todo 148 Grasshopper - Grade book
// function getGrade (s1, s2, s3) {
//   let average = (s1+s2+s3)/3
//   return  average < 60 ? `F` : average < 70
//                        ? `D` : average < 80
//                        ? `C` : average < 90 
//                        ? `B` : `A`;
// }
// _____________________________________________________________________________________________________
//todo 149 Beginner - Reduce but Grow
// function grow(x){
//   return x.reduce((acc, iteger) => acc*iteger);
// }
// _____________________________________________________________________________________________________
//todo 150 Do I get a bonus?
// function bonusTime(salary, bonus) {
//   return bonus === true ? `£${salary*10}` : `£${salary}`
// }
// _____________________________________________________________________________________________________
//todo 151 Incorrect division method
// const solve = (x, y) => x / y;
// _____________________________________________________________________________________________________
//todo 152 get character from ASCII Value
// let getChar = c => String.fromCodePoint(c);
// _____________________________________________________________________________________________________
//todo 153 L1: Bartender, drinks!
// function getDrinkByProfession(param){
//   switch (param.toLowerCase()){
//       case "jabroni":  return "Patron Tequila";
//       break;
//       case "school counselor":  return "Anything with Alcohol";
//       break;
//       case "programmer":  return "Hipster Craft Beer";
//       break;
//       case "bike gang member": return "Moonshine";
//       break;
//       case "politician": return "Your tax dollars";
//       break;
//       case "rapper": return "Cristal";
//       break;
//       default: return "Beer";
//   }
// }
// _____________________________________________________________________________________________________
//* Лучшеее решение
// const drinks = {
//   "jabroni": "Patron Tequila",
//   "school counselor": "Anything with Alcohol",
//   "programmer": "Hipster Craft Beer",
//   "bike gang member": "Moonshine",
//   "politician": "Your tax dollars",
//   "rapper": "Cristal"
// }
// const getDrinkByProfession = profession => drinks[profession.toLowerCase()] || "Beer"
// _____________________________________________________________________________________________________
//todo 154 Super Duper Easy
// function problem(x){
//   return typeof x === `number` ? x*50+6 : `Error`;
// }
// _____________________________________________________________________________________________________
//todo 155 Are arrow functions odd?
// function odds(values){
//   return values.filter(number => number%2 !== 0 );
// }
// _____________________________________________________________________________________________________
//todo 156  N-th Power
// function index(array, n){
//   return array[n]**n || -1;
// }
// _____________________________________________________________________________________________________
//todo 157 Aspect Ratio Cropping - Part 1
// function aspectRatio(x,y){
//   x = Math.ceil(y*16/9);
//   return [x, y];
// }
// _____________________________________________________________________________________________________
//todo 158 NBA full 48 minutes average
// function pointsPer48(ppg, mpg) {
//   return +(48/mpg*ppg).toFixed(1)|| 0;
// }
// _____________________________________________________________________________________________________
//todo 159 Find the position!
// function position(letter){  
//   let arr = [];
//   for(let i = 97; i <= 122; i++){
//       arr.push(String.fromCodePoint(i));
//   }
//    return `Position of alphabet: ${arr.findIndex((char) => char === letter)+1}`;
// }
// _____________________________________________________________________________________________________
//* Лучшеее решение
// function position(letter){
//   const alphabet = 'abcdefghijklmnopqrstuvwxyz';
//   return 'Position of alphabet: ' + (alphabet.indexOf(letter) + 1);
// }
// _____________________________________________________________________________________________________
//* Лучшеее решение
// position = l => `Position of alphabet: ${l.charCodeAt() - 96}`;
// _____________________________________________________________________________________________________
//todo 160   Sum of differences in array
// function sumOfDifferences(arr) {
//   return arr.length > 0 ? Math.max(...arr) - Math.min(...arr) : 0;
// }
// _____________________________________________________________________________________________________
// function sumOfDifferences(arr) {
//   if(arr.length === 0){
//     return 0;
//   }
//   let sortArr = arr.sort((a,b) => b - a);
//   let sum = 0;
//   for(let i = 0; i < sortArr.length; i++){
//     if (sortArr[i+1] === undefined) {
//       break;
//     } 
//     sum += sortArr[i] - sortArr[i+1];
//   }
//   return sum
// }
// console.log(sumOfDifferences([2, 1, 10]));
// _____________________________________________________________________________________________________
//* Лучшеее решение
// const sumOfDifferences = arr => arr
//   .sort((a, b) => b - a)
//   .map((a, i) => a - arr[i + 1] || 0)
//   .reduce((a, b) => a + b, 0);
// _____________________________________________________________________________________________________
//todo 161 Convert to Binary
// function toBinary(n) {
//   return +n.toString(2);
// }
// _____________________________________________________________________________________________________
//todo 162 Take the Derivative
// function derive(coefficient,exponent) {
//   return `${coefficient*exponent}x^${exponent-1}`
// }
// _____________________________________________________________________________________________________
//todo 163 Dollars and Cents
// function formatMoney(amount){
//   return `$`+amount.toFixed(2);
// }
// _____________________________________________________________________________________________________
//todo 164 Holiday VI - Shark Pontoon
// function shark(pontoonDistance, sharkDistance, youSpeed, sharkSpeed, dolphin){
//   return pontoonDistance/youSpeed < sharkDistance/sharkSpeed ?  "Alive!" 
//         : dolphin && pontoonDistance/youSpeed < sharkDistance/(sharkSpeed/2) ? "Alive!" : "Shark Bait!";
// }
// _____________________________________________________________________________________________________
//todo 165  Sum Arrays
// const sum = numbers => numbers.length < 1 ? 0 : numbers.reduce((acc, number) => acc += number);
// _____________________________________________________________________________________________________
//todo 166 L1: Set Alarm
// function setAlarm(employed, vacation){
//   return employed !== vacation && employed === true ? true : false;
//  }
// _____________________________________________________________________________________________________
//* Лучшеее решение
// const setAlarm = (employed, vacation) => employed && !vacation;
// _____________________________________________________________________________________________________
//todo 167 The falling speed of petals
// function sakuraFall(v) {
//   return v <= 0 ? 0 : 400/v;
// }
// _____________________________________________________________________________________________________
//TODO  168. Counting sheep...
// function countSheeps(arrayOfSheep) {
// 	return arrayOfSheep.reduce((accum, item) => item ? ++accum : accum, 0)   //* ++accum - почему?
// }
// console.log(countSheeps(arr));
// _____________________________________________________________________________________________________
// * ЛУЧШЕЕ РЕШЕНИЕ 
// function countSheeps(arrayOfSheeps) {
// 	return arrayOfSheeps.filter(Boolean).length;
//   }
// _____________________________________________________________________________________________________
//TODO 169. Abbreviate a Two Word Name
// The output should be two capital letters with a dot separating them.
// It should look like this:
// Sam Harris => S.H
// patrick feeney => P.F
// _____________________________________________________________________________________________________
// let name = `patrick feeney`;
// function xz (string) {
// 	let arr = string.split(` `);
// 	return `${(arr[0][0]+'.'+arr[1][0]).toUpperCase()}`;
// }
// console.log(xz(name));
// _____________________________________________________________________________________________________
// * ЛУЧШЕЕ РЕШЕНИЕ 
// function abbrevName(name){
// 	var nameArray = name.split(" ");
// 	return (nameArray[0][0] + "." + nameArray[1][0]).toUpperCase();
//   }
// _____________________________________________________________________________________________________
//TODO 170.  I love you, a little , a lot, passionately ... not at all
// function howMuchILoveYou(nbPetals) {
// 	let arr = [`I love you`, `a little`, `a lot`, `passionately`, `madly`, `not at all`];
//     if(arr.length < nbPetals) {
// 		let number = nbPetals%arr.length > 0 ? nbPetals%arr.length-1 : nbPetals%arr.length+arr.length-1;
// 		return arr[number];
// 	} else {
// 		return arr[nbPetals-1];
// 	}
// }
// _____________________________________________________________________________________________________
// * ЛУЧШЕЕ РЕШЕНИЕ 
// const phrases = [
//     'I love you',
//     'a little',
//     'a lot',
//     'passionately',
//     'madly',
//     'not at all',
// ]
// function howMuchILoveYou(n) {
//      return phrases[(n - 1) % phrases.length] 
// }
// ____________________________________________________________________________________________________
// TODO 171. Filter out the geese
// function gooseFilter (birds) {
// 	var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
// 	let arr2  = birds.filter((item) => !geese.includes(item));
// 	return arr2;
//   };
//   _____________________________________________________________________________________________________
// * ЛУЧШЕЕ РЕШЕНИЕ 
//   function gooseFilter (birds) {
// 	var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
// 	return birds.filter(b => !geese.includes(b));
//   };
// _____________________________________________________________________________________________________
//TODO 172. Remove First and Last Character Part Two
// function array(str){
// 	let arr = str.split(`,`);
// 	if (arr.length < 3 ) {
// 		return null;
// 	}
// 		return arr.slice(1, arr.length-1).join(` `);
// }
// _____________________________________________________________________________________________________
// * ЛУЧШЕЕ РЕШЕНИЕ 
// function array(arr){
// 	return arr.split(",").slice(1,-1).join(" ") || null;
// }
// _____________________________________________________________________________________________________
//TODO 173. Array plus array
//  function arrayPlusArray(arr1, arr2) {
// 	return [...arr1, ...arr2].reduce((accum, item) => accum +=item);
//   }
//    _____________________________________________________________________________________________________
//  * ЛУЧШЕЕ РЕШЕНИЕ
// function arrayPlusArray(arr1, arr2) {
// 	return arr1.concat(arr2).reduce((acc, cur) => acc + cur);
//   }
//   _____________________________________________________________________________________________________
//TODO 174. Is there a vowel in there?
// let arr = [`a`,`e`, `i`, `o`, `u`];
// let array = [137, 64, 2, 75, 97, 117, 106, 105];
// function isVow(a){
// 	return a.map((number) => arr.indexOf(String.fromCodePoint(number)) > -1 ? number = String.fromCodePoint(number) : number);
// }
// console.log(isVow(array));
//   _____________________________________________________________________________________________________
// TODO 175. Convert a string to an array
//   _____________________________________________________________________________________________________
// let str = 'I learn JS SSA'
// let b = string => string.split(` `);
// / or
// function stringToArray(string){
// 	return string.split(` `);
//   }
//   _____________________________________________________________________________________________________
// TODO 176. You only need one - Beginner
// const check = (a,x) => a.includes(x);
// ____________________________________________________________________________________________________
//todo 177. Convert number to reversed array of digits
// let n = 348597;
// function digitize(n) {
// 	return (`${n}`).split(``).reverse().map((item) => item = +item);
// }
// console.log(digitize(n));
// _____________________________________________________________________________________________________
//  * ЛУЧШЕЕ РЕШЕНИЕ
// function digitize(n){
// 	return (n + '').split('').map(Number).reverse();
//   }
// _____________________________________________________________________________________________________
//TODO 178. Sum of positive
// let arr = [1,-4,7,12];
// function positiveSum (arr) {
// 	return arr.reduce( (acc, number) => number > 0 ? acc += number : acc, 0); 
// }
// console.log(positiveSum(arr));
// _____________________________________________________________________________________________________
//TODO 179. Beginner - Lost Without a Map
// let x = [1, 2 ,3];
// function maps(x){
// 	return x.map (number => number*2);
// };
// console.log(maps(x));
// _____________________________________________________________________________________________________
//TODO 180. Find the first non-consecutive number
// let array = [1, 2, 3, 4, 5, 6, 7];
// function firstNonConsecutive (arr) {
// 	let b = arr.find ((number, index) => {
// 		if ( ( arr[index - 1] !== undefined && number - 1 !== arr[index-1] )
// 			|| ( arr[index - 1] === undefined && number >= arr[index + 1] )) {
// 			return arr[index-1];
// 			}
// 		});
// 		if (b === undefined) {
// 			return null;
// 		} 
// 		return b;
// }
// console.log(firstNonConsecutive(array)); 
// _____________________________________________________________________________________________________
//  * ЛУЧШЕЕ РЕШЕНИЕ
// function firstNonConsecutive(arr) {
// 	for (let i = 0; i < arr.length - 1; ++i) {
// 	  if (arr[i] + 1 !== arr[i + 1]) {
// 		return arr[i + 1]
// 	  }
// 	}
// 	return null
//   }
//   _____________________________________________________________________________________________________ 
//  * ЛУЧШЕЕ РЕШЕНИЕ
// function firstNonConsecutive (arr) {
//     let result = arr.find((val, index) => val !== index + arr[0]);
//     return (Number.isInteger(result)) ? result : null;
// }
// _____________________________________________________________________________________________________
//TODO 181+2.(2 - 74, 2- 10..). Grasshopper - Debug
// function convertToCelsius (temperature) {
//   var celsius = (temperature - 32)*(5/9)
//   return celsius;
// }

// function weatherInfo (temp) {
//   var c = convertToCelsius(temp);
//   if (c > 0)
//     return (c + " is above freezing temperature");
//   else
//     return (c + " is freezing temperature")
//   }
//   _____________________________________________________________________________________________________ 
//  * ЛУЧШЕЕ РЕШЕНИЕ
// const weatherInfo = temperature => temperatureMesage(convertToCelsius(temperature));
// const convertToCelsius = temperature => (temperature - 32) * (5 / 9);
// const temperatureMesage = temperature => temperature + ((temperature <= 0) ? " is freezing temperature" : " is above freezing temperature")
// _____________________________________________________________________________________________________
//TODO 184.Parse float
// function parseF(s) {
//     return isNaN(parseFloat(s)) ? null : parseFloat(s);
//   }
// _____________________________________________________________________________________________________
//TODO 185 Student's Final Grade
// function finalGrade (exam, projects) {
// 	return exam > 90 || projects > 10 ? 100 : exam > 75 && projects >= 5 ? 90 : exam > 50 && projects >= 2 ? 75 : 0
//  }
// _____________________________________________________________________________________________________
//TODO 186 How much water do I need?
// function howMuchWater(water, load, clothes){
// 	if (clothes > 2*load) {
// 	  return 'Too much clothes';
// 	}
// 	if (clothes < load) {
// 	  return 'Not enough clothes';
// 	}
// 	return +(water * 1.1 **(clothes - load)).toFixed(2);
//   }
// _____________________________________________________________________________________________________
//TODO 187 Smallest unused ID
// function nextId(ids){
// 	let idsSort = ids.sort((a,b) => a - b);
// 	for (let i = 0; i <= idsSort.length; i++){
// 	  if (!idsSort.includes(i)){
// 		return i
// 	}
// 	}
// }
// _____________________________________________________________________________________________________
//TODO 188 CSV representation of array
// function toCsvText(array) {
// 	return array.join('\n');
// }
// _____________________________________________________________________________________________________
//TODO 189 Filling an array (part 1)
// function arr (n) {
// 	let arr = [];
// 	for(let i = 0; i < n; i++) {
// 	  arr.push(i);
// 	}
// 	return arr;
//   }
//   _____________________________________________________________________________________________________ 
//  * ЛУЧШЕЕ РЕШЕНИЕ
// const arr = n => Array.from({length: n}, (_, i) => i);
// _____________________________________________________________________________________________________
//TODO 190 Capitalization and Mutability
// function capitalizeWord(word) {
// 	return word[0].toUpperCase() + word.slice(1);
//   }
// _____________________________________________________________________________________________________
//TODO 191 Grasshopper - Create the rooms
// let rooms = {
// 	room1: {
// 	  name: `one`,
// 	  description: `smth`,
// 	  completed: false },
// 	room2: {
// 	  name: `one`,
// 	  description: `smth`,
// 	  completed: false },
// 	room3: {
// 	  name: `one`,
// 	  description: `smth`,
// 	  completed: false }
//   }
// _____________________________________________________________________________________________________
//TODO 192 Welcome!

// const greets = {
// 	english: 'Welcome',
// 	czech: 'Vitejte',
// 	danish: 'Velkomst',
// 	dutch: 'Welkom',
// 	estonian: 'Tere tulemast',
// 	finnish: 'Tervetuloa',
// 	flemish: 'Welgekomen',
// 	french: 'Bienvenue',
// 	german: 'Willkommen',
// 	irish: 'Failte',
// 	italian: 'Benvenuto',
// 	latvian: 'Gaidits',
// 	lithuanian: 'Laukiamas',
// 	polish: 'Witamy',
// 	spanish: 'Bienvenido',
// 	swedish: 'Valkommen',
// 	welsh: 'Croeso'
// 	}
	
// function greet(language) {
// 	  return greets[language] || greets.english
// }
// _____________________________________________________________________________________________________
//TODO 193 Get Planet Name By ID
// function getPlanetName(id){
// 	let name;
// 	switch(id){
// 	  case 1:
// 		name = 'Mercury';
// 		break;
// 	  case 2:
// 		name = 'Venus';
// 		break;
// 	  case 3:
// 		name = 'Earth';
// 		break;
// 	  case 4:
// 		name = 'Mars';
// 		break;
// 	  case 5:
// 		name = 'Jupiter';
// 		break;
// 	  case 6:
// 		name = 'Saturn';
// 		break;
// 	  case 7:
// 		name = 'Uranus';
// 		break;
// 	  case 8:
// 		name = 'Neptune';
// 		break;
// 	}
// 	return name;
//   }
// _____________________________________________________________________________________________________
//TODO 194 Total amount of points
// function points(games) {
// 	return games.reduce((acc, item) => +item[0] > +item[2] ? acc += 3 
// 									:  +item[0] === +item[2] ? acc += 1 : acc , 0)
//   }
// _______
// let arr =  ['1:0','2:0','3:0','4:0'];
// console.log(+arr[0][0]);
// _____________________________________________________________________________________________________
//TODO 195 Is the string uppercase?   - спросить что за шняга 
// String.prototype.isUpperCase = function() {
// 	return this.toUpperCase() !== this.toString() ? false : true;
// }
// _____________________________________________________________________________________________________
//TODO 196 SpeedCode #2 - Array Madness
// function arrayMadness(a, b) {
// 	return a.map((item) => item = item**2).reduce((acc, num) => acc += num) > 
// 		   b.map((item) => item = item**3).reduce((acc, num) => acc += num);
//   }
//   _____________________________________________________________________________________________________ 
//  * ЛУЧШЕЕ РЕШЕНИЕ
// const arrayMadness = (a, b) => a.reduce((acc, x) => acc + x**2, 0) > b.reduce((acc, x) => acc + x**3, 0) 
// _____________________________________________________________________________________________________
//TODO 197 Polish alphabet
// let alphabet = {
// 	ą: "a",
// 	ć: "c",
// 	ę: "e",
// 	ł: "l",
// 	ń: "n",
// 	ó: "o",
// 	ś: "s",
// 	ź: "z",
// 	ż: "z"
//   }
  
//   function correctPolishLetters (string) {
// 	return string.replace(/[ąćęłńóśźż]/g, char => alphabet[char] || char);
// }
// _____________________________________________________________________________________________________
//TODO 198 Find the Difference in Age between Oldest and Youngest Family Members
// function differenceInAges(ages){
// 	let sortAges = ages.sort((a, b) => a - b);
// 	return [ sortAges[0], sortAges[sortAges.length -1], sortAges[sortAges.length - 1] - sortAges[0]];
//}
//   _____________________________________________________________________________________________________ 
//  * ЛУЧШЕЕ РЕШЕНИЕ
// function differenceInAges (ages) {
//     let max = Math.max(...ages),
//         min = Math.min(...ages)
//         diff = max - min
//     return [min, max, diff]
// }
// _____________________________________________________________________________________________________
//TODO 199 Removing Elements
// function removeEveryOther(arr){
// 	return arr.filter((item, index) => index%2 === 0 );
// }
// _____________________________________________________________________________________________________
//TODO 200 get ascii value of character
// const getASCII = c => c.codePointAt();
// _____________________________________________________________________________________________________
//TODO 201 Triple Trouble
// function tripleTrouble(one, two, three){
// 	let result = '';
// 	for(let i = 0; i <= one.length - 1; i++){
// 	  result += one[i] + two[i]+ three[i];
// 	}
// 	return result;
// }
// console.log(tripleTrouble("aaa","bbb","ccc"));
// _____________________________________________________________________________________________________
//TODO 202 Thinkful - Number Drills: Blue and red marbles
// function guessBlue(blueStart, redStart, bluePulled, redPulled) {
// 	let all = blueStart+ redStart;
// 	return (blueStart-bluePulled)/(all - redPulled - bluePulled);
//   }
// _____________________________________________________________________________________________________
//TODO 203  No zeros for heros
// function noBoringZeros(n) {
// 	return +(n.toString().replace(/0+$/g, ""));
// }
// _____________________________________________________________________________________________________
//TODO 204 Exclusive "or" (xor) Logical Operator
// function xor(a, b) {
// 	return a === true && a === b ? false : a === false && a === b ? false : true;
//   }
//   _____________________________________________________________________________________________________ 
//  * ЛУЧШЕЕ РЕШЕНИЕ
// function xor(a, b) {
// 	return a != b;
//   ____________________________
// function xor(a, b) {
// 	return (a || b) && !(a && b);
//   }
// _____________________________________________________________________________________________________
//TODO 205  Simple Fun #352: Reagent Formula
// const isValid = formula => {
// 	const one = !(formula.includes(1) && formula.includes(2));
// 	const two = !(formula.includes(3) && formula.includes(4));
// 	const three = formula.includes(5) === formula.includes(6);
// 	const four = formula.includes(7) || formula.includes(8);
// 	return one && two && three && four;
//   }
// _____________________________________________________________________________________________________
//TODO 206 No Loops 2 - You only need one
// function check(a,x){
// 	return a.includes(x);
//   };
// _____________________________________________________________________________________________________
//TODO 207  noobCode 01: SUPERSIZE ME.... or rather, this integer!
// function superSize(num){
// 	return num.toString().length > 1 ? +(num.toString().split('').sort((a, b) => b - a).join('')) : num
//   }
// _____________________________________________________________________________________________________
//TODO 208 Grasshopper - Check for factor
// function checkForFactor (base, factor) {
// 	return base%factor === 0;
//   }
// _____________________________________________________________________________________________________
//TODO 209 Count the Monkeys!
// function monkeyCount(n) {
// 	let arr = [];
// 	for(let i = 1; i <= n; i++){
// 	  arr.push(i);
// 	}
// 	return arr;
//   }
//   _____________________________________________________________________________________________________ 
//  * ЛУЧШЕЕ РЕШЕНИЕ
// function monkeyCount(n) {
// 	return Array.from({length:n}, (_,i)=>i+1)
//   }
// _____________________________________________________________________________________________________
//TODO 210 Tip Calculator
// function calculateTip(amount, rating) {
// 	let rating1 = rating.toLowerCase();
// 	return rating1 === "terrible" ? 0
// 	: rating1 === "poor" ? Math.ceil(amount*0.05) 
// 	: rating1 === "good" ? Math.ceil(amount*0.1)
// 	: rating1 === "great" ? Math.ceil(amount*0.15)
// 	: rating1 === "excellent" ? Math.ceil(amount*0.2) : "Rating not recognised"
//   }
//   _____________________________________________________________________________________________________ 
//  * ЛУЧШЕЕ РЕШЕНИЕ
// const TIPS = {
// 	"terrible": 0.0,
// 	"poor": 0.05,
// 	"good": 0.1,
// 	"great": 0.15,
// 	"excellent": 0.2
//   };
  
//   const calculateTip = (amount, rating) => {
// 	rating = rating.toLowerCase();
	
// 	return rating in TIPS ? Math.ceil(TIPS[rating] * amount) : "Rating not recognised";
//   };
// _____________________________________________________________________________________________________
//TODO 211 The 'if' function
// function _if(bool, func1, func2) {
// 	return bool ? func1() : func2()
//   }
// _____________________________________________________________________________________________________
//TODO 212 5 without numbers !!
// function unusualFive() {
// 	return 'start'.length
//   }
// _____________________________________________________________________________________________________
//TODO 213 For UFC Fans (Total Beginners): Conor McGregor vs George Saint Pierre
// var quote = function(fighter) {
// 	return fighter.toLowerCase() === `conor mcgregor` ? "I'd like to take this chance to apologize.. To absolutely NOBODY!" 
// 	: "I am not impressed by your performance.";
//   }
// _____________________________________________________________________________________________________
//TODO 214 Be Concise I - The Ternary Operator
// let describeAge = (age, str = "You're a(n) ") => age <= 12 ? str+"kid" : age <= 17 ? str+"teenager" : age <= 64 ? str+"adult" : str+"eldery";
//   _____________________________________________________________________________________________________ 
//  * ЛУЧШЕЕ РЕШЕНИЕ
// var describeAge=a=>`You're a(n) ${a<13?"kid":a<18?"teenager":a<65?"adult":"elderly"}`;
// ____________________ _________________________________________________________________________________
//TODO 215 Find the Integral
// function integrate(coefficient, exponent) {
// 	return  `${coefficient/(exponent+1)}x^${exponent+1}`;
//   }
// ____________________ _________________________________________________________________________________
//TODO 216 Surface Area and Volume of a Box
// function getSize(width, height, depth) {
// 	return  [(depth * width + depth * height + width * height) * 2, width*height*depth];
//   }
// ____________________ _________________________________________________________________________________
//TODO 217 A Strange Trip to the Market
// function isLockNessMonster(s) {
// 	return s.includes("tree fiddy") || s.includes("3.50");
//   }
//   _____________________________________________________________________________________________________ 
//  * ЛУЧШЕЕ РЕШЕНИЕ
// function isLockNessMonster(s) {
// 	return /3\.50|th?ree fi(?:ft|dd)y/g.test(s);
//   }
// ____________________ _________________________________________________________________________________
//TODO 218 Simple Fun #1: Seats in Theater
// function seatsInTheater(nCols, nRows, col, row) {
// 	return (nRows-row)*(nCols-col+1);
//   } 
// ____________________ _________________________________________________________________________________
//TODO 219 A Needle in the Haystack
// function findNeedle(haystack) {
// 	return `found the needle at position ${haystack.indexOf("needle")}`
//   }
// ____________________ _________________________________________________________________________________
//TODO 220 Wilson primes
// function amIWilson(p) {
// 	let sum = 1;
// 	for(let i = 1; i <= p-1; i++){
// 	  sum *= i;
// 	}
// 	return Number.isInteger((sum+1)/(p*p)); 
//   }
// ____________________ _________________________________________________________________________________
//TODO 221 Grasshopper - Terminal game combat function
// function combat(health, damage) {
// 	return health - damage > 0 ? health-damage : 0;
//   }
// _____________________________________________________________________________________________________
//TODO 222  Closest elevator
// function elevator(left, right, call){
// 	return Math.abs(call - left) < Math.abs(call - right) ? "left" : "right";
//   }
// _____________________________________________________________________________________________________
//TODO 223 Count Odd Numbers below n
// function oddCount(n){
// 	return Math.floor(n/2);
//   }
// _____________________________________________________________________________________________________
//TODO 224 Logical calculator
// function logicalCalc(array, op){
// 	if(op === "AND" && array.includes(false)){
// 	  return false
// 	   } 
// 	if (op === "OR" && !array.includes(true)){
// 	  return false;
// 		} 
// 	if (op === "XOR" && (array.filter((item) => item === true)).length%2 === 0){
// 	  return false;
//   }
//   return true;
// }
// _____________________________________________________________________________________________________
//TODO 225 Draw stairs
// function drawStairs(n) {
// 	let stairs = "I"
// 	let space = " ";
// 	for (let i = 1; i < n; i++){
// 	  stairs += "\n"+space.repeat(i)+"I"  
// 	}
// 	return stairs;
// }
//   _____________________________________________________________________________________________________ 
//  * ЛУЧШЕЕ РЕШЕНИЕ
// const drawStairs = n => [...Array(n)].map((_, i) => " ".repeat(i) + "I").join("\n");
// _____________________________________________________________________________________________________
//TODO 226 8kyu interpreters: HQ9+
// function HQ9(code) {
// 	if(/H/.test(code)){
// 	  return 'Hello World!';
// 	}
// 	if (/Q/.test(code)){
// 	  return code;
// 	}
// 	if (/9/.test(code)) {
// 	  return `99 bottles of beer on the wall, 99 bottles of beer.\nTake one down and pass it around, 98 bottles of beer on the wall.\n98 bottles of beer on the wall, 98 bottles of beer.\nTake one down and pass it around, 97 bottles of beer on the wall.\n97 bottles of beer on the wall, 97 bottles of beer.\nTake one down and pass it around, 96 bottles of beer on the wall.\n96 bottles of beer on the wall, 96 bottles of beer.\nTake one down and pass it around, 95 bottles of beer on the wall.\n95 bottles of beer on the wall, 95 bottles of beer.\nTake one down and pass it around, 94 bottles of beer on the wall.\n94 bottles of beer on the wall, 94 bottles of beer.\nTake one down and pass it around, 93 bottles of beer on the wall.\n93 bottles of beer on the wall, 93 bottles of beer.\nTake one down and pass it around, 92 bottles of beer on the wall.\n92 bottles of beer on the wall, 92 bottles of beer.\nTake one down and pass it around, 91 bottles of beer on the wall.\n91 bottles of beer on the wall, 91 bottles of beer.\nTake one down and pass it around, 90 bottles of beer on the wall.\n90 bottles of beer on the wall, 90 bottles of beer.\nTake one down and pass it around, 89 bottles of beer on the wall.\n89 bottles of beer on the wall, 89 bottles of beer.\nTake one down and pass it around, 88 bottles of beer on the wall.\n88 bottles of beer on the wall, 88 bottles of beer.\nTake one down and pass it around, 87 bottles of beer on the wall.\n87 bottles of beer on the wall, 87 bottles of beer.\nTake one down and pass it around, 86 bottles of beer on the wall.\n86 bottles of beer on the wall, 86 bottles of beer.\nTake one down and pass it around, 85 bottles of beer on the wall.\n85 bottles of beer on the wall, 85 bottles of beer.\nTake one down and pass it around, 84 bottles of beer on the wall.\n84 bottles of beer on the wall, 84 bottles of beer.\nTake one down and pass it around, 83 bottles of beer on the wall.\n83 bottles of beer on the wall, 83 bottles of beer.\nTake one down and pass it around, 82 bottles of beer on the wall.\n82 bottles of beer on the wall, 82 bottles of beer.\nTake one down and pass it around, 81 bottles of beer on the wall.\n81 bottles of beer on the wall, 81 bottles of beer.\nTake one down and pass it around, 80 bottles of beer on the wall.\n80 bottles of beer on the wall, 80 bottles of beer.\nTake one down and pass it around, 79 bottles of beer on the wall.\n79 bottles of beer on the wall, 79 bottles of beer.\nTake one down and pass it around, 78 bottles of beer on the wall.\n78 bottles of beer on the wall, 78 bottles of beer.\nTake one down and pass it around, 77 bottles of beer on the wall.\n77 bottles of beer on the wall, 77 bottles of beer.\nTake one down and pass it around, 76 bottles of beer on the wall.\n76 bottles of beer on the wall, 76 bottles of beer.\nTake one down and pass it around, 75 bottles of beer on the wall.\n75 bottles of beer on the wall, 75 bottles of beer.\nTake one down and pass it around, 74 bottles of beer on the wall.\n74 bottles of beer on the wall, 74 bottles of beer.\nTake one down and pass it around, 73 bottles of beer on the wall.\n73 bottles of beer on the wall, 73 bottles of beer.\nTake one down and pass it around, 72 bottles of beer on the wall.\n72 bottles of beer on the wall, 72 bottles of beer.\nTake one down and pass it around, 71 bottles of beer on the wall.\n71 bottles of beer on the wall, 71 bottles of beer.\nTake one down and pass it around, 70 bottles of beer on the wall.\n70 bottles of beer on the wall, 70 bottles of beer.\nTake one down and pass it around, 69 bottles of beer on the wall.\n69 bottles of beer on the wall, 69 bottles of beer.\nTake one down and pass it around, 68 bottles of beer on the wall.\n68 bottles of beer on the wall, 68 bottles of beer.\nTake one down and pass it around, 67 bottles of beer on the wall.\n67 bottles of beer on the wall, 67 bottles of beer.\nTake one down and pass it around, 66 bottles of beer on the wall.\n66 bottles of beer on the wall, 66 bottles of beer.\nTake one down and pass it around, 65 bottles of beer on the wall.\n65 bottles of beer on the wall, 65 bottles of beer.\nTake one down and pass it around, 64 bottles of beer on the wall.\n64 bottles of beer on the wall, 64 bottles of beer.\nTake one down and pass it around, 63 bottles of beer on the wall.\n63 bottles of beer on the wall, 63 bottles of beer.\nTake one down and pass it around, 62 bottles of beer on the wall.\n62 bottles of beer on the wall, 62 bottles of beer.\nTake one down and pass it around, 61 bottles of beer on the wall.\n61 bottles of beer on the wall, 61 bottles of beer.\nTake one down and pass it around, 60 bottles of beer on the wall.\n60 bottles of beer on the wall, 60 bottles of beer.\nTake one down and pass it around, 59 bottles of beer on the wall.\n59 bottles of beer on the wall, 59 bottles of beer.\nTake one down and pass it around, 58 bottles of beer on the wall.\n58 bottles of beer on the wall, 58 bottles of beer.\nTake one down and pass it around, 57 bottles of beer on the wall.\n57 bottles of beer on the wall, 57 bottles of beer.\nTake one down and pass it around, 56 bottles of beer on the wall.\n56 bottles of beer on the wall, 56 bottles of beer.\nTake one down and pass it around, 55 bottles of beer on the wall.\n55 bottles of beer on the wall, 55 bottles of beer.\nTake one down and pass it around, 54 bottles of beer on the wall.\n54 bottles of beer on the wall, 54 bottles of beer.\nTake one down and pass it around, 53 bottles of beer on the wall.\n53 bottles of beer on the wall, 53 bottles of beer.\nTake one down and pass it around, 52 bottles of beer on the wall.\n52 bottles of beer on the wall, 52 bottles of beer.\nTake one down and pass it around, 51 bottles of beer on the wall.\n51 bottles of beer on the wall, 51 bottles of beer.\nTake one down and pass it around, 50 bottles of beer on the wall.\n50 bottles of beer on the wall, 50 bottles of beer.\nTake one down and pass it around, 49 bottles of beer on the wall.\n49 bottles of beer on the wall, 49 bottles of beer.\nTake one down and pass it around, 48 bottles of beer on the wall.\n48 bottles of beer on the wall, 48 bottles of beer.\nTake one down and pass it around, 47 bottles of beer on the wall.\n47 bottles of beer on the wall, 47 bottles of beer.\nTake one down and pass it around, 46 bottles of beer on the wall.\n46 bottles of beer on the wall, 46 bottles of beer.\nTake one down and pass it around, 45 bottles of beer on the wall.\n45 bottles of beer on the wall, 45 bottles of beer.\nTake one down and pass it around, 44 bottles of beer on the wall.\n44 bottles of beer on the wall, 44 bottles of beer.\nTake one down and pass it around, 43 bottles of beer on the wall.\n43 bottles of beer on the wall, 43 bottles of beer.\nTake one down and pass it around, 42 bottles of beer on the wall.\n42 bottles of beer on the wall, 42 bottles of beer.\nTake one down and pass it around, 41 bottles of beer on the wall.\n41 bottles of beer on the wall, 41 bottles of beer.\nTake one down and pass it around, 40 bottles of beer on the wall.\n40 bottles of beer on the wall, 40 bottles of beer.\nTake one down and pass it around, 39 bottles of beer on the wall.\n39 bottles of beer on the wall, 39 bottles of beer.\nTake one down and pass it around, 38 bottles of beer on the wall.\n38 bottles of beer on the wall, 38 bottles of beer.\nTake one down and pass it around, 37 bottles of beer on the wall.\n37 bottles of beer on the wall, 37 bottles of beer.\nTake one down and pass it around, 36 bottles of beer on the wall.\n36 bottles of beer on the wall, 36 bottles of beer.\nTake one down and pass it around, 35 bottles of beer on the wall.\n35 bottles of beer on the wall, 35 bottles of beer.\nTake one down and pass it around, 34 bottles of beer on the wall.\n34 bottles of beer on the wall, 34 bottles of beer.\nTake one down and pass it around, 33 bottles of beer on the wall.\n33 bottles of beer on the wall, 33 bottles of beer.\nTake one down and pass it around, 32 bottles of beer on the wall.\n32 bottles of beer on the wall, 32 bottles of beer.\nTake one down and pass it around, 31 bottles of beer on the wall.\n31 bottles of beer on the wall, 31 bottles of beer.\nTake one down and pass it around, 30 bottles of beer on the wall.\n30 bottles of beer on the wall, 30 bottles of beer.\nTake one down and pass it around, 29 bottles of beer on the wall.\n29 bottles of beer on the wall, 29 bottles of beer.\nTake one down and pass it around, 28 bottles of beer on the wall.\n28 bottles of beer on the wall, 28 bottles of beer.\nTake one down and pass it around, 27 bottles of beer on the wall.\n27 bottles of beer on the wall, 27 bottles of beer.\nTake one down and pass it around, 26 bottles of beer on the wall.\n26 bottles of beer on the wall, 26 bottles of beer.\nTake one down and pass it around, 25 bottles of beer on the wall.\n25 bottles of beer on the wall, 25 bottles of beer.\nTake one down and pass it around, 24 bottles of beer on the wall.\n24 bottles of beer on the wall, 24 bottles of beer.\nTake one down and pass it around, 23 bottles of beer on the wall.\n23 bottles of beer on the wall, 23 bottles of beer.\nTake one down and pass it around, 22 bottles of beer on the wall.\n22 bottles of beer on the wall, 22 bottles of beer.\nTake one down and pass it around, 21 bottles of beer on the wall.\n21 bottles of beer on the wall, 21 bottles of beer.\nTake one down and pass it around, 20 bottles of beer on the wall.\n20 bottles of beer on the wall, 20 bottles of beer.\nTake one down and pass it around, 19 bottles of beer on the wall.\n19 bottles of beer on the wall, 19 bottles of beer.\nTake one down and pass it around, 18 bottles of beer on the wall.\n18 bottles of beer on the wall, 18 bottles of beer.\nTake one down and pass it around, 17 bottles of beer on the wall.\n17 bottles of beer on the wall, 17 bottles of beer.\nTake one down and pass it around, 16 bottles of beer on the wall.\n16 bottles of beer on the wall, 16 bottles of beer.\nTake one down and pass it around, 15 bottles of beer on the wall.\n15 bottles of beer on the wall, 15 bottles of beer.\nTake one down and pass it around, 14 bottles of beer on the wall.\n14 bottles of beer on the wall, 14 bottles of beer.\nTake one down and pass it around, 13 bottles of beer on the wall.\n13 bottles of beer on the wall, 13 bottles of beer.\nTake one down and pass it around, 12 bottles of beer on the wall.\n12 bottles of beer on the wall, 12 bottles of beer.\nTake one down and pass it around, 11 bottles of beer on the wall.\n11 bottles of beer on the wall, 11 bottles of beer.\nTake one down and pass it around, 10 bottles of beer on the wall.\n10 bottles of beer on the wall, 10 bottles of beer.\nTake one down and pass it around, 9 bottles of beer on the wall.\n9 bottles of beer on the wall, 9 bottles of beer.\nTake one down and pass it around, 8 bottles of beer on the wall.\n8 bottles of beer on the wall, 8 bottles of beer.\nTake one down and pass it around, 7 bottles of beer on the wall.\n7 bottles of beer on the wall, 7 bottles of beer.\nTake one down and pass it around, 6 bottles of beer on the wall.\n6 bottles of beer on the wall, 6 bottles of beer.\nTake one down and pass it around, 5 bottles of beer on the wall.\n5 bottles of beer on the wall, 5 bottles of beer.\nTake one down and pass it around, 4 bottles of beer on the wall.\n4 bottles of beer on the wall, 4 bottles of beer.\nTake one down and pass it around, 3 bottles of beer on the wall.\n3 bottles of beer on the wall, 3 bottles of beer.\nTake one down and pass it around, 2 bottles of beer on the wall.\n2 bottles of beer on the wall, 2 bottles of beer.\nTake one down and pass it around, 1 bottle of beer on the wall.\n1 bottle of beer on the wall, 1 bottle of beer.\nTake one down and pass it around, no more bottles of beer on the wall.\nNo more bottles of beer on the wall, no more bottles of beer.\nGo to the store and buy some more, 99 bottles of beer on the wall.` ;
// 	}
// 	return undefined;
//   }
//   _____________________________________________________________________________________________________ 
//  * ЛУЧШЕЕ РЕШЕНИЕ
// function HQ9(code) {
// 	switch (code) {
// 	  case 'H': return 'Hello World!';
// 	  case 'Q': return code;
// 	  case '9': return beer(99);
// 	  default: return undefined;
// 	}
//   }
  
//   function beer(count) {
// 	if (count === 2) {
// 	  return '2 bottles of beer on the wall, 2 bottles of beer.\n' +
// 		  'Take one down and pass it around, 1 bottle of beer on the wall.\n' +
// 		  '1 bottle of beer on the wall, 1 bottle of beer.\n' +
// 		  'Take one down and pass it around, no more bottles of beer on the wall.\n' +
// 		  'No more bottles of beer on the wall, no more bottles of beer.\n' +
// 		  'Go to the store and buy some more, 99 bottles of beer on the wall.';
// 	} else {
// 	  return `${count} bottles of beer on the wall, ${count} bottles of beer.\n` +
// 		  `Take one down and pass it around, ${count - 1} bottles of beer on the wall.\n` +
// 		  beer(count - 1);
// 	}
//   }
// _____________________________________________________________________________________________________
//TODO 227 Bin to Decimal
// function binToDec(bin){
// 	return parseInt(bin,2);
//   }
// _____________________________________________________________________________________________________
//TODO 228 How many stairs will Suzuki climb in 20 years?
// function stairsIn20(s){
// 	return s.map((item) => item.reduce((acc,number) => acc +=number)).reduce((acc,int) => acc += int)*20;
//   }
// _____________________________________________________________________________________________________
//TODO 229 If you can't sleep, just count sheep!!
// let countSheep = function (num){
// 	let str = "";
// 	for (let i = 1; i <= num; i++){
// 	  str += `${i} sheep...`; 
// 	}
// 	return str;
//   }
// _____________________________________________________________________________________________________
//TODO 230  Sentence Smash
// function smash (words) {
//     "use strict";
//     return words.join(` `);
// };
// _____________________________________________________________________________________________________
//TODO 231 Find out whether the shape is a cube
// var cubeChecker = function(volume, side){
// 	return volume <= 0 || side <= 0 ? false : volume/side === side*side ? true : false; 
//   };
// _____________________________________________________________________________________________________
//TODO 232 Who is going to pay for the wall?
// function whoIsPaying(name){
// 	return name.length > 2 ? [name, name.slice(0, 2)] : [name]
//   }
// _____________________________________________________________________________________________________
//TODO 233 Find Nearest square number
// function nearestSq(n){
//     return (Math.round(Math.sqrt(n)))**2;
// }
// _____________________________________________________________________________________________________
//TODO 234  Palindrome Strings
// function isPalindrome(line) {
// 	return typeof line === `string` ? [...line].reverse().join("") === line 
// 									: +([...`${line}`].reverse().join("")) === line;
//   }
// _____________________________________________________________________________________________________
//TODO 235 Find the force of gravity between two objects
// solution = (arr_val, arr_unit) => {
// 	arr_unit[0] === `g`  ? arr_val[0] /= 1000 :  arr_unit[0] === `mg` 
// 						 ? arr_val[0] /= 1e6 :  arr_unit[0] === `μg`  
// 						 ? arr_val[0] /= 1e9 :   arr_unit[0] === `lb`
// 						 ? arr_val [0] *= 0.453592 : arr_val [0];
	
// 	 arr_unit[1] === `g` ? arr_val[1] /= 1000 :  arr_unit[1] === `mg` 
// 						 ? arr_val[1] /= 1e6 :  arr_unit[1] === `μg`  
// 						 ? arr_val[1] /= 1e9 :   arr_unit[1] === `lb`
// 						 ? arr_val [1] *= 0.453592 : arr_val [1];
	 
// 	 arr_unit[2] === `cm` ? arr_val[2] /= 100 : arr_unit[2] === `mm`
// 						  ? arr_val[2] /= 1000 :  arr_unit[2] === `μm` 
// 						  ? arr_val[2] /= 1e6 : arr_unit[2] === `ft`
// 						  ? arr_val[2] *= 0.3048 : arr_val[2];
	 
// 	 return 6.67*(10**(-11))*arr_val[0]*arr_val[1]/arr_val[2]**2
//    }
  // _____________________________________________________________________________________________________ 
//  * ЛУЧШЕЕ РЕШЕНИЕ
// function solution([m1,m2,d],[um1,um2,ud]) {
// 	const G = 6.67e-11 ;
// 	const conversion = { kg:1, g:1e-3, mg:1e-6, μg:1e-9, lb:.453592
// 					   , m:1, cm:1e-2, mm:1e-3, μm:1e-6, ft:.3048
// 					   } ;
// 	return G * m1 * conversion[um1] * m2 * conversion[um2] / ( d * conversion[ud] ) ** 2 ;
//   }
// _____________________________________________________________________________________________________
//TODO 236 Exclamation marks series #6: Remove n exclamation marks in the sentence from left to right
// function remove(s,n){
// 	for(let i = 0; i < n; i++){
// 	 s = s.replace("!", ""); 
// 	} 
// 	return s;
//   }
// _____________________________________________________________________________________________________
//TODO 237 Return the day
// function whatday(num) { 
// 	switch(num) {
// 		case 1: return `Sunday`;
// 		case 2: return `Monday`;
// 		case 3: return `Tuesday`;
// 		case 4: return `Wednesday`;
// 		case 5: return `Thursday`;
// 		case 6: return `Friday`;
// 		case 7: return `Saturday`;
// 		default: return "Wrong, please enter a number between 1 and 7";
// 	}
//   }
// _____________________________________________________________________________________________________
// TODO 238 Is the date today
// function isToday(date) {
// 	let d = new Date();
// 	return (d.getDate() === date.getDate() && d.getFullYear() === date.getFullYear() && d.getMonth() === date.getMonth());
//   }
//   _____________________________________________________________________________________________________ 
//  * ЛУЧШЕЕ РЕШЕНИЕ
// function isToday(date) {
// 	return new Date().toDateString() === date.toDateString()
//   }
// _____________________________________________________________________________________________________
//TODO 239 Training JS #8: Conditional statement--switch
// function howManydays(month){
// 	switch (month){
// 		case 1:
// 		case 3: 
// 		case 5:
// 		case 7: 
// 		case 8:
// 		case 10:
// 		case 12: return 31;
// 		case 4:
// 		case 6: 
// 		case 9:
// 		case 11: return 30;
// 		case 2: return 28;
// 		default: return `Do not consider the leap year`
// 	}
//   _____________________________________________________________________________________________________ 
//  * ЛУЧШЕЕ РЕШЕНИЕ
// function howManydays(month){
// 	switch (month){
// 	   case 2: return 28
// 	   case 4:
// 	   case 6:
// 	   case 9:
// 	   case 11: return 30
// 	}
// 	return 31
//   }
// _____________________________________________________________________________________________________
//TODO 240  Training JS #5: Basic data types--Object
// function animal(obj){
//   return `This ${obj.color} ${obj.name} has ${obj.legs} legs.`
// }
// _____________________________________________________________________________________________________
//TODO 241 Enumerable Magic #4 - True for None?
// function none(arr, fun){
//   return !arr.some(fun);
// }
// _____________________________________________________________________________________________________
//TODO 242 Enumerable Magic #2 - True for Any?
// function any(arr, fun){
//   return arr.some(fun)
// } 

// _____________________________________________________________________________________________________
//TODO 243 Classic Hello World
// class Solution{
//   static main() {
//     console.log ("Hello World!");
//   }
// }
// _____________________________________________________________________________________________________
// TODO 244 Decibel Scale
// function dBScale(intensity) {
//   return 10*Math.log10(intensity/Math.pow(10,-12));
//  }
//   _____________________________________________________________________________________________________ 
//  * ЛУЧШЕЕ РЕШЕНИЕ
// const dBScale = intensity => 10 * (12 + Math.log10(intensity));
// _____________________________________________________________________________________________________
//TODO 245 Enumerable Magic #3 - Does My List Include This?
// function include(arr, item){
//   return arr.includes(item);
// }
// _____________________________________________________________________________________________________
//TODO 246 Thinkful - Number Drills: Pixelart planning
// function isDivisible(wallLength, pixelSize){
//   return wallLength%pixelSize === 0
// }
// _____________________________________________________________________________________________________
//TODO 247 easy logs
// function logs(x , a, b){
//   return (Math.log(a*b) / Math.log(x));
//   }
// _____________________________________________________________________________________________________
//TODO 248 Exclamation marks series #11: Replace all vowel to exclamation mark in the sentence
// function replace(s){
//   return s.replace(/[aeiou]/gi, "!");
// }
// _____________________________________________________________________________________________________
//TODO 249 Determine offspring sex based on genes XX and XY chromosomes
// function chromosomeCheck(sperm) {
//   return /Y/.test(sperm) ? "Congratulations! You're going to have a son." : "Congratulations! You're going to have a daughter.";
//  }
// _____________________________________________________________________________________________________
//TODO 250  Geometry Basics: Circle Circumference in 2D
// function circleCircumference(circle) {
//   return +(2*Math.PI*circle.radius).toFixed(6)
// }
// _____________________________________________________________________________________________________
//TODO 251 Training JS #18: Methods of String object--concat() split() and its good friend join()
// function splitAndMerge(string, separator) {
//   return string.split(` `).map((item) => item.split('').join(separator)).join(" ")
// }
// _____________________________________________________________________________________________________
//TODO 252 They say that only the name is long enough to attract attention. They also said that only a simple Kata will have someone to solve it. This is a sadly story #1: Are they opposite?
// function isOpposite(s1,s2){
//   return s1.length > 0 ? s1 === [...s2].map((char) => char.toUpperCase() === char ? char.toLowerCase() : char.toUpperCase()).join('') : false;
//  }
// _____________________________________________________________________________________________________
//TODO 253 Training JS #32: methods of Math---round() ceil() and floor()
// function roundIt(n){
//   let arr = String(n).split(".");
//   return arr[0].length < arr[1].length ? Math.ceil(n) : arr[0].length > arr[1].length ? Math.floor(n) : Math.round(n);
// }
// _____________________________________________________________________________________________________
//TODO 254  Coding 3min : Jumping Dutch act
// function sc(floor){
//   return floor > 6 ? "Aa~ ".repeat(floor-1)+"Pa!" : floor <= 1 ? "": "Aa~ ".repeat(floor-1) + "Pa! Aa!";
// }
// _____________________________________________________________________________________________________
//TODO 255 Sleigh Authentication
// function Sleigh() {
//   this.name = "Santa Claus";
//   this.password = "Ho Ho Ho!";
// }

// Sleigh.prototype.authenticate = function(name, password) {
//   return this.name === name && this.password === password;
// };
// _____________________________________________________________________________________________________
//TODO 256 Sum of Multiples
// function sumMul(n,m){
//   if (n >= m) return "INVALID";
//   let sum = 0;
//   for( let i = n; i <= m; i+= n) {
//     sum += i;
//   }
//   return sum;
// }
// console.log (sumMul(2,9)); 
// _____________________________________________________________________________________________________
//TODO 257 String cleaning
// function stringClean(s){
//   return s.replace(/\d/g, "");
// }
// _____________________________________________________________________________________________________
//TODO 258 Man in the west
// function checkTheBucket(bucket){
//   return bucket.includes(`gold`);
// }
// _____________________________________________________________________________________________________
//TODO 259 Who ate the cookie?
// function cookie(x){
//   let a = "Who ate the last cookie? It was Zach!";
//   let b = "Who ate the last cookie? It was Monica!";
//   let c = "Who ate the last cookie? It was the dog!"
//   return typeof x === `string` ? a : typeof x === `number` ? b : c;  
// }
//   _____________________________________________________________________________________________________ 
//  * ЛУЧШЕЕ РЕШЕНИЕ
// function cookie(x) {
//   var t = typeof x
//   var who = t=="string" ? 'Zach' : t=="number" ? 'Monica' : 'the dog'
//   return `Who ate the last cookie? It was ${who}!`
// }
// _____________________________________________________________________________________________________
//TODO 260 Type of sum
// function typeOfSum(a, b) {
//   return typeof (a+b);
// }
// _____________________________________________________________________________________________________
//TODO 261 Geometry Basics: Circle Area in 2D
// function circleArea(circle){
//   return circle.radius**2*Math.PI;
// }
// _____________________________________________________________________________________________________
//TODO 262 Potenciation
// function power(x,y){
//   return x**y
// }
// _____________________________________________________________________________________________________
//TODO 263 Pillars
// function pillars(num_pill, dist, width) {
//   let num = num_pill - 2;
//   return num >= 1 ? num*width + (num+1)*dist*100 : num === 0 ? dist*100 : 0;
// }
// _____________________________________________________________________________________________________
//TODO 264 Pirates!! Are the Cannons ready!??
// const cannonsReady = (gunners) => {
//   return Object.values(gunners).every((item) => item === `aye`) ? 'Fire!' : 'Shiver me timbers!';
// }
// _____________________________________________________________________________________________________
//TODO 265 Is integer safe to use?
// function SafeInteger(n) {
//   return n < 9007199254740991 && Number.isInteger(n) 
// }
//   _____________________________________________________________________________________________________ 
//  * ЛУЧШЕЕ РЕШЕНИЕ
// function SafeInteger(n) {
//   return Number.isSafeInteger(n);
// }
// _____________________________________________________________________________________________________
//TODO 266 Fun with ES6 Classes #1 - People, people, people
// class Person {
//   static greetExtraTerrestrials(raceName){
//     return `Welcome to Planet Earth ${raceName}`;
//   }
//   constructor(firstName = 'John', lastName = 'Doe', age = 0, gender = 'Male'){
//     this.firstName = firstName;
//     this.lastName = lastName; 
//     this.age = age;
//     this.gender = gender;
//   }
//   sayFullName() {
//     return `${this.firstName} ${this.lastName}`;
//   }
// }
//   _____________________________________________________________________________________________________ 
//  * ЛУЧШЕЕ РЕШЕНИЕ
// class Person {
//   constructor(firstName = 'John', lastName = 'Doe', age = 0, gender = 'Male') {
//     Object.assign(this, { firstName, lastName, age, gender });
//   }
//   sayFullName() {
//     return `${this.firstName} ${this.lastName}`;
//   }
//   static greetExtraTerrestrials(raceName) {
//     return `Welcome to Planet Earth ${raceName}`;
//   }
// }
// _____________________________________________________________________________________________________
//TODO 267 For Twins: 1. Types
// function typeValidation(variable, type) {
//   return typeof (variable) === type;
// }
// _____________________________________________________________________________________________________
//TODO 268 Grasshopper - Bug Squashing
// var health = 100
// var position = 0
// var coins = 0

// function main () {
//   rollDice()
//   move()
//   combat()
//   getCoins()
//   buyHealth()
//   printStatus()
// }
// _____________________________________________________________________________________________________
//TODO 269 Exclamation marks series #4: Remove all exclamation marks from sentence but ensure a exclamation mark at the end of string
// function remove(s){
//   return s.replace(/!/g, "")+"!";
// }
// _____________________________________________________________________________________________________
//TODO 270 Training JS #7: if..else and ternary operator
// function saleHotdogs(n){
//   return  n < 5 ? n*100 : n >= 10 ? n*90 : n*95  
// }
// _____________________________________________________________________________________________________
//TODO 271 Exclamation marks series #1: Remove an exclamation mark from the end of string
// function remove(s){
//   return s.endsWith("!") ? s.slice(0, -1) : s;
// }
//   _____________________________________________________________________________________________________ 
//  * ЛУЧШЕЕ РЕШЕНИЕ
// const remove = s => s.replace(/!$/, '');
// _____________________________________________________________________________________________________
//TODO 272 !a == a ?!
// const a = `0`;
//   _____________________________________________________________________________________________________ 
//  * ЛУЧШЕЕ РЕШЕНИЕ
// First
// const a = []

// Second
// const a = ' '

// Third
// const a = '0'

// Fourth
// const a = new Boolean

// Fifth
// const a = {
//   num: true,
//   valueOf: function() {
//     return !this.num
//   }
// }
// _____________________________________________________________________________________________________
//TODO 273 Grasshopper - Terminal Game #1
// class Hero {
//   constructor(
//     name = 'Hero',
//     position = '00',
//     health = 100,
//     damage = 5,
//     experience = 0
//   ) {
//     this.name = name;
//     this.position = position;
//     this.health = health;
//     this.damage = damage;
//     this.experience = experience;
//   }
// }
// _____________________________________________________________________________________________________
//TODO 274 Collatz Conjecture (3n+1)
// var hotpo = function(n){
//   if(n === 1) return 0;
//   let counter = 0;
//   for (; ; counter++) {
//        if( n === 1) {
//        break;
//      } else if (n%2 === 0) {
//        n /=2;
//      } else {
//        n = n*3+1;
//      }
//   }
//   return counter;
// }
//   _____________________________________________________________________________________________________ 
//  * ЛУЧШЕЕ РЕШЕНИЕ
// var hotpo = function(n, acc = 0) {
//   if (n <= 1) {
//     return acc;
//   } else {
//     return hotpo(n%2==0 ? n/2 : 3*n+1, acc+1);
//   }
// }
// _____________________________________________________________________________________________________
//TODO 275 Points of Reflection
// function symmetricPoint(p, q) {
//   return [q[0] + (q[0] - p[0]), q[1] + (q[1] - p[1])]
// }
// _____________________________________________________________________________________________________
//TODO 276 Classy Classes
// class Person {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
//   get info (){
//     return `${this.name}s age is ${this.age}`
//   }
// }
//   _____________________________________________________________________________________________________ 
//  * ЛУЧШЕЕ РЕШЕНИЕ
// class Person {
//   constructor(name, age) {
//     this.info = `${name}s age is ${age}`;
//   }
// }
// _____________________________________________________________________________________________________
//TODO 277  Basic subclasses - Adam and Eve
// class God{
//   static create(){
//     return [new Man, new Woman];
//   }
// }
// class Human {};
// class Man extends Human{};
// class Woman extends Human{};
// _____________________________________________________________________________________________________
//TODO 278 Classy Extentions
// class Cat extends Animal {
//   constructor (name){
//     super();
//     this.name = name;
//   }
//   speak(){
//     return `${this.name} meows.`;
//   }
// }
// _____________________________________________________________________________________________________
//TODO 279 Age Range Compatibility Equation
// function datingRange(age){
//   return age > 14 ? `${ Math.floor(age/2) + 7 }-${ Math.floor(age - 7) * 2}` 
//                   : `${Math.floor(age - 0.10 * age)}-${Math.floor(age + 0.10 * age)}`
// }
//   _____________________________________________________________________________________________________ 
//  * ЛУЧШЕЕ РЕШЕНИЕ
// function datingRange(n) {
//   return [n <= 14 ? 0.9 * n : 0.5 * n + 7, n <= 14 ? 1.1 * n : 2 * n - 14].map(Math.floor).join("-");
// }
// _____________________________________________________________________________________________________
//TODO 280  BASIC: Making Six Toast.
// function sixToast(num) {
//   return num === 6 ? 0 : Math.abs(6 -  num );
// }
// _____________________________________________________________________________________________________
//TODO 281 Add Length
// function addLength(str) {
//   return str.split(" ").map((word) => word +=" "+word.length);
// }
// _____________________________________________________________________________________________________
//TODO 282 Character Frequency
// function charFreq(message) {
//   let arr = [...message].filter((item, index) => [...message].indexOf(item) === index);
//   let obj = {};
//   for (let i = 0; i < arr.length; i++){
//     obj[arr[i]] = [...message].filter((char) => char === arr[i]).length;
//   }
//   return obj;
// }
// console.log(charFreq("I like cats"));
//   _____________________________________________________________________________________________________ 
//  * ЛУЧШЕЕ РЕШЕНИЕ -  НЕ ПОНЯЛ
// function charFreq(message) {
//   return message.split('').reduce(function(acc, cur) {
//     return (acc[cur] = (acc[cur] || 0) + 1) && acc;
//   }, {});
// }
// _____________________________________________________________________________________________________
//TODO 283 Object Oriented Piracy
// class Ship {
//   constructor (draft ,crew) {
//     this.draft = draft;
//     this.crew = crew;
//   }
//   isWorthIt(){
//     return this.draft - this.crew*1.5 > 20; 
//   }
// }
// _____________________________________________________________________________________________________
//TODO 284 Grader
//  const grader = score => score > 1 || score < 0.6 ? `F`
// : score >= 0.9 && score <= 1 ? `A` 
// : score >= 0.8 ? `B` 
// : score >= 0.7 ? `C`
// : `D`
// _____________________________________________________________________________________________________
//TODO 285 Broken Counter
// class Counter {
//   constructor (){
//   this.value = 0;
//   }

//   increase(){
//       this.value++;
//   }

//   getValue(){
//      return this.value;
//   }

//   reset(){
//       this.value = 0;
//   }
// }
//   _____________________________________________________________________________________________________ 
//  * ЛУЧШЕЕ РЕШЕНИЕ
// function Counter() {
//   this.value = 0;
// }

// Counter.prototype = {
//   increase : function(){this.value++;},
//   getValue : function(){ return this.value;},
//   reset : function(){this.value = 0;}
// };
// _____________________________________________________________________________________________________
//TODO 286 Welcome to the City
// function sayHello( name, city, state ) {
//   return `Hello, ${name.join(" ")}! Welcome to ${city}, ${state}!`;
// }
// _____________________________________________________________________________________________________
//TODO 287 Grasshopper - Terminal Game Turn Function
// function doTurn () {
//   rollDice()
//   move()
//   combat()
//   getCoins()
//   buyHealth()
//   printStatus()
// }
// _____________________________________________________________________________________________________
//TODO 288 Rock Paper Scissors!
// const rps = (p1, p2) => {
//   return p1 === p2 ? `Draw!`
//   : p1 === 'scissors' && p2 === 'paper' || p1 === 'paper' && p2 === 'rock' || p1 === 'rock' && p2 === 'scissors' 
//     ? `Player 1 won!` : `Player 2 won!`
// };
//   _____________________________________________________________________________________________________ 
//  * ЛУЧШЕЕ РЕШЕНИЕ
// const rps = (p1, p2) => {
//   if(p1 === p2) {
//     return 'Draw!'
//   }; 
//   return `Player ${/rockscissors|scissorspaper|paperrock/.test(p1+p2)? 1 : 2} won!`;
// }
//   _____________________________________________________________________________________________________ 
//  * ЛУЧШЕЕ РЕШЕНИЕ
// const rps = (p1, p2) => {
//   if (p1 === p2) return "Draw!";
//   var rules = {rock: "scissors", paper: "rock", scissors: "paper"};
//   if (p2 === rules[p1]) {
//     return "Player 1 won!";
//   }
//   else {
//     return "Player 2 won!";
//   }
// };
// _____________________________________________________________________________________________________
//TODO 289 repeatIt
// let repeatIt = function(str, n) {
//   return typeof str !== `string` ? "Not a string" : str.repeat(n)
//    }
// _____________________________________________________________________________________________________
//TODO 290 Evil or Odious
// function evil(n) {
//   return (n.toString(2)+'').replace(/0/g, "").length%2 === 0 ?  "It's Evil!" : "It's Odious!";
// }
//   _____________________________________________________________________________________________________ 
//  * ЛУЧШЕЕ РЕШЕНИЕ
// function evil(n) {
//   return n.toString(2).match(/1/g).length % 2 ? 'It\'s Odious!' : 'It\'s Evil!';
// }
// _____________________________________________________________________________________________________
//TODO 291 Add new item (collections are passed by reference)
// function addExtra( listOfNumbers ){
//   return [...listOfNumbers,1]
// }
// _____________________________________________________________________________________________________
//TODO 292  Multiply the number
// function multiply(number){
//   let num = (Math.abs(number) + "").length;
//   return number*(5**num);
// }
// console.log(multiply(10));
// _____________________________________________________________________________________________________
//TODO 293 Contamination #1 -String-
// function contamination(text, char){
//   return char.repeat(text.length)
// }
//   _____________________________________________________________________________________________________ 
//  * ЕЩЁ ОДНО РЕШЕНИЕ
// const contamination = (s,v) => s.replace(/./g,v);
// _____________________________________________________________________________________________________
//TODO 294 Simple Fun #261: Whose Move
// function whoseMove(lastPlayer, win) {
//   return (lastPlayer === `black` && win === false) 
//   || (lastPlayer === `white` && win === true) ? `white` : `black`;
// }
//   _____________________________________________________________________________________________________ 
//  * ЛУЧШЕЕ РЕШЕНИЕ
// function whoseMove(lastPlayer, win) {
//   return win?lastPlayer:lastPlayer=="white"?"black":"white"
// }
// _____________________________________________________________________________________________________
//TODO 295 Unfinished Loop - Bug Fixing #1
// function createArray(number){
//   let newArray = [];
//   for(let counter = 1; counter <= number; counter++){
//     newArray.push(counter);
//   }
//   return newArray;
// }
// _____________________________________________________________________________________________________
//TODO 296 Duck Duck Goose
// function duckDuckGoose(players, goose) {
//   return players[(goose-1)%players.length].name;
// }
// _____________________________________________________________________________________________________
//TODO 297 Pole Vault Starting Marks
//* Не работает
// function startingMark(bodyHeight){ 
//   return Math.round((8.27+(bodyHeight - 1.22) + ((bodyHeight - 1.22)*2.93333333))*100)/100;
// }
//   _____________________________________________________________________________________________________ 
//  * ЕЩЁ ОДНО РЕШЕНИЕ РАБОЧЕЕ!
// function startingMark(bodyHeight){
//   const num = (10.67 - 9.45) / (1.83 - 1.52)
//     return Math.round((num * bodyHeight + 10.67 - num * 1.83) * 100) / 100
//   }
// _____________________________________________________________________________________________________
//TODO 298 isReallyNaN
// const isReallyNaN = Number.isNaN;
//   _____________________________________________________________________________________________________ 
//  * ЕЩЁ ОДНО РЕШЕНИЕ
// const isReallyNaN = (val) => Number.isNaN(val);
// _____________________________________________________________________________________________________
//TODO 299 Finish Guess the Number Game
// class Guesser {
//   constructor(number, lives) {
//     this.number = number;
//     this.lives = lives;
//   }
//   guess(n) {
//     if (this.lives <= 0) throw new Error ('Expect error already dead');
//     if (n === this.number) return true;
//     this.lives--; 
//     return false;
// }
// }

// let guesser = new Guesser(10, 2);
// console.log(guesser.guess(10));
// console.log(guesser.guess(2));
// console.log(guesser.guess(3));
// _____________________________________________________________________________________________________
//TODO 300 To square(root) or not to square(root)
// function squareOrSquareRoot(array) {
//   return array.map((num) =>  Number.isInteger(Math.sqrt(num)) ? num = Math.sqrt(num) : num**2 );  
// }
// console.log(squareOrSquareRoot([ 4, 3, 9, 7, 2, 1 ]));
// _____________________________________________________________________________________________________
//TODO 301 Push a hash/an object into array
// items = [];
// items.push({a: "b", c: "d"});
// _____________________________________________________________________________________________________
//TODO 302 Sum without highest and lowest number
// function sumArray(array) {
//   if(array === null || array.length <= 2 ) return 0;
//   let arrSort = array.sort((a,b) => a-b);
//   return arrSort.slice(1, arrSort.length - 1).reduce((acc,num) => acc += num)
// }
// _____________________________________________________________________________________________________
//  * ЛУЧШЕЕ РЕШЕНИЕ
// sumArray = a => a ? a.sort((x, y) => x - y).slice(1, -1).reduce((s, e) => s + e, 0) : 0

// _____________________________________________________________________________________________________
//TODO 303 Calculate Price Excluding VAT
// function excludingVatPrice(price){
//   if(price === null) return -1;
//   return +((price*100)/115).toFixed(2);
// }
// _____________________________________________________________________________________________________
//TODO 304 Reversing Words in a String
// function reverse(string){
//   return string.split(` `).reverse().join(" ");
// }
// _____________________________________________________________________________________________________
//TODO 305 ES6 string addition
// function joinStrings(string1, string2){
//   return `${string1} ${string2}`
// }
// _____________________________________________________________________________________________________
//TODO 306  Fix the Bugs (Syntax) - My First Kata
// function myFirstKata(a, b) {
//   return typeof(a) === "number" && typeof(b) === "number" ?  (a % b) + (b % a) : false;
// }

// _____________________________________________________________________________________________________
//TODO 307 Chuck Norris VII - True or False? (Beginner)
// function ifChuckSaysSo(){
//   return `a` === `b`;
// }
// _____________________________________________________________________________________________________
//TODO 308 Plural 
// function plural(n) {
//   return n !== 1 
// }
// _____________________________________________________________________________________________________
//TODO 309 Get number from string
// function getNumberFromString(s) {
//   return Number(s.replace(/\D/gi, ""));
// }

// _____________________________________________________________________________________________________
//TODO 310 validate code with simple regex
// function validateCode (code) {
//   return /^[123]/.test(code)
// }
// _____________________________________________________________________________________________________
//TODO 311 Training JS #6: Basic data types--Boolean and conditional statements if..else
// function trueOrFalse(val){
//   if (val) return "true";             
//   else return "false";
// }
// _____________________________________________________________________________________________________
//TODO 312 Simple Comparison?
// function add(a, b){
// 	return a+"" === b+''
// }
// _____________________________________________________________________________________________________
//TODO 313 String Templates - Bug Fixing #5
// function buildString(...template){
//   return `I like ${template.join(', ')}!`;
// }
// _____________________________________________________________________________________________________
//TODO 314 Grasshopper - Combine strings
// let combineNames = (name, surname) => name+" "+surname;
// _____________________________________________________________________________________________________
//TODO 315 Formatting decimal places #0
// function twoDecimalPlaces(n) {
//   return +n.toFixed(2);
// }
// _____________________________________________________________________________________________________
//TODO 316 Printing Array elements with Comma delimiters
// function printArray(array){
//   return array.join(",");
// }
// _____________________________________________________________________________________________________
//TODO 317 Fuel Calculator
// function fuelPrice(lit, pP) {
//   let price = lit >= 12 ? pP - 0.25 : pP - (5*Math.floor(lit/2))/100; 
//   return +(lit*price).toFixed(2);
// }
// _____________________________________________________________________________________________________
//  * ЛУЧШЕЕ РЕШЕНИЕ
// function fuelPrice(litres, pricePerLiter) {
//   var discount = Math.min(Math.floor(litres/2) * 0.05, 0.25);
//   var price = litres * (pricePerLiter - discount);
//   return Math.round(price*100) / 100;
// }
// _____________________________________________________________________________________________________
//TODO 318  Days in the year
// function yearDays(year){
//   return year%4 === 0 && year%100 !== 0 ? `${year} has 366 days` : year%400 === 0 && year%100 === 0 ? `${year} has 366 days` : `${year} has 365 days`;
// }
// _____________________________________________________________________________________________________
//  * ЛУЧШЕЕ РЕШЕНИЕ
// function yearDays(year) {
//   return year + ' has ' + (!(year % 100) && year % 400 || year % 4 ? '365' : '366') + ' days';
// }
// _____________________________________________________________________________________________________
//TODO 319 Leonardo Dicaprio and Oscars
// function leo(oscar){
//   return oscar === 88 ? "Leo finally won the oscar! Leo is happy"
//   : oscar === 86 ? "Not even for Wolf of wallstreet?!" 
//   : oscar < 88 ? "When will you give Leo an Oscar?" : "Leo got one already!"
// }
// _____________________________________________________________________________________________________
//TODO 320 Heads and Legs
// const isNatural = animal => animal >= 0 && Number.isInteger(animal)
// const animals = (heads, legs) => {
//   const cows = (legs -  heads*2)/2;
//   const chickens = heads - cows

//   return isNatural(chickens) && isNatural(cows)
//     ? [chickens, cows]
//     : 'No solutions'
// }
// _____________________________________________________________________________________________________
//  * ЛУЧШЕЕ РЕШЕНИЕ
// function animals(heads, legs){
//   var cows = legs%2 ? -1 : legs/2-heads;
//   return heads>=cows && cows>=0 ? [heads-cows, cows] : "No solutions";
// }
// _____________________________________________________________________________________________________
//TODO 321 Is your period late?
// function periodIsLate(last, today, cycleLength) {
//   return today.getTime() - last.getTime() > cycleLength*(24*60*60*1000);
// }
// _____________________________________________________________________________________________________
//TODO 322 Remove the time
// function shortenToDate(longDate) {
//   return longDate.replace(/.\s\d*[pa]m/gi, "");
// }
// _____________________________________________________________________________________________________
//TODO 323 Remove the time
// function shortenToDate(longDate) {
//   return longDate.replace(/.\s\d*[pa]m/gi, "");
// }
// _____________________________________________________________________________________________________
//  * ЛУЧШЕЕ РЕШЕНИЕ
// function shortenToDate(longDate) {
//   return longDate.split(",")[0];
// }
// _____________________________________________________________________________________________________
//TODO 324 Crash Override
// function aliasGen(name, sur){
//   let n = name[0].toUpperCase();
//   let s = sur[0].toUpperCase();
//   return /[A-Z]/.test(n) && /[A-Z]/.test(s) ? firstName[n] + " " + surname[s]
//   : "Your name must start with a letter from A - Z.";
// }
// _____________________________________________________________________________________________________
//TODO 325  Find the Slope
// function slope(points){
//   let y = points[3] - points[1];
//   let x = points[2] - points[0];
//   let result =  y/x;
//    return Number.isFinite(result) ? `${result}` : 'undefined';
// }
// _____________________________________________________________________________________________________
//TODO 326 Arguments to Binary addition
// function arr2bin(arr){
//   return arr.reduce((acc, item) => typeof item === 'number' ? acc += item : acc, 0).toString(2)
// }
// _____________________________________________________________________________________________________
//TODO 327 Simple Change Machine
// function changeMe(moneyIn){
//   let arr = ["£5", "£2", "£1", "50p", "20p"]
//   if (!arr.includes(moneyIn)) return moneyIn;
//   if(moneyIn.includes("£")) {
//     return moneyIn[1]*100%20 === 0 ? "20p ".repeat(moneyIn[1]*5).trim() : "20p ".repeat(moneyIn[1]*5)+'10p'
//   }
//   return parseInt(moneyIn) === 50 ? "20p 20p 10p" : parseInt(moneyIn) === 20 ? "10p 10p" : "10p";
// }
// _____________________________________________________________________________________________________
//  * ЛУЧШЕЕ РЕШЕНИЕ
// function changeMe(moneyIn){
//   switch (moneyIn) {
//     case '£5': return '20p '.repeat(25).trim()
//     case '£2': return '20p '.repeat(10).trim()
//     case '£1': return '20p '.repeat(5).trim()
//     case '50p': return '20p 20p 10p'
//     case '20p': return '10p 10p'
//     default: return moneyIn
//   }
// }
// _____________________________________________________________________________________________________
//TODO 328 Training JS #34: methods of Math---pow() sqrt() and cbrt()
// function cutCube(volume,n){
//   return Number.isInteger(Math.cbrt(n)) && Number.isInteger(Math.cbrt(volume/n));
// }
// _____________________________________________________________________________________________________
//  * ЛУЧШЕЕ РЕШЕНИЕ
// function cutCube(volume,n){
//   return !(Math.cbrt(n) % 1) && !(Math.cbrt(volume / n) % 1);
// }
// _____________________________________________________________________________________________________
//TODO 329 Training JS #31: methods of arrayObject---isArray() indexOf() and toString()
// function blackAndWhite(arr){
//   return !Array.isArray(arr) ? "It's a fake array" 
//   : Array.isArray(arr) && arr.includes(5) && arr.includes(13) ?  "It's a black array" 
//   : "It's a white array";
// }
// _____________________________________________________________________________________________________
//TODO 330  Training JS #29: methods of arrayObject---concat() and join()
// function bigToSmall(arr){
//   let newArr = [];
//   return newArr.concat(...arr).sort((a,b) => b - a).join(`>`);
// }
// _____________________________________________________________________________________________________
//TODO 331 Training JS #21: Methods of String object--trim() and the string template
// function fiveLine(s){
//   let result = []
//   for (let i = 1; i <= 5; i++) {
//     result.push(s.trim().repeat(i));
//   }
//   return result.join(`\n`);
// }
// _____________________________________________________________________________________________________
//  * ЛУЧШЕЕ РЕШЕНИЕ
// let fiveLine = (s, t=s.trim(), r='') => [...Array(5)].map(_ => r += t).join('\n');
// _____________________________________________________________________________________________________
//TODO 332  Training JS #17: Methods of String object--indexOf(), lastIndexOf() and search()
// function firstToLast(str,c){
//   return str.indexOf(c) > -1 && str.lastIndexOf(c) === str.indexOf(c) ? 0
//         : str.indexOf(c) === -1 ? -1 
//         : str.lastIndexOf(c) - str.indexOf(c);
// }
// _____________________________________________________________________________________________________
//TODO 333 Training JS #16: Methods of String object--slice(), substring() and substr()
// function cutIt(arr){
//   let shortLength = Math.min(...arr.map((item) => item = item.length));
//   return arr.map((item) => item.slice(0, shortLength));
// }
// _____________________________________________________________________________________________________
//TODO 334 Training JS #14: Methods of Number object--toString() and toLocaleString()
// function colorOf(r,g,b){
//   r = r.toString(16);
//   g = g.toString(16);
//   b = b.toString(16);
//   if (r.length < 2) {r = "0" + r};
//   if (g.length < 2) {g = "0" + g};
//   if (b.length < 2) {b = "0" + b};
 
//     return "#"+r+g+b;
// }
// _____________________________________________________________________________________________________
// function colorOf(r,g,b){
//   var f = function (x) {
//     return (x<16 ? '0' : '') + x.toString(16) 
//   };
  
//   return "#" +  f(r) + f(g) + f(b);
// }
// _____________________________________________________________________________________________________
//  * ЛУЧШЕЕ РЕШЕНИЕ
// const colorOf = (...rgb) => '#' + rgb.map(x => `0${x.toString(16)}`.slice(-2)).join('')
// _____________________________________________________________________________________________________
//TODO 335  Training JS #15: Methods of Number object--toFixed(), toExponential() and toPrecision()
// function howManySmaller(arr,n){
//   return arr.filter((item) =>  +item.toFixed(2) < n).length;
// }
// _____________________________________________________________________________________________________
//TODO 336 Training JS #13: Number object and its properties
// const whatNumberIsIt = n => isNaN(n) ? "Input number is Number.NaN" 
//                                       : n === Number.MAX_VALUE ? "Input number is Number.MAX_VALUE"
//                                       : n === Number.MIN_VALUE ? "Input number is Number.MIN_VALUE" 
//                                       : n === -Infinity ? "Input number is Number.NEGATIVE_INFINITY" 
//                                       : n === Infinity ? "Input number is Number.POSITIVE_INFINITY"
//                                       : `Input number is ${n}`;
// _____________________________________________________________________________________________________
//TODO 337 Training JS #12: loop statement --for..in and for..of
// function giveMeFive(obj){
//   let arr = [];
//   for (let key in obj){
//     arr.push(key, obj[key]);
//   }
//   return arr.filter((item) => item.length === 5);
// }
// console.log(giveMeFive({Our:"earth",is:"a",beautyful:"world"}))
// _____________________________________________________________________________________________________
//TODO 338 noobCode 02: TRICKY QUESTIONS ( primitives and operator precedence)
// function greaterThanLessThan (a,b,c) {
//   return a < b < c;
// }
// _____________________________________________________________________________________________________
//TODO 339 Training JS #11: loop statement --break,continue
// function grabDoll(dolls){
//   let bag= [];
//   for (let i = 0; i < dolls.length; i++){
//     if (bag.length > 2) break;
//     if(dolls[i] === "Hello Kitty" || dolls[i] === "Barbie doll") {
//       bag.push(dolls[i]);
//     } else continue;
//   }
//   return bag;
// }
// _____________________________________________________________________________________________________
//TODO 340  Training JS #10: loop statement --for
// function pickIt(arr){
//   let odd = [], even = [];
//   for(let i = 0; i < arr.length; i++){
//    arr[i]%2 === 0 ? even.push(arr[i]) : odd.push(arr[i])
//   }
//   return [odd,even];
// }
// _____________________________________________________________________________________________________
//  * ЛУЧШЕЕ РЕШЕНИЕ
// function pickIt (arr) {
//   let odd = []
//   let even =[]  
//   for (let x of arr) {
//       ((x % 2) ? odd : even).push(x)    
//   }
//   return [odd, even]
// }
// _____________________________________________________________________________________________________
//TODO 341 Training JS #9: loop statement --while and do..while
// function padIt(str,n){
//   let i = 1
//   while(i <= n){
//     i++;
//     i%2 ? str = str + `*` : str = `*`+ str;
//   }
//   return str;
// }
// _____________________________________________________________________________________________________
//TODO 342 Training JS #4: Basic data types--Array
// function getLength(arr){
//   return arr.push();
// }
// function getFirst(arr){
//   return arr.shift();
// }
// function getLast(arr){
//   return arr.pop();
// }
// function pushElement(arr){
//   let i = 1;  
//   arr.push(i)
//   return arr;
// }

// function popElement(arr){
//   arr.pop();
//   return arr;
// }
// _____________________________________________________________________________________________________
//TODO 343 Training JS #3: Basic data types--String
// let a1="A",a2="a",b1="B",b2="b",c1="C",c2="c",d1="D",d2="d",e1="E",e2="e",n1="N",n2="n"
// function Dad(){
//   return d1 + a2 + d2;
// }
// function Bee(){
//   return b1 + e2 + e2;
// }
// function banana(){
//   return b2 + a2 + n2 + a2 + n2 + a2;
// }
// function answer1(){
//   return "no";
// }
// function answer2(){
//   return "no";
// }
// function answer3(){
//   return "yes";
// }
// _____________________________________________________________________________________________________
//TODO 344 Training JS #2: Basic data types--Number
// let v1 = 50, 
//     v2 = 100, 
//     v3 = 150, 
//     v4 = 200,
//     v5 = 2,
//     v6 = 250;
// function equal1(){
//   var a = v1   
//   var b = v1   
//   return a + b;
// }

// function equal2(){
//   var a = v3;
//   var b=  v1;
//   return a - b;
// }
// function equal3(){
//   var a = v1;
//   var b=  v5;
//   return a*b;
// }
// function equal4(){
//   var a= v4;
//   var b= v5;
//   return a/b;
// }
// function equal5(){
//   var a= v6;
//   var b= v3;
//   return a%b;
// }
// _____________________________________________________________________________________________________
//TODO 345 Training JS #1: create your first JS function and print "Helloworld!"
// function helloWorld(){
//   var str = "Hello World!";
//  console.log("Hello World!");
// }
// _____________________________________________________________________________________________________
//TODO 346 Blood-Alcohol Content
// const bloodAlcoholContent = ({ ounces, abv }, weight, sex, time) =>
//   +((ounces * abv * 5.14 / weight * (sex === 'male' ? 0.73 : 0.66) - 0.015 * time).toFixed(4));
// _____________________________________________________________________________________________________
//TODO 347 Fix your code before the garden dies!
// function rainAmount(mm) {
//   if (mm < 40) {
//        return `You need to give your plant ${Math.abs(mm - 40)}mm of water`;
//   } else {
//        return "Your plant has had more than enough water for today!"
//   };
// }
// _____________________________________________________________________________________________________
//TODO 348 Count words
// function countWords(str) {
//   let strr = str.replace(/\s+/g, " ").trim();
//   return  strr === "" ? 0 : strr.split(` `).length;
// }
// _____________________________________________________________________________________________________
//  * ЛУЧШЕЕ РЕШЕНИЕ
// function countWords(str) {
//   return (str.match(/[^\s]+/g) || []).length;
// }
// _____________________________________________________________________________________________________
//TODO 349 Circular Objects #1 - Running around in circles
// let circular ={value:"Hello World"}
// circular.self = circular;
// _____________________________________________________________________________________________________
//TODO 350 Be Concise IV - Index of an element in an array
// let find = (array,element) => (array.indexOf(element)>-1) ? array.indexOf(element) : "Not found";
// _____________________________________________________________________________________________________
//TODO 351 Generate user links
// function generateLink(user) {
//   return `http://www.codewars.com/users/${encodeURIComponent(user)}`
// }
// _____________________________________________________________________________________________________
//TODO 352 SpeedCode #3 × Fun with ES6 Classes #5 - Dogs and Classes
// class Labrador extends Dog {
//   constructor(name, age, gender, master) {
//     super(name, age, gender, 'Labrador', 'Large', master, true)
//   }
// }
// _____________________________________________________________________________________________________
//TODO 353 Be Concise III - Sum Squares
// const sumSquares = (array) => array.reduce((acc, item) => acc += item**2, 0);
// _____________________________________________________________________________________________________
//TODO 354 Be Concise II - I Need Squares
// let squaresOnly = array => array.filter((item) => Number.isInteger(Math.sqrt(item)));
// _____________________________________________________________________________________________________
//  * ЛУЧШЕЕ РЕШЕНИЕ
// var squaresOnly = array => array.filter(number => Math.sqrt(number) % 1 === 0);
// _____________________________________________________________________________________________________
//TODO 355 Implement Array.prototype.filter()
// Array.prototype.filter = function (func) {
//   let newArr = [];
  
//   for(let i = 0; i < this.length; i++){
//     if(func(this[i])) newArr.push(this[i])
//   }
  
//   return newArr;
// }
// _____________________________________________________________________________________________________
//TODO 356 Grasshopper - Object syntax debug
// let rooms = {
//   first: {
//     description: 'This is the first room',
//     items: {
//       chair: 'The old chair looks comfortable',
//       lamp: 'This lamp looks ancient'
//     }
//   },
//   second: {
//     description: 'This is the second room',
//     items: {
//       couch: 'This couch looks like it would hurt your back',
//       table: 'On the table there is an unopened bottle of water'
//     }
//   }
// }
// _____________________________________________________________________________________________________
//TODO 357 Improving Math.round(x)
// Math.roundTo = function (number, precision) {
//   return +number.toFixed(precision);
// }
// _____________________________________________________________________________________________________
//TODO 358 Shifty Closures
// let greet_abe = function() {
//   let name = 'Abe';
//   return `Hello, ${name}!`;
// };
// let greet_ben = function() {
//   let name = 'Ben';
//   return `Hello, ${name}!`;
// };
// _____________________________________________________________________________________________________
//TODO 359 Job Matching #1
// function match(candidate, job) {
//   if(candidate.minSalary === undefined || job.maxSalary === undefined) throw new Error('');
//   return candidate.minSalary*0.9 <= job.maxSalary;
// }
// _____________________________________________________________________________________________________
//  * ЛУЧШЕЕ РЕШЕНИЕ
// const match = (candidate, job) => {
//   if (!job.maxSalary || !candidate.minSalary) throw TypeError('Missing salary');
//   return job.maxSalary >= (candidate.minSalary * .9);
// };
// _____________________________________________________________________________________________________
// function match({minSalary}, {maxSalary}) {
//   if (!minSalary || !maxSalary) throw new Error('')
//   return minSalary*0.9<=maxSalary
//   }
// _____________________________________________________________________________________________________
//! не понятно, почему стрелки не работают с throw
//  function match(candidate,job) {
//   return candidate.minSalary && job.maxSalary ? candidate.minSalary*.9 <= job.maxSalary : _|_;
// }
// _____________________________________________________________________________________________________
//TODO 360  Regex count lowercase letters
//  function lowercaseCount(str){
//     return str.split(/[a-z]/).length-1;
// }
// _____________________________________________________________________________________________________
//  * ЛУЧШЕЕ РЕШЕНИЕ
// function lowercaseCount(str){
//   return str.replace(/[^a-z]/g, "").length;
// }
// _____________________________________________________________________________________________________
// function lowercaseCount(str){
//   return (str.match(/[a-z]/g) || []).length
// }
// _____________________________________________________________________________________________________
//TODO 361 A bugs trilogy: Episode 1 - "Let Math.Random(); decide your future"
// function yourFutureCareer() {
//   let career = Math.random();
//   if (career <= 0.32) {
//     return `FrontEnd Developer`;
//   } else if (career <= 0.65) {
//     return `BackEnd Developer`;
//   } else {
//     return 'Full-Stack Developer';
//   }
// }
// yourFutureCareer();
// _____________________________________________________________________________________________________
//TODO 362 Power
// function numberToPower(number, power){
//   let num = number;
//   if ( power === 0) return 1;
//   for(let i = 1; i < power; i++){
//     num *= number;
//   }
//   return num;
// }
// _____________________________________________________________________________________________________
//  * ЛУЧШЕЕ РЕШЕНИЕ
// const numberToPower = (number,power) => power > 0 ? number * numberToPower(number,power-1) : 1;
// _____________________________________________________________________________________________________
//TODO 363 Grasshopper - Order of operations
// function orderOperations () {
//   return (2 + 2) * (2 + 2) * 2
// }
// _____________________________________________________________________________________________________
//TODO 364 Find variable which breaks strict comparison!
// function findStrangeValue() {
//   return NaN
// }
// _____________________________________________________________________________________________________
//TODO 365  Grasshopper - Array Mean
// let findAverage = nums => nums.reduce((acc, num) => acc += num)/nums.length;
// _____________________________________________________________________________________________________
//TODO 366  Switch/Case - Bug Fixing #6
// function evalObject(value){
//   switch(value.operation){
//     case'+': return value.a + value.b;
//     case'-': return value.a - value.b;
//     case'/': return value.a / value.b;
//     case'*': return value.a * value.b;
//     case'%': return value.a % value.b;
//     case'^': return Math.pow(value.a, value.b);
//   }
// }
// _____________________________________________________________________________________________________
//TODO 367 Lexical this
// let Person = function(){
//   let person = {
//     _name: "Leroy",
//     _friends: [],
//     fillFriends(f){
//       this._friends.push(...f);
//     }
//   }
//   return person;
// }
// _____________________________________________________________________________________________________
//TODO 368 Are there any arrows left?
// function anyArrows(arrows){
//   return arrows.some((item) => !item.damaged);
// }
// _____________________________________________________________________________________________________
//TODO 369 Take an Arrow to the knee, Functionally
// let ArrowFunc = function(arr) {
//   return arr.map((item) => item = String.fromCharCode(item)).join(''); //Complete this function
// }
// _____________________________________________________________________________________________________
//TODO 370 Online RPG: player to qualifying stage?
// function playerRankUp (points) {
//   return points >= 100 ? "Well done! You have advanced to the qualifying stage. Win 2 out of your next 3 games to rank up." : false;
// }
// _____________________________________________________________________________________________________
//TODO 371 Unexpected parsing
// function getStatus(isBusy) {
//   let msg = (isBusy ? "busy" : "available");
//   return { status: msg }
// }
// _____________________________________________________________________________________________________
//TODO 372 Barking mad
// function Dog (breed) {
//   this.breed = breed;
// }

// let snoopy = new Dog("Beagle");

// Dog.prototype.bark = function() {
//   return "Woof";
// };

// let scoobydoo = new Dog("Great Dane");
// _____________________________________________________________________________________________________
//TODO 373 "this" is a problem
// function NameMe(first, last) {
//   this.firstName = first;
//   this.lastName = last;
//   this.name = first + ' ' + last;
// }
// _____________________________________________________________________________________________________
//TODO 374 Hello Happy Codevarrior!
// class Warrior {
//   constructor(newName) {
//     this.wName = newName;
//   }
//   name(newName) {
//     if (newName) {
//       this.wName = newName;
//     }
//     return this.wName
//   }
// }
// Warrior.prototype.toString = function() {
//   return `Hi! my name's ${this.wName}`
// }
// ____________________________________________________________________________________________________
//TODO 375 Color Ghost
// class Ghost {
//   constructor() {
//     this.colors = ['white', 'yellow', 'purple', 'red']
// }
//   get color () {
//     return this.colors [Math.floor( Math.random() * this.colors.length ) ]
//   }
// }
// ____________________________________________________________________________________________________
//TODO 376 Max Headroom and JavaScript style
// function getMax1() {
//   return { name: 'Max Headroom'};
// }

// function getMax2()  {
//   return { name: 'Max Headroom'};
// }
// ____________________________________________________________________________________________________
//TODO 377 Semi-Optional
// function wrap(value) {
//   return { value:value};
// }
// ____________________________________________________________________________________________________
//TODO 378 Return to Sanity
// function mystery() {
//   let results = {sanity: 'Hello'};
//   return results;
// }
// ____________________________________________________________________________________________________
//TODO 379 Basic Training: Add item to an Array
// websites.push(`codewars`);
// ____________________________________________________________________________________________________
//TODO 380 Mr. Freeze
// Object.freeze(MrFreeze);
// ____________________________________________________________________________________________________
//TODO 381  Invalid Login - Bug Fixing #11
// function validate(username, password){
//   let database = new Database();
//   if(password.includes(`/`) || password.includes(`|`)) return 'Wrong username or password!';
//   return database.login(username, password);
// }
// ____________________________________________________________________________________________________
//TODO 382 Localize The Barycenter of a Triangle
// function barTriang(p1, p2, p3){
//   return [+((p1[0]+p2[0]+p3[0])/3).toFixed(4), +((p1[1]+p2[1]+p3[1])/3).toFixed(4)];
// }
// ____________________________________________________________________________________________________
//TODO 383 Do something "n.times" (Simplifying "for" loops)
// Number.prototype.times = function(f) {
//   for (let i = 0; i < this; i++) f(i)
// }
// ____________________________________________________________________________________________________
// ____________________________________________________________________________________________________
//TODO 384 simple calculator
// function calculator(a,b,sign){
//  if(typeof a !== `number` || typeof b !== `number` || sign.match(/\+|-|\*|\//g) === null ){
//     return "unknown value"; 
//    }
//  switch(sign){
//      case `+`: return a + b;
//      case `-`: return a - b;
//      case `*`: return a * b;
//      case `/`: return a/b;
//  }
// }
// ____________________________________________________________________________________________________
//TODO 385  Coefficients of the Quadratic Equation
// function quadratic(x1, x2){
//   return [1,-x1 - x2,x1 * x2];
// }
// ____________________________________________________________________________________________________
//TODO 386 Playing with cubes II
// class Cube {
//   constructor(n = 0) {
//     this.setSide(n);
//   }

//   getSide() {
//     return this.side;
//   }

//   setSide(n) {
//     if (typeof n !== "number") throw new Error("Only numbers");
//     this.side = Math.abs(n);
//   }
// }








// //! TODO What's up next? НЕ РАБОТАЕТ РЕШЕНИЕ , ЧТО БРЕД?
// function nextItem(xs, item) {
// 	return xs.indexOf(item) === -1 ? undefined : xs[xs.indexOf(item)+1];
//   }
// -----------------------------
// function nextItem(xs, item) {
// 	for (let i = 0; i < xs.length; i++){
// 	  if (xs[i] === item) {
// 		return xs[i+1];
// 	  }
// 	}
//   }

//!  поля объектов не могут называться с ``
//TODO
// var Obj = {
//   ' ':'%20',
//   ';':'%3B',
//   "`":'%60',
//   '"':'%22',
//   '/':'%2F',
//   '+':'%2B',
//   ',':'%2C',
//   '^':'%5E',
//   '|':'%7C',
//   '?':'%3F',
//   '#':'%23',
//   '$':'%24',
//   '&':'%26',
//   '}':'%7D',
//   ':':'%3A',
//   '{':'%7B',
//   ']':'%5D',
//   '[':'%5B',
//   '@':'%40',
//   '<':'%3C',
//   '>':'%3E',
// }