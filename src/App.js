import './App.css';
import { Button } from './Button';

function App() {
  return (
    <div className="App">
      <Button variant="contained" color="primary" pill>Contained Pill!</Button>
      <Button variant="outlined" color="primary" pill>Outlined Pill!</Button>
    </div>
  );
}

export default App;
