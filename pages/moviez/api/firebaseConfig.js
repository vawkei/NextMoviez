// // Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore,addDoc,collection,Timestamp } from "firebase/firestore/lite";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

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

    const movieData = {
      title: title,
      genre: genre,
      image: image,
      year: year,
      description: description,
      //createdAt: new Date()
    };
     const db = firestore()
     const docRef =  await addDoc(collection(db, 'my-next-moviez'),{
      movieData,
      createdAt:Timestamp.fromDate(new Date()),
     });
     console.log('Document written in ID: ',docRef.id);
     res.status(200).json({message:'Data Sent'})
  }
};

export default Handler;
