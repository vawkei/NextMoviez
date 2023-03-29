import Card from "../ui/Card";
import Button from "../ui/Button"
import classes from './AddMoviezForm.module.css';

const AddMoviezForm = () => {
    return ( 
        <Card>
            <form action="" className={classes.form}>
                <div className={classes.control}>
                    <label htmlFor="">Movie Title</label>
                    <input type="text" required />
                </div>
                <div className={classes.control}>
                    <label htmlFor="" >Movie Genre</label>
                    <input type="text" required />
                </div>
                <div className={classes.control}>
                    <label htmlFor="">Movie Year</label>
                    <input type="text" required />
                </div>
                <div className={classes.control}>
                    <label htmlFor="">Movie Description</label>
                    {/* <input type="text" required /> */}
                    <textarea rows="5" required></textarea>
                </div>
                <div className={classes.action}>
                    <Button>Add Movie</Button>
                </div>
            </form>
        </Card>
     );
}
 
export default AddMoviezForm;