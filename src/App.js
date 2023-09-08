import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
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
            This is my public landing page. <br/>See 
            <a className="App-link"
              href="https://jacks.media"
              target="_blank"
              rel="noopener noreferrer"> jacks.media
            </a>, too!
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
          <p>
            <em>
              <a
                className="App-link"
                href="https://tumblr.com/xJ4cks"
                target="_blank"
                rel="noopener noreferrer"
              >
                My Tumblr
              </a>
            </em>
          </p>
        </div>
      </header>
    </div>
  );
}

export default App;
