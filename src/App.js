import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import {Header} from './components/header';
import {HomePage} from './pages/homePage';
import {AddCar} from './pages/addCar';
import {CarPage} from './pages/carPage';

function App() {
  return (
    <Router>
      <Header/>
        <Routes>
          <Route exact path="/" element={<HomePage/>}/>

          <Route path="/add-car" element={<AddCar/>}/>

          <Route path="/car" element={<CarPage/>}/>
          <Route path="/car/:id" element={<CarPage/>}/>
        </Routes>
    </Router>
  );
}

export default App;
