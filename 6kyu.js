// _____________________________________________________________________________________________________________________________________
//TODO 1. Find the odd int
// function findOdd(A) {
// 	return A.find((item) => A.filter((elem) => item === elem).length%2 !== 0)
//    }
// ____________________________________________________
//* Лучшее Решение
// const findOdd = (xs) => xs.reduce((a, b) => a ^ b);как
// _____________________________________________________________________________________________________________________________________
//TODO 2. Multiples of 3 or 5
// function solution(number){
//   if (number <= 0 ) return 0
//   let sum = 0;
//   for(let i = 0; i < number; i++){
//     if(i % 5 === 0 && i % 3 === 0) {
//       sum += i
//     } else if (i% 5 === 0) {
//       sum += i
//     } else if (i% 3 === 0) {
//       sum += i
//     }
//   }
//   return sum
// }
// _____________________________________________________________________________________________________________________________________
//TODO 3.  Stop gninnipS My sdroW!
// function spinWords(string){
//   return string.split(" ").map((str) => str.length >= 5 ? [...str].reverse().join("") : str ).join(" ")
// }
// _____________________________________________________________________________________________________________________________________
//TODO 4. Sum of Digits / Digital Root
// function digital_root(n) {
//   if (n < 10) return n;
//   return digital_root(
//     [...(n + "")].reduce((acc, item) => (acc += Number(item)), 0)
//   );
// }
// ____________________________________________________
//* Лучшее Решение
// function digital_root(n) {
// 	return (n - 1) % 9 + 1;
//   }
// _____________________________________________________________________________________________________________________________________
//TODO 5. Array.diff
// function arrayDiff(a, b) {
//   return a.filter((item, index) => b.includes(item) !== true);
// }
// _____________________________________________________________________________________________________________________________________
//TODO 6. Who likes it?
// function likes(names) {
//   if (names.length === 0) return "no one likes this";
//   if (names.length === 1) return `${names[0]} likes this`;
//   if (names.length === 2) return `${names[0]} and ${names[1]} like this`;
//   if (names.length === 3)
//     return `${names[0]}, ${names[1]} and ${names[2]} like this`;
//   if (names.length > 3)
//     return `${names[0]}, ${names[1]} and ${names.length - 2} others like this`;
// }
// ____________________________________________________
//! switch
// function likes(names) {
// 	names = names || [];
// 	switch(names.length){
// 	  case 0: return 'no one likes this'; break;
// 	  case 1: return names[0] + ' likes this'; break;
// 	  case 2: return names[0] + ' and ' + names[1] + ' like this'; break;
// 	  case 3: return names[0] + ', ' + names[1] + ' and ' + names[2] + ' like this'; break;
// 	  default: return names[0] + ', ' + names[1] + ' and ' + (names.length - 2) + ' others like this';
// 	}
//   }
// _____________________________________________________________________________________________________________________________________
//TODO 7.
