// if else

// if - если
// else - иначе

// let num = 5;
//
// if (num < 15) {
//     console.log("num < 15")
// } else if (num > 30){
//     console.log('num > 30')
// } else if (num === 20){
//     console.log("num === 20")
// } else{
//     console.log(false)
// }


// let num = 15;
//
// if (num === 10 || num === 15 || num === 20) {
//     console.log(true);
// } else {
//     console.log(false);
// }


// 1. Вам дана переменная a. Если переменная a равна 10,
// то выведите 'Верно', иначе выведите 'Неверно'.

// let a = 15;
// if (a === 10){
//     console.log('Верно')
// }else {
//     console.log('Неверно')
// }


// 2. Вам даны две переменные a=50, b=100. Составьте условие,
// по которому в консоль будет выводиться 'a больше b', 'a меньше b'.

// let a=150,
//     b=100;
// if (a>b){
//     console.log('a больше b')
// }
// else {
//     console.log('a меньше b')
// }

// 3. Вам дана переменная a=-2. Составьте условие, по которому в
// консоль будет выводиться 'positive' - если число больше 0,
// 'равно' если число равно 0, "negative" если число меньше 0.

// let a=-2;
// if (a>0) {
//     console.log('positive')
// }else if (a===0) {
//     console.log('ravno')
// }else {
//     console.log('negative')
// }

// 4. Вам дана переменная number=45. Составьте условие,
// по которому будет выводиться в консоль "Четное число", "Нечетное число".

// let number=45
// if(number%2===0){
//     console.log("Четное число")
// }else{
//     console.log("Нечетное число")
// }

// 5. Вам даны две переменные a=10, b=2. Составьте условие,
// по которому, остаток деления a на b, будет выводиться консоль
// "Четное число", "Нечетное число".

// let a=10,
//     b=2
// if(a%b===0){
//     console.log('Четное число')
// }else{
//     console.log('Нечетное число')
// }

// 6. Вам дана переменная s. Составьте условие, по которому в
// консоль будет выводится тип этой переменной - "boolean", "number", "string".

// let  s =25
// if (typeof s ==="boolean"){
//     console.log("boolean")
// }else if (typeof s==="number") {
//     console.log("number")
// }else if (typeof s==="string"){
//     console.log("string")
// }else {
//     console.log(false)
// }

// 7. Вам дана переменная а. Если переменная a больше
// одного и меньше 9-ти, то выведите 'Верно', иначе выведите 'Неверно'.

// let a=10
// if (a > 1 && a < 9){
//     console.log('Верно')
// }else{
//     console.log('Неверно')
// }

// 8. Вам дана переменная а. Если переменная a равна
// трем или равна семи, то прибавьте к ней 7, иначе поделите
// ее на 10. Выведите новое значение переменной в консоль.

// let a = 7;

// if (a === 3 || a === 7) {
//     console.log(a + 7)
// } else {
//     console.log(a / 10)
// }

// 9. Вам даны переменные а , b. Если переменная a равна
// или меньше 0, а переменная b больше или равна 5, то
// выведите сумму этих переменных,
// иначе выведите их разность (результат вычитания).

// let a = 10,
//     b = 30;
//
// if (a === 0 || a < 0 && b > 5 || b === 5){
//     console.log(a + b)
// } else{
//     console.log(a - b)
// }

// 10. Вам даны переменные a , b. Если переменная a больше
// 4-х и меньше 10-ти, или переменная b больше или равна
// 7-ми и меньше 17-ти, то выведите 'Верно',
// в противном случае выведите 'Неверно'.

// let a = 10,
//     b = 30;
//
// if (a > 4 && a < 10 || b >= 7 && b < 17){
//     console.log(true)
// } else{
//     console.log(false)
// }

// let num = 'Text'
//
// switch (num){
//     case "Text" :
//         console.log("true");
//         break;
//     case "week":
//         console.log("5 > 10");
//         break;
//     default:
//         console.log(false);
// }

// let num = 123;

// if (num >= 3 && num <= 5) {
//     console.log("summer")
// } else if (num >= 6 && num <= 8) {
//     console.log("outumn")
// } else if (num >= 9 && num <= 11) {
//     console.log("spring")
// } else if (num === 12 || num <= 2) {
//     console.log("winter")
// } else {
//     console.log(false)
// }


// 14. Вам дана переменная age=*любое двузначное число*.
// Составьте условие, по которому, в консоль будет
// выводиться "Мне  год", "Мне  лет", в зависимости от
// возраста. Наример мне 21 год, мне 20 лет.

// let age = 18
// if (age > 0 && age < 4) {
//     console.log(`Мне ${age} год`)
// } else if (age > 5 && age < 20) {
//     console.log(`Мне ${age} лет`)
// } else if (age > 21 && age < 24) {
//     console.log(`Мне ${age} год`)
// } else if (age > 25 && age < 30) {
//     console.log(`Мне ${age} лет`)
// } else if (age > 31 && age < 34) {
//     console.log(`Мне ${age} год`)
// } else if (age > 35 && age < 40) {
//     console.log(`Мне ${age} лет`)
// } else if (age > 41 && age < 44) {
//     console.log(`Мне ${age} год`)
// }


// 15. Вам дана переменная time= *любое чило от
// 1 до 59*. Составьте условие, по которому время
// будет делиться на четверти. Пример: time = 12 -
// Первая четверть. Если число больше 60, то в консоли
// будет выдаваться "Неверное число".

// let time = 60;

// if (time > 1 && time < 15) {
//     console.log("1 четверть")
// } else if (time > 15 && time < 30) {
//     console.log("2 четверть")
// } else if (time > 30 && time < 45) {
//     console.log("3 четверть")
// } else if (time > 45 && time < 60) {
//     console.log("4 четверть")
// } else{
//     console.log('Неверное число')
// }