import MovieItem from "./MovieItem";
import classes from "./MovieList.module.css";

const MovieList = (props) => {

    //const list={margin:0,padding:0,listStyle:'none'} 
  return (
    <div>
      <ul className={classes.list}>
        {props.movies.map((movie) => {
          return (
            <MovieItem
            key={movie.id}
              id={movie.id}
              title={movie.title}
              image={movie.image}
              genre={movie.genre}
              year={movie.year}
              description={movie.description}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default MovieList;
