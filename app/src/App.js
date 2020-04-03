import React, { useState, useEffect } from "react";
import "./App.css";
import SearchForm from "./components/SearchForm";
import Weather from "./components/Weather";
import Logo from "./components/Logo";
import Links from "./components/Links";
import LinkForm from "./components/LinkForm";
import { v4 as uuidv4 } from "uuid";

const initialLinks = [
  { id: uuidv4(), url: "www.google.com", name: "Google" },
  { id: uuidv4(), url: "yandex.ru", name: "Yandex" },
  { id: uuidv4(), url: "https://bikepost.ru/", name: "Bikepost" },
  {
    id: uuidv4(),
    url: "https://hh.ru/",
    name: "HeadHunter"
  }
];

function App() {
  const [links, setLinks] = useState(initialLinks);
  const [url, setUrl] = useState("");
  const [name, setName] = useState("");
  const [linksForm, setLinksForm] = useState({ show: false });
  const [edit, setEdit] = useState(false);
  const [id, setId] = useState(0);

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
      if (edit) {
        let tempLinks = links.map(link => {
          return link.id === id ? { ...link, url, name } : link;
        });
        setLinks(tempLinks);
        setEdit(false);
        setLinksForm({ show: false });
      } else {
        const singleLink = { id: uuidv4(), url, name };
        setLinks([...links, singleLink]);
        setLinksForm({ show: false });
      }
      setUrl("");
      setName("");
    } else {
      alert("Please enter URL and Name!");
    }
  };
  const handleClose = e => {
    e.preventDefault();
    setLinksForm({ show: false });
  };

  // DELETE LINK
  const handleDelete = id => {
    let newLinks = links.filter(link => link.id !== id);
    setLinks(newLinks);
  };
  // edit link
  const handleEdit = id => {
    let currentLink = links.filter(link => link.id === id);
    setUrl(currentLink[0].url);
    setName(currentLink[0].name);
    setEdit(true);
    setId(id);
    handleShowForm({ show: true });
  };

  return (
    <>
      <Logo />
      <SearchForm />
      <Weather />
      <Links
        links={links}
        onShowForm={handleShowForm}
        onHandleDelete={handleDelete}
        onHandleEdit={handleEdit}
      />
      {linksForm.show && (
        <LinkForm
          onHandleSubmit={handleSubmit}
          onHandleUrl={handleUrl}
          url={url}
          name={name}
          onHandleName={handleName}
          onHandleClose={handleClose}
          edit={edit}
        />
      )}
    </>
  );
}

export default App;
