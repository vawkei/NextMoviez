import Head from "next/head";
import { Fragment } from "react";
import { useRouter } from "next/router";
import Button from "../../components/ui/Button";
import Card from "../../components/ui/Card";
import classes from "./MoviezDetail.module.css";
import { useDispatch, useSelector } from "react-redux";
import { faveSliceAction } from "../../store";
import { MongoClient,ObjectId } from "mongodb";


// const DUMMY_MOVIEZ = [
//   {
//     id: "m1",
//     title: "Scream",
//     image: "https://upload.wikimedia.org/wikipedia/en/2/24/Scream2022film.jpeg",
//     genre: "Slasher",
//     year: "2022",
//     description:
//       "The plot takes place twenty-five years after the original Woodsboro murders from scream, when yet another Ghostface appears and begins targeting a group of teenagers. It is the fifth installment in the Scream film series, though billed as a relaunch of the film series, the film is a direct sequel to Scream 4.",
//   },
//   {
//     id: "m2",
//     title: "Dead Silence",
//     image: "https://upload.wikimedia.org/wikipedia/en/0/0b/Dead_silence.jpg",
//     genre: "Supernatural Horror",
//     year: "2007",
//     description:
//       "Directed by James Wan and written by Leight Whannel. The film stars Ryan Kwanten as Jamie Ashen, a young widower returning to his hometown to search for answers to his wife's death.",
//   },
//   {
//     id: "m3",
//     title: "Insidious",
//     image:
//       "https://upload.wikimedia.org/wikipedia/en/2/2d/Insidious_poster.jpg",
//     genre: "Supernatural Horror",
//     year: "2010",
//     description:
//       "The story centers on a married couple whose boy inexplicably enters a comatose state and becomes a vessel for a variety of demonic entities in an astral plane. Directed by Janes Wan, written by Leigh Whannell, and starring Patrick Wilson, Rose Byrne and Barbara Hershey.",
//   },
//   {
//     id: "m4",
//     title: "Saw",
//     image:
//       "https://upload.wikimedia.org/wikipedia/en/5/56/Saw_official_poster.jpg",
//     genre: "Horror",
//     year: "2004",
//     description:
//       "The film tells a nonlinear narrative, revolving around the mystery of the Jigsaw killer, who tests his victims' will to live by putting them through deadly games where they must inflict great physical pain upon themselves to survive.",
//   },
// ];

export const getStaticPaths = async()=>{
  const client =await MongoClient.connect(process.env.MONGODB_URL);

  const db = client.db('my-next-moviez');
  const document = db.collection("moviez");
  const movies = await document.find().toArray()

  const x = movies.map((movie)=>{
    return{
      params:{movieId:movie._id.toString()}
    }
  }) ;

  return{
    paths:x,
    fallback:false
  };
  
};

export const getStaticProps = async (context)=>{
  const movieId = context.params.movieId;

  const client =await MongoClient.connect(process.env.MONGODB_URL);

  const db = client.db('my-next-moviez');
  const document = db.collection("moviez")
  const selectedMovie =await document.findOne({_id: new ObjectId(movieId)})

  return{
    props:{selectedMovie:{
      id:selectedMovie._id.toString(),
      image:selectedMovie.image,
      title:selectedMovie.title,
      genre: selectedMovie.genre,
      year: selectedMovie.year,
      description:selectedMovie.description
    }}
}
}
const MovieDetail = (props) => {
  const router = useRouter();
  // [console.log(router.query.moviezId);this shows whats after the domainname/folder/id http://localhost:3000/moviez/m1].


  // const getMovieById = (id) => {
  //   return DUMMY_MOVIEZ.find((movie) => movie.id === id);
  // };

  // const movieId = router.query.moviezId;
  // const movie = getMovieById(movieId);
  const movie = props.selectedMovie

  if (!movie) {
    return  <p
    style={{
      textAlign: "center",
      backgroundColor: "green",
      padding: "1.5rem",
      color:'white',
      borderRadius:'6px'
    }}>
    No Movie Found
  </p>
  }

  const dispatch = useDispatch();

  const toggleFavoritesHandler = () => {
    dispatch(
      faveSliceAction.toggleFavorites({
        id: movie.id,
        image: movie.image,
        genre: movie.genre,
        year: movie.year,
        description: movie.description,
      })
    );
  };


  const items = useSelector((state)=>state.favorite.items);
  let hasId = (id)=>{
    return items.some((prevState)=>prevState.id ===id)
  };
  let hasIdHandler = hasId(movie.id);

  return (
    <div>
      <Head>
        <title>{props.selectedMovie.title}</title>
        <meta name="description"
        content= {props.selectedMovie.description}/>
      </Head>
      <h1>The Movie Detail Page</h1>
      <Card>
        <li key={props.selectedMovie.id} className={classes.item}>
          <div className={classes.image}>
            <img src={props.selectedMovie.image} />
          </div>
          <div className={classes.content}>
            <h1>{props.selectedMovie.title}</h1>
            <h3>{props.selectedMovie.genre}</h3>
            <p>{props.selectedMovie.year}</p>
            <div className={classes.description}>
              <h4>Movie Description</h4>
              <p>{props.selectedMovie.description}</p>
            </div>
            <div className={classes.action}>
              <Button onClick={toggleFavoritesHandler}>
                {hasIdHandler ?"Remove from Favorites":"Add to Favorites"}
              </Button>
            </div>
          </div>
        </li>
      </Card>
    </div>
  );
};

export default MovieDetail;
