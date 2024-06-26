import './App.css';
import Login from './components/login/Login';

function App() {
let sum;
let a= 4;
let b=6;

  return (
    <div className="App">
      <h2>learn react</h2>
      <ul>
        <li>
          apple
        </li>
        <li>
          banana
        </li>
      </ul>
      <h1 title='sum'>{a+b}</h1>
    </div>
  );
}

export default App;
