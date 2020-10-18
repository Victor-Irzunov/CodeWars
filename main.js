//++ уникальное число

// function arrayDiff(a, b) {
// 	let s = a
// 	let g = b
// 	g.forEach(num => s.push(num))
// 	s = [...new Set(s)]
// 	return s
// }
// const arr = arrayDiff([1, 2], [2])
// console.log(arr)


//-----------------------------------------


// console.log(`%c ----- ${c}`, 'background: #0080c0')

//*---------------------------------------- */
//++ удалить [1,2][2]=[1]
//? вариант 1(option-1)
// function arrayDiff(a, b) {
// 	let a2 = []

// 	let t2 = function (sArr, sInarr) {
// 		sArr.forEach(num => {
// 			if ((sInarr.indexOf(num) === -1) && (a2.indexOf(num) === -1)) {
// 				a2.push(num)
// 			}
// 		})
// 	}
// 	t2(a, b)
// 	return a2

// }
// let arr = arrayDiff([1, 2, 3, 5], [2])
// console.log(arr)

//-----------------------------------------------
//? вариант 2(option-2)
// function arrayDiff(a, b) {
// 	return a.filter(num => !b.includes(num))
// }
// let arr = arrayDiff([1, 2], [2])
// console.log(arr)
//---------------------------------------------------
//? вариант 3(option- 3)
// function arrayDiff(a, b) {
// 	return a.filter(num => b.indexOf(num))
// }
// let arr = arrayDiff([11, 22], [22])
// console.log(arr)
//--------------------------------------------------

//?================================================
//++ удалить гласные (to remove the vowels) 

// function disemvowel(str) {
// 	// return str.replace(/[aeiou]/gi, '')
// 	return str.replace(/[aeiouAEIOU]/g, "");
// }
// let y = ''
// function test() {
// 	y = disemvowel(document.querySelector('#inp').value)
// 	console.log(y)
// }
// function test2() {
// 	console.log(y)
// }


//--------------------------
// function disemvowel(str) {
// 	var vowels = ['a', 'e', 'i', 'o', 'u'];

// 	return str.split('')
// 		.filter(function (el) {
// 		return vowels.indexOf(el.toLowerCase()) == -1;
// 	}).join('');
// 	// console.log(vowels)
// 	// console.log(this)
// }
//-----------------------------
// const disemvowel = (str) => {
// 	const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
// 	let newStr = '';
// 	for (let i = 0; i <= str.length; i++) {
// 		let char = str.charAt(i);
// 		if (vowels.indexOf(char) == -1) {
// 			newStr += char;
// 		}
// 	}
// 	return newStr;
// }
// //--------------------------------
// const vowels = 'aeiou';

// function disemvowel(str) {
// 	return str
// 		.split('')
// 		.filter(letter => !vowels.includes(letter.toLowerCase()))
// 		.join('');
// }
// //--------------------------------
//++  удалить скобки и внутри(remove)
// run1.onclick = function () {
// 	//removes "(" and ")"
// 	output1.innerHTML = input1.value.replace(/[()]/g, '');
// }

// run2.onclick = function () {
// 	//removes (){}[]
// 	output2.innerHTML = input2.value.replace(/[\])}[{(]/g, '');
// }
//----------------------------------------------------------
// var text = "a (bc d)e"

// console.log(text.replace(/\(.*\)/, ''));
//-----------------------------------------------
// function removeParentheses(s) {
// 	return s.replace(/\s*\(.*\)/,'')
// }
// let y = removeParentheses("example (unwanted thing) example")
// console.log(y)
//---------------------------------------------
// function removeParentheses(s){
// 	let str = "example (unwanted thing) example"
// 	return str.replace(/\s*\(.*\)/,'')
//  }
//-------------------------------------------------
// var text = "example(unwanted thing)example"

// function replaceParenthesis(text) {

// 	var counter = 0,
// 		startIndex = 0,
// 		endIndex = 0,
// 		parts = [],
// 		output = text;

// 	for (var i = 0; i < text.length; i++) {
// 		if (text[i] === "(") {
// 			if (counter == 0) {
// 				startIndex = i;
// 			}
// 			counter++;
// 		} else if (text[i] === ")") {
// 			counter--;
// 			if (counter == 0) {
// 				endIndex = i + 1;
// 				parts.push(text.substring(startIndex, endIndex));
// 			}
// 		}
// 	}

// 	parts.forEach(function (part) {
// 		output = output.replace(part, '');
// 	});

// 	return output;

// }

// console.log(replaceParenthesis(text));
//------------------------------------------

// function removeParentheses(s) {

// 	return s.substring(0, s.indexOf("(")) + s.substring(s.lastIndexOf(")") + 1, s.length)
// }
// let y = removeParentheses("example(unwanted thing)example")

// console.log(y)

//++    вместо слова WUB пробел (не доделал)

