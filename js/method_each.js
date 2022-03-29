$('div').each(function (bot){
console.log(`numer diva: , ${this.id} to ${bot}`); //bot zawsze zawiera numer kolejnego wywolania funckji
})
$('button').eq(2).click(function (){
    $('a').each(function(){
        alert($(this).text());
    });
});