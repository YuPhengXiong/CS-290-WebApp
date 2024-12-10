import {useState} from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import './App.css'
import HomePage      from './modules/HomePage.jsx';
import TopicsPage    from './modules/TopicsPage.jsx';
import GalleryPage   from './modules/GalleryPage.jsx';
import OrderPage     from './modules/OrderPage.jsx';

import GamesPage     from './modules/games/GamesPage.jsx';
import GameAdd      from './modules/games/GameAdd.jsx';
import GameEdit     from './modules/games/GameEdit.jsx';

import ContactPage   from './modules/ContactPage.jsx';

import Slogan        from './modules/Slogan.jsx';
import Navigation    from './modules/Navigation.jsx';
import products      from './data/products.js';


function App() {  
      const [game, setGame] = useState([]);

  return (
    <div>
      <header>
          <h1>YuPheng Xiong</h1>
          <Slogan />
      </header>

      <Router>
        <Navigation />
          <main>
            <section>
              <Routes>
                <Route path="/"                 element={<HomePage />}></Route>;
                <Route path="/topics"           element={<TopicsPage />}></Route>;
                <Route path="/gallery"          element={<GalleryPage />}></Route>;
                <Route path="/order"            element={<OrderPage products={products}/>}></Route>;

                <Route path="/gamePage"         element={<GamesPage setGame={setGame} />}></Route>;
                <Route path="/create"           element={<GameAdd />}></Route>;
                <Route path="/update"           element={<GameEdit gameToEdit={game} />}></Route>;

                <Route path="/contact"          element={<ContactPage />}></Route>;
              </Routes>
            </section>
          </main>
      </Router>

      <footer>
          <p>&copy; {new Date().getFullYear()} YuPheng Xiong</p>
      </footer>
      
    </div>
  )
}

export default App
