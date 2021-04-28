import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

//Componets
import BookList from './components/BookList.jsx';
import MyNavbar from './components/Nav.jsx';
import MyJumbotron from './components/Jumbotron.jsx';
import FilterBookList from './components/FilterBookList.jsx';
// import SingleBook from './components/SingleBook.jsx.jsx';
import MyAlert from './components/WarningSign.jsx';
import MyFooter from './components/Footer';

const App = () => {
  return (
    <div className="App">
      <MyNavbar title="What The Dickens" />
      <MyJumbotron />
      <BookList />
      <FilterBookList />
      {/* <SingleBook /> */}
      <MyAlert />
      <MyFooter />
    </div>
  );
};

export default App;
