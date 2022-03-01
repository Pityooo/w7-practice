// === GET DATA ===

 function Month(name, id, nth, days) {
    this.name = name;
    this.id = id;
    this.nth = nth;
    this.days = days;
 }

 const months = [
     new Month("January", "jan", 1, 31),
     new Month("Ferbuary", "feb", 2, 28),
     new Month("March", "mar", 3, 31),
     new Month("April", "apr", 4, 30),
     new Month("May", "may", 5, 31),
     new Month("June", "jun", 6, 30),
     new Month("July", "jul", 7, 31),
     new Month("August", "aug", 8, 31),
     new Month("September", "sep", 9, 30),
     new Month("October", "oct", 10, 31),
     new Month("November", "nov", 11, 30),
     new Month("December", "dec", 12, 31)
 ]

// === PREPARE DATA ===



// === COMPONENTS = HTML ELEMENTS WE WOULD LIKE TO ADD TO THE DOCUMENT LATER ===


// létrehozzuk a "monthSection" funkcióban a section HTML tag-jét
const monthSection = (id,h1,days) => {
    return `
    <section id="${id}">
        <h1>${h1}</h1>
        <div class="days">${days}</div>
    </section>
    `;
}
// létrehozzuk a "dayCard" funkcióban a cardok HTML tag-jét
const dayCard = (year, month, day) => {
    return `
    <div class="card">
        <time>${year}</time>
        <time>${month}</time>
        <time>${day}</time>
        <button class="card-btn">Get DayName!</button>
    </div>
    `;
}
// létrehozzuk a "dayCards" funkcióban egy for ciklussal az iterálást a months változóban lévő hónapok napjainak számában, majd minden iteráláskor lefuttatja a "callDayCard" függvényt (callBack)
const dayCards = (months, callDayCard) => {
    // üres változó (ezt fogjuk feltölteni)
    let toReturn = "";
    // iterálunk a hónapok napjain, majd a "toReturn"-t feltöltjük a "callDayCard" funkcióval (callBack)
    for (let i = 1; i <= months.days; i++) {
        toReturn += callDayCard(2022, months.nth, i);
    }
    return toReturn;
}

// === RENDER = ADD THE COMPONENTS TO THE DOCUMENT ===


// az alávonás "_" azt jelöli, hogy van ott egy paraméter, amit nem szeretnénk használni. (arrow functionnál)
const loadEvent = _ => {
    
// === létrehozzuk a HTML kódot, a sectionokkel, és bennük a cardokkal: ===

    let content = "";
    // iterálunk a "months" objektumok közt
    for (const month of months) {
        // az üres contentünket feltöltjük a "monthSection" funkcióval (callBack funkció), aminek harmadik "days" paraméterének a "dayCards" funkciót (callBack) adjuk meg így feltölti a sectionoket, a "dayCard"-ban található elementekkel.
        content += monthSection(month.id, month.name, dayCards(month, dayCard))
    }
    // a "root" id-jü elementbe, kiíratjuk a "content" változó tartalmával (sectionok + cardok)
    document.getElementById("root").insertAdjacentHTML("beforeend", content)



// === létrehozunk egy kattintós funkciót (clickEvent, vagy eventHandling): ===

/* // Első variáció (túl sok addEventListener)
    function cardButtonClickEvent(event) {
        // az adott "event" szülő (parent) elementjének (jelen esetben a "button") ad egy "clicked" class-t. Ha megint rákattintunk, akkor leveszi (toggle)
        event.target.parentElement.classList.toggle("clicked")
    }

    // a "cardList" változóban kiválasztjuk az összes "card" class-ú div-et.
    const cardList = document.querySelectorAll(".card");
    // iterálunk a "cardList" azaz az összes card között
    for (const card of cardList) {
        // minden "card"-ban lévő "button" elementnek figyeljük a "click" event-jét, és ha történik "click" esemény, akkor lefuttatjuk a "cardButtonClickEvent" funkciót
        card.querySelector("button").addEventListener("click", cardButtonClickEvent)
    }
*/

// Második variáció (1db eventListener-el)
    function clickEvent(event) {
        // ha a kiválasztott esemény célja tartalmazza a "card-btn" class-t, akkor teljesül amit az "if"-en belülre írunk
        if (event.target.classList.contains("card-btn")) {
            // az esemény céljának (az ami tartalmazza a card-btn class-t) megváltoztatjuk az "innerHTML"ét "Get DayName!"-ról "This button was clicked"-re.
            event.target.innerHTML = "This button was clicked";
            //az "event" az egy objektum, amin belül a "target" is egy objektum
        }
    }
    document.addEventListener("click", clickEvent)
}

window.addEventListener("load", loadEvent);