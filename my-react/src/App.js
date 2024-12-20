import React from "react";
import "./App.css";
import Inputfield from "./components/inputfield.tsx";
import Addbar from "./components/addbar.tsx";
import { TaskContextProvider } from "./taskContext.tsx";

function App() {
  return (
    <TaskContextProvider>
      <div className="App">
        <div className="header">
          <img src="/assets/Line 2.png" alt="Line 2" />
          <img src="/assets/TO-DO NOW.png" alt="TO-DO NOW" />
          <img src="/assets/Line 2.png" alt="Line 2" />
        </div>
        <div className="header2">
          <img src="/assets/divider.png" alt="divider" />
          <img src="/assets/NotePencil.png" alt="Note Pencil" />
          <img src="/assets/divider.png" alt="divider" />
        </div>
        <Inputfield />
        <div className="line3">
          <img src="/assets/Line 3.png" alt="Line 3" />
        </div>
        <Addbar />
      </div>
    </TaskContextProvider>
  );
}

export default App;
