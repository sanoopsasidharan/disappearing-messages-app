import React from "react";
import "./HomeContent.css";

function HomeContent() {
  return (
    <div>
      <div>
        <div>
          <label for="cars">
            <h1>Create a disappearing</h1>
          </label>
          <select className="selectTag" name="cars" id="cars">
            <option value="message">message</option>
            <option value="link">link</option>
          </select>
          <div>
            <p>Self-destruct Timer</p>
            <select className="selectTag" name="cars" id="cars">
              <option value="60">1 minute</option>
              <option value="600">10 minute</option>
              <option value="600">1 hour</option>
              <option value="600">1 day</option>
              <option value="600">1 week</option>
            </select>
          </div>
          <div>
            <input type="text" placeholder="what do you want to say" />
            <button>Generate</button>
          </div>
          <div>
            <h2>About</h2>
            <p>Disappearing URLs and messages!</p>
            <p>
              Create short, temporary, self-destructing messages and links that
              automatically expire in anywhere from a minute to a week.
            </p>
            <p>
              Extend the url.dev functionality. Build your own Apps using the
              full API on Autocode.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeContent;
