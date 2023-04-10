fetch('./movies.json')
  .then(response => response.json())
  .then(data => {
    const moviesList = document.querySelector('.movies-list');
    data.movies.forEach(movie => {
      const movieCard = document.createElement('li');
      movieCard.innerHTML = `
        <div class="movie-card">
          <a href="./movie-details.html">
            <figure class="card-banner">
              <img src="${movie.image}" alt="${movie.title} movie poster">
            </figure>
          </a>

          <div class="title-wrapper">
            <a href="./movie-details.html">
              <h3 class="card-title">${movie.title}</h3>
            </a>
            <time datetime="${movie.year}">${movie.year}</time>
          </div>

          <div class="card-meta">
            <div class="badge badge-outline">${movie.quality}</div>

           <!-- 
           <div class="duration">
              <ion-icon name="time-outline"></ion-icon>

              <time datetime="PT${movie.duration}M">${movie.duration} min</time>
            </div> 

            <div class="rating">
              <ion-icon name="star"></ion-icon>

              <data>${movie.rating}</data>
            </div>             
            -->
            

           

         
            <div>
            <a href=${movie.rating} class="btn btn-primary">
            <ion-icon name="download-outline"></ion-icon>

            <span>Download</span>
            </a>
            </div>
          </div>
        </div>
      `;
      moviesList.appendChild(movieCard);
    });
  })
  .catch(error => console.log(error));
