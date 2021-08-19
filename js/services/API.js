class API {
    static addSongs() {
        fetch("https://itunes.apple.com/us/rss/topalbums/limit=100/json")
        .then(resp => resp.json())
        .then(data => {
            let i = 1;
            data.feed.entry.forEach(album => {
                let newCard = new Album(i, album["im:image"][0].label, album["im:name"].label, album["im:artist"].label, album["id"].label, album["im:price"].label, album["im:releaseDate"].label)
                i++;
                Album.all.push(newCard);
            });
        })
    }
}