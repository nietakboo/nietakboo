//monitory cena przekatna i marka, pytanie po czym wyszukac

class monitor
{
    marka="p";
    cena=0;
    przekatna=0;
}
let monitory=new Array(10)
for( let i=0;i<3;i++)
{
    monitory[i]=new monitor;
    monitory[i].marka=prompt("wpisz marke monitora");
    monitory[i].cena=prompt("wpisz cene monitora");
    monitory[i].przekatna=prompt("wpisz przekatna monitora");
}
let wartosc=prompt("wybierz co chcesz wyszukać: "+"1-Lista marek 2-Ceny monitorow 3-Przekatna");



if (wartosc == 1)
{
    for( let i=0;i<3;i++)
        document.write(`${monitory[i].marka}<br>`);
}

else if (wartosc == 2)
{
    let odpowiedz = prompt("w jakiej cenie szukasz monitorow");
    for( let i=0;i<3;i++)
    {
        if(monitory[i].cena < +odpowiedz)
        {
            document.write(monitory[i].marka);
            document.write("cena: " + monitory[i].cena);
        }
    }
}
else if (wartosc == 3)
{
    let odpowiedz = prompt("jaka przekatna cie interesuje");
    for( let i=0;i<3;i++)
    {
        if(monitory[i].przekatna > +odpowiedz)
        {
            document.write(monitory[i].marka);
            document.write("przekatna: " + monitory[i].przekatna);
        }
    }
}
else
{
    document.write("nie wybrales zadnej z opcji");
}