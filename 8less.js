// // object -> {}
//
// // {
// // key : elements
// // }

// let names = [
//     {
//         id: 1,
//         name: "Alisher",
//         age: 21
//     },
//     {
//         id: 2,
//         name: "Aitemir",
//         age: 17
//     },
//     {
//         id: 3,
//         name: "Kalysbek",
//         age: 17
//     },
//     {
//         id: 4,
//         name: "Perizat",
//         age: 18
//     },
//     {
//         id: 5,
//         name: "Baiaman",
//         age: 15
//     }
// ]
//
// let test = {
//     id: 0,
//     title: "text",
//     image: {
//         png: "text",
//         svg: "title",
//         pdf: {
//             name: "gbr"
//         }
//     }
// }
//
// let me = [
//     {
//         id: 1,
//         name: "My name",
//         age: 11,
//         car: null,
//         jobs: {
//             mentor: "It-space academy",
//             developer: "Gold Company"
//         },
//         family: {
//             dad: "",
//             mom: "",
//             sister: ""
//         },
//         education: 'average',
//         hobby: {
//             one: "tennis",
//             two: "football"
//         },
//         friends: {
//             one: "azi",
//             two: "baha"
//         }
//     }
// ]
//
// console.log(me)


// 1. Создайте массив чисел и
// используйте цикл for для
// вывода каждого элемента.

// let arr =[1,2,3]
// for (let i = 0;i < arr.length;  i++){
//     console.log(arr[i])
// }

// 2. Создайте объект с несколькими
// ключами и значениями,
// затем используйте цикл
// for...in для перебора ключей.

// let a={
//     name:"Vadim",
//     age:22,
//     city:"Bishkek",
//     "my name":"text"
// }
// for (let key in a){
//     console.log(key, key[key])
// }


// 3. Используйте метод map
// для удвоения каждого
// элемента в массиве чисел.

// let numbers = [2,7,12,9,32,25]
// let result = numbers.map(el =>{
//     return el * 2
// })
// console.log(result)

// 4. Используйте метод filter,
// чтобы отфильтровать четные
// числа из массива.

// let arr=[23,45,67,89,40,50,46]
// let result=arr.filter(el=>{
//     return el%2===0
// })
// console.log(result)

// 5. Создайте функцию, использующую
// метод reduce, чтобы найти
// сумму всех чисел в массиве.
// let arr = [1, 4, 6, 3, 8]


// let task = function (a) {
//
//     let b = a.reduce((acc, el) => {
//         return acc + el
//
//     }, 0)
//     console.log(b)
// }
// task(arr)


// 6. Отсортируйте массив чисел
// по возрастанию с помощью sort.
//
// let  arr =[1,32,45,68,45,35,2]
// let res = arr.sort()
// console.log(res)


// 7. Используйте метод Math.random()
// для генерации случайного числа.
// console.log(Math.round(Math.random()*20))

// 8. Преобразуйте строку в число,
// используя метод parseInt или parseFloat.
// let arr='5'
// console.log(parseFloat(arr))


// 9. Создайте функцию, которая
// принимает число и возвращает
// его квадрат.
// const test = (a) =>{
//     console.log(a ** 2)
// }
// test(5)
// 10. Используйте метод Array.isArray()
// для проверки, является
// ли переменная массивом.
// let number = [1,2,3,4]
// console.log(Array.isArray(number))
// 11. Найдите максимальное
// число в массиве с помощью
// метода Math.max().
//let arr = [1,2,3,4,5]

//console.log(Math.max(arr.map(el=>el)))

// 12. Используйте метод Array.from()
// для создания массива из строки.

// let a = 'asddfg'
// let b = Array.from(a)
// console.log(b)

// 13. Создайте функцию, которая
// принимает массив чисел и
// возвращает новый массив
// с кубами этих чисел.
// let a=[]
// function number(c){
//     return c.map(el=>{
//         return a.push(el**3)
//     })
//
// }
// console.log(number([1,2,3,4,5,6,7,8]))

// 14. Используйте метод String.fromCharCode()
// для преобразования числа
// в соответствующий символ Unicode.
// let code=65
// let b=String.fromCharCode(code)
// console.log(b)
// 15. Найдите среднее значение
// чисел в массиве.
// let a =[1,4,6,8,7]
// console.log(a[0])
// console.log(a[a.length-1])
// console.log(a[Math.floor(a.length/2)])

// 16. Преобразуйте массив строк
// в одну строку с помощью
// метода join.

// let arr = ["w","o","r","k"]
// console.log(arr.join(""))

// 17. Используйте метод
// Array.prototype.every()
// для проверки, все ли элементы
// массива больше нуля.
// let arr=[-12,23,3,5,0,-1]
// let result=arr.map(el=>{
//     if (el>0){
//         return el
//     }else return false
// })
// console.log(result)

// 18. Создайте функцию, которая
// принимает строку и возвращает
// её длину.

// const str = (a) => {
//     console.log(a.length)
// }
// str('Aziza')

// 19. Используйте метод
// Array.prototype.some()
// для проверки, есть ли хотя
// бы один четный элемент в массиве.

// let number = [13,2,35,6,7,4,9]
// let result = number.some(el =>{
//     return el % 2 === 0
// })
// console.log(result)

// 20. Округлите число до ближайшего
// целого с помощью метода Math.round().
