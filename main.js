// typy proste
// string
const napis = 'Andrzej Duda powiedział : "Że Unia jest cacy"' // wyświetki nam się to Andrzej Duda powiedział : "Że Unia jest cacy"

// number

const liczba = 7
const liczcaZmiennoPrzecikowa = 7.8

const maxLiczba =  1.79E+308 // 9007199254740992

// bool
const prawda = true

const falsz = false


// null 
let nic = null;


// undefined 

const nieokreslone = undefined


// typy złożone 
// Objekt 

const obj = {
    key1: 'wartość 1',
    key2: 'wartość 2'
}
// poruszanie po obiekcie 
 // 1. 
 obj.key2 // zwróci wartość 'wartość 2'
 // 2 - zapis tablicowy
 obj[key1] // zwróci wartość 'wartość 1'
// zapisywanie kluczy objektu w tablicy
 const wartosciKluczyZObjektu = Object.keys(obj) // zwróci tablicę ['key2', 'key2']
 wartosciKluczyZObjektu.forEach(item => {
   // obj.item zrróci error lub najleszym wypadku undefined

   obj[item] // zapis tablicowy patrz linia 37 i 38
 })

 obj.hasOwnProperty('key3') // zwróci false 
 obj.hasOwnProperty('key2') // zwróci true
// błęcny zapis. Niemozna zminiać całego obiektu 
//  obj = {
//     key5: 'xd'
//  }

obj.key1 = 'nowa wartośc1'

// referencje 

const pierwotny = {
    name: "Łukasz",
    age: 50,
    cars: {
        one: "Octavia",
        two: "A8"
    }
}

const klonPierwotnego = pierwotny
const klonPierwotnegoBezReferencji = { ...pierwotny } // zapis zrywa referencje, ale tylko do pierwszego stopnia - nazwa spread operator
pierwotny.age = 51

console.log(klonPierwotnego) // zwróci {name: "Łukasz", age: 51, cars: {one: "Octavia", two: "A8"}}
console.log(klonPierwotnegoBezReferencji) // zwróci  {name: "Łukasz", age: 50, cars: {one: "Octavia", two: "A8"} }

// zmina w zagnieżdżeniu 
pierwotny.cars.two = "Punto"

console.log(klonPierwotnegoBezReferencji) // zwróci  {name: "Łukasz", age: 50, cars: {one: "Octavia", two: "Punto"} } 

// zrywanie referencji całkowite

// 1 sposób 

const deepClone1 = JSON.parse(JSON.stringify(pierwotny))

const arrKeys = ['name', 'age','cars']
const arrVal = ['Łukasz', 50, {one: "Octavia", two: 'A8'}]

// 2 sposób 
// instalujemy loadsh npm 
// deepClone 
// const deepClone2 = loadsh.deepClone(pierwotny) // zrywa każdą referencje 


// 3 sposób 

const deepClone3 = structuredClone(pierwotny);


const pracownik = {
    name: "Jan",
    age: 40
}
// zapis poprawny tworzy nowy objekt bez referencji do porzedniego 
const pracowanikZmina = {
    name: "Jan",
    age: 40, 
    children: ['Karyna']
}
//lepszy  zapis  nowy objekt bez referencji do porzedniego 
const pracowanikZmina1 = {
    children: ['Karyna'],
    pracownik
} 
pracownik.age = 41
console.log(pracowanikZmina1) // zwróci {name: "Jan", pracownik: {age: 41, children: ['Karyna']}}

const pracowanikZmina2 = {
    children: ['Karyna'],
    ...pracownik
}


// Konstruktory 


// tworzenie objektu za pomocą class 
class Osoba {
    constructor(name, age) { // paramentry w constructor są wartościami 
        this.nazwaKluczName = name // tworzy nazwaKluczName: name ( wartość )
        this.nazwaKluczAge = age
    }
}
const osoba1 = new Osoba('Michał', 9) // tworzy objekt {nazwaKluczName : 'Michał',nazwaKluczAge: 9 }

console.log(osoba1) // {nazwaKluczName : 'Michał',nazwaKluczAge: 9 }

class Wyliczenia {
    constructor() {
        function policzPodatki(dochod, podatek) {
            return dochod * podatek
        }

    }
}

class Podatki extends Wyliczenia {
    constructor(podatek1, podatek2) {
        this.pit = podatek1
        this.vat = podatek2
        this.podatekPitDoZapłaty = 0
    }
    get ilePodatku() {
        return `Podatku do zapłacenia jest ${this.podatekPitDoZapłaty}`
    }
    set dochodZMieciaca(val) {
        this.podatekPitDoZapłaty = super.policzPodatki(val, this.pit)
    }
}

const lukasz = new Podatki(0.18, 0.23)

lukasz.dochodZMieciaca = 5000

console.log(lukasz.ilePodatku) // `Podatku do zapłacenia jest 5000 * 0.18 `

