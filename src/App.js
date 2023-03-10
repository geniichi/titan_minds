import './App.css';
import Footer from './Shared/Footer/Footer.js';
import Header from './Shared/Header/Header.js';
import { Routes, Route } from 'react-router-dom';
import Bookspage from './Components/Bookspage/Bookspage.js';
import Contactpage from './Components/Contactpage/Contactpage.js';
import Homepage from './Components/Homepage/Homepage.js';

function App() {
  return (
    <body className="App">
      <Header/>
        <Routes>
          <Route path='/' element={<Homepage/>}></Route>
          <Route path='/books' element={<Bookspage/>}></Route>
          <Route path='/contact' element={<Contactpage/>}></Route>
        </Routes>
      <Footer/>
    </body>
  );
}

export default App;
