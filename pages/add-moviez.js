import AddMoviezForm from "../components/moviez/AddMoviezForm";

const AddMeetups = () => {

    const addMoviezHandler = (enteredData)=>{
        console.log(enteredData)   
    }
    return ( 
        <div>
            <h1>Add Moviez Page</h1>
            <AddMoviezForm  onAddMoviez={addMoviezHandler} />
        </div>
     );
}
 
export default AddMeetups;