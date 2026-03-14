import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import meImg from "./assets/me_hmtl.jpeg";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Mathias Kuchimpos</h1>

      <div>
        <h2>About me</h2>
        <p>I am a third year Cognitive Science student at UCLA.</p>
      </div>

      <div>
        <h2>Hobbies</h2>
        <ul>
          <li>Learning russian</li>
          <li>Making oatmeal</li>
          <li>Reading</li>
          <li>Going to the gym</li>
        </ul>
        <a
          style={{ fontStyle: "italic", color: "orange" }}
          href="https://slavic.ucla.edu/news/a-russian-language-class-project-takes-center-stage-during-l-a-theater-festival/"
        >
          I translated a play
        </a>
      </div>
      <img src={meImg} width="300" height="300" />
      <button onClick={() => setCount(count + 1)}>
        Money made so far: ${count}
      </button>
    </>
  );
}

export default App;
