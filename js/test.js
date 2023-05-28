
// let name;
// name = 'Natalia';
// alert(name);


// let name = 'Natalia';
// alert(name);


//
// let massage;
// massage = 'hi';
// massage = 'hello'
// alert(massage);




// const myName = 'Natalia';
// myName = 'Katia'



// let x = 1;
// let n = 1.1
// let y = 'hi'
// let b = "h1"
//
//
// let checed = true;
// let noChecked = false;


// console.log(typeof '42');


// let value = true;
// alert(typeof  value);
//
// value = String(value);
// alert(typeof  value);


// let str = '123';
// alert(typeof  str);
//
//
// let num = Number(str);
// alert(typeof num)


//
// let name = 'my' + 'name' + 'Natalia';
// alert(name)
//
// let sum = (1 + 2);
// alert(sum)


// alert('1' + 2)
// alert(5 + '2')

//
// let name = '2';
// let user = '3';
// alert (name + user);
//
// alert(+name + +user);

// Складываем строки и получаем результат Hi guyz
// let x = 'Hi';
// let y = 'guys';
// alert( y + x );

// let natalia = "1";
// let olja = "2";
//
// alert( natalia + olja );


// let natalia = "1";
// let olja = "2";
// // оба операнда предварительно преобразованы в числа
// alert( +natalia + +olja ); // 3
// результат сравнения присваивается переменной result
// let result = 1 == 1;
// // true
// alert( result );




// alert( 'Я' > 'А' ); // true
// alert( 'Дом' > 'Дома' ); // true
// alert( 'Кот' > 'Коты' ); // true
// alert( '1' > 0 );

// let name = prompt('Как меня зовут?', '');
//
// if (name == 'Natalia') alert( 'Да' );



// let name = prompt('Как меня зовут?', '');
// if (name == 'Natalia') {
//     alert( 'Да!' );
// } else {
//     alert( 'Нет' );
// }

//
// let age = prompt('Сколько мне лет', '');
//
// if (age < 36) {
//     alert( 'Маловато' );
// } else if (age > 36) {
//     alert( 'Многовато' );
// } else {
//     alert( 'Верно!' );
// }

//
// let accessAllowed;
// let age = prompt('Сколько вам лет?', '');
//
// if (age > 18) {
//     accessAllowed = true;
// } else {
//     accessAllowed = false;
// }
//
// alert(accessAllowed);

// let age = prompt('Сколько вам лет?', '');
// let accessAllowed = (age > 18) ? true : false;
// alert(accessAllowed);

//
// result = a || b;


// let hour = 9;
// if (hour < 10 || hour > 18) {
//     alert( 'Офис закрыт.' );
// }

//
// alert( true && true );   // true
// alert( false && true );  // false
// alert( true && false );  // false
// alert( false && false ); // false


// let hour = 12;
// let minute = 30;
//
// if (hour == 12 && minute == 30) {
//     alert( 'The time is 12:30' );
// }

//
// const a = 3;
// console.log(!(a > 0));


// let user;
// alert(user ?? "Аноним"); // Аноним (user не существует)
//
//
// let user = "Иван";
// alert(user ?? "Аноним"); // Иван (user существу








// function sum(a, b){
//     return a + b;
// }
// alert(sum(1, 2))


// let sum = function (a, b){
//     return a + b;
// }
// alert(sum(1, 2))


// function ask(question, yes, no){
//     if(confirm(question)) yes()
//     else no()
// }
// function showOk(){
//     alert('привет');
// }
// function showCansel(){
//     alert('отмена')
// }
// ask('Вы хотите войти?', showOk, showCansel);

//
// function ask(question, yes, no){
//     if(confirm(question)) yes()
//     else no()
// }
// ask(
//     'ti,eys',
//     function (){alert('Yes');},
//     function (){alert('No');}
// )



// syHi('Natalia');
// function syHi(name){
//     alert(`hi, ${name}`)
// }

//
// sayHi('Natalia');
// let sayHi = function (name){
//     alert(`hi, ${name}`);
// }

// syHi('Natalia');
// function syHi(name){
//     alert(`hi, ${name}`)
// }






//
//
// let sayHi = () => alert('hi');
// sayHi();







// let age = prompt("Сколько Вам лет?", 18);
//
// let welcome = (age < 18) ?
//     function() { alert("Вы слишком молоды!"); } : function() { alert("Привет"); };
//
// welcome(); // теперь всё в порядке





// let age = prompt("Сколько Вам лет?", );
// let welcome;
// if (age < 18) {
//     welcome = function() {
//         alert("Вы слишком молоды!");
//     };
//
// } else {
//     welcome = function() {
//         alert("Здравствуйте!");
//     };
// }
// welcome();
//
// let number = 10;
// console.log("Переменная: " + number);

















//
// let user = {};





// let user = {     // объект
//     name: "John",  // под ключом "name" хранится значение "John"
//     age: 30        // под ключом "age" хранится значение 30
// };



// alert( user.name ); // John
// alert( user.age ); // 30






// let user = {
//     name: "John",
//     age: 30,
//     "likes birds": true  // имя свойства из нескольких слов должно быть в кавычках
// };










// const user = {
//     name: "John"
// };
//
// user.name = "Pete"; // (*)
//
// alert(user.name); // Pete




// // это вызовет синтаксическую ошибку
// user.likes birds = true
//

// // присваивание значения свойству
// user["likes birds"] = true;
//
// // получение значения свойства
// alert(user["likes birds"]); // true





//
// let fruit = prompt("Какой фрукт купить?", "apple");
//
// let bag = {
//     [fruit]: 5, // имя свойства будет взято из переменной fruit
// };
//
// alert( bag.apple ); // 5, если fruit="apple"





// function makeUser(name, age) {
//     return {
//         name: name,
//         age: age
//         // ...другие свойства
//     };
// }
//
// let user = makeUser("John", 30);
// alert(user.name); // John
// alert(user.age);



//
// let user = {};
//
// alert( user.noSuchProperty === undefined ); // true означает "свойства нет"






// let user = { name: "John", age: 30 };
//
// alert( "age" in user ); // true, user.age существует
// alert( "blabla" in user ); // false, user.blabla не существует








// let user = {
//     name: "John",
//     age: 30,
//     isAdmin: true
// };
//
// for (let key in user) {
//     // ключи
//     alert( key );  // name, age, isAdmin
//     // значения ключей
//     alert( user[key] ); // John, 30, true
// }




//
// let message = "Привет!";
// let phrase = message;



// let user = { name: "John" };
//
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




//
// let user = { name: "John" };
// let permissions1 = { canView: true };
// let permissions2 = { canEdit: true };
// // копируем все свойства из permissions1 и permissions2 в user
// Object.assign(user, permissions1, permissions2);
// // теперь user = { name: "John", canView: true, canEdit: true }
// alert(user.name);
// alert(user.canView);
// alert(user.canEdit);
