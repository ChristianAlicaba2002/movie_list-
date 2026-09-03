interface Movie {
    id: string;
    title: string;
    director: string;
    duration: string;
    cast: string;
    genre: string;
    image: string;
}

export const movies: Movie[] = [
    {
        id: "1",
        title: "Inception",
        director: "Christopher Nolan",
        duration: "2h 28m",
        cast: "Leonardo DiCaprio, Joseph Gordon-Levitt",
        genre: "Sci-Fi, Thriller",
        image: "https://m.media-amazon.com/images/I/51NiGlapXlL._AC_.jpg"
    },
    {
        id: "2",
        title: "The Matrix",
        director: "The Wachowskis",
        duration: "2h 16m",
        cast: "Keanu Reeves, Laurence Fishburne",
        genre: "Sci-Fi, Action",
        image: "https://m.media-amazon.com/images/I/51EG732BV3L.jpg"
    },
    {
        id: "3",
        title: "Interstellar",
        director: "Christopher Nolan",
        duration: "2h 49m",
        cast: "Matthew McConaughey, Anne Hathaway",
        genre: "Sci-Fi, Drama",
        image: "https://www.themoviedb.org/t/p/original/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg"
    },
    {
        id: "4",
        title: "The Dark Knight",
        director: "Christopher Nolan",
        duration: "2h 32m",
        cast: "Christian Bale, Heath Ledger",
        genre: "Action, Crime",
        image: "https://www.themoviedb.org/t/p/original/qJ2tW6WMUDux911r6m7haRef0WH.jpg"
    },
    {
        id: "5",
        title: "Fight Club",
        director: "David Fincher",
        duration: "2h 19m",
        cast: "Brad Pitt, Edward Norton",
        genre: "Drama, Thriller",
        image: "https://m.media-amazon.com/images/I/51v5ZpFyaFL._AC_.jpg"
    },
    {
        id: "6",
        title: "Pulp Fiction",
        director: "Quentin Tarantino",
        duration: "2h 34m",
        cast: "John Travolta, Uma Thurman",
        genre: "Crime, Drama",
        image: "https://m.media-amazon.com/images/I/71c05lTE03L._AC_SY679_.jpg"
    },
    {
        id: "7",
        title: "Forrest Gump",
        director: "Robert Zemeckis",
        duration: "2h 22m",
        cast: "Tom Hanks, Robin Wright",
        genre: "Drama, Romance",
        image: "https://www.themoviedb.org/t/p/original/saHP97rTPS5eLmrLQEcANmKrsFl.jpg"
    },
    {
        id: "8",
        title: "The Shawshank Redemption",
        director: "Frank Darabont",
        duration: "2h 22m",
        cast: "Tim Robbins, Morgan Freeman",
        genre: "Drama",
        image: "https://m.media-amazon.com/images/I/51NiGlapXlL._AC_.jpg"
    },
    {
        id: "9",
        title: "Gladiator",
        director: "Ridley Scott",
        duration: "2h 35m",
        cast: "Russell Crowe, Joaquin Phoenix",
        genre: "Action, Drama",
        image: "https://www.themoviedb.org/t/p/original/ty8TGRuvJLPUmAR1H1nRIsgwvim.jpg"
    },
    {
        id: "10",
        title: "The Lord of the Rings",
        director: "Peter Jackson",
        duration: "3h 48m",
        cast: "Elijah Wood, Ian McKellen",
        genre: "Fantasy, Adventure",
        image: "https://m.media-amazon.com/images/I/51Qvs9i5a%2BL._AC_.jpg"
    },
]
