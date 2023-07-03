const artworkIds = [78503, 51719, 13914, 16858];

function fetchArtworkInfo(id) {
  fetch(`https://api.artic.edu/api/v1/artworks/${id}`)
    .then((response) => response.json())
    .then((data) => {
      const artwork = data.data;
      const imageId = artwork.image_id;
      const title = artwork.title;
      const artistTitle = artwork.artist_title;

      const imageSrc = `https://www.artic.edu/iiif/2/${imageId}/full/843,1000/0/default.jpg`;

      const artworkElement = document.createElement("div");
      artworkElement.classList.add("artwork");

      const imageElement = document.createElement("img");
      imageElement.src = imageSrc;
      imageElement.alt = title;

      const titleElement = document.createElement("h2");
      titleElement.textContent = title;

      const artistElement = document.createElement("p");
      artistElement.textContent = `Artista: ${artistTitle}`;

      artworkElement.appendChild(imageElement);
      artworkElement.appendChild(titleElement);
      artworkElement.appendChild(artistElement);

      document.getElementById("artworks").appendChild(artworkElement);
    })
    .catch((error) => {
      console.log(
        "Si è verificato un errore durante il recupero delle informazioni dell'opera d'arte:",
        error
      );
    });
}

artworkIds.forEach((id) => {
  fetchArtworkInfo(id);
});
