const char = createKnight("Lucas");
const monster = createBigMonster();

stage.start(
    char,
    monster,
    document.querySelector("#char"),
    document.querySelector("#monster")
);