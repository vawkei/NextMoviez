import FavoriteMoviez from "../components/moviez/FavoriteMoviez";
import { useSelector } from "react-redux";

const Favorites = () => {
  const favoriteItems = useSelector((state) => {
    return state.favorite.items;
  });

  let content = (
    <p
      style={{
        textAlign: "center",
        backgroundColor: "green",
        padding: "1.5rem",
        color:'white',
        borderRadius:'6px'
      }}>
      Please Add up Favorites
    </p>
  );

  return (
    <div>
      <h1>FavoritesPage</h1>
      <ul>
        {favoriteItems.length === 0
          ? content
          : favoriteItems.map((item) => (
              <FavoriteMoviez
                key={item.id}
                id={item.id}
                title={item.title}
                image={item.image}
                genre={item.genre}
                year={item.year}
                description={item.description}
              />
            ))}
      </ul>
    </div>
  );
};

export default Favorites;
