import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import axios from "axios";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  const login = async () => {
    console.log("here1");

    const { authResponse } = await new Promise(window.FB.login);
    console.log("here¨2");

    console.log("TEST", authResponse.accessToken);

    axios
      .get(
        `https://graph.facebook.com/v14.0/ig_hashtag_search?user_id=17841431906599136&q=deepdipreet&access_token=${authResponse.accessToken}`
      )
      .then(console.log);

    axios
      .get(
        `https://graph.facebook.com/17841556705084770/recent_media?user_id=17841431906599136&fields=id,media_type,comments_count,like_count,media_url&access_token=${authResponse.accessToken}`
      )
      .then(console.log);

    return authResponse.accessToken;
  };

  useEffect(() => {
    console.log("here");
    //const accessToken = login();

    /*
    window.FB.api(
      `/ig_hashtag_search?user_id=17841431906599136&q=coke`,
      "get",
      null,
      (data: any) => console.log("console.log", data)
    ); 
    */
  }, []);

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
    </div>
  );
}

export default App;

// ID = 31753095553

// sharecrew id = 101410364833977

// 17841431906599136

// coke = "17841593698074073"

// DeepDiPreet = 17841556705084770
