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
  const [url, setUrl] = useState("");
  const [name, setName] = useState("");
  const [linksForm, setLinksForm] = useState({ show: false });
  const handleShowForm = () => {
    setLinksForm({ show: true });
  };
  //get input link URL
  const handleUrl = e => {
    setUrl(e.target.value);
  };
  //get input link name
  const handleName = e => {
    setName(e.target.value);
  };
  const handleSubmit = e => {
    e.preventDefault();
    if (url && name) {
      const singleLink = { id: uuidv4(), link: url, name };
      setLinks([...links, singleLink]);
      setLinksForm({ show: false });
    } else {
      alert("Please enter URL and Name!");
    }
  };
  const handleClose = e => {
    e.preventDefault();
    setLinksForm({ show: false });
  };

  return (
    <>
      <Logo />
      <SearchForm />
      <Weather />
      <Links links={links} onShowForm={handleShowForm} />
      {linksForm.show && (
        <LinkForm
          onHandleSubmit={handleSubmit}
          onHandleUrl={handleUrl}
          onHandleName={handleName}
          onHandleClose={handleClose}
        />
      )}
    </>
  );
}

export default App;
