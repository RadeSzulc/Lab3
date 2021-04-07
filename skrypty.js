const input = document.querySelector("#inputText");
const val = input.nodeValue;

if (!val.length) {
    console.log('Nie wpisałeś żadnej wartości!')
} else {
    console.log('Twoje imię to ' + val[0].toLocaleUpperCase() + val.slice(1) );
}