// РЕКУРСИЯ

// let i = 0;
// const recursiveFun = () => {
//     if (i < 1000) {
//         i++
//         console.log(i)
//         return recursiveFun();
//     }
// }
//
// console.log(recursiveFun())

// let i = 0
// const recursive = () => {
//     console.log(i)
//     recursive()
// }
// recursive()

// const test = () => {
//     return test()
// }
// console.log(test())


// ЗАМЫКАНИЕ

// const funTwo = (num1, num2) => {
//     num1 = 5
//     return num1 + num2
// }
// const funOne = (a, b) => {
//     console.log(a)
//     return funTwo(a, b)
// }
// console.log(funOne(1, 2));
//

// function text (t) {
//     return t
// }
//
// function test (a) {
//    return text(a)
// }
//
// console.log(test("Hello"))

// Карриравание

// function name (a) {
//     return function (b){
//         return a + b
//     }
// }
// console.log(name(5)(10))

// function generalLink (http) {
//     return function (www) {
//         return function (name) {
//             return function (domain) {
//                 return `${http}://${www}.${name}.${domain}`
//             }
//         }
//     }
// }
// console.log(generalLink('https')('www')('apple')('com'))
// console.log(generalLink('https')('www')('youtube')('com'))
// console.log(generalLink('https')('www')('instagram')('com'))


// const link = (http) => (www) => (name) => (domain) => {
//     return `${http}://${www}.${name}.${domain}`
// }
// console.log(link('http')('www')('youtube')('com'))

///////

// const shoes = {
//     model: "nike",
//     size: 42,
//     color: "white"
// }
//
// console.log(shoes)
// console.log('model' in shoes)
// console.log(shoes.hasOwnProperty('model'))

// const shoes = {
//     model: "Nike",
//     size: 42,
//     color: "white",
//     material: {
//         flex: true
//     }
// }
//
// const newShoes = JSON.parse(JSON.stringify(shoes))
// console.log(shoes)
// console.log(newShoes)
//


// На входе два одномерных массива.
// В каждом массиве всегда по два элемента.
// Верните третий массив результат которого
// будет сумма элементов предыдущих

// function test (a,b){
//     let res = []
//     for (let i = 0; i < a.length; i++){
//         res.push(a[i]+b[i])
//     }
//     return res
// }
// console.log(test([2,4],[1,3]))
// Input: [2,4], [1,3]
// Actions:
//     Output: [3,7]
//
// Input: [1,7], [9,3]
// Actions:
//     Output: [10, 10]
// function  task (a,b){
//     let num = []
//     for (let i = 0; i < a.length; i++){
//        num.push(a[i]+b[i])
//     }
//    return num
// }
//
// console.log(task([1,7],[9,3]))
// Task 2
// Напишите функцию, которая принимает
// массив чисел и возвращает массив этих
// чисел умноженных на два
// function arr(a) {
//     let b = a.map(el =>{
//         return el * 2
//     })
//     return b
// }
//
// console.log(arr([1,2,3,4,5]))

// function arr(a) {
//     let b = a.map(el =>{
//         return el * 2
//     })
//     return b
// }
//
// console.log(arr([7,14]))
// Input: [1,2,3,4,5]
// Output: [2,4,6,8,10]
//
// Input: [7,14]
// Output: [14,28]


// Task 3
// Напишите функцию, которая принимает массив
// объектов с полем id. Например [[{id: '100'}, {id: 2}]] и возвращает
// массив этих id
// let arr=[{id: 1},{id: 2},{id: 3},{id: 4}]
// function task(arr){
//     return arr.map(el=>{
//         return el.id
//     })
// }
//
// console.log(task(arr))

// Input: [{id: 1},{id: 2},{id: 3},{id: 4}]
// Output: [1,2,3,4]

// let arr=[{id: true}]
// function task(arr){
//     return arr.map(el=>{
//         return el.id
//     })
// }

// console.log(task(arr))


// Input: [{id: true}]
// Output: [true]
// Task 4
// Напишите функцию, которая принимает массив чисел и возвращает массив строк по шаблону <h1>{number}</h1>
// Input: [1,2]
// Output: ['<h1>1</h1>','<h1>2</h1>']

