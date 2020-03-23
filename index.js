$(document).ready(function(){

    $('#quarterdollar').text('0');
    $('#dime').text('0');
    $('#nickel').text('0');
    $('#penny').text('0');

    $('#coinUsed').text('0');
    $('#total').text('0');

    $("#valueDollars").keydown(function (e) {
        if(event.keyCode == 13) {
            e.preventDefault();
            $("#Converter").click();
    }
    });

    $("#Converter").click(function(){
        var valor = $('#valueDollars').val();
        var valString = valor.toString();
        var valNopoint = 0;

        //coins
        var quarterdollar=0;
        var dime=0;
        var nickel=0;
        var penny=0;

        var repeat = true;
        console.log(valor);
        
        if(valor==0){
            alert("O valor não pode ser 0");
        }else{
            valNopoint = valString.split('.').join('');
            valNopoint = valString.split(',').join('');

            if(valNopoint == valor){
                valor*=100;
            }
            console.log(valor);

            do{
                    //quarter dollar
                    if(valor >= 25){ valor-=25; quarterdollar+=1; }else{
                        //dime
                        if(valor >= 10){ valor-=10; dime+=1; }else{
                            //nickel
                            if(valor >= 5){ valor-=5; nickel+=1; }else{
                                //penny
                                if(valor >= 1){ valor -= 1; penny+=1;}else{
                                    console.log("Valor após a conversão: "+valor);
                                    console.log("Quarter Dollar: "+quarterdollar);
                                    $('#quarterdollar').text(quarterdollar);
                                    console.log("Dime: "+dime);
                                    $('#dime').text(dime);
                                    console.log("Nickel: "+nickel);
                                    $('#nickel').text(nickel);
                                    console.log("Penny: "+penny);
                                    $('#penny').text(penny);

                                    $('#coinUsed').text(quarterdollar);
                                    $('#total').text($('#valueDollars').val());
                                    repeat = false;
                                }
                            }
                        }
                    }
            }while(repeat);
        }
    });
});