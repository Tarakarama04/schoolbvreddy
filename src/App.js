import './App.css';
import Courousal from './HomePage/Courousal';
import NavBar from './HomePage/NavBar';
import GridPage from './HomePage/gridPage';
import Correspondent from './HomePage/correspondent';
import Footer from './HomePage/footer'; 

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Courousal/>
      <h1>why BVReddySchool</h1>
      <GridPage/>
      <Correspondent/>
    </div>
  );
}

export default App;
