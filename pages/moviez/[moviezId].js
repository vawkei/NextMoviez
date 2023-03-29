import { useRouter } from "next/router";
import Card from "../../components/ui/Card";
import classes from "./MoviezDetail.module.css";

const DUMMY_MOVIEZ = [
  {
    id: "m1",
    title: "Scream",
    image: "https://upload.wikimedia.org/wikipedia/en/2/24/Scream2022film.jpeg",
    genre: "Slasher",
    year: "2022",
    description:
      "The plot takes place twenty-five years after the original Woodsboro murders from scream, when yet another Ghostface appears and begins targeting a group of teenagers. It is the fifth installment in the Scream film series, though billed as a relaunch of the film series, the film is a direct sequel to Scream 4.",
  },
  {
    id: "m2",
    title: "Dead Silence",
    image: "https://upload.wikimedia.org/wikipedia/en/0/0b/Dead_silence.jpg",
    genre: "Supernatural Horror",
    year: "2007",
    description:
      "Directed by James Wan and written by Leight Whannel. The film stars Ryan Kwanten as Jamie Ashen, a young widower returning to his hometown to search for answers to his wife's death.",
  },
  {
    id: "m3",
    title: "Insidious",
    image:
      "https://upload.wikimedia.org/wikipedia/en/2/2d/Insidious_poster.jpg",
    genre: "Supernatural Horror",
    year: "2010",
    description:
      "The story centers on a married couple whose boy inexplicably enters a comatose state and becomes a vessel for a variety of demonic entities in an astral plane. Directed by Janes Wan, written by Leigh Whannell, and starring Patrick Wilson, Rose Byrne and Barbara Hershey.",
  },
  {
    id: "m4",
    title: "Saw",
    image:
      "https://upload.wikimedia.org/wikipedia/en/5/56/Saw_official_poster.jpg",
    genre: "Horror",
    year: "2004",
    description:
      "The film tells a nonlinear narrative, revolving around the mystery of the Jigsaw killer, who tests his victims' will to live by putting them through deadly games where they must inflict great physical pain upon themselves to survive.",
  },
];

const MovieDetail = () => {
  const router = useRouter();

  const getMovieById = (id) => {
    return DUMMY_MOVIEZ.find((movie) => movie.id === id);
  };

  console.log(router.query.moviezId);

  const movieId = router.query.moviezId;
  const movie = getMovieById(movieId);

  if (!movie) {
    return <p style={{ marginTop: "6rem" }}>No Movie Found</p>;
  }

  return (
    <div>
      <h1>The Movie Detail Page</h1>
      <Card>
        <li key={movie.id} className={classes.item}>
          <div className={classes.image}>
            <img src={movie.image} />
          </div>
          <div className={classes.content}>
            <h1>{movie.title}</h1>
            <h3>{movie.genre}</h3>
            <p>{movie.year}</p>
            <div className={classes.description}>
              <h4>Movie Description</h4>
              <p>{movie.description}</p>
            </div>
          </div>
        </li>
      </Card>
    </div>
  );
};

export default MovieDetail;
