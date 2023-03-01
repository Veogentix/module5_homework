let a = prompt('Введите число');
if(!a.trim()){
console.log("Упс, кажется Вы ошиблись");
} else {
let x = +a;
if (typeof x === "number" && !isNaN(x)){
if(x % 2 === 0) {
console.log("Это чило чётное")
} else {
console.log("Это число нечётное")
}