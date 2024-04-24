const dane = require('./dane');

function zad2_1() {
    console.log("\n")
    function sumator(...args) {
        let suma = args.reduce((acc, val) => acc + val, 0);
        return `Suma liczb: ${args.join(', ')} wynosi ${suma}.`;
    }

    console.log(sumator(1, 2, 3)); // Suma liczb: 1, 2, 3 wynosi 6.
    console.log(sumator(4, 6, 7, 9, 0, 2)); // Suma liczb: 4, 6, 7, 9, 0, 2 wynosi 28.
    console.log("\n")
}

function zad2_2() {
    console.log("\n")
    dane.listaZadan.forEach(zadanie => {
        console.log(zadanie.tekst);
    });

    const tekstyZadan = dane.listaZadan.map(zadanie => zadanie.tekst);
    console.log(tekstyZadan);

    const zrealizowaneZadania = dane.listaZadan.filter(zadanie => zadanie.zrealizowano);
    const tekstyZrealizowanychZadan = zrealizowaneZadania.map(zadanie => zadanie.tekst);
    console.log(tekstyZrealizowanychZadan);
    console.log("\n")
}

function zad2_3() {

    console.log("\nPunkt 1 (wszytkie zadania)\n")
    const allTasks = dane.poniedzialek.concat(dane.wtorek).map(zadanie => zadanie.nazwa);
    console.log(allTasks)
    console.log("\n")

    console.log("Punkt 2 (minuty->godziny)\n")
    const minutyGodzinyDane = dane.poniedzialek.concat(dane.wtorek).map(czas => czas.czas);
    const minutyGodziny = minutyGodzinyDane.map(x => x / 60)
    console.log(minutyGodziny)
    console.log("\n")

    console.log("Punkt 3 (czasy>2)\n")
    const czasyWiekszeOdDwoch = minutyGodziny.filter(checkHours);
    console.log(czasyWiekszeOdDwoch)
    console.log("\n")

    console.log("Punkt 4 (czasy * stawke godzinowa[35 zl])\n")
    const stawke = 35
    const czasyPrzezStawke = czasyWiekszeOdDwoch.map(result => result * stawke);
    console.log(czasyPrzezStawke)
    console.log("\n")

    console.log("Punkt 5 (Zsumowanie wszystkich kwot)\n")
    const SumaCzasyPrzezStawke = czasyPrzezStawke.reduce(
        function (acc, curr) {
            return [(+acc) + (+curr)]
        });
    console.log(SumaCzasyPrzezStawke)
    console.log("\n")

    console.log("Punkt 6 (Zsumowanie wszystkich kwot)\n")
    const kwotaPLN = SumaCzasyPrzezStawke.map(res => res + " PLN")
    console.log(kwotaPLN)
    console.log("\n")

    console.log("Punkt 7 (Wynik koncowy)\n")
    const wynik = kwotaPLN.reduce((acc, curr) => curr, '')
    console.log("Final: " + wynik)
    console.log("\n")

    const FinalResult = dane.poniedzialek.concat(dane.wtorek).map(czas => czas.czas)
        .map(x => x / 60)
        .filter(checkHours)
        .map(result => result * stawke)
        .reduce((acc, curr) => [+acc + +curr])
        .map(res => res + " PLN")
        .reduce((acc, curr) => curr, '')
    console.log("Final-2: " + FinalResult)
}

function checkHours(hour) {
    return hour > 2;
}

function zad2_4() {

    console.log("\nPunkt 1 (Wyszukiwanie kategorii IT\n)")
    const szukane = "IT"
    const firmyKatIT = dane.firmy.filter(item => item.kategoria === szukane);
    console.log(firmyKatIT)
    console.log("\n")

    console.log("Punkt 2 (Wyszukiwanie firm lat (1990-1999)\n")
    const firmyLat90 = dane.firmy.filter(firma => {
        return firma.poczatek >= 1990 && firma.koniec <= 1999;
    })
    console.log(firmyLat90)
    console.log("\n")

    // const firmyLat90 = dane.firmy.filter(firma => {
    //     return firma.poczatek >= condition1 && firma.koniec <= condition2;
    // });
    // const firmyLat90Nazwy = firmyLat90.map(nazwy => nazwy.nazwa)
    // console.log("To są takie firmy: " + firmyLat90Nazwy + "\n")

    console.log("Punkt 3 (Wyszukiwanie firm > 10 lat) \n")
    const firmyWiecej10Lat = dane.firmy.filter(firma => {
        return firma.koniec - firma.poczatek >= 10;
    });
    console.log(firmyWiecej10Lat)
    console.log("\n")
}



// Main
console.log("---------------------ZAD-2-1---------------------")
zad2_1()
console.log("---------------------ZAD-2-2---------------------")
zad2_2()
console.log("---------------------ZAD-2-3---------------------")
zad2_3()
console.log("---------------------ZAD-2-4---------------------")
zad2_4()
console.log("---------------------ZAD-2-5---------------------")
console.log("To zadanie mozna sprawdzić w plikach main.js a calc.js")