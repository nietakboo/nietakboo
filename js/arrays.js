/*let tablica =[9,7,2,1];
alert(`drugi element tablicy to ${tablica[1]}`);
alert("drugi element tablicy to "+tablica[1]);
alert(`dlugosc tablicy to ${tablica.length}`);
alert("dlugosc tablicy to " +tablica.length);
tablica.push(8);
alert(`piaty element tablicy to ${tablica[4]}`);
alert(`dlugosc tablicy to ${tablica.length}`);
tablica[1]=6;
alert(tablica);*/

/*const qanda =[
['gdziekolwiek','Edward'],
['wyspa','jonasz'],
['zycie','jan']
];
for(let i=0;i<qanda.length; i++)
{
    alert("tytul: "+qanda[i][0]+" autor: "+qanda[i][1]);
}
for(let i=0;i<3;i++)
{
    for(let k=0;k<2;k++)
    alert(qanda[i][k]);
}
*/
/*
let suma=0;
let liczby=[1,2,3,4,5,6,7,8,9]
for (let i=0;i<liczby.length;i++)
{
    suma+=liczby[i];
}
alert(suma);
*/
let suma=0;
let liczby=[1,2,3,4,5,6,7,8,9]
for (let liczba of liczby)
{
    suma+=liczba;
}
alert(suma);