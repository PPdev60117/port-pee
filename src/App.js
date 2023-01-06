import About from './component/about';
import Contact from './component/contact';
import Header from './component/header';
import Home from './component/home';
import Work from './component/work';

function App() {
  return (
    <div className="App">
      <Header/>
      <div id='home'>
        <Home/>
      </div>
      <div id='about'>
        <About/>
      </div>
      <div id='work'>
        <Work/>
      </div>
      <div id='contact'>
        <Contact/>
      </div>
    </div>
  );
}

export default App;
