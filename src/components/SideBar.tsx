import { GenreResponseProps } from "../schemas/Genrer";
import { Button } from "./Button";

type SideBar = {
  selectedGenreId: number;
  genres: GenreResponseProps[];
  handleClickButton: { (id: number): void };
};

const SideBar = ({ selectedGenreId, genres, handleClickButton }: SideBar) => {
  return (
    <nav className="sidebar">
      <span>
        Watch<p>Me</p>
      </span>

      <div className="buttons-container">
        {genres.map((genre) => (
          <Button
            key={String(genre.id)}
            title={genre.title}
            iconName={genre.name}
            onClick={() => handleClickButton(genre.id)}
            selected={selectedGenreId === genre.id}
          />
        ))}
      </div>
    </nav>
  );
};

export { SideBar };
