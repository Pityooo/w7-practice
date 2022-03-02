function Country(name, short, population, flag, continent) {
    this.name = name;
    this.short = short;
    this.population = population;
    this.flag = flag;
    this.continent = continent;
}

// COMPONENTS

const menuButton = _ => {
    return `
    <button id="menuBtn">
        <svg width="40" height="40">
            <rect width="20" height="2"/>
            <rect width="20" height="2"/>
            <rect width="20" height="2"/>
        </svg> 
    </button>
    `;
}

const header = (logo, button) => {
    return `
    <header>
        <a id="logo">${logo}</a>
        ${button()}
    </header>
    `;
}

const countryCard = (name, short, population, flag, continent) => {
    return `
    <div class="card">
        <h1>${name}</h1>
        <p>[${short}]</p>
        <p>Continent: <b>${continent}</b></p>
        <p>Population: <b>${population}</b></p>
        <img src="${flag}" alt="flag.svg">
    </div>
    `;
}


const loadEvent = async _ => {

    // GET DATA
    // elmentjük a változóban a "fetch"-ben lévő adatot (await -> asyncron funkció,ezért kikell írni, hogy "async")
    const countryRes = await fetch("https://restcountries.com/v3.1/all");
    // megvárjuk h lefusson a fetch, majd formázzuk
    const countryArr = await countryRes.json();

    // PROCESS DATA
    let countries = countryArr.map(function(country){
        return new Country(country.name.common, country.cca3, country.population, country.flags.svg, country.continents[0])
    });
    console.log(countries)
    
    // létrehozom a "cards" variable-t
    let cards = "";
    // "forof"-al végigmegy a countries array-en, és minden iterációnál lefuttatja a countryCard funkció-t
    for (const country of countries) {
        cards += countryCard(country.name, country.short, country.population, country.flag, country.continent)
    }
    
    const rootElement = document.getElementById("root")
    rootElement.insertAdjacentHTML("beforeend", header("Countries", menuButton));
    rootElement.insertAdjacentHTML("beforeend", cards);

    const getMenuButton = document.getElementById("menuBtn")
    menuBtn.addEventListener("click", (event) => {
        event.target.classList.toggle("clicked")
    })
}

window.addEventListener("load", loadEvent);