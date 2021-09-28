//++ уникальное число

// function arrayDiff(a, b) {
// 	let s = a
// 	let g = b
// 	g.forEach(num => s.push(num))
// 	s = [...new Set(s)]
// 	return s
// }
// const arrqw= arrayDiff([1, 2], [2])
// console.log(arrqw)


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
// let arr123 = arrayDiff([1, 2], [2])
// console.log(arr123)
//---------------------------------------------------
//? вариант 3(option- 3)
// function arrayDiff(a, b) {
// 	return a.filter(num => b.indexOf(num))
// }
// let arrl = arrayDiff([11, 22], [22])
// console.log(arrl)
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
// 	console.log(vowels)
// 	console.log(this)
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


// function digitSum(n) {
// 	let num = n.toString()
// 		.split('')
// 		.map(e => parseInt(e))
// 		.reduce((a, b) => a + b)
// 	if (num.toString().length > 1) {
// 		num = num.toString()
// 			.split('')
// 			.map(e => parseInt(e))
// 			.reduce((a, b) => a + b)
// 		if (num.toString().length > 1) {
// 			num = num.toString()
// 				.split('')
// 				.map(e => parseInt(e))
// 				.reduce((a, b) => a + b)
// 		}
// 	}
// 	return num
// }
// console.log(digitSum(49319349319349319349))
// console.log(digitSum(493193))
// console.log(digitSum(456))
// console.log(digitSum(16))
// console.log(digitSum(132189))

//--

// function getNumbers(num) {
// 	let res = []
// 	let base = 10
// 	let c = Math.abs(num)
// 	do {
// 		let a = Math.floor(c / base)
// 		let d = c - a * base
// 		res.unshift(d)
// 		c = a
// 	} while (c > 0)
// 	return res
// }
// console.log(getNumbers(493193))   //[4, 9, 3, 1, 9, 3]
// //--
// var str = '12345';
// let r = [].map.call(str, function (x) {
// 	return x;
// }).join(',');
// console.log(r)                    //1,2,3,4,5 
// console.log(typeof r)              //string

//++Учитывая целое число, определите, квадратное ли оно
// var isSquare = function (n) {
// 	return Math.sqrt(n) % 1 === 0;
// }
// console.log(isSquare(27))

//+++ ДНК

// function DNAStrand(dna) {
// 	let s = "";
// 	for (let i = 0; i < dna.length; i++){
// 		switch (dna.charAt(i)) {
// 			case 'A': s += 'T'; break;
// 			case 'T': s += 'A'; break;
// 			case 'C': s += 'G'; break;
// 			case 'G': s += 'C'; break;
// 		}
// 	}
// 	return s;
// }
// console.log(DNAStrand('GTAT'));

//++фильтрует список строк и возвращает список только с именами ваших друзей
// function friend(friends) {
// 	let result = friends.filter(item => item.length === 4)
// 	return result
// }
// console.log(friend(["Jimm", "Cari", "aret", "truehdnviegkwgvke", "sixtyiscooooool"]))

//++ отсортировать нечетные числа по возрастанию, но четные числа должны быть на своих местах
// function sortArray(n) {
// 	for (let i = 0; i < n.length; i++) {
// 		for (let k = i; k < n.length; k++) {
// 			if (n[i] % 2 !== 0 && n[k] % 2 !== 0) {
// 				if (n[i] > n[k]) {
// 					let c = n[k]
// 					n[k] = n[i]
// 					n[i] = c
// 				}
// 			}
// 		}
// 	}
// 	return n
// }
// console.log(sortArray([5, 3, 1, 8, 0]))

//--2
// function sortArray(array) {
// 	var odd = array.filter(elem => elem % 2 !== 0).sort((a, b) => a - b);
// 	return array.map(elem => elem % 2 === 0 ? elem : odd.shift());

// console.log(sortArray([17, 3, 1, 8, 0]))
//--3
// function sortArray(array) {
// 	var odd = array
// 		.filter(n => n % 2)                     //не чётные
// 		.sort((a, b) => a - b);
// console.log(odd)
// 	return array.map(n => n % 2 ? odd.shift() : n);
// }
// console.log(sortArray([17, 3, 1, 8, 0]))

//-- 
// const a = [111, 44, 135, 27, 21]
// const c = a.filter(n => n % 2)
// const b = a.sort((a, b) => a - b)        //a - b -сортируем от большенго к еньшему  //[1, 2, 3, 4] или наоборот b - a
// console.log(b)
//++анаграмма

// function anagrams(n) {
// 	let original = 'racer'
// 	let r = ''
// 	let vi = []
// 	const sort = (str) => str.replace(/\s+/g, '').toLowerCase().split('').sort().join('')

