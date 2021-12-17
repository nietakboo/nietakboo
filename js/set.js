/*let clothes = new Set(); //new poniewaz powstaje nowy obiekt klasy set
clothes.add('sweter');
clothes.add('kalesony');
//clothes.delete('sweter');
alert(clothes.has('sweter'));
alert(clothes.size)
clothes.add('sweter'); //nic nie zrobi - to juz istnieje
for(let item of clothes) alert(item);
*/
class warzywo
{
    nazwa="panpomidor";
    cena=0;
    ilosc=0;
}
let warzywka = new Set();

let por = new warzywo;
por.name='por';
por.amount=50;
por.price=2;
warzywka.add('por');

let pomidor = new warzywo;
por.name='pomidor';
por.amount=100;
por.price=4;
warzywka.add('pomidor');

let papryka = new warzywo;
por.name='papryka';
por.amount=200;
por.price=6;
warzywka.add('papryka')

for (let item of warzywka);
let wartosc=prompt("wybierz co chcesz wyszukać: "+"Lista warzyw - 1 Ceny warzyw - 2 Ilosc warzyw - 3");
    if (wartosc == 1)
    {
        for (let item of warzywka)
            document.write(item);
    }

    else if (wartosc == 2)
    {
        for(let item of warzywka)
        {
          if (item.amount < 500)
            {
                document.write(item.amount);
            }
        }
    }
    else if (wartosc == 3)
    {
        let odpowiedz = prompt("jaka ilosc potrzebujesz");
        for (let item of warzywka < +odpowiedz)
        {
            document.write(item);
            document.write("ilosc: " + warzywka[i].ilosc);
        }
    }
    else
    {
        document.write("nie wybrales zadnej z opcji");
    }