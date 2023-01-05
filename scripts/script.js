const numberOfFilms = +prompt('Сколько фильмов вы посомтрели?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genders: [],
    privat: false,
};

let questionLastFilm = prompt("Один из последних просмотреных фильмов?", 'Дом восковых фигур'),
questionStarFilm =  +prompt("Дайте оценку фильму", ""); 

personalMovieDB.movies[questionLastFilm] = questionStarFilm;

console.log(personalMovieDB);