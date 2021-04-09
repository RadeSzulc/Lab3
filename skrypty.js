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

