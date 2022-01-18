class Student
{
    #name = "i";
    #surname = "n";
    #pesel = "p";

    constructor(name, surname, pesel)
    {
        this.#name = name;
        this.#surname = surname;
        this.#pesel = pesel
    }

    getName = function ()
    {
        return this.#name;
    }

    getSurame()
    {
        return this.#surname;
    }

    getPesel()
    {
        return this.#pesel;
    }

    getDob()
    {
        let str= this.getPesel().slice(0,6);
        let str1=20+str.slice(0,2);
        let str2=+str.slice(2,4)-20;
        let str3=str.slice(4,6);
        return str1+str2+str3
    }
    display = function ()
    {
        document.write(this.#name + " " + this.#surname + " " + this.#pesel);
    }
}
    /*let student= new Student();
    student.#name=prompt("podaj imie studenta");
    student.#surname=prompt("podaj nazwisko studenta");
    student.#pesel=prompt("podaj pesel studenta");*/

    let student = new Student('julia', 'nowak', '03280106848');
/*  var str="bobek";
    var str2=str.slice(1,4)
    document.write(str2);
*/
student.display();
document.write(student.getDob());