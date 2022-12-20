import './App.css';
import Footer from './components/footer'
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
          <Footer />
      </Router>    
    </div>
  );
}

export default App;
