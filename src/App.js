import './App.css';
import Footer from './components/footer'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Experience from './pages/Experience';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProjectDisplay from './pages/ProjectDisplay';
import Projects from './pages/Projects';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/project/:id" element={<ProjectDisplay />} />
            <Route path="/experience" element={<Experience />} />
        </Routes>
        <Footer />
      </Router>    
    </div>
  );
}

export default App;
