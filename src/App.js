import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import {Header} from './components/header';
import {HomePage} from './pages/homePage';

function App() {
  return (
    <Router>
      <Header/>
        <Routes>
          <Route exact path="/" element={<HomePage/>}/>
        </Routes>
    </Router>
  );
}

export default App;
