/*class Room
{
    width=200;
    length=220;
    desk=false;
    space=function()
    {
        return this.width *this.length;
    }
    display=function()
    {
        console.log(`szerokosc ${this.width}, dlugosc ${this.length}, powierzchnia ${this.space()}, czy ma biurko ${this.desk}`);
    }
}
const room = new Room();
console.log(room.display());
*/
class Pizza
{
    ser = 0.5;
    szynka =0.7;
    kukurydza =0.3;
    vege=false;
    podstawa=5;
    cena=function()
    {
        return this.ser * 0.05 + this.szynka *0.1 + this.kukurydza * 0.01 +this.podstawa;
    }
    wypisuje=function()
    {
        document.write("cena pizzy"+ this.price() + "vege: "+ this.vege());
    }

}

alert('ile chcesz danego skladnika?');
let pizza = new Pizza;
pizza.ser=prompt('ser 0-100%');
pizza.szynka=prompt('szynka 0-100%');
pizza.kukurydza=prompt('kukurydza 0-100%');
if(pizza.szynka==0)
{
    pizza.vege = true;
}
alert(pizza.wypisuje());