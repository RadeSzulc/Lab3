function sprawdźDane(userName, userSurname, userMail) {
    const reName = /^[a-zA-ZąĄćĆęĘłŁńŃóÓśŚźŹżŻ]{3,}$/g;
    if(reName.test(String(userName).toLowerCase())&&/[A-Z]/.test(userName[0])){
        alert ("Twoje imię to " + userName)
    }
    else {
        alert("Imię jest niepoprawne");
    }
    const reSurname = /^[a-zA-ZąĄćĆęĘłŁńŃóÓśŚźŹżŻ]{3,}$/g;
    if(reSurname.test(String(userSurname).toLowerCase())&&/[A-Z]/.test(userSurname[0])){
        alert ("Twoje nazwisko to " + userSurname)
    }
    else {
        alert("Nazwisko jest niepoprawne");
    }
    const reMail = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if(reMail.test(String(userMail).toLowerCase())){
        alert ("Twój e-mail to " + userMail)
    }
    else{
        alert("Email jest niepoprawny");
    }
}

function najwieksza(liczby)
{
    const reLiczby = /^\d+$/;
    if(reLiczby.test(liczby)){
    const liczba = [];
    var max=0;
    for(var i=0;i<liczby.length;i++){
        liczba[i]=liczby[i];
        if(liczba[i]>max)
        {
            max=liczba[i];
        }
    }
    document.getElementById('wynikMaksimum').innerHTML="Największa liczba to: "+max;
}
else
{
    alert("Podaj poprawnie liczby");
}
}

function fibonacci(liczba)
{
    const reLiczby = /^\d+$/;
    if(reLiczby.test(liczba)){
        var a=1;
        var b=1;
        var c=0;
        for(var i=0;i<liczba-1;i++)
        {
            c=a+b;
            a=b;
            b=c;
        }
        document.getElementById('wynikFibonacci').innerHTML=liczba+" liczba fibonacciego wynosi: "+b
    }
    else
    {
        alert("Podaj poprawny numer liczby");
    }
}


function nwd(NWD1,NWD2)
{
    const reLiczby = /^\d+$/;
    if(reLiczby.test(NWD1)&&reLiczby.test(NWD2))
    {
        var pom;
    
        while(NWD1!=0)
        {
            pom = NWD1;
            NWD1 = NWD2%NWD1;
            NWD2 = pom;	
        }
            document.getElementById('wynikNwd').innerHTML="Największa wspólna wielokrotność podanych liczb wynosi: "+NWD2;
    }
    else
    {
        alert("Podaj poprawne liczby");
    }

}