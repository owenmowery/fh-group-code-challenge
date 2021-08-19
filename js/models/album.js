class Album {

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

    renderAlbum() {
        const albumHolder = document.getElementById('album-collection');
        const albumContainer = document.createElement('div');
        //albumContainer.dataset.id = this.id;
        //albumContainer.id = this.id
        albumContainer.setAttribute("class", "album-container");
        albumContainer.innerHTML += this.showHTML();
        albumHolder.appendChild(albumContainer);
    }

    showHTML() {
        return ` 
        <a href=${this.link}><img src=${this.image} alt="album cover image"></a>
        <h3>${this.title}</h3>
        <h4>${this.artist}</h4>
        <p>Price: ${this.price}</p>
        <p>Release Date: ${this.date}</p>
        `
    }

}