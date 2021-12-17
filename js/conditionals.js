/*if('7'==7)
{
    alert("wartosci sa sobie rowne");
}
if('7'!==7)
{
    alert("wartosci sa sobie rowne ale typy nie");
}*/

/*const dayOfBirthday=14;
const guess = prompt("zgadnij dzien moich urodzin");
let correct=false;
if (+guess === dayOfBirthday)
{
    correct= true;
}
if (correct===true)
{
    alert("zgadza sie");
    document.write("brawo");
}
if (correct===false)
{
    alert("zgaduj dalej");
    document.write("odswiez strone by sprobowac jeszcze raz");
}*/

/*const dayOfBirthday=14;
const guess = prompt("zgadnij dzien moich urodzin");
if (dayOfBirthday==guess)
{
    alert("zgadza sie");
    document.write("brawo");
}
else
{
    alert("zgaduj dalej");
    document.write("odswiez strone by sprobowac jeszcze raz");
}*/

/*const shoesSize=39;
const price =230;
const answerSize=prompt("Jaki jest dostepny rozmiar buta?");
const answerPrice=prompt("ile kosztuja buty?");
if(+answerSize===39 && +answerPrice===200)
{
  alert("mamy taki rozmiar, masz tez wystarczajaca kwote pieniedzy ");
  let colorBuyer=prompt("jaki chcesz kolor?");
  if(colorBuyer==='czarny'||colorBuyer==='bialy')
      alert("mamy buty w tym kolorze");
  else
      alert("nie mamy takiego koloru");
}

else if(+answerSize!==39 && +answerPrice!==200)
{
    alert("buty w takim rozmiarze i cenie nie sa dostepne ");
}

else if(+answerSize===39 && +answerPrice!==200)
{
   alert("buty w tej cenie nie sa dostepne ");
}

else if(+answerSize!==39 && +answerPrice===200)
{
    alert("nie mamy butów w tym rozmiarze, chociaz cie stac ");
}
*/

const punkty=prompt("ile miales punktow?");
if (punkty<60)
{
    alert("niedostateczny");
}
else if(punkty>=60 && punkty<=69)
{
    alert("dopuszczajacy");
}
else if(punkty>=70 && punkty<=79)
{
    alert("dostateczny");
}
else if(punkty>=80 && punkty<=90)
{
    alert("dobry");
}
else if(punkty>90 && punkty<=100)
{
    alert("bardzo dobry");
}
else
{
    alert("wprowadziles zla ilosc punktow");
}