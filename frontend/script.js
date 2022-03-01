// GET DATA

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

 console.log(months);

// PREPARE DATA



// COMPONENTS = HTML ELEMENTS WE WOULD LIKE TO ADD TO THE DOCUMENT LATER

const monthSection = (id,h1,days) => {
    return `
    <section id="${id}">
        <h1>${h1}</h1>
        <div class="days">${days}</div>
    </section>
    `;
}

const dayCard = (year, month, day) => {
    return `
    <div class="card">
        <time>${year}</time>
        <time>${month}</time>
        <time>${day}</time>
    </div>
    `;
}

const dayCards = (months, callDayCard) => {

    let toReturn = "";

    for (let i = 1; i <= months.days; i++) {
        toReturn += callDayCard(2022, months.nth, i);
        
    }
    return toReturn;
}
console.log(dayCards(months[0], dayCard));

// RENDER = ADD THE COMPONENTS TO THE DOCUMENT

const loadEvent = () => {
    
}

window.addEventListener("load", loadEvent);


root-ba sectionok, és abba a day-ek