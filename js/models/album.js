class Album {

    //array to hold all album objects 
    static all = [];

    constructor(id, image, title, artist, link, price, date) {
        this.id = id;
        this.image = image;
        this.title = title;
        this.artist = artist;
        this.link = link;
        this.price = price;
        this.date = date;
        this.renderAlbum();
    }

    //renders albums into the DOM
    renderAlbum() {
        const albumHolder = document.getElementById('album-collection');
        const albumContainer = document.createElement('div');
        albumContainer.setAttribute("class", "album-container");
        albumContainer.innerHTML += this.showHTML();
        albumHolder.appendChild(albumContainer);
    }

    showHTML() {
        return ` 
        <a href=${this.link}><img src=${this.image} alt="album cover image"></a>
        <p class="album-title">${this.title.slice(0, 15)}...</p>
        <p class="album-artist">${this.artist.slice(0, 15)}...</p>
        <p class="album-price">Price: ${this.price}</p>
        <p class="album-date">Release Date: ${this.date}</p>
        `
    }

}