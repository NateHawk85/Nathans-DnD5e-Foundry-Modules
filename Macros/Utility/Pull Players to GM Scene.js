let activeUsers = await game.macros.getName("findActiveUsers").execute();
activeUsers = activeUsers.filter(user => !user.isGM);

const USER_CHECKBOXES_CONTENT = activeUsers.map(user =>
    `   <label for="${user.id}">${user.name}</label>` +
    `   <input type="checkbox" name="${user.id}" id="${user.id}" value="${user.name}" ${(!!user.character && 'checked')} />`
).join('<br />');

new Dialog({
    title: "Pull to GM Scene",
    content: USER_CHECKBOXES_CONTENT,
    buttons: {
        cancel: {
            icon: '<i class="fas fa-times"></i>',
            label: "Cancel"
        },
        ok: {
            icon: '<i class="fas fa-check"></i>',
            label: "Pull to Scene",
            callback: async (html) => {
                activeUsers.filter(user => html.find(`[name="${user.id}"]`)[0].checked)
                    .forEach(user => game.socket.emit("pullToScene", canvas.scene.id, user.id));
            }
        }
    },
    default: "ok"
}).render(true);