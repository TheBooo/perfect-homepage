import React, { useState, useEffect } from "react";
import "./App.css";
import SearchForm from "./components/SearchForm";
import Weather from "./components/Weather";
import Logo from "./components/Logo";
import Links from "./components/Links";
import LinkForm from "./components/LinkForm";
import { v4 as uuidv4 } from "uuid";

const initialLinks = [
  { id: uuidv4(), link: "www.google.com", name: "Google" },
  { id: uuidv4(), link: "yandex.ru", name: "Yandex" },
  { id: uuidv4(), link: "https://bikepost.ru/", name: "Bikepost" },
  {
    id: uuidv4(),
    link: "https://hh.ru/",
    name: "HeadHunter"
  }
];

function App() {
  const [links, setLinks] = useState(initialLinks);

  return (
    <>
      <Logo />
      <SearchForm />
      <Weather />
      <Links links={links} />
      <LinkForm />
    </>
  );
}

export default App;
