import reactDom from "react-dom";
import { App } from "./app";
import "./index.css";
import { AppContextProvider } from "./state/appContextProvider";
reactDom.render(
  <AppContextProvider>
    <App />
  </AppContextProvider>,
  document.getElementById("root")
);
