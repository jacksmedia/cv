import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header lines">
      <div class="main">

        <div class="time"><span id="time"></span></div>
        <div class="text">
          <h1 class="vhs">Alexander Jacks</h1>
        </div>
        <div class="text">
        <a
          className="App-link"
          href="https://stash23.s3.us-west-2.amazonaws.com/Resume23Q3.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>View my Resume</h2>
        </a>
        </div>
        <div class="text">
          <p>
            This is my public landing page.
          </p>
        </div>
        <div class="text">
          <p>
            <em>
              <a
                className="App-link"
                href="https://twitter.com/xJ4cks"
                target="_blank"
                rel="noopener noreferrer"
              >
                My Twitter
              </a>
            </em>
          </p>
        </div>
        <div class="counter">REC <label id="minutes">00</label>:<label id="seconds">00</label></div>
        </div>
      </header>
    </div>
  );
}

export default App;
