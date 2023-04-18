import './App.css';
import Header from './components/header/header';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import Main from './views/main/main';
import Diet from './views/diet/diet';
import Calories from './views/calories/calories';
import Footer from './components/footer/footer';
import Recipes from './views/recipes/recipes';

function App() {
  return (
    <div className="App">
      <Router>
      <Header />
      <div className="containerApp">
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/diet" element={<Diet />} />
          <Route path="/calories" element={<Calories />} />
          <Route path="/recipes" element={<Recipes />} />
        </Routes>
      </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