// 	for (let i = 0; i < n.length; i++) {
// 		if (sort(original) === sort(n[i])) {
// 			r += n[i]
// 			vi = r.match(/.{1,5}/g)
// 		}
// 	}
// 	return vi 
// }
// const y = anagrams(['crazer', 'carer', 'racar', 'caers', 'racer'])
// console.log('y', y)
//>> ___________________________________________________________

function anagrams(word1, word2) {
	const sort = str => str.replace(/\s+/g, '').toLowerCase().split('').sort().join('')
	if (sort(word1) === sort(word2)) {
		return true
	}
	else {
		return false
	}
}
// const y = anagrams('apple', 'ppale')
// const y = anagrams('dog', 'good')
// const y = anagrams('cat', 'tac')
// console.log('y', y)

// \s означает «один пробел» и \s+ означает «один или несколько пробелов».
// Но поскольку вы используете /g флаг (замените все вхождения) и заменяете его пустой строкой, ваши два выражения имеют одинаковый эффект.
// Метод str.split(delim) разбивает строку на массив по заданному разделителю delim. Вызов split(s) с пустым аргументом s разбил бы строку на массив букв:

//++

//++ [2,2,2,2].map(parseINT)
// https://habr.com/ru/post/456344/
// let a = [2,2,2,2].map(i => parseInt(i))
// console.log('a: ', a)                    //response: [2,2,2,2]
// let a1 = [2, 2, 2, 2].map(parseInt)
// console.log('a:1 ', a1)                  //response: [2, NaN, NaN, 2]
// let a2 = ['2', '2', '2', '2'].map(parseInt)
// console.log('a2: ', a2)                  //response: [2, NaN, NaN, 2]
// console.log('--', parseInt("2", 3))      //response: 2

//++false || (false && 2) || 0

// console.log('--', false || (false && 2) || 0)   //response: 0
// console.log('--1', false || (false && 2))       //response: false
// Если все операнды являются ложными (false), возвращает последний из них.
// Другими словами, цепочка ИЛИ "||" возвращает первое истинное значение или последнее, если такое значение не найдено.
null || 0 || 1  //response: 1 (первое истинное значение)

//&& В традиционном программировании && возвращает true, если оба аргумента истинны, а иначе – false
// возвращает первое ложное значение. Или последнее, если ничего не найдено.
// Приоритет оператора && больше, чем у ||

//++чему равно a.foo
const a = { foo: 5, bar: 6 }
const b = a
b.foo = 100
// console.log('a.foo...: ', a.foo)    //response: 100

//++
const s = {
	ivan: 300,
	danila: 200,
	denis: 94,
}
// console.log(Object.values(s))

//++
let arr123 = []
arr123[1] = 3  //idx 0 одна дырка
arr123[5] = 33 // idx 2,3,4 три дырки
arr123[7] = 5 // idx 6 одна дырка
// Total: 0,3,2,3,4,33,5,6 length=8
// arr.test = 5
// console.log(arr.length) //8
// console.log("🚀  _ file: main.js _ line 513 _ sortArray _ arr", arr)
// Варианты неправильного применения массива:
// Добавление нечислового свойства, например: arr.test = 5.
// Создание «дыр», например: добавление arr[0], затем arr[1000] (между ними ничего нет).
// Заполнение массива в обратном порядке, например: arr[1000], arr[999] и т.д.

//++
f.call(null)
function f() {
	// console.log(this)  //window
}
// Когда вы используете .call или .apply с null или undefined, вместо него автоматически используется значение по умолчанию this(обычно window), если не в строгом режиме. (глобальным объектом Function.prototype.call)
// Если вы находитесь в строгом режиме, на самом деле это будет nullили undefined.

//++
let ph = 'Hello'
if (true) {
	let user = 'User'
	function say() {
		// console.log(`${ph}, ${user}`)  //resolve: Hello, User
	}
}
say()

//++
// console.log(1)
// console.log(2)
// setTimeout(() => console.log(3), 0)
// setTimeout(() => console.log(4), 1000)
// Promise.resolve().then(() => console.log(5))
// const prom = new Promise((resolve, reject) => {
// 	resolve()
// })
// 	.then(() => console.log(5.5))

//++
let promise = new Promise((resolve, reject) => {
	resolve(10)
	setTimeout(() => resolve(20), 1000)
})
// .then(alert)

// ____________
// let promise = new Promise((resolve, reject) => {
// 	resolve(10)
// 	setTimeout(() => {
// 		return new Promise((resolve, reject) => {
// 			resolve(20)
// 		}).then(alert)
// 	}, 1000)
// })
// 	.then(alert)

//++чистая функция

let fgj = ['Hi', 'friend']
const dirty = arr => arr.splice(1, 1)
// console.log(dirty(fgj))   //['friend']
// console.log(fgj)          //['Hi']

//! Все значения являются истинными, за исключением: false, 0, "" (пустая строка), null, undefined, и NaN.
