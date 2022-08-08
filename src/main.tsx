import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { setup } from "goober";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import "./index.css";
import { initFacebookSdk } from "./facebook";

setup(React.createElement);

const queryClient = new QueryClient();

initFacebookSdk().then(() => {
  ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </React.StrictMode>
  );
});
