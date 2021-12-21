new Dialog({
    title: "Conjure Animals",
    buttons: {
        cr2: {
            label: "1 CR 2 Beast",
            callback: () => game.tables.getName("Conjure Animals - 1 CR 2").draw()
        },
        cr1: {
            label: "2 CR 1 Beasts",
            callback: () => game.tables.getName("Conjure Animals - 2 CR 1").drawMany(2)
        },
        cr12: {
            label: "4 CR 1/2 Beasts",
            callback: () => game.tables.getName("Conjure Animals - 4 CR 1/2").drawMany(4)
        },
        cr14: {
            label: "8 CR 1/4 Beasts",
            callback: () => game.tables.getName("Conjure Animals - 8 CR 1/4").drawMany(8)
        }
    }
}).render(true);