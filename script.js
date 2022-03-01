// OBJECT CONSTRUCTIONS

// contructor-ok nagy betável kezdődnek
// tudunk spórolni azzal, hogy ugyanaz a séma, és az objektumok csak akkor jönnek létre ha szükségünk van rá.

// === 1. Date ===
/* 
const currentDate = new Date("1993/10/05");

//a currentDate objektum lesz
console.log(currentDate)
 */


//Saját constructor "Book"

function Book(title, author, year, genre){
    //"this" szinte minden esetben objektumra mutat vissza! (kivéve 1 eset) -> visszautalunk, hogy a létrejövő objektum milyen kulcsokat kapjon
    this.title = title;
    this.author = author;
    this.year = year;
    this.genre = genre;
    this.age = function(){
        // d változó tartalmazza a mai dátumot
        const d = new Date()
        // currentyear változó tartalmazza a mai dátumból csak az idei évet
        const currentyear = d.getFullYear()
        // returnoljuk a jelen dátumból a this.year évszámát
        return currentyear - this.year
    }
}

//"myFavouriteBook" változóban létrehozunk egy új object-et, a new (létrehoz) Book"constructor" (argument-ek)-el.
const myFavouriteBook = new Book("Háború és Béke", "Tolsztoj", 1867, "historical novel")

const mySecondFavouriteBook = new Book("Algebra Alapjai", "Joe Algebra", 1992, "sci-fi")

console.log(mySecondFavouriteBook);