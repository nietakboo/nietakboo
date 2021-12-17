/*class phone
{
    brand="samsung";
    color="red";
    price=150;
    usbC=false;
    user="marcin";
    sendSms=function(text)
    {
    this.sms = this.user+" wysłał sms: "+ text;
    }
}
let komora=new phone();
let text= prompt("podaj tresc smsa");
komora.sendSms(text);
document.write(komora.sms);
komora.brand='iphone';
alert(komora.brand);
let telefon = new Phone;
telefon.user='tomek';
let telefony=[komora,telefon];
alert(telefony[0].user);
 */

/*
let telefony=new Array(20);
telefony[0]=new Phone;
telefony[0].user='bob';*/


class warzywo
{
    nazwa="panpomidor";
    cena=0;
    ilosc=0;

    display=function()
    {
        document.write(this.nazwa);
        document.write(" cena: " + this.cena+" ");
        document.write(" ilosc: " + this.ilosc+" ");
    }
}
let warzywka=new Array(10)
for( let i=0;i<3;i++)
{
    warzywka[i]=new warzywo;
    warzywka[i].nazwa=prompt("wpisz nazwe warzywa");
    warzywka[i].cena=prompt("wpisz cene warzywa");
    warzywka[i].ilosc=prompt("wpisz ilosc warzywa");
}
let wartosc=prompt("wybierz co chcesz wyszukać: "+"Lista warzyw - 1 Ceny warzyw - 2 Ilosc warzyw - 3");



if (wartosc == 1)
{
    for( let i=0;i<3;i++)
        warzywka[i].display();
}

else if (wartosc == 2)
{
    let odpowiedz = prompt("w jakiej cenie szukasz warzyw");
    for( let i=0;i<3;i++)
    {
        if(warzywka[i].cena < +odpowiedz)
        {
            warzywka[i].display();

        }
    }
}
else if (wartosc == 3)
{
    let odpowiedz = prompt("jaka ilosc potrzebujesz");
    if (warzywka[i].ilosc < +odpowiedz)
    {
        warzywka[i].display();

    }
}
else
{
    document.write("nie wybrales zadnej z opcji");
}