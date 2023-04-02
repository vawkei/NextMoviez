import AddMoviezForm from "../components/moviez/AddMoviezForm";
import {useRouter} from 'next/router';

const AddMeetups = () => {

  const router = useRouter();

  const addMoviezHandler = (enteredData) => {
    //console.log(enteredData)
    fetch("/api/post-movie", {
      method: "POST",
      body: JSON.stringify(enteredData),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => console.log(data));
      router.replace("/all-moviez")
  };
  return (
    <div>
      <h1>Add Moviez Page</h1>
      <AddMoviezForm onAddMoviez={addMoviezHandler} />
    </div>
  );
};

export default AddMeetups;
