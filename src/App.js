import React from "react";
import Home from "./pages/home";
import store from "./store";

import ComA from "./pages/ComA";
import ComB from "./pages/ComB";
import { Provider } from "react-redux";
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        {/* <Home/> */}
        <ComA/>
        <ComB/>
      </div>  
    </Provider>
  );
}

export default App;
