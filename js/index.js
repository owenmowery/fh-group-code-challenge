document.addEventListener("DOMContentLoaded", function() {
    //on dom loaded, func runs to handle api data
    API.addSongs();

    //search bar logic
    const searchBar = document.getElementById("search-bar");
    searchBar.addEventListener("keyup", e => {
        const searchString = e.target.value.toLowerCase();
        const filteredAlbums = Album.all.filter( album => {
            return (
                album.title.toLowerCase().includes(searchString)
            );
        })

        //adds matching album names to the front of the album collection
        document.getElementById("album-collection").innerHTML = "";
        filteredAlbums.forEach(album => {
            album.renderAlbum();
        });
    })
})