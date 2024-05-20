/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import BooksSingleCard from "./BooksSingleCard";

function BooksCard(props) {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {props.books.map((book) => {
        return <BooksSingleCard key={book._id} book={book} />;
      })}
    </div>
  );
}

export default BooksCard;
