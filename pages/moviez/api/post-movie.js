import { addDoc,collection,Timestamp } from "firebase/firestore/lite";
import { firestore } from "../../../firebaseConfig";

const Handler =async (req, res) => {
    if (req.method === "POST") { 
      const title = req.body.title;
      const genre = req.body.genre;
      const image = req.body.image;
      const year = req.body.year;
      const description = req.body.description;
  
      if (
        !title ||
        title.trim() === "" ||
        !genre ||
        genre.trim() === "" ||
        !image ||
        image.trim() === "" ||
        !year ||
        year.trim().length === 0 ||
        !description ||
        description.trim().length === 0
      ) {
        res.status(401).json({ message: "Invalid Inputs" });
        return;
      };
  
       const db = firestore()
       const collectionRef = collection(db, "my-next-moviez")
       const docRef =  await addDoc(collectionRef,{
        title: title,
        genre: genre,
        image: image,
        year: year,
        description: description,
        createdAt:Timestamp.fromDate(new Date()),
       });
       console.log('Document written in ID: ',docRef.id);
       res.status(200).json({message:'Data Sent'})
    }
  };
  
  export default Handler;
  