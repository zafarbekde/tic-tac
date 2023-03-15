import {Box} from './components/Box.jsx'
import './App.css';

function App() {
  const board = ["X","X","X","X","X","X","X","X","X"]
  return (
    <div className="App">
      <Box value='X' onClick={null}/>
    </div>
  );
}

export default App;
