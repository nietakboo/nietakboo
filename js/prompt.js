/*const statement='nauka programowania jest ';
let choice = prompt('co sadzisz o nauce programowania?');
alert(statement+choice);*/

//lancuch szablonowy - pozwala wyswietlic wartosc zmiennej wewnatrz lancucha znakow(string)

const choice = prompt('co sadzisz o nauce programowania?');
const message = `nauka programowania jest ${choice}`;
console.log(message);