'use strict';

// // let i = 1;
// // while (i <= 99) {
// //     console.log (i);
// //     i +=2;
// // }

// // let i = 30;
// // while (i >= 0) {
// //     console.log (i);
// //     i--;
// // }

// // for (let i = 1; i <= 9; i++) {
// //     console.log (i); // выведет 1, 2... 9
// // }

// // let arr = [1, 2, 3, 4, 5, 10, 14, 16];
// // let i = 0;
// // for (arr [i]; i <= arr.length - 1; i++) {
// //     console.log (arr[i]); // выведет все элементы массива 1, 2... 16
// // }

// // for (let i = 30; i >= 1; i--) {
// //     console.log (i);
// // }

// // for (let i = 0; i <= 100; i += 2) {
// //     console.log (i);
// // }

// // let result = 0;
// // for (let i = 1; i <= 6; i++) {
// //     result += i;
// // }
// // console.log (result); // Сумма всех чисел от 0 до 6

// // let result = 1;
// // for (let i = 1; i <= 10; i++) {
// //     result = result * i;
// // }
// // console.log (result); // Выведет произведение всех чисел

// // let sum = 0;
// // for (let i = 2 ; i <= 20; i += 2) {
// //     sum += i;
// // }
// // console.log (sum) // Сумма четных чисел от 2 до 20

// // let arr = ['a', 'b', 'c', 'd', 'e'];
// // for (let i = 0; i < arr.length; i++) {
// //     arr[i] = arr[i]; // Вывели все буквы из массива по очереди
// //     console.log ('Буква - ' + arr [i]);
// // }

// // let arr = [1, 2, 5, 6, 8, 12, 14, 16, 17, 19, 20];
// // for (let i = 0; i < arr.length; i++) {
// //     if (arr[i] % 2 == 0) { // перебор массива с помощью if
// //         console.log (arr[i]);
// //     }
// // }

// // let arr = [1, 2, 3, 4, 5];

// // for (let i = 0; i < arr.length; i++) {
// // 	if (arr[i] % 2 != 0 ) {
// //         console.log (arr[i])
// //     }
// // }

// // let arr = [1, 2, 3, 4, 5, 6, 9];
// // for (let i = 0; i < arr.length; i++) {
// //     if (arr[i] % 2 != 0) { // вывод нечетных чисел
// //         console.log (arr[i])
// //     }
// // }

// // let arr = ['a', 'b', 'c', 'd', 'e'];
// // for (let i = 0; i < arr.length; i++) {
// //     console.log (arr[i]);
// // }

// // let arr = [2, 5, 4, 9, 15, 1, 4];
// // for (let i = 0; i < arr.length; i++) {
// //     if (arr[i] > 3 && arr[i] < 10) {
// //         console.log (arr[i]);
// //     }
// // }

// // let arr = [-1, 4, 5, 7, -5, -3, -5, 6, 8];
// // for (let i = 0; i < arr.length; i++) {
// //     if (arr [i] > 0) {
// //         console.log (arr [i])
// //     }
// // } 

// // let arr = [1, 2, 3, 4, -2, -4, 24, -3];
// // let result = 0;
// // for (let i = 0; i < arr.length; i++) {
// //     if (arr[i] > 0) {
// //         result += arr[i]; 
// //         console.log (result);
// //     }
// // }

// // let arr = [1, 2, 3, 4, 5];
// // let result = 1;
// // for (let i = 0; i < arr.length; i++) {
// //     result *= arr [i]; // Произведение всех элементов
// // }
// // console.log (result);

// // let arr = [1, 2, 3, 4, 5];
// // let result = 0; 
// // for (let i = 0; i < arr.length; i++) {
// //     result += arr[i] ** 2; 
// //     console.log (result);
// // }

// // let arr = [1, 2, 3, 4, 5];
// // let result = 0;
// // for (let i = 0; i < arr.length; i++) {
// //     result += arr [i];
// //     if (i == arr.length - 1) {
// //         console.log (result / arr.length); // среднее арифметическое чисел из массива 
// //     }
// // }

// // let arr = [10, 20, 30, 50, 235, 3000];
// // for (let i = 0; i < arr.length; i++) {
// //     if (String(arr[i])[0] == 1 || String(arr[i])[0] == 2 || String(arr[i])[0] == 5) {
// //         console.log (arr[i]); // вывели числа из массива, которые начинаются на цифры 1, 2 или 5 
// //     }
// // }

// // let arr = [1, 2, 3, 4, 5, 8, 9, 14, 33, 55, 67, 99];
// // let arr2 = [];
// // for (let i = arr.length - 1, j = 0; i >= 0; i--, j++) { 
// //     arr2 [j] = arr [i]; // Перебирая arr, заполняем массив arr2
// // }
// // console.log (arr2)

// // let arr = [0, 1, 4, 3, 4, 8];
// // for (let i = 0; i < arr.length; i++) {
// //     if (arr[i] == i) { // вывод элементов, значение которых совпадает с их порядковым номером
// //         console.log (arr [i]);
// //     }
// // }

// // let arr = ['Первый', 'Второй', 'Третий', 'Четвертый'];
// // for (let i = 0; i < arr.length; i++) {
// //     document.write (arr [i] + '</br>'); // Вывод элементов, каждый с новой строки 
// // }

// // let arr = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];
// // for (let i = 0; i < arr.length; i++) {
// //     if (i < 5) {
// //         document.write (arr [i] + '</br>');
// //     } else {
// //         document.write ('<b>' + arr [i] + '<b>' + '</br>');
// //     }
// // }

// // let arr = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];
// // for (let i = 0; i < arr.length; i++) {
// //     let day = 4;
// //     if (i == day) { // день, который в переменной day, выделен курсивом
// //         document.write ('<i>' + arr [i] + '</i>' + '</br>');
// //     } else {
// //         document.write (arr [i] + '</br>');
// //     }
// // }

// // let arr = ['a', 'b', 'c', 'd', 'e'];
// // for (let i of arr) { // цикл for-of предназначен конкретно для перебора массивов
// //     console.log (i);
// // }

// // let arr = [1, 2, 3, 4, 5];
// // let result = 0;
// // for (let i of arr) {
// //     result += i; // сумма элементов
// // }
// // console.log (result)

// // let obj = {a: 1, b: 2, c: 3, d: 4, e: 5};
// // let result = 0;
// // for (let key in obj) { // цикл for-in предназначен конкретно для перебора объектов
// //     result += obj [key];
// // }
// // console.log (result)

// // let arr = [4, 5, 3, 2, 7, 0, 6, 4];
// // for (let i = 0; i < arr.length; i++) {
// //     if (arr [i] == 0) {
// //         console.log ('есть цифра 0');
// //         break;
// //     }
// //     console.log (arr [i])
// // }

// // let arr = [4, 5, 3, 2, -7, 0, -6, 4];
// // let result = 0;
// // for (let i = 0; i < arr.length; i++) {
// //     if (arr [i] < 0) { // сумму элементов, расположенных от начала массива до первого отрицательного числа
// //         break;
// //     }
// //     result += arr [i];
// //     console.log (result)
// // }

// // let arr = [4, 5, 4, 2, 3, 0, -6, 4];
// // for (let i = 0; i < arr.length; i++) {
// //     if (arr [i] == 3) {
// //         console.log ('Позиция первого элемента со значением "3" в массиве - ' + (i+1));
// //         break;
// //     }
// // }

// // let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18];
// // let result = 0;
// // for (let i = 0; i < arr.length; i++) {
// //     result += arr [i];
// //     if (result > 100) {
// //         console.log ((i+1) + ' - столько нужно целых чисел, чтобы их сумма была больше 100');
// //         break;
// //     }
// // }

// // let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// // for (let elem of arr) {
// // 	let result;
// // 	if (elem % 2 == 0) {
// // 		result = elem ** 2;
// // 	} else if (elem % 3 == 0) {
// // 		result = elem ** 3;		
// // 	} else {
// //         continue; // перейдем на новую итерацию цикла
// //     }
// //     console.log(result); // выполнится, если делится на 2 или 3
// // }

// // let arr = [1, 2, 3, 4, 5];
// // let flag = false;
// // for (let elem of arr) {
// // 	if (elem == 3) {
// // 		flag = true;
// // 		break;
// // 	}
// // }
// // if (flag === true) {
// // 	console.log('есть');
// // } else {
// // 	console.log('нет');
// // }

// // let arr = ['a', 'b', 'c', 'd', 'e'];
// // let flag = false;
// // for (let elem of arr) {
// //     if (elem == 'd') {
// //         flag = true;
// //         break;
// //     }
// // }
// // if (flag === true) {
// //     console.log ('есть');
// // } else {
// //     console.log ('нет')
// // }

