// === DATA:
const formHTML = `
    <form class="content-container" action="">
        <label for="phone">Enter your name:</label>
        <input type="text" id="name" name="name" placeholder="Your Name">
        <label for="phone">Enter your birthdate:</label>
        <input type="date" id="date" name="date">
        <label for="phone">Enter your E-mail address</label>
        <input type="email" id="email" name="e-mail" placeholder="E-mail">
        <select name="animals" id="animals">
            <option value="both">Both</option>
            <option value="cats">Cats</option>
            <option value="dogs">Dogs</option>
        </select>
        <button class="btn">Click me!</button>
        <p id="valueOne"></p>
        <p id="valueTwo"></p>
        <p id="valueThree"></p>
    </form>
`

// === FUNCTIONS:
const loadEvent = async _ => {

    const root = document.getElementById("root");

    root.insertAdjacentHTML("beforeend", formHTML);

    const form = root.querySelector("form")

    const inputList = document.querySelectorAll("input")

// ==================================================
/* 
    for (const input of inputList) {
        input.addEventListener("input", function(event){
            console.log(event.target.value)
        })
    }
 */
    console.log(typeof inputList);
    console.log(Array.isArray(inputList));

    // "Array.from( ... )" kell, hogy a map jó legyen
    // a map-nek van egy kötöttsége, mert a for ciklus végigmegy minden iterálható dolgon, míg a map-nek tömbre van szüksége
    // a map egy tömböt ad vissza, és mi ebbe bármit beletudunk rakni amit a callBack visszareturnöl --> ennek előnye h nem kell nagy tömböt készíteni, hanem ez készíti el nekünk.
    Array.from(inputList).map(function(input){
        input.addEventListener("input", function(event){
            console.log(event.target.value);
        })
    });

// =====================================================
// form-nál nem "click" esemény van, hanem "submit" és ez a formon történik, nem a gombon!!!!

// eseményfigyelővel nézzük, ha a gombra rákattintunk
form.addEventListener("submit", function(event){
    // megakadájozzuk a "submit" esemény alapértelmezett lefutását, egy metódussal (".preventDefault")
    event.preventDefault()
    console.log(event.target);
});

// eseményfigyelővel nézzük, hogy mi van kiválaszta a "select" menüből, és az option value-ját írja ki.
form.querySelector("select").addEventListener("input", function(event){
    console.log(event.target.value)
});

// =====================================================

//=== NASA API
/* 
// leszedjük az API-t, és elmentjük egy "apod" változóban
const apod = await fetch("https://api.nasa.gov/planetary/apod?api_key=drhKkWW4Iw5NWvu5elYalz9V0ylwRzBd408oWOWa");

// átkonvertáljuk, hogy tudjuk használni a benne lévő adatokat (apodJson lesz a változó amivel tudunk majd dolgozni)
const apodJson = await apod.json()

console.log(apodJson.explanation);
 */

// elmentjük változóban az API key-t, és a dátumot, így ezek megtudnak változni anélkül, hogy a fetch kódjába bele kéne nyúlni.
const apiKey = "drhKkWW4Iw5NWvu5elYalz9V0ylwRzBd408oWOWa"
const reqDate = "2001-01-01"
// megadjuk `${}`-ban a változókat, így ha azok változnak, a fetch is változik
const apod = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}&date=${reqDate}`);

const apodJson = await apod.json()

console.log(apodJson.explanation);

// ".then" chainek -> egymás után lefutó funkciók
fetch(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}&date=${reqDate}`).then(
    function(apodResponse){
        console.log(apodResponse)
        apodResponse.json().then(
            function(apodResponseJson){
                console.log(apodResponseJson.explanation)
            }
        )
    }
)

//"promise"-ok, különbözö async műveleteknél (letöltés..stb) létrejönnek, és segítik, hogy a js tudja, hogy meddig kell várni egy pl. fetch-re...3 állapota van: -pending (js megvárja a függőségeket - pl await, vagy .then) ; - teljesült (nem dob hibát a promise); - nem teljesül (hibát dob a promise)






}
window.addEventListener("load", loadEvent);