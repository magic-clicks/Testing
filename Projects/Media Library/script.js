movieBtn = document.getElementById("movie-btn");
movieResult = document.getElementById("movie-result");
tvBtn = document.getElementById("tv-btn");
tvResult = document.getElementById("tv-result");

movies = [
    "Twilight",
    "Test",
    "test2",
    "test3",

];

tv = [
    "test1",
    "test2",
    "test3",

];


movieBtn.addEventListener("click", function(){
    const randomMovies = Math.floor(Math.random() * movies.length);
    const selectedMovie = movies[randomMovies];

    movieResult.textContent = selectedMovie;

});

tvBtn.addEventListener("click", function(){
    const randomTv = Math.floor(Math.random() * tv.length);
    const selectedTv = tv[randomTv];

    tvResult.textContent = selectedTv;

});

