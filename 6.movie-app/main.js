//Elementleri Seçmek
const form = document.querySelector("#form");
const searchInput = document.querySelector("#searchInput");

const movieApi = new MovieAPI();
runEventListeners();


function runEventListeners(){
    document.addEventListener("DOMContentLoaded" ,movieApi.getPopularMovies());
    form.addEventListener("submit", getMoviesByName);
}


function getMoviesByName(e){
    const movieName = searchInput.value.trim();
    movieApi.getMoviesByName(movieName);

   e.preventDefault();
}