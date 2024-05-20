/* eslint-disable no-unused-vars */
import React from "react";
import { Routes, Route } from "react-router-dom";
import HomeBook from "./pages/Home.jsx";
import CreateBook from "./pages/CreatBook.jsx";
import DeleteBook from "./pages/DeleteBook.jsx";
import EditBook from "./pages/EditBook.jsx";
import ShowBook from "./pages/ShowBook.jsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomeBook />}></Route>
      <Route path="/books/createbook" element={<CreateBook />}></Route>
      <Route path="/books/delete/:id" element={<DeleteBook />}></Route>
      <Route path="/books/edit/:id" element={<EditBook />}></Route>
      <Route path="/books/details/:id" element={<ShowBook />}></Route>
    </Routes>
  );
}

export default App;
