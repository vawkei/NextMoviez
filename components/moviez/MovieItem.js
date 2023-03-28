import classes from './MovieItem.module.css';
import Card from '../ui/Card';
import Button from '../ui/Button';

const MovieItem = (props) => {
    return ( 
        <Card>
            <li key={props.id}>
                <div className={classes.image}>
                    <img src={props.image} />
                </div>
                <div className={classes.content}>
                    <h1>{props.title}</h1>
                    <h3>{props.genre}</h3>
                    <p>{props.year}</p>
                </div>
                <div className={classes.button}>
                    <Button>Show Detail</Button>
                </div>
            </li>
        </Card>
     );
}
 
export default MovieItem;