// // let num = 31; // некоторое число
// // let flag = true;
// // for (let i = 2; i < num; i++) {
// //     if (num % i == 0) {
// //         flag = false;
// //         break;
// //     }
// // }
// // if (flag === true) {
// //     console.log ('простое число');
// // } else {
// //     console.log ('непростое число');
// // }

// // let num = 500;
// // while (num > 10) {
// //     num = num / 2;
// // }
// // console.log (num)

// // let num = 4;
// // while (num <= 1000) { // Цикл без заданного количества итераций
// //     num = num * 3;
// // }
// // console.log (num);

// // for (var num = 4, i = 0; num <= 1000; num *= 3, i++);
// // console.log (num, i); // Вывели число и количество итераций 

// // let str = '';
// // for  (let i = 0; i < 10; i++) {
// //     str += 'x';
// // }
// // console.log (str); // формирование строки 'xxxxxxxxxx' с помощью цикла for

// // let str = '';
// // for (let i = 9; i >= 1; i--) {
// //     str += i;
// // }
// // console.log (str);

// // let str = '';
// // for (let i = 1; i <= 9; i++) {
// //     str += -i;
// // }
// // console.log (str + '-');

// // let str = '';
// // for (let i = -1; i >= -9; i--) {
// //     str += i;
// // }
// // console.log (str + '-');

// // for (let i = 1; i <= 100; i++) {
// // 	let str = String(i); // сумма двух первых цифр числа равна 5.
// // 	if (Number(str[0]) + Number(str[1]) == 5) {
// // 		console.log(str0);
// // 	}
// // }

// // let result = '';
// // for (let i = 1; i <= 30; i++) {
// //     result += i; // Переберали циклом от 1 до 30 и сложили их как строки
// // }
// // console.log (result)

// // for (let i = 1; i <= 9; i++) {
// //     for (let j = 1; j <= 3; j++) {
// //         document.write (i);
// //     }
// // }

// // for (let i = 1; i <= 3; i++) {
// //     for (let j = 1; j <= 3; j++) {
// //         document.write (String(i) + String(j) + ' '); // Вывели строку "11 12 13 21 22 23 31 32 33"
// //     }
// // }

// // let arr = [];
// // for (let i = 0; i <= 4; i++) {
// //     arr [i] = i + 1;  // Заполнение массива в цикле
// // }
// // console.log (arr)

// // let arr = [];
// // for (let i = 0; i <= 100; i++) {
// //     arr [i] = i + 1;
// // }
// // console.log (arr)

// // let arr = [];
// // for (let i = 2, j = 0; i <= 100; i += 2, j++) { // заполнение четных чисел без разреженного массива
// //     arr[j] = i;
// // }
// // console.log (arr)

// // let arr = [11, 2, 6, 5, 7, 9];
// // for (let i = 0; i < arr.length; i++) {
// //     arr [i] = arr [i] ** 2; 
// // }
// // console.log (arr)

// // let arr = [11, 2, 6, 5, 7, 9];
// // for (let i = 0; i < arr.length; i++) {
// //     arr [i] -= 1; // отняли от каждого элемента единицу 
// // }
// // console.log (arr)

// // let arr = [11, 2, 6, 5, 7, 9];
// // for (let i = 0; i < arr.length; i++) {
// //     arr [i] += 10; // прибавили к каждому элементу 10 
// // }
// // console.log (arr)

// // let arr = [];
// // for (let i = 0; i <= 10; i++) {
// //     arr.push (i); // метод push для заполнения
// // }
// // console.log (arr)

// // let arr = []; 
// // for (let i = 0; i <= 10; i++) {
// //     arr.push ('x'); // заполнили массив 10-ю буквами 'x'
// // }
// // console.log (arr)

// // let arr = [1, 2, 3, 4, 5, 6, 10, 18];
// // let arr2 = [];
// // for (let elem of arr) {
// //     if (elem % 2 == 0 ) {
// //         arr2.push (elem) // записали в новый массив из первого только элементы с четными числами
// //     }
// // }
// // console.log (arr2)

// // let arr = ['a', 'b', 'c', 'd', 'e'];
// // let arr2 = [];
// // for (let i = arr.length - 1; i >= 0; i--) {
// //     arr2.push (arr[i])
// // } 
// // console.log (arr2);
// // for (let i = 0; i < arr2.length; i++) {
// //     arr[i] = arr2[i];
// // } 
// // console.log (arr);

