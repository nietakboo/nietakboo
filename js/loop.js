/*for(i=0;i<=100;i++)
document.write(i);*/

/*const street=["krucza ","kurza ","jajowa ","ptasia ","normalna ulica"];
for (let i=0;i<street.length;i++)
{
    document.write(street[i]);
}*/

/*const shoesSize=39;
const price=230;
let n;
const colorOfShoes=['red','blue','orange','purple','pink','yellow','green'];
const answerSize=prompt("Jaki jest dostepny rozmiar buta?");
const answerPrice=prompt("ile kosztuja buty?");
if(+answerSize===39 && +answerPrice===200)
{
    alert("mamy taki rozmiar, masz tez wystarczajaca kwote pieniedzy ");
    let colorBuyer=prompt("jaki chcesz kolor?");
    for(let i=0;i<colorOfShoes.length;i++)
        if(colorOfShoes[i]===colorBuyer)
        {
            alert("mamy buty w takim rozmiarze i kolorze, masz wystarczajaco pieniedzy");
            n=1;
        }
        if(n!==1)
        {
            alert("nie ma takiego koloru");
        }
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
}*/

const shoesSize=['36','37','38','39','40','41','42','43'];
let n;
const colorOfShoes=['red','blue','orange','purple','pink','yellow','green'];
const answerSize=prompt("Jaki chcesz rozmiar buta?");

for(let m=1;m<shoesSize.length;m++)
{
    if (shoesSize[m] === answerSize)
    {
        alert("mamy taki rozmiar");
        let colorBuyer = prompt("jaki chcesz kolor?");
        for (let i = 0; i < colorOfShoes.length; i++)
        {
            if (colorOfShoes[i] === colorBuyer) {
                alert("mamy buty w takim rozmiarze i kolorze");
                n = 1;
            }
        }

        if (n !== 1)
        {
            alert("nie ma takiego koloru");
        }
    }
}
