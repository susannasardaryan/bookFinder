import Book from "./Book.jsx";
import {memo} from "react";

const BookList = memo(({ bookList, mode }) => {
  return (
    <div className={`bookList ${mode}`}>
      {bookList.map((book) => (
        <Book {...book} key={book.key} mode={mode} bookKey={book.key}/>
      ))}
    </div>
  );
});

export default BookList;
