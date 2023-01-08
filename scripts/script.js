"use strict";
let numberOfFilms;

function start() {
    numberOfFilms = +prompt("Сколько фильмов вы посомтрели?", "");
    while (
        numberOfFilms == "" ||
        numberOfFilms == null ||
        isNaN(numberOfFilms)
    ) {
        numberOfFilms = +prompt("Сколько фильмов вы посомтрели?", "");
    }
}

start();

const personalMovieDB = {
    count: numberOfFilms,
    countMovies: "",
    movies: {},
    actors: {},
    genders: [],
    privat: false,
};

function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        let questionLastFilm = prompt(
                "Один из последних просмотреных фильмов?",
                "Дом восковых фигур"
            ),
            questionStarFilm = +prompt("Дайте оценку фильму", "");

        if (
            questionLastFilm != null &&
            questionStarFilm != null &&
            questionStarFilm != "" &&
            questionLastFilm != "" &&
            questionLastFilm.length < 50
        ) {
            personalMovieDB.movies[questionLastFilm] = questionStarFilm;
        } else {
            i--; //Повторно зададим вопрос если условие было нарушено.
        }
    }
}

function detectPersonalLevel(countDB) {
    if (countDB.count < 10) {
        countDB.countMovies = "Просмотренно довольно мало фильмов";
    } else if (countDB.count < 30 && countDB.count > 10) {
        countDB.countMovies = "Вы классический зритель";
    } else if (countDB.count > 30) {
        countDB.countMovies = "Вы киноман";
    } else {
        countDB.countMovies = "Произошла ошибка";
    }
}

function showMyDB(privatDB) {
    if (!privatDB.privat) { //Проверка на false
        console.log(privatDB);
    }
}

function writeYourGender(genderDB) {
    for (let i = 1; i <= 3; i++) {
        let quest = prompt(`Ваш любимый жанр под номером: ${i}`, "Комедия");
        genderDB.genders.push(quest);
    }
}

rememberMyFilms();
detectPersonalLevel(personalMovieDB);
showMyDB(personalMovieDB);
writeYourGender(personalMovieDB);

// let i = 0;
// while (i < 2){
//     let questionLastFilm = prompt("Один из последних просмотреных фильмов?", 'Дом восковых фигур'),
//         questionStarFilm =  +prompt("Дайте оценку фильму", "");

//     if (questionLastFilm != null && questionStarFilm != null &&
//             questionStarFilm != '' && questionLastFilm != '' &&
//             questionLastFilm.length < 50) {

//         personalMovieDB.movies[questionLastFilm] = questionStarFilm;

//     } else {
//           i--; //Повторно зададим вопрос если условие было нарушено.
//     }
//     i++;
// }

// let i = 0;
// do{
//     let questionLastFilm = prompt("Один из последних просмотреных фильмов?", 'Дом восковых фигур'),
//         questionStarFilm =  +prompt("Дайте оценку фильму", "");

//     if (questionLastFilm != null && questionStarFilm != null &&
//             questionStarFilm != '' && questionLastFilm != '' &&
//             questionLastFilm.length < 50) {

//         personalMovieDB.movies[questionLastFilm] = questionStarFilm;

//     } else {
//           i--; //Повторно зададим вопрос если условие было нарушено.
//     }
//     i++;
// } while (i < 2);
