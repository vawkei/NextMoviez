import {useDispatch} from 'react-redux';
import { faveSliceAction } from '../../store';
import Card from '../ui/Card';
import Button from '../ui/Button';
import classes from './FavoriteMoviez.module.css';

const FavoriteMoviez = (props) => {

const dispatch = useDispatch();

const removeItemFromFavoritesHandler =()=>{
    dispatch(faveSliceAction.removeFromFavorites(props.id))
}

    return ( 
        <Card>
        <li key={props.id} className={classes.li}>
            <div className={classes.image}>
                <img src={props.image} />
            </div>
            <div className={classes.content}>
                <h1>{props.title}</h1>
                <h3>{props.genre}</h3>
                <p>{props.year}</p>
            </div>
            <div className={classes.button}>
                <Button onClick={removeItemFromFavoritesHandler}>Remove From Favorites</Button>
            </div>
        </li>
    </Card>
     );
}
 
export default FavoriteMoviez;