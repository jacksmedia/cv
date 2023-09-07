import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Alexander Jacks</h1>
        <h2><em>J4cks</em></h2>
        <p>
          Add some more stuff like banger CSS from eshib site, bro
        </p>
        <a
          className="App-link"
          href="https://stash23.s3.us-west-2.amazonaws.com/Resume23Q3.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          View my Resume
        </a>
      </header>
    </div>
  );
}

export default App;
