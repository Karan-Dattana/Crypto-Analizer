
import './App.css';
import Home from './home/Home';
import About from './page2/About';
import Crypto from './api/Crypto';
import End from './end/End';
import Blog from './blog/Blog';


function App() {
  return (
    <div className="App">

      <Home />
      <Crypto />
      <About />
      
      <Blog />
      <End />
  

    </div>
  );
}

export default App;
