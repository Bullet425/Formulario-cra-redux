import React from "react";
import "./App.css";
import { AppContainer } from "./components/index";
import { Provider } from "react-redux";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <AppContainer />
    </Provider>
  );
}

export default App;
