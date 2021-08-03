game.playlists.entities.forEach(e => {
    e.delete();
    console.log("Deleted playlist " + JSON.stringify(e));
});
console.log("All playlists deleted.");