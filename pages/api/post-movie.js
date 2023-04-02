import { MongoClient } from "mongodb";

const Handler = async (req, res) => {
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
    }

    const movies = {
      title: title,
      genre: genre,
      image: image,
      year: year,
      description: description,
    };

    const client = await MongoClient.connect(
      "mongodb+srv://vawkeicodewebz:rOCzIJz4gHV9to1L@cluster0.9yu1rgh.mongodb.net/?retryWrites=true&w=majority&authMechanism=SCRAM-SHA-1"
    );

    const db = client.db("my-next-moviez");
    const document = await db.collection("moviez").insertOne(movies);
    res.status(200).json({message:"Movie Added to Database",data:document})
    client.close()
  }
};

export default Handler;
