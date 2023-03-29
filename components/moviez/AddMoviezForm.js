import Card from "../ui/Card";
import Button from "../ui/Button";
import ErrorModal from "../ui/ErrorModal";
import classes from "./AddMoviezForm.module.css";
import { useState } from "react";

const AddMoviezForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredGenre, setEnteredGenre] = useState("");
  const [enteredImage, setEnteredImage] = useState("");
  const [enteredYear, setEnteredYear] = useState("");
  const [enteredDescription, setEnteredDescription] = useState("");

  const [inputError, setInputError] = useState();
  const inputErrorHandler = () => {
    setInputError(null);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();

    if (
      enteredTitle.trim().length === 0 ||
      enteredGenre.trim().length === 0 ||
      enteredImage.trim() === "" ||
      enteredYear.trim() === "" ||
      enteredDescription.trim() === ""
    ) {
      setInputError({
        title: "Invalid Input",
        message: "Please fill in the Input Fields",
      });
      return;
    }
    const movieData = {
        title: enteredTitle,
        genre: enteredGenre,
        image: enteredImage,
        year: enteredYear,
        description: enteredDescription
      };
      console.log(movieData);
      //props.addMoviezHandler()
    
  };
 
  const enteredTitleChangeHandler = (e) => {
    setEnteredTitle(e.target.value);
  };
  const enteredGenreChangeHandler = (e) => {
    setEnteredGenre(e.target.value);
  };
  const enteredImageChangeHandler = (e) => {
    setEnteredImage(e.target.value);
  };
  const enteredYearChangeHandler = (e) => {
    setEnteredYear(e.target.value);
  };
  const enteredDescriptionChangeHandler = (e) => {
    setEnteredDescription(e.target.value);
  };

  return (
    <Card>
      {inputError && (
        <ErrorModal
          title={inputError.title}
          message={inputError.message}
          onConfirm={inputErrorHandler}
        />
      )}
      <form action="" className={classes.form} onSubmit={onSubmitHandler}>
        <div className={classes.control}>
          <label htmlFor="">Movie Title</label>
          <input type="text" onChange={enteredTitleChangeHandler} />
        </div>
        <div className={classes.control}>
          <label htmlFor="">Movie Genre</label>
          <input type="text" onChange={enteredGenreChangeHandler} />
        </div>
        <div className={classes.control}>
          <label htmlFor="">Movie Image</label>
          <input type="url" onChange={enteredImageChangeHandler} />
        </div>
        <div className={classes.control}>
          <label htmlFor="">Movie Year</label>
          <input type="text" onChange={enteredYearChangeHandler} />
        </div>
        <div className={classes.control}>
          <label htmlFor="">Movie Description</label>
          <textarea
            rows="5"
            onChange={enteredDescriptionChangeHandler}></textarea>
        </div>
        <div className={classes.action}>
          <Button>Add Movie</Button>
        </div>
      </form>
    </Card>
  );
};

export default AddMoviezForm;
