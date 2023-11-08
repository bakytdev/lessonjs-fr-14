// filter ()

// let colors = [
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
// ]

// let numbers = new Array(100).fill(0).map((el, idx) => idx + 1)


// let result = numbers.filter(el =>{
//     return el > 30 && el < 70
// })
//
// console.log(result)


// reduce((acc,el,idx,array) =>{
//  code
// },0)


// let numbers = [100, 200, 5000, 1000];

// let total = numbers.reduce((acc, el) => {
//     console.log(acc, "-> acc")
//     console.log(el, "-> el")
//     return acc + el
// },0)
//
// console.log(total)

// Во всех задачах используйте только методы map, reduce.

// 1. Вам дан массив с числами [5,15,315,2,13,20,9].
// Найдите сумму этих чисел.

// let numbers =[5,15,315,2,13,20,9];
//
// let result = numbers.reduce((acc, el) =>{
//    return acc + el
// },0)
//
// console.log(result)

// 2. Вам дан массив с числами [5,12,314,2,13,20,9].
// Найдите сумму всех четных чисел.

// let task=[5,12,314,2,13,20,9];
// let result=task.reduce((acc,el)=>{
//     if (el%2===0){
//         return acc+el
//     }else return acc
// },0)
// console.log(result)

// 3. Вам дан массив с числами [5,15,315,2,13,20,9].
// Найдите сумму чисел, которые больше 10.
// let arr=[5,15,315,2,13,20,9]
// let result=arr.reduce((acc,el)=>{
//     if (el>10){
//         console.log(acc, "-> acc")
//     console.log(el, "-> el")
//         return acc+el
//     }else return acc
// },0)
// console.log(result)

// 4. Вам дан массив с числами [3,13,54,15,335, 39].
// Найдите разность чисел, которые больше 10.
// let arr=[3,13,54,15,335, 39]
// let  result=arr.reduce((acc,el)=>{
//     if (el>10){
//         console.log(acc, "-> acc")
//     console.log(el, "-> el")
//       return acc-el
//     }else return acc
// },0)
// console.log(result)


// 5. Вам дан массив с строками ['Аскар', 'Баяман', 'Калмамат'].
// Сложите все строки и выведите длину результата.

// let names = ['Аскар', 'Баяман', 'Калмамат']
//
// let result = names.reduce((acc, el) => {
//     return acc + el.length
// }, 0)
// console.log(result)


// 6. Вам дан массив с строками ['Аскар', 'Баяман', 'Калмамат']
// . Выведите все строки в верхнем регистре, используя map.

// let names = ['Аскар', 'Баяман', 'Калмамат'];
//
// let result = names.map(el =>{
//     return el.toUpperCase()
// })
//
// console.log(result)

// 7. Вам дан массив с строками ['Аскар', 'Баяман', 'Калмамат'].
// Выведите все вторые строки в верхнем регистре.

// let names = ['Аскар', 'Баяман', 'Калмамат'];
//
// let result = names.slice(0,1) + names[1].toUpperCase() + names.slice(2)
//
// console.log(result)

// 8. Напишите функцию, которая принимает str, target.
// И возвращает true или false, если targer
// присутствует в str. Использовать .reduce для этого.

// Пример: task ('abcd', 'b') => true
// task ('efghi', 'a') // => false

// const task = (str, target) => {
//     if (str.includes(target)){
//         return true
//     } else  return false
// }

// console.log(task('abcd', 'B'));

// 9. Вам дан массив с строками ['асКар', 'бЯяман', 'калМмамат'].
// Используйте заглавные буквы в каждом массиве имен.

// Пример: (["john", "JACOB", "jinGleHeimer", "schmidt"])),
// => ["John", "Jacob", "Jingleheimer", "Schmidt"]

// 10. Вам дан массив со строками ['Баяман', 'Калмамат'].
// Поменяйте местами первые буквы строк.

// 11. Вам дан массив [true, '1234', 325].
// Напишите функцию, которая проверяет,
// все ли элементы массива относятся к одному типу данных.

// 12. Вам дана строка 'тестинг'.
// Ваша задача - вернуть средний символ слова.
// Если длина слова нечетная, верните средний символ.
// Если длина слова четная, вернуть 2 средних символа.

// 13. Вам дан массив с числами [5, -3, 13, -7, 45].
// Верните сумму всех положительных чисел.

// 14. Вам дан массив с числами [5, -54, 13, -7, 45, -15, -34].
// Верните сумму всех отрицательных чисел, которые больше 10.


// 15. Вам дан массив с числами [1, 65, 13 , 30, 100]
// - все числа - доллары. Вам нужно обменять эти доллары
// по курсу сома и вывести все числа в сомах.

// 16. Вам дан массив со строками
// ['Lorem ipsum dor sit omet devour il ela sit'].
// Выведите каждый нечетный индекс в строке в верхнем регистре.

// 17. Вам дан массив с строками ['Оскар', 'Баяман', 'Калмамат'].
// Добавьте к каждой строке нумерацию.

// 18. Вам дан массив с числами [2,456,6,8].
// Напишите функцию , которая вставляет дефис
// (-) между каждыми двумя четными числами.
// Например, если вы принимаете 025468, на выходе
// должно быть 0-254-6-8.

// 20. Вам дан массив с числами [5,15,315,2,13,20,9].
// Посчитайте среднее арифметическое чисел в массиве.