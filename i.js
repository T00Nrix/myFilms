






// ЗАДАЧИ ТЕСТ

// function returnNeighboringNumbers(num) {
//     let x = [];
//     for (let i = 0; i < 2; i++){
//         x.push(num++);
//     }
//     x.push(num--);

//     return x;
// }

// function sayHello(name) {
//     return `Привет, ${name}`;
// }


// САМАЯ СЛОЖНАЯ ЗАДАЧА

// function getMathResult(num1, num2) {
//     let res = ""; //создаём пустую строку

//     if (typeof num1 === "number" && typeof num2 === "number") {
//         // Проверка на  тип
//         if (num2 !== 0 && num2 >= 0) {
//             // Проверка на  валидоность числа
//             for (let i = 1; i <= num2; i++) {
//                 // i < num2 - количество шагов
//                 res += num1 * i; //умножаем счётчик на число
//                 res += "---"; // добавляем тире
//             }
//         } else {
//             return num1; //вернуть одно число
//         }
//     } else {
//         return num1; // ошибка типа
//     }

//     return res.slice(0, -3); // Срезаем последние ---
// }



// РАСЧЁТ СУММЫ ОБМЕННИКА И СКИДКИ

// const usdCurr = 28,
//         eurCurr = 39;

// const  discount = 0.09;

// function convert(curr, amount) {
//     return curr * amount;
// }

// function discountCurr(discount ,fullAmount, priceIndef) {
//     console.log(`Converted: ${fullAmount} ${priceIndef}`);
//     console.log(`Discount ${discount * 100}%: ${fullAmount * discount} ${priceIndef}`);
//     console.log(`Total: ${fullAmount - (fullAmount * discount)} ${priceIndef}`);
//     return fullAmount - (fullAmount * discount);
// }

// discountCurr(discount, convert(usdCurr, 500), '$');

// ЕБАНАЯ ПИРАМИДА

// const lines = 5;
// let result = '';

// for (let i = 0; i <= lines; i++) {
//     for (let j = 0; j < lines - i; j++) {
//         result += " ";
//     }
//     for (let k = 0; k < 2 * i + 1; k++) {
//         result += "*";
//     }
//     result += "\n";
// }

// console.log(result);

// let x = 2;

// while (x <= 16) {
//   if (x % 2 === 0) {
//     x++;
//     continue;
//   } else {
//     console.log(x);
//   }
//   x++;
// }

// let x = [];

// for (let i = 5; i < 11; i++) {
//     x.push(i);
// }
// console.log(x);

// let x = 2;

// while (x <= 16) {
//     if (x % 2 === 0) {
//         console.log(x);
//     }
//     x++;
// }

// метка - pass
// нужный пароль 88
// const searchPass = 88,
// passArea = [1,2,4,5,3,2,5,2,88,1,3,6,2,8,];

// pass: for (let i = 0; i < passArea.length; i++) {
//     console.log(`Check pass: ${passArea[i]}`);
//     if (passArea[i] === searchPass) break pass;
// }

// let star = "";
// for (let i = 0; i < 3; i++) {
//     console.log(star += "*");
//     for (let j = 0; j < 1; j++) {
//         console.log(star += "*");
//     }
// }

// let x = 20;

// // while (x <= 22) {
// //     console.log(x);
// //     x++;
// // }

// for (let i = 1; i < x; i++) {
//     if (i == 10) {
//         console.log(i , x);
//         break;
//     }
//     console.log(i);
// }
