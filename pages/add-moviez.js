import AddMoviezForm from "../components/moviez/AddMoviezForm";

const AddMeetups = () => {
  const addMoviezHandler = (enteredData) => {
    //console.log(enteredData)
    fetch("/api/post-movie", {
      method: "POST",
      body: JSON.stringify({ enteredData: enteredData }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => console.log(data));
  };
  return (
    <div>
      <h1>Add Moviez Page</h1>
      <AddMoviezForm onAddMoviez={addMoviezHandler} />
    </div>
  );
};

export default AddMeetups;
