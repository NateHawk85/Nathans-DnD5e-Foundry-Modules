new Dialog({
    title: "Conjure Animals",
    buttons: {
        cr2: {
            label: "1 CR 2 Beast",
            callback: () => {
                game.tables.getName("Conjure Animals - 1 CR 2").draw();
            }
        },
        cr1: {
            label: "2 CR 1 Beasts",
            callback: () => {
                for (var i = 0; i < 2; i++) {
                    game.tables.getName("Conjure Animals - 2 CR 1").draw();
                }
            }
        },
        cr12: {
            label: "4 CR 1/2 Beasts",
            callback: () => {
                for (var i = 0; i < 4; i++) {
                    game.tables.getName("Conjure Animals - 4 CR 1/2").draw();
                }
            }
        },
        cr14: {
            label: "8 CR 1/4 Beasts",
            callback: () => {
                for (var i = 0; i < 8; i++) {
                    game.tables.getName("Conjure Animals - 8 CR 1/4").draw();
                }
            }
        }
    }
}).render(true);