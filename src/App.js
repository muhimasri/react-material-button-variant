import './App.css';
import { Button } from './Button';

function App() {
  return (
    <div className="App">
      <Button variant="text" color="primary">Text Button!</Button>
      <Button variant="contained" color="primary">Contained Button!</Button>
      <Button variant="outlined" color="primary">Outlined Button!</Button>
    </div>
  );
}

export default App;
