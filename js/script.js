// // объявляет переменную с именем «message»
// let messsage;
//
// // можно поместить в неё данные, используя оператор присваивания =:
// let message;
// message = 'Hi';  // сохранняем строку 'Hello' в переменной с именем message
//
// // Строка сохраняется в области памяти, связанной с переменной. Мы можем получить к ней доступ, используя имя переменной:
// let message;
// message = 'Hi!';
// alert(message); // показывает содержимое переменной
//
// // Упрощяем конструкцию:
// let message = 'Hi!';
// alert(message);
//
// // Мы  можем изменить значения:
// let message;
// message = 'Hi!';
// message = 'Hello!'; // значение изменено
// alert(message);
//
// // Мы  можем объявить две переменные и скопировать данные из одной в другую.
// let hello = 'Hi girls!';
// let message;
// // копируем значение 'Hi girls' из переменной hello в переменную message
// message = hello;
// // теперь две переменные содержат одинаковые данные
// alert(hello); // Hi girls!
// alert(message); //Hi girls!
//
//
//
// // Если имя содержит несколько слов, обычно используется верблюжья нотация, то есть, слова следуют одно за другим,
// //     где каждое следующее слово начинается с заглавной буквы: myVeryLongName.
// let userName;
//
// // Примеры неправильных имён переменных:
// // let 1a; // не может начинаться с цифры
// // let my-name; // дефис '-' не разрешён в имени
//
//
//
// // const myName= 'Natalia';
// //
// // // Переменные, объявленные с помощью const, называются «константами». Их нельзя изменить. Попытка сделать это приведёт
// // // к ошибке:
// // const myName= 'Natalia';
// // myName = 'Sveta'; // ошибка, константу нельзя перезаписать!
//
//
//
//
//
// // Числовой тип данных (number) представляет как целочисленные значения, так и числа с плавающей точкой.
// let n = 1;
// n = 2.5;
//
//
// let str = "Hi";
// let str2 = 'Girls';
// let phrase = `Hi ${str2}`;
//
//
//
// let nameFieldChecked = true; // да, поле отмечено
// let ageFieldChecked = false; // нет, поле не отмечено
//
// // true (результатом сравнения будет "да")
// let isGreater = 10 > 1;
// alert( isGreater );
//
//
//
// let name;
// alert(name); // выведет "undefined"
//
//
//
//
//
//
//
//
//
//
// // -1, унарный
// let x = 1;
// x = -x;
// alert( x );
//
//
// // 1, бинарный минус вычитает значения
// let x = 1;
// let y = 2;
// alert( y - x );
//
//
//
// // Складываем числа и получаем результат 3
// let x = 1;
// let y = 2;
// alert( y + x );
//
// // Складываем строки и получаем результат Hi guyz
// let x = 'Hi';
// let y = 'guys';
// alert( y + x );
//
//
// // Складываем строку и число результат 1Hi
// let x = 'Hi';
// let y = 1;
// alert( y + x );
//
//
//
//
// // результат "12", так как бинарный плюс объединяет строки
// let natalia = "1";
// let olja = "2";
// alert( natalia + olja );
//
//
// // результат "3",  т.к. оба операнда  преобразованы в числа
// let natalia = "1";
// let olja = "2";
// alert( +natalia + +olja );
//
//
// // результат "5"
// let x = 2 * 2 + 1;
// alert( x );
//
//
//
// // результат "3"
// let counter = 2;
// counter++;
// alert( counter );
//
//
// // результат "1"
// let counter = 2;
// counter--;
// alert( counter );
//
//
// // true
// alert( 2 > 1 );
//
// // false
// alert( 2 == 1 );
//
//
// // результат сравнения присваивается переменной result
// let result = 1 == 1;
// // true
// alert( result );
//
//
//
//
// alert( 'Я' > 'А' ); // true
// alert( 'Дом' > 'Дог' ); // true
// alert( 'Сонный' > 'Сон' ); // true
//
//
// // true, строка '1' становится числом 1
// alert( '1' > 0 );
//
//
// // Вернет Да
// let name = prompt('Как меня зовут?', '');
// if (name == 'Natalia') alert( 'Да' );
//
//
//
// let name = prompt('Как меня зовут?', '');
// if (name == 'Natalia') {
//     alert( 'Да!' );
// } else {
//     alert( 'Нет' );
// }








//
// Объявите две переменные: admin и name.
//     Запишите строку "Джон" в переменную name.
//     Скопируйте значение из переменной name в admin.
//     Выведите на экран значение admin, используя функцию alert (должна показать «Джон»).
let admin, name; // можно объявить две переменные через запятую
name = "Джон";
admin = name;
alert( admin ); // "Джон"





// Создайте страницу, которая спрашивает имя у пользователя и выводит его.
// let name = prompt("Ваше имя?", "");
// alert(name);




// // Какое будет выведено значение 5
// let x = 5;
// alert(x++);
//
//
// // Какое будет выведено значение 6
// let x = 5;
// alert(++x);


//
// // Что выведет этот код:
// let y = 1;
// let x = y = 2;
// console.log(x); //Ответ "2"




// Что выведет этот код?
let a = (1,5 - 1) * 2;

alert(a);1



// Булевый (логический) тип «boolean»
let b = true;
if  (b == true)  {
    document.write ("Значение – true!");
}  else {
    document.write("Значение – false!");
}
// }Значение – true!


// Тип данных Undefined
// let car;
// alert(car); // выведет "undefined"



