import React, { useState, useEffect } from "react";
import "./App.css";
import SearchForm from "./components/SearchForm";
import Weather from "./components/Weather";
import Logo from "./components/Logo";

function App() {
  return (
    <>
      <Logo />
      <SearchForm />
      <Weather />
    </>
  );
}

export default App;
