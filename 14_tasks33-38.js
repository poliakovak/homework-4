//Дан объект {js:['jQuery', 'Angular'], php: 'hello', css: 'world'}. Выведите с его помощью слово 'jQuery'.
let obj = {
    js: ['jQuery','Angular'],
    php: 'hello',
    css: 'world',
};
console.log(obj.js[0]);
//Создайте массив arr = ['a', 'b';, 'c']. Выведите его на экран с помощью функции alert.
let array = ['a','b','c'];
alert(array);
//С помощью массива arr из предыдущего номера выведите на экран содержимое первого, второго и третьего элементов.
console.log(array[0]);
console.log(array[1]);
console.log(array[2]);
//Создайте массив arr = ['a', 'b', 'c', 'd'] и с его помощью выведите на экран строку a+b, c+d;.
let array2 = ['a','b','c','d'];
console.log(array2[0]+'+'+array2[1]);
console.log(array2[2]+'+'+array2[3]);
/*Создайте массив arr с элементами 2, 5, 3, 9. Умножьте первый элемент массива на второй, а третий элемент на четвертый.
 Результаты сложите, присвойте переменной result. Выведите на экран значение этой переменной.
 */
let array3 = [2,5,3,9];
let newResult = array3[0]*array3[1]+array3[2]*array3[3];
console.log(newResult);