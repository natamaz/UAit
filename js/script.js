// объявляет переменную с именем «message»
let messsage;

// можно поместить в неё данные, используя оператор присваивания =:
let message;
message = 'Hi';  // сохранняем строку 'Hello' в переменной с именем message

// Строка сохраняется в области памяти, связанной с переменной. Мы можем получить к ней доступ, используя имя переменной:
let message;
message = 'Hi!';
alert(message); // показывает содержимое переменной

// Упрощяем конструкцию:
let message = 'Hi!';
alert(message);

// Мы  можем изменить значения:
let message;
message = 'Hi!';
message = 'Hello!'; // значение изменено
alert(message);

// Мы  можем объявить две переменные и скопировать данные из одной в другую.
let hello = 'Hi girls!';
let message;
// копируем значение 'Hi girls' из переменной hello в переменную message
message = hello;
// теперь две переменные содержат одинаковые данные
alert(hello); // Hi girls!
alert(message); //Hi girls!



// Если имя содержит несколько слов, обычно используется верблюжья нотация, то есть, слова следуют одно за другим,
//     где каждое следующее слово начинается с заглавной буквы: myVeryLongName.
let userName;

// Примеры неправильных имён переменных:
// let 1a; // не может начинаться с цифры
// let my-name; // дефис '-' не разрешён в имени



// const myName= 'Natalia';
//
// // Переменные, объявленные с помощью const, называются «константами». Их нельзя изменить. Попытка сделать это приведёт
// // к ошибке:
// const myName= 'Natalia';
// myName = 'Sveta'; // ошибка, константу нельзя перезаписать!





// Числовой тип данных (number) представляет как целочисленные значения, так и числа с плавающей точкой.
let n = 1;
n = 2.5;


let str = "Hi";
let str2 = 'Girls';
let phrase = `Hi ${str2}`;



let nameFieldChecked = true; // да, поле отмечено
let ageFieldChecked = false; // нет, поле не отмечено

// true (результатом сравнения будет "да")
let isGreater = 10 > 1;
alert( isGreater );



let name;
alert(name); // выведет "undefined"










// -1, унарный
let x = 1;
x = -x;
alert( x );


// 1, бинарный минус вычитает значения
let x = 1;
let y = 2;
alert( y - x );



// Складываем числа и получаем результат 3
let x = 1;
let y = 2;
alert( y + x );

// Складываем строки и получаем результат Hi guyz
let x = 'Hi';
let y = 'guys';
alert( y + x );


// Складываем строку и число результат 1Hi
let x = 'Hi';
let y = 1;
alert( y + x );




// результат "12", так как бинарный плюс объединяет строки
let natalia = "1";
let olja = "2";
alert( natalia + olja );


// результат "3",  т.к. оба операнда  преобразованы в числа
let natalia = "1";
let olja = "2";
alert( +natalia + +olja );


// результат "5"
let x = 2 * 2 + 1;
alert( x );



// результат "3"
let counter = 2;
counter++;
alert( counter );


// результат "1"
let counter = 2;
counter--;
alert( counter );


// true
alert( 2 > 1 );

// false
alert( 2 == 1 );


// результат сравнения присваивается переменной result
let result = 1 == 1;
// true
alert( result );




alert( 'Я' > 'А' ); // true
alert( 'Дом' > 'Дог' ); // true
alert( 'Сонный' > 'Сон' ); // true


// true, строка '1' становится числом 1
alert( '1' > 0 );


// Вернет Да
let name = prompt('Как меня зовут?', '');
if (name == 'Natalia') alert( 'Да' );



let name = prompt('Как меня зовут?', '');
if (name == 'Natalia') {
    alert( 'Да!' );
} else {
    alert( 'Нет' );
}
