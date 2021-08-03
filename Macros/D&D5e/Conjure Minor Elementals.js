new Dialog({
    title: `Conjure Minor Elementals`,
    buttons: {
        cr2: {
            label: "1 CR 2 Elemental",
            callback: () => {
                game.tables.getName("Conjure Minor Elementals - 1 CR 2").draw();
            }
        },
        cr1: {
            label: "2 CR 1 Elementals",
            callback: () => {
                for (var i = 0; i < 2; i++) {
                    game.tables.getName("Conjure Minor Elementals - 2 CR 1").draw();
                }
            }
        },
        cr12: {
            label: "4 CR 1/2 Elementals",
            callback: () => {
                for (var i = 0; i < 4; i++) {
                    game.tables.getName("Conjure Minor Elementals - 4 CR 1/2").draw();
                }
            }
        },
        cr14: {
            label: "8 CR 1/4 Elementals",
            callback: () => {
                for (var i = 0; i < 8; i++) {
                    game.tables.getName("Conjure Minor Elementals - 8 CR 1/4").draw();
                }
            }
        }
    }
}).render(true);