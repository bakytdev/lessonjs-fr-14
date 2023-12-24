// array - []

// const array = ['string', 12345, false, true, [2345, "Name"]];
// console.log(array[0]);

// const names = ['Байаман', 'Перизат', 'Калысбек', 'Алишер', 'Азиза','Айтемир', 'Абдумубин','Сыймык'];

// push()
// pop()
// unshift()
// shift()

// push - жаны элемент кошуп берет аягына
// console.log(names.push("Бакыт"));
// console.log(names);

// unshift - жаны элемет кошуп берет биринчиге
// console.log(names.unshift("Бакыт"))
// console.log(names)

// shift - биринчиде турган элеметти удалить этет
// console.log(names.shift())
// console.log(names)

// pop - акырындагы элементи удалить этип берет
// console.log(names.pop())
// console.log(names);


// 1  Дан массив ['a', 'b', 'c'].
// Добавьте ему в конец элементы 1, 2, 3.
// let number=['a', 'b', 'c']
// console.log(number.push(1, 2, 3))
// console.log(number)


// 2 Даны два массива: [1, 2, 3] и [4, 5, 6].
// Объедините их вместе.
// let a =[1,2,3,]
// let b =[4,5,6,]
// console.log(a.push(b))
// console.log(a)


// 3 Дан массив [1, 2, 3].
// Добавьте ему в конец элементы 4, 5, 6.
// let a=[1,2,3]
// console.log(a.push(4,5,6))
// console.log(a)

// 4 Дан массив [1, 2, 3].
// Добавьте ему в начало элементы 4, 5, 6.

// let a=[1,2,3]
// console.log(a.unshift(4,5,6))
// console.log(a)

// 5 Дан массив ['js', 'css', 'jq'].
// Выведите на экран первый элемент.

// let s = ['js', 'css', 'jq']
// console.log(s[0])

// 6 Дан массив ['js', 'css', 'jq'].
// Выведите на экран последний элемент.
// let task=['js', 'css', 'jd']
// console.log(task[2])

// 7  Дан массив [1, 2, 3, 4, 5].
// С помощью метода slice запишите
// в новый элементы [1, 2, 3].

// let task=[1,2,3,4,5]
// console.log(task.slice(0,3))

// 8  Дан массив [1, 2, 3, 4, 5].
// С помощью метода slice запишите
// в новый элементы [4, 5].

// let numbers = [1, 2, 3, 4, 5];
// console.log(numbers.slice(3))

// 9  Дан массив [1, 2, 3, 4, 5].
// С помощью метода splice преобразуйте
// массив в [1, 4, 5].

// let numbers = [1, 2, 3, 4, 5];
// numbers.splice(1,2)
// console.log(numbers)

// 10  Дан массив [1, 2, 3, 4, 5].
// С помощью метода splice запишите
// в новый массив элементы [2, 3, 4].

// let numbers = [1, 2, 3, 4, 5];

// numbers.splice(0,5,2,3,4)
// console.log(numbers)

// 11  Дан массив [1, 2, 3, 4, 5].
// С помощью метода splice сделайте
// из него массив [1, 2, 3, 'a', 'b', 'c', 4, 5].

// 12  Дан массив [1, 2, 3, 4, 5].
// С помощью метода splice сделайте
// из него массив [1, 'a', 'b', 2, 3, 4, 'c', 5, 'e'].

// let numbers = [1, 2, 3, 4, 5];
// numbers.splice(1,0,'a', 'b')
// numbers.splice(6, 0, 'c')
// numbers.splice(8,0,'e')
// console.log(numbers)

// 13  Дан массив [3, 4, 1, 2, 7].
// Отсортируйте его.


// 14 биринчи элемент кайтарып берет
// var array = [1,2,3,4,5,6,7,8,9];

// 15 акыркы элемент кайтарып берет
// var array = [1,2,3,4,5,6,7,8,9];


// map ()

// map(function (el, idx, array){
//     return
// })

// аргумертер
// el = Элемент
// idx = index
// array =  массив

// let arr = [12, true, [2], false];

// const arrTwo = arr.map(function (el) {
//     return el
// })

// console.log(arrTwo);

// true = 1
// false = 0
// ** даража

// let arr = [12, 21, 34, 43, 23, 5, 56, '34', '76'];
//
// const fn = (arr) => {
//     return arr.map(el => {
//         if (typeof el === "number"){
//             return el.toString()
//         } else{
//             return Number(el)
//         }
//     })
// }
//
// console.log(fn(arr))


// toString() = number -> string
// parseInt() = string -> number

// fill() = толтуруп берет
// new Array() = жаны массив
// console.log(new Array(100).fill(0))

// let task = new Array(100).fill(0).map((el,idx) =>{
//     return idx + 1
// })

// console.log(task)

// const test = (n) =>{
//    return n.map(el =>{
//        if (el % 2 === 0){
//            return true
//        } else{
//            return false
//        }
//    })
// }
//
// console.log(test(task))


// map(function (el, idx, arr){
//     return
// })

// map (el => {} )
// map ( (el, idx, arr) => {} )

// sort()

// let symbols = [
//     `AliceBlue`,
//     `AntiqueWhite`,
//     `Aqua`,
//     `Aquamarine`,
//     `Azure`,
//     `Beige`,
//     `Bisque`,
//     `Black`,
//     `BlanchedAlmond`,
//     `Blue`,
//     `BlueViolet`,
//     `Brown`,
//     `BurlyWood`,
//     `CadetBlue`,
//     `Chartreuse`,
//     `Chocolate`,
//     `Coral`,
//     `CornflowerBlue`,
//     `Cornsilk`,
//     `Crimson`,
//     `Cyan`,
//     `DarkBlue`,
//     `DarkCyan`,
//     `DarkGoldenRod`,
//     `DarkGray`,
//     `DarkGrey`,
//     `DarkGreen`,
//     `DarkKhaki`,
//     `DarkMagenta`,
//     `DarkOliveGreen`,
//     `Darkorange`,
//     `DarkOrchid`,
//     `DarkRed`,
//     `DarkSalmon`,
//     `DarkSeaGreen`,
//     `DarkSlateBlue`,
//     `DarkSlateGray`,
//     `DarkSlateGrey`,
//     `DarkTurquoise`,
//     `DarkViolet`,
//     `DeepPink`,
//     `DeepSkyBlue`,
//     `DimGray`,
//     `DimGrey`,
//     `DodgerBlue`,
//     `FireBrick`,
//     `FloralWhite`,
//     `ForestGreen`,
//     `Fuchsia`,
//     `Gainsboro`,
//     `GhostWhite`,
//     `Gold`,
//     `GoldenRod`,
// ];
// symbols.sort((a,b) =>{
//     if (a > b){
//         return - 1
//     } else{
//         return 1
//     }
// })
// console.log(symbols)


// let names = [["Байаман", 15], ["Айтемир", 17], ["Калысбек", 17], ["Абдумубин", 18]];
//
// const task = names.map(el => {
//     return {name: el[0], age: el[1]}
// })
//
// console.log(task)

// [
// ["Байаман", 15] ,
// ["Айтемир", 17] ,
// ["Калысбек", 17]
// ]

// [
// {name: "Байаман", age : 15},
// {name: "Айтемир", age : 17},
// {name: "Калысбек", age : 17},
// ]

