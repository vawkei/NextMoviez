import {MongoClient} from "mongodb";
import MovieList from "../components/moviez/MovieList";
import Head from 'next/head';
import { Fragment } from "react";


// const DUMMY_MOVIEZ =[
//     {
//         id:"m1",
//         title:"Scream",
//         image: "https://upload.wikimedia.org/wikipedia/en/2/24/Scream2022film.jpeg",
//         genre:"Slasher",
//         year: "2022",
//         description:"The plot takes place twenty-five years after the original Woodsboro murders from scream, when yet another Ghostface appears and begins targeting a group of teenagers. It is the fifth installment in the Scream film series, though billed as a relaunch of the film series, the film is a direct sequel to Scream 4."
//     },
//     {
//         id:"m2",
//         title:"Dead Silence",
//         image:"https://upload.wikimedia.org/wikipedia/en/0/0b/Dead_silence.jpg",
//         genre:"Supernatural Horror",
//         year: "2007",
//         description:"Directed by James Wan and written by Leight Whannel. The film stars Ryan Kwanten as Jamie Ashen, a young widower returning to his hometown to search for answers to his wife's death."
//     },
//     {
//         id:"m3",
//         title:"Insidious",
//         image:"https://upload.wikimedia.org/wikipedia/en/2/2d/Insidious_poster.jpg",
//         genre:"Supernatural Horror",
//         year: "2010",
//         description:"The story centers on a married couple whose boy inexplicably enters a comatose state and becomes a vessel for a variety of demonic entities in an astral plane. Directed by Janes Wan, written by Leigh Whannell, and starring Patrick Wilson, Rose Byrne and Barbara Hershey."
//     },
//     {
//         id:"m4",
//         title:"Saw",
//         image:"https://upload.wikimedia.org/wikipedia/en/5/56/Saw_official_poster.jpg",
//         genre:"Horror",
//         year: "2004",
//         description:"The film tells a nonlinear narrative, revolving around the mystery of the Jigsaw killer, who tests his victims' will to live by putting them through deadly games where they must inflict great physical pain upon themselves to survive."
//     },
       
//]


export const getStaticProps = async()=>{

    const client =await MongoClient.connect(process.env.MONGODB_URL);
    
    const db = client.db("my-next-moviez");
    const movies =await db.collection('moviez').find().toArray();
    const movies2 = movies.map((movie)=>{
        return(
            {
                id:movie._id.toString(),
                title:movie.title,
                genre:movie.genre,
                image:movie.image,
                year:movie.year,
                description:movie.description
            }
        )
        
    })
    return{
        props:{movies:movies2}
    }
}


const AllMoviez = (props) => {
    return ( 
        <Fragment>
        <Head>
            <title>All Moviez</title>
            <meta name="description"
                  content="Browse a Huge List of Moviez from our Database"/>
        </Head>
        <div>
            <h1>All Moviez Page</h1>
            {/* <MovieList movies={DUMMY_MOVIEZ} /> */}
            <MovieList movies={props.movies} />
        </div>
        </Fragment>
     );
}
 
export default AllMoviez;