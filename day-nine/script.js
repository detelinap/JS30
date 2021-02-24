const dogs = [{
        name: "Snickers",
        age: 2,
    },
    {
        name: "hugo",
        age: 8,
    },
];

function makeGreen() {
    const p = document.querySelector("p");
    p.style.color = "#BADA55";
    p.style.fontSize = "50px";
}

// Regular
console.log("hello");
// Interpolated
console.log("hello, I am a %s string!", "😇");
// Styled
console.log("%c I am some great text!", "font-size: 20px; background:red;");
// warning!
console.warn("This is a warning!");
// Error :|
console.error("This is an error!");
// Info
console.info(
    "Born in Vienna, Austria, in 1755, Archduchess Marie Antoinette was the 15th and last child of Holy Roman Emperor Francis I and the powerful Habsburg Empress Maria Theresa. 2. She was only 14 years old when she married the future Louis XVI."
);
// Testing
console.assert(0 === 1, "That's not true");
// clearing
console.clear();
// Viewing DOM Elements
const p = document.querySelector("p");
console.dir(p);
// Grouping together
dogs.forEach((dog) => {
    console.groupCollapsed(`${dog.name}`);
    console.groupEnd(`${dog.name}`);
});
// counting
console.count("Wes");
// timing
console.time("fetching data");
fetch("https://api.github.com/users/wesbos")
    .then((data) => data.json())
    .then((data) => {
        console.timeEnd("fetching data");
        console.log(data);
    });
console.table(dogs);