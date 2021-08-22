document.addEventListener("DOMContentLoaded", function() {
    API.addSongs();
    console.log(Album.all)

    const searchBar = document.getElementById("search-bar");
    searchBar.addEventListener("keyup", e => {
        const searchString = e.target.value.toLowerCase();
        console.log(searchString);

        const filteredAlbums = Album.all.filter( album => {
            return (
                album.title.toLowerCase().includes(searchString)
            );
        })

        console.log(filteredAlbums);

        document.getElementById("album-collection").innerHTML = "";
        filteredAlbums.forEach(album => {
            album.renderAlbum();
        })
    })
})