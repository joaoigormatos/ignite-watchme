import { GenreResponseProps } from "../schemas/Genrer";
import { MovieProps } from "../schemas/Movies";
import { MovieCard } from "./MovieCard";

type ContentProps = {
  movies: MovieProps[];
  selectedGenre: GenreResponseProps;
};

const Content = ({ movies, selectedGenre }: ContentProps) => {
  return (
    <div className="container">
      <header>
        <span className="category">
          Categoria:<span> {selectedGenre.title}</span>
        </span>
      </header>

      <main>
        <div className="movies-list">
          {movies.map((movie) => (
            <MovieCard
              key={movie.imdbID}
              title={movie.Title}
              poster={movie.Poster}
              runtime={movie.Runtime}
              rating={movie.Ratings[0].Value}
            />
          ))}
        </div>
      </main>
    </div>
  );
};
export { Content };
