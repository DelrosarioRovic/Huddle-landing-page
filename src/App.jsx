import { useState } from "react";
import Header from "./components/Header";
import Introduction from "./components/Introduction";
import "./App.css";
import Content from "./components/Content";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="pt-5 flex flex-col justify-center">
      <div className="max-w-7xl flex flex-col justify-center m-auto">
        <div className=" bg-body">
          <Header />
          <Introduction />
        </div>
        <Content />
        
      </div>
      <Footer /> 
    </div>
  );
}

export default App;
