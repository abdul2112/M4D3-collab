import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

//Componets
import BookList from "./components/BookList.jsx";
import MyNavbar from "./components/Nav.jsx";
import MyFooter from "./components/Footer";
import MyJumbotron from "./components/Jumbotron.jsx";

const App = () => {
  return (
    <div className="App">
      <MyNavbar title="What The Dickens" />
      <MyJumbotron />
      {/* <FilterBookList /> */}
      <BookList />
      <MyFooter />
    </div>
  );
};

export default App;
