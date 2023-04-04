import './App.css';
import  Day_5 from './Day_5';
import Errorboundary from './Errorboundary';

function App() {
  return (
    <div className="App">
      <Errorboundary>
        <Day_5 a={[1,"icecream","fruits","Cookies"]}/>
      </Errorboundary>
    </div>
  );
}

export default App;