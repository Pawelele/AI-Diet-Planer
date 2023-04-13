import './App.css';
import Header from './components/header/header';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import Main from './views/main/main';
import Diet from './views/diet/diet';

function App() {
  return (
    <div className="App">
      <Router>
      <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/diet" element={<Diet />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