// let task=[1,2]
// function arr(task){
//     return task.map(el=>{
//         return `<h1>${el}<h1/>`
//     })
// }
//
// console.log(arr(task))
//
// Input: ['Ivan']
// Output: ['<h1>Ivan</h1>']

// let task=['Ivan']
// function arr(task){
//     return task.map(el=>{
//         return `<h1>${el}<h1/>`
//     })
// }
//
// console.log(arr(task))

// Task 5
// Напишите функцию, которая принимает массив строк и возвращает массив строк с четным количеством букв
// Input: ['ab','abc','abcd']
// Output: ['ab','abcd']

// let task=['ab','abc','abcd']
// function arr(task){
//     return task.filter(el=>{
//         if (el.length%2===0){
//             return el
//         }else return false
//     })
// }
//
// console.log(arr(task))
//
// Input: ['abc','abcde']
// Output: []

// let task=['abc','abcde']
// function arr(task){
//     return task.filter(el=>{
//         if (el.length%2===0){
//             return el
//
//         }
//     })
// }
//
// console.log(arr(task))

// Task 6
// Напишите функцию, которая принимает массив чисел и возвращает
// массив чисел умноженных на два, которые делятся на 10 без остатка
// Input: [1,2,3,7,10,5]
// Output: [20,10]
// Input: [1,2,3,7,9,4]
// Output: []

// Task 7
// Напишите функцию, которая принимает массив булевых значений
// и возвращает массив только со значениями true
// Input: [true,false,true,true]
// Output: [true,true,true]
// Input: [false,true]
// Output: [true]

// Task 8
// Напишите функцию, которая принимает массив значений в т.ч и
// значения undefined и возвращает массив только без значений undefined
// Input: [true, false, true, true, undefined, true, undefined]
// Output: [true, false, true, true, true]
// Input: [undefined, true, undefined]
// Output: [true]

// const test = [true, false, 1234, "12345", true, true, undefined, true, undefined];
// const t = []
// const task = (a) => {
//     a.filter(el => {
//         if (el !== undefined) {
//             t.push(el)
//         }
//     })
// }
// task(test)
// console.log(t)

// Task 9
// Напишите функцию, которая принимает массив чисел и
// возвращает их сумму. Использовать reduce
// Input: [1,2,3,4,5]
// Output: 15
// Input: [2, 11, 5]
// Output: 18

// let numbers = new Array(100).fill(0).map((el, idx) => idx + 1)
//
// const task = (a) => {
//     let test = a.reduce((acc, el) => {
//         return acc + el
//     }, 0)
//
//     console.log(test)
// }
// task(numbers)

// Task 10
// Напишите функцию, которая принимает массив булевых значений и возвращает
// результат логического И над ними. Использовать reduce
// Логическое И - это операция &&
// Input: [true,true,true,true]
// Output: true
// // Input: [true,false,true]
// // Output: false
//
// let numbers = [true, false, true, true];
//
// const task = () => {
//     let a = numbers.reduce((acc, el) => {
//         if (el === true && acc === true) {
//             return el
//         } else {
//             return false
//         }
//     })
//
//     console.log(a)
// }
// task()

// Task 11
// Напишите функцию, которая принимает массив чего
// угодно и возвращает объект с полями
// {field1, field2, field3, field4}.
// Использовать reduce. Готовим баночки и не отчаиваемся. Будет 🔥
// Input: [true,1,'wow','you are smart, bro']
// Output: {field1: true, field2:1, field3: 'wow', field4: 'you are smart, bro'}

// let arr = [true, 1, 'wow', 'you are smart, bro'];
// const task = () => {
//     let a = arr.reduce((acc, el, idx) => {
//         acc['field' + (idx + 1)] = el
//         return acc;
//     }, {});
//     console.log(a);
// };
// task();

// Task 12
// Напишите функцию, которая принимает объект,
// как аргумент и возвращает новый объект.
// Только с полями, у которых тип значения - строка;
// Input: { name: 'Baha', isAdmin: true }
// Actions:
// Output: { name: 'Baha' }
// Input: { isAdmin: true }
// Actions:
// Output: {}

// let obj = {
//     name: "baha",
//     age: 12,
//     tel: true,
//     text: "false"
// }
//
// const task = () => {
//     for (let key in obj) {
//         if (typeof obj[key] === "string") {
//             console.log(key, obj[key])
//         }
//     }
// }
// task()