//TODO 1 Where my anagrams at?
// function anagrams(word, words) {
// 	let newWord = [...word].sort().join("");
// 	return words.filter((item) => [...item].sort().join("") === newWord)
//   }
// ___________________________________________________
//TODO 2.  Simple Pig Latin
// function pigIt(str) {
//   const arrString = str.split(" ");
//   const word = arrString.map((word) =>
//     /\w/i.test(word) ? (word = word.slice(1) + word[0] + "ay") : word
//   );
//   return word.join(" ");
// }
// ___________________________________________________
//TODO 3. Valid Parentheses
// function validParentheses(parens) {
//   let openParen = 0;
//   let closeParen = 0;
//   for(let i = 0; i < parens.length; i++) {
//     if(closeParen > openParen) {
//       return false;
//     }
//     if(parens[i] === ")") {
//       closeParen++;
//     } else {
//       openParen++
//     }
//   }
//   return openParen === closeParen
// }
// _______________________________________________________________________________________________________________
////TODO 4. Human Readable Time
// function humanReadable (seconds) {
// 	if(seconds > 359999) return "biger than max number"
// 	const hours = Math.floor(seconds/(60*60));
// 	const minutes = Math.floor((seconds - hours*60*60)/60);
// 	const second = seconds - hours*60*60 - minutes*60
// 	const resultHours = hours < 10 ? "0"+ hours : hours;
// 	return `${hours < 10 ? "0"+ hours : hours}:${minutes < 10 ? "0"+ minutes : minutes}:${second < 10 ? "0" + second : second}`
//   }
//_______________________________________________________________________________________________________________
//* Лучшее Решение
// function humanReadable(seconds) {
//   var pad = function(x) { return (x < 10) ? "0"+x : x; }
//   return pad(parseInt(seconds / (60*60))) + ":" +
//          pad(parseInt(seconds / 60 % 60)) + ":" +
//          pad(seconds % 60)
// }
// ___________________________________________________
//TODO 5. Moving Zeros To The End
// function moveZeros(arr) {
// 	const arrZero = arr.filter(num=> num === 0)
// 	const arrWithoutZero = arr.filter(num => num !== 0);
// 	return [...arrWithoutZero, ...arrZero]
//   }
// ___________________________________________________
//TODO 6.Directions Reduction
// function delereSmth(newArr) {
// 	newArr.forEach((item, index) => {
// 	  if (item === "NORTH" && newArr[index + 1] === "SOUTH") {
// 		newArr.splice(index, 2);
// 	  }
// 	  if (item === "SOUTH" && newArr[index + 1] === "NORTH") {
// 		newArr.splice(index, 2);
// 	  }
// 	  if (item === "EAST" && newArr[index + 1] === "WEST") {
// 		newArr.splice(index, 2);
// 	  }
// 	  if (item === "WEST" && newArr[index + 1] === "EAST") {
// 		newArr.splice(index, 2);
// 	  }
// 	  return newArr;
// 	});
//   }

//   function dirReduc(arr) {
// 	let newArr = [...arr];
// 	for (;;) {
// 	  if (
// 		!newArr.some(
// 		  (item, index) =>
// 			(item === "NORTH" && newArr[index + 1] === "SOUTH") ||
// 			(item === "SOUTH" && newArr[index + 1] === "NORTH") ||
// 			(item === "EAST" && newArr[index + 1] === "WEST") ||
// 			(item === "WEST" && newArr[index + 1] === "EAST")
// 		)
// 	  ) {
// 		return newArr;
// 	  }
// 	  delereSmth(newArr);
// 	}
//   }
//_______________________________________________________________________________________________________________
//* Лучшее Решение
// function dirReduc(plan) {
// 	var opposite = {
// 	  'NORTH': 'SOUTH', 'EAST': 'WEST', 'SOUTH': 'NORTH', 'WEST': 'EAST'};
// 	return plan.reduce(function(dirs, dir){
// 		if (dirs[dirs.length - 1] === opposite[dir])
// 		  dirs.pop();
// 		else
// 		  dirs.push(dir);
// 		return dirs;
// 	  }, []);
//   }
//_______________________________________________________________________________________________________________
//* Лучшее Решение
// function dirReduc(arr) {
//   var str = arr.join(""),
//     pattern = /NORTHSOUTH|EASTWEST|SOUTHNORTH|WESTEAST/;
//   while (pattern.test(str)) str = str.replace(pattern, "");
//   return str.match(/(NORTH|SOUTH|EAST|WEST)/g) || [];
// }
// ___________________________________________________
//TODO 7. RGB To Hex Conversion
// const rgb = (r, g, b) => toHex(r) + toHex(g) + toHex(b);

// function toHex(numb) {
//   if (numb <= 0) return "00";
//   if (numb < 16) {
//     return "0" + numb.toString(16).toUpperCase();
//   }
//   if (numb > 255) return "FF";
//   return numb.toString(16).toUpperCase();
// }
//_______________________________________________________________________________________________________________
//* Лучшее Решение
// function rgb(r, g, b){
// 	return toHex(r)+toHex(g)+toHex(b);
//   }

//   function toHex(d) {
// 	  if(d < 0 ) {return "00";}
// 	  if(d > 255 ) {return "FF";}
// 	  return  ("0"+(Number(d).toString(16))).slice(-2).toUpperCase()
//   }