// Какой будет вывод?
const firstName = "Petr"
console.log(firstName())




// Написать функцию входа на старницу
function ask(question, yes, no){
    if(confirm(question)) yes()
    else no()
}
function showOk(){
    alert('привет');
}
function showCansel(){
    alert('отмена')
}
ask('Вы хотите войти?', showOk, showCansel);




// Написать функцию входа на старницу по годам
let age = prompt("Сколько Вам лет?", 18);

let welcome = (age < 18) ?
    function() { alert("Вы слишком молоды!"); } : function() { alert("Привет"); };
welcome(); // теперь всё в порядке





let age = prompt("Сколько Вам лет?", 18);
let welcome;
if (age < 18) {

    welcome = function() {
        alert("Вы слишком молоды!");
    };

} else {

    welcome = function() {
        alert("Здравствуйте!");
    };

}
welcome();








// Что выведет консоль?
// let a = '1';
// let b = 2;
// let c = a + b;
// console.log(c)


// Необходимо вывести результат 3
// let a = '1';
// let b = 2;
// let c = +a + b;
// console.log(c)



// Сравнение
// console.log("1" == 1);






// // Выведите в консоли переменную «number». Необходимо вывести в формате: «Переменная: number».
// let number = 10;
// console.log("Переменная: " + number);



// Базовые операторы, математика
// Создайте переменную «num» со значением: 100. Запишите в эту же переменную результат умножения переменной «num» на 15.
// let num = 100;
// num *= 15;
// console.log(num);



//
// // Создайте всплывающее окно с текстом «Работает».
// //
// // Окно должно показываться при загрузке страницы.
// alert("Работает");




// Логические операторы


// И «&&» находит первое ложное значение
// let hour = 12;
// let minute = 30;
//
// if (hour == 12 && minute == 30) {
//     alert( 'The time is 12:30' );
// }
// else {
//     alert( 'false' );
// };


// ИЛИ "||" находит первое истинное значение
// let hour = 12;
// let minute = 30;
//
// if (hour == 13 || minute == 30) {
//     alert( 'true' );
// }
// else {
//     alert( 'false' );
// };




// // ! (НЕ)
// let a = 3;
// console.log(!(a > 0));







// Объект
// let user = {};





// Литералы и свойства
// let user = {     // объект
//     name: "John",  // под ключом "name" хранится значение "John"
//     age: 30        // под ключом "age" хранится значение 30
// };


// Для обращения к свойствам используется запись «через точку»:
// alert( user.name ); // John
// alert( user.age ); // 30





// Имя свойства
// let user = {
//     name: "John",
//     age: 30,
//     "likes birds": true  // имя свойства из нескольких слов должно быть в кавычках
// };





// Объект, объявленный как константа, может быть изменён
// const user = {
//     name: "John"
// };
// user.name = "Pete"; // (*)
// alert(user.name); // Pete



// Квадратные скобки
// // это вызовет синтаксическую ошибку
// user.likes birds = true
//

// // присваивание значения свойству
// user["likes birds"] = true;
//
// // получение значения свойства
// alert(user["likes birds"]); // true





//Вычисляемые свойства
// let fruit = prompt("Какой фрукт купить?", "apple");
// let bag = {
//     [fruit]: 5, // имя свойства будет взято из переменной fruit
// };
// alert( bag.apple ); // 5, если fruit="apple"




// Свойство из переменной
// function makeUser(name, age) {
//     return {
//         name: name,
//         age: age
//         // ...другие свойства
//     };
// }
// let user = makeUser("John", 30);
// alert(user.name); // John
// alert(user.age);



//Проверка существования свойства
// let user = {};
// alert( user.noSuchProperty === undefined ); // true означает "свойства нет"





// оператор "in"
// let user = { name: "John", age: 30 };
// alert( "age" in user ); // true, user.age существует
// alert( "blabla" in user ); // false, user.blabla не существует




// Цикл "for..in"
// let user = {
//     name: "John",
//     age: 30,
//     isAdmin: true
// };
// for (let key in user) {
//     // ключи
//     alert( key );  // name, age, isAdmin
//     // значения ключей
//     alert( user[key] ); // John, 30, true
// }




//Копирование объектов и ссылки
// let message = "Привет!";
// let phrase = message;



// let user = { name: "John" };
// let admin = user; // копируется ссылка





// let user = { name: 'John' };
//
// let admin = user;
// admin.name = 'Pete'; // изменено по ссылке из переменной "admin"
// alert(user.name); // 'Pete', изменения видны по ссылке из переменной "user"
//
//
// let admin2 = user;
// admin2.name = 'Nikolaj'; // изменено по ссылке из переменной "admin"
// alert(user.name);




// Клонирование
// let user = {
//     name: "John",
//     age: 30
// };
//
// let clone = {}; // новый пустой объект
//
// // давайте скопируем все свойства user в него
// for (let key in user) {
//     clone[key] = user[key];
// }
//
// // теперь clone это полностью независимый объект с тем же содержимым
// clone.name = "Pete"; // изменим в нём данные
//
// alert( user.name ); // все ещё John в первоначальном объекте




//Object.assign()
// let user = { name: "John" };
// let permissions1 = { canView: true };
// let permissions2 = { canEdit: true };
// // копируем все свойства из permissions1 и permissions2 в user
// Object.assign(user, permissions1, permissions2);
// // теперь user = { name: "John", canView: true, canEdit: true }
// alert(user.name);
// alert(user.canView);
// alert(user.canEdit);





























