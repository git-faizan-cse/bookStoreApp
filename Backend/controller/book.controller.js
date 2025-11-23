import Book from "../model/book.model.js";

export const getBook = async (req, res) => {
  //   Book.find()
  //     .then((books) => res.json(books))
  //     .catch((err) => res.status(500).json({ error: err.message }));

  try {
    const books = await Book.find();
    res.status(200).json(books);
  } catch (error) {
    console.log("Error fetching books:", error);
    res.status(500).json({ error: error.message });
  }
};