// // let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// // let result = [];
// // for (let elem of arr) {
// // 	if (elem % 2 != 0) {
// // 		result.push(elem);
// // 	}
// // }
// // console.log(result);

// // let obj = {};
// // obj ['a'] = 1;
// // obj ['b'] = 2;
// // obj ['c'] = 3;
// // obj ['d'] = 4;
// // console.log (obj)

// // let keys = ['a', 'b', 'c', 'j', 'e'];
// // let values = [1, 2, 3, 4, 5]
// // let obj = {};
// // for (let i = 0; i <= 4; i++) {
// //     let key = keys [i];
// //     let value = values [i];
// //     obj [key] = value;
// // }
// // console.log (obj)

// // let keys = ['a', 'b', 'c', 'd', 'e'];
// // let values = [1, 2, 3, 4, 5];
// // let obj = {};
// // for (let i = 0; i <= 4; i++) {
// // 	obj[keys[i]] = values[i]; // Заполнение объекта в цикле 
// // }
// // console.log(obj);

// // let arr1 = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];
// // let arr2 = [1, 2, 3, 4, 5, 6, 7];
// // let obj = {};
// // let obj2 = {};
// // for (let i = 0; i < 7; i++) {
// //     obj [arr2 [i]]  = arr1 [i]; // Заполнение объекта в цикле
// // }
// // console.log (obj)

// // let obj = {'a': 1, 'b': 2, 'c': 3, 'd': 4, 'e': 5};
// // let result = {};

// // for (let key in obj) {
// //     if (obj[key] % 2 == 0) {
// //         result[key] = obj[key]; 
// //     }
// // }
// // console.log(result)

// // let obj = {'a': 12, 'b': 21, 'c': 13, 'd': 23, 'e': 17};
// // let obj2 = {};
// // for (let key in obj) {
// //     if (obj[key] >= 10 && obj[key] <= 20) {
// //         obj2[key] = obj [key]; // Запишите в новый объект элементы, значения которых от 10 до 20.
// //     }
// // }
// // console.log (obj2)

// // let obj = {1: 'пн', 2: 'вт', 3: 'ср', 4: 'чт', 5: 'пт', 6: 'сб', 7: 'вс'};
// // let obj2 = {};
// // for (let key in obj) {
// //     if (key % 2 != 0) {
// //         obj2 [key] = obj [key]; // В obj2 записали дни недели, номера которых являются нечетными числами
// //     }
// // }
// // console.log (obj2, obj)

// // let obj = {'a': 1, 'b': 2, 'c': 3, 'd': 4, 'e': 5};
// // for (let key in obj) {
// //     obj [key] = obj [key] ** 2; // изменили значения, возвели в квадрат
// // }
// // console.log (obj)

// // let obj = {a: 1, b: 2, c: 3, d: 4, e: 5};
// // let result = {};
// // for (let key in obj) {
// //     result [obj[key]] = key; // поменяли местами ключи и значения
// // }
// // console.log (result)

// // let object = {1: 'f', 2: 'g', 3: 't', 4: 's', 5: 'l'};
// // let object2 = {};
// // for (let key in object) {
// //     object2 [object[key]] = key;
// // }
// // console.log (object2)

// // Задача №1

// // let obj = {
// // 	employee1: 100,
// // 	employee2: 200,
// // 	employee3: 300,
// // 	employee4: 400,
// // 	employee5: 500,
// // 	employee6: 600,
// // 	employee7: 700,
// // };
// // for (let key in obj) {
// //     obj [key] *= 1.1; // Каждый элемент +10%
// //     obj [key] = parseInt(obj [key]); // округлили до целого числа
// // }
// // console.log (obj);

// // Задача №2

// // let obj = {
// // 	employee1: 100,
// // 	employee2: 200,
// // 	employee3: 300,
// // 	employee4: 400,
// // 	employee5: 500,
// // 	employee6: 600,
// // 	employee7: 700,
// // };
// // for (let key in obj) {
// //     if (obj [key] <= 400) {
// //         obj [key] *= 1.1; // Каждый элемент +10%
// //         obj [key] = parseInt(obj [key]); // округлили до целого числа
// //     }
// // }
// // console.log (obj);

// // Задача №3

// // let arr1 = [1, 2, 3, 4, 5];
// // let arr2 = [6, 7, 8, 9, 10];
// // let obj = {};
// // for (let i = 0; i <= 4; i++) {
// //     obj [arr1 [i]] = arr2 [i];
// // }
// // console.log (obj)

// // Задача 4

// // let obj = {1: 6, 2: 7, 3: 8, 4: 9, 5: 10};
// // let sum_key = 0;
// // let sum = 0;
// // for (var key in obj) {
// //     sum_key += Number (key);  
// //     sum += obj[key]; 
// // }
// // console.log (sum_key / sum) // Нашли сумму ключей объекта и поделили ее на сумму значений

// // Задача 5

// // let obj = {'a': 1, 'b': 2, 'c': 3, 'd': 4, 'e': 5};
// // let arr = [];
// // let arr_key = [];
// // for (let key in obj) {
// //     arr.push (obj[key]);
// //     arr_key.push (key);
// // }
// // console.log (arr);
// // console.log (arr_key);

// // Задача 6

// // let obj = {
// // 	1: 125,
// // 	2: 225,
// // 	3: 128,
// // 	4: 356,
// // 	5: 145,
// // 	6: 281,
// // 	7: 452,
// // };
// // let arr = [];
// // for (let key in obj) {

// //     if ((String(obj[key]))[0] === '1' || (String(obj[key]))[0] === '2') {
// //         arr.push (obj[key]) // Записали в новый массив элементы, значение которых начинается с цифры 1 или 2
// //     }
// // }
// // console.log (arr);

// // Другой метод:
// // if (obj[key].toString()[0] === '1') {
// //     arr.push (obj[key]) 
// // }

// // Задача 7

// // let arr = ['a', 'b', 'c', 'd', 'e'];
// // let obj = {};
// // for (let i = 1; i <= arr.length; i++) {
// //     obj[i] = arr [i-1]; // Создать из массива объект {1: 'a', 2: 'b', 3: 'c', 4: 'd', 5: 'e'}
// // } 
// // console.log (obj)

// // Задача 8

// // let arr = ['a', 'b', 'c', 'd', 'e'];
// // let obj = {};
// // for (let i = 1; i <= arr.length; i++) {
// //     obj[arr [i-1]] = i; // Создать из массива объект {1: 'a', 2: 'b', 3: 'c', 4: 'd', 5: 'e'}
// // } 
// // console.log (obj)


// // let arr = ['a', 'b', 'c', 'a', 'a', 'b'];
// // let counter = 0;
// // for (let elem of arr) {
// //     if (elem == 'a') {
// //         counter++;
// //     }
// // }
// // console.log (counter)

// // let arr = [1, 2, 3, 2, 4, 3, 5, 6, 3, 2, 3];
// // let counter3 = 0;
// // let counter2 = 0;

// // for (let elem of arr) {
// //     if (elem == 3) {
// //         counter3++;
// //     }
// //     if (elem == 2) {
// //         counter2++;
// //     }
// // }
// // console.log (counter3, counter2)

// // let arr = ['a', 'b', 'c', 'a', 'a', 'b'];
// // let count = {a: 0, b: 0, c: 0};
// // for (let elem of arr) {
// //     count[elem]++; // сколько каких элементов есть в массиве
// // }
// // console.log (count)

// // let arr = ['a', 'b', 'c', 'a', 'a', 'b', 'f', 'l'];
// // let obj = {};
// // for (let elem of arr) {
// //     if (obj [elem] === undefined) {
// //         obj [elem] = 1;
// //     } else {
// //         obj [elem] ++; 
// //     }
// // }
// // console.log (obj) // сколько раз в строке встречается каждый из ее символов

// // let arr = [1, 2, 3, 4, 5];
// // for (let i = 0; i < arr.length-1; i++) {
// //     console.log (arr [i+1])
// // }

// // let arr = [1, 2, 3, 4, 5];
// // for (let i = 0; i < arr.length-1; i++) {
// //     console.log (arr [i] + arr [i+1])
// // }

// // let arr = [1, 4, 5, 6, 3, 8, 10, 4];
// // for (let i = 2; i < arr.length; i++) {
// //     console.log (arr[i-2]);
// // }

// // let arr = [1, 4, 5, 6, 3, 8, 10, 4];
// // for (let i = 2; i < arr.length; i++) {
// //     console.log (arr[i] + arr[i-1] + arr[i-2]);
// // }

// // let one = 0;
// // let two = 1;
// // let three = 2;
// // for (let i = 1; i <= 10; i++) {
// //     let sum = one + two + three; // Получение чисел Фибоначчи (первые три числа равны 0, 1 и 2)
// //     one = two;
// //     two = three;
// //     three = sum;
// //     console.log (sum)
// // }

// // let one = 0;
// // let two = 1;
// // for (let i = 1; i <= 10; i++) {
// //     let sum = one + two + three; // Получение чисел Фибоначчи (первые три числа равны 0, 1)
// //     one = two;
// //     two = three;
// //     three = sum;
// //     console.log (sum)
// // }

// for (let i = 1; i <= 9; i++) {
//     for (let j = 1; j <= 3; j++) {
//         document.write (i);
//     }
//     document.write ('<br>');
// }

// for (let i = 1; i <= 9; i++) {
//     for (let j = 1; j <= i; j++) {
//         document.write (i);
//     }
//     document.write ('<br>');
// }

// for (let i = 1; i <= 9; i++) {
// 	let str = ''; // каждый раз зачищаем строку
	
// 	for (let j = 1; j <= i; j++) {
//         if (i % 2 != 0){
//             str += i;
//         }

// 	}
//     if (i % 2 != 0){
//         document.write(str + '<br>');    
//     }


// }

// for (let i = 9; i >= 1; i--) {
//     let str = '';
//     for (let j = 1; j <= i; j++) {
//         str += i;
//         if (i % 2 != 0) {
//             document.write (i)
//         }
//     }
//     if (i % 2 != 0) {
//         document.write ('<br>')
//     }
// }

// let arr = [];
// let str = '';
// for (let i = 0; i <= 4; i++) {
//     str += 'xx';
//     arr.push (str); // Сформировали массив: ['xx', 'xxxx', 'xxxxxx', 'xxxxxxxx', 'xxxxxxxxxx']
// }
// console.log (arr)

// let arr = [];
// for (let i = 1; i <= 5; i++) {
//     let str = '';
//     for (let j = 1; j <= 5; j++) {
//         str += String(i); // Сформировали массив: ['11111', '22222', '33333', '44444', '55555']
//     }    
//     arr.push (str)
// }
// console.log (arr)

// let arr = [10, 20, 30, 40, 23, 32, 51];
// let sum = 0;
// for (let i = 0; i < arr.length; i++) { 
//     if (String(arr[i])[0] == 1 || String(arr[i])[0] == 2) {
//         sum += arr [i]; // нашли элементы, у которых первая цифра 1 или 2, и вычислили их сумму
//     }
// }
// console.log (sum)

// let obj = {a: 10, b: 20, c: 30, d: 40, e: 50};
// let sum = 0;
// for (let elem in obj) {
// 	if (String(obj[elem])[0] === '1' || String(obj[elem])[0] === '2') {
// 		sum += obj[elem]; // сумма значение, первые цифры которых = 1 или = 2
// 	}
// }
// console.log(sum);

//Задача №1

// let arr = ['1', '2', '3', '4', '5'];
// let sum = 0;
// for (let i = 0; i < arr.length; i++) {
// 	sum += +(arr[i])
// }
// console.log(sum);

//Задача №2

// let arr = [1, 2, 3, 4, 5];
// let res = '';
// for (let elem of arr) {
// 	if (arr [elem] === 3) { // проверка, есть ли в массиве число 3 или нет
// 		res = '+++';
//         break
//     } else {
//         res = '---';
//     }
// }
// console.log(res);

// let arr = [1, 2, 3, 4, 5, 6, 7, 8];
// let res = 0;
// for (let i = 0; i < arr.length; i++) {
//     res += arr [i];
// }
// let mid_res = res / (arr.length - 1); // Среднее арифметическое
// console.log (mid_res)
// console.log (parseInt(mid_res))

// let arr = [1, 2, 3, 40, 5, 6, 7, 80, 6, 8, 11, 16];
// let arr2 = [];

// for (let i = 0; i <= arr.length; i++) {
//     if (arr [arr [i]] > 0 && arr [i] < 10) {
//         console.log (arr [i]);
//     }
// }

// let arr = ['21', '32', '34', '43', '45', '54', '55'];
// let sum = 0;
// for (let elem of arr) {
//     if (+elem [0] == +elem [1] + 1) {
//         sum += +elem; // сумма элементов, у которых первая цифра на один больше второй
//     }
// }
// console.log (sum);

let arr = [1, 2, 3, 4, 5];
let res = 1;
for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j <= i; j++) {
        res = res * arr[j]; // Найти факториал каждого числа. Например, 4! = 1*2*3*4.
    }
    console.log (res)
    res = 1;
}

