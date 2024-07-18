let logo = document.createElement('img')
logo.src = './images/logo.svg'
logo.alt='logo'
console.log(logo);

const body = document.querySelector('body')
console.log(body);

let header = document.createElement('header')
console.log(header);

let main = document.createElement('main')
console.log(main);

let nav = document.createElement('nav')
console.log(nav);

let p1 = document.createElement('p')
p1.textContent = 'Boutique'
let p2 = document.createElement('p')
p2.textContent = 'À propos'
let p3 = document.createElement('p')
p3.textContent = 'Blog'
let p4 = document.createElement('p')
p4.textContent = 'Contact'

let icone = document.createElement('img')
icone.src ='./images/account.svg'
console.log(icone);

let icone2 = document.createElement('img')
icone2.src ='./images/cart.svg'
console.log(icone2);

nav.appendChild(p1)
nav.appendChild(p2)
nav.appendChild(p3)
nav.appendChild(p4)

console.log(p1);
console.log(p2);
console.log(p3);
console.log(p4);


body.appendChild(header)
body.appendChild(main)


header.appendChild(logo)
header.appendChild(icone)
header.appendChild(icone2)
header.appendChild(nav)

let section1 = document.createElement('section')
console.log(section1);
let h1section1 = document.createElement('h1')
h1section1.textContent = "Hero section"
let h2section1 = document.createElement('h2')
h2section1.textContent = "Sous-titre de second section hero"
section1.appendChild(h1section1)
section1.appendChild(h2section1)


let section2 = document.createElement('section')
console.log(section2);
let h1section2 = document.createElement('h1')
h1section2.textContent = "Second section"
let h2section2 = document.createElement('h2')
h2section2.textContent = "Sous-titre de second section"
section2.appendChild(h1section2)
section2.appendChild(h2section2)


let section3 = document.createElement('section')
console.log(section3);

let h1section3 = document.createElement('h1')
h1section3.textContent = "Consignes"

let ul =document.createElement('ul')

let li1 = document.createElement('li')
li1.textContent = "Reproduire les sections ci-dessus (header, hero section, second section) en HTML et CSS"

let li2 = document.createElement('li')
li2.textContent = "Traduire le code HTML en code Javascript"

section3.appendChild(h1section3)
section3.appendChild(ul)
ul.appendChild(li1)
ul.appendChild(li2)

console.log(li1);


main.appendChild(section1)
main.appendChild(section2)
main.appendChild(section3)