// WUB WE WUB ARE WUBWUB THE WUB CHAMPIONS WUB MY WUB FRIEND WUB
// A WUBWUBWUB B WUBWUBWUB C  AB C

// function f1(s) {
// 	return s.replace(/WUB+/gi, ' ')
// }
// let y = f1('WUBWEWUBWUBWUBAREWUBTHEWUBCHAMPIONSWUBMYWUBFRIENDWUB')
// console.log(y)
//E ARE THE CHAMPIONS MY FRIEND
//WE ARE THE CHAMPIONS MYFRIEND
//++  двоичный вид

// function f1(a, b) {
// 	let sum = (a + b).toString(2)

// 	console.log(sum)
// }
// f1(1, 2)  //11

//++  коротко слово
//.sort - сортирует от самого короткого
// function f2(s) {
// 	let c = s.split(' ').sort((a, b) => a.length - b.length)   //b.length - a.length длинное
// 	console.log(c)
// 	return c[0].length
// }
// let d = f2("tggggr out random test cases are easier than writing out basic ones")
// console.log(d)

//++ длинное слово

// function findLongestWord(str) {
// 	var strSplit = str.split(' ');
// 	var longestWord = 0;
// 	for (var i = 0; i < strSplit.length; i++) {
// 		if (strSplit[i].length > longestWord) {
// 			longestWord = strSplit[i].length;
// 		}
// 	}
// 	return longestWord;
// }
// findLongestWord("The quick brown fox jumped over the lazy dog");

//----option universal 1
// function f2(s) {
// 	return Math.min.apply(null, s.split(' ').map(w => w.length));      //Math.max
// }
// let d = f2("tggggr ou random test cases are easier than writing out basic ones")
// console.log(d)
//----option universal 2
// function findShort(s) {
// 	return s
// 		.split(' ')
// 		.map(a => a.length)
// 		.reduce((a, b) => Math.min(a, b))
// }

//++ Вычислите суммы строк этого треугольника из индекса строки (начиная с индекса 1)
// function rowSumOddNumbers(n) {
// 	return Math.pow(n, 3)
// }
// let w = rowSumOddNumbers(3)  //строка 7 9 11
// console.log(w)
// 	1
// 	3     5
// 7     9    11
// 13    15    17    19
// 21    23    25    27    29
//++      942  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6
// var n = 942;
// var sum = 0;
// let r = 0;
// while (n > 0) {
// 	sum += n % 10
// 	n = Math.floor(n / 10)
// }

// console.log(sum)
// console.log(r)
//------------option 2
// let o = '123456'.split('').map(function (e) { return parseInt(e) }).reduce(function (a, b) { return a + b });
// console.log(o)

//--

// function f2(n) {
// 	var sum = 0;
// 	if (n > 0) {
// 		for (let i = 0; )
// 	}
// }
// let u = f2(493193)
// console.log(u)

// function digit(number) {
// 	var figures = "" + number
// 	var sum = 0

// 	for (var i = 0; i < figures.length; i++){
// 		console.log(i)
// 		sum += +figures[i]
// 	}
// 	if (sum > 10) {
// 		console.log('------')
// 		for (let k = 0; k < sum.length; k++){
// 			console.log(k)
// 			sum = 5
// 		}
// 	}
// 	return sum
// }

// let p = digit(255)
// console.log(p)


//--
// function f2(n) {
// 	var sum = 0;
// 	let r = 0;
// 	while (n > 0) {
// 		sum += n % 10
// 		n = Math.floor(n / 10)
// 	}
// 	if (r < sum) {
// 		while (sum > 0) {
// 			r += sum % 10
// 			sum = Math.floor(sum / 10)
// 		}
// 	}	
// 	return r
// }
// let u = f2(16)
// console.log(u)

// function getSumNumber(num) {
// 	var sum = 0, tmp
// 	while (num) {
// 		tmp = num % 10;//0  1
// 		num = (num - tmp) / 10; //261 
// 		sum += tmp;
// 	}
// 		return sum
// 	}
// console.log(getSumNumber(493193));
//-----
// let ko = 21..toString()
// console.log(typeof ko)
// console.log(ko.split('').length)


function digitSum(n) {
	let num = n.toString()
		.split('')
		.map(e => parseInt(e))
		.reduce((a, b) => a + b)
	if (num.toString().length > 1) {
		num = num.toString()
			.split('')
			.map(e => parseInt(e))
			.reduce((a, b) => a + b)
		if (num.toString().length > 1) {
			num = num.toString()
				.split('')
				.map(e => parseInt(e))
				.reduce((a, b) => a + b)
		}
	}
	return num
}
console.log(digitSum(49319349319349319349))
console.log(digitSum(493193))
console.log(digitSum(456))
console.log(digitSum(16))
console.log(digitSum(132189))
