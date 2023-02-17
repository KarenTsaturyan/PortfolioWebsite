import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import ErrorPage from './pages/ErrorPage/ErrorPage';
import Experience from './pages/Experience/Experience';
import Home from './pages/Home/Home';
import ProjectPage from './pages/ProjectPage/ProjectPage';
import Projects from './pages/Projects/Projects';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/projects" element={<Projects/>} />
          <Route path="/project/:id" element={<ProjectPage/>} />
          <Route path="/experience" element={<Experience/>} />
          <Route path='*' element={<ErrorPage/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
