new Dialog({
    title: `Conjure Minor Elementals`,
    buttons: {
        cr2: {
            label: "1 CR 2 Elemental",
            callback: () => game.tables.getName("Conjure Minor Elementals - 1 CR 2").draw()
        },
        cr1: {
            label: "2 CR 1 Elementals",
            callback: () => game.tables.getName("Conjure Minor Elementals - 2 CR 1").drawMany(2)
        },
        cr12: {
            label: "4 CR 1/2 Elementals",
            callback: () => game.tables.getName("Conjure Minor Elementals - 4 CR 1/2").drawMany(4)
        },
        cr14: {
            label: "8 CR 1/4 Elementals",
            callback: () => game.tables.getName("Conjure Minor Elementals - 8 CR 1/4").drawMany(8)
        }
    }
}).render(true);