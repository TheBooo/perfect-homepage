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
    name: "HeadHunter",
  },
];

function App() {
  const [links, setLinks] = useState(initialLinks);
  const [url, setUrl] = useState("");
  const [name, setName] = useState("");
  const [linksForm, setLinksForm] = useState({ show: false });
  const [edit, setEdit] = useState(false);
  const [id, setId] = useState(0);
  const [weather, setWeather] = useState("");
  const [location, setLocation] = useState("");
  // ------------ get location
  useEffect(() => {
    const test = (position) => {
      let coordinates = [position.coords.latitude, position.coords.longitude];
      setLocation(coordinates);
    };
    const locationDenied = () => {
      alert("wwe cant show you weather without fuckin location");
    };
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(test, locationDenied);
    }
  }, []);
  // --------- get weather data
  useEffect(() => {
    let lat = location[0];

    let lon = location[1];
    //check if we got user location already
    if (lon != null) {
      let fetchUrl = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=fb07eaf11827eeea3aa08590b2e3c341&units=metric`;
      fetch(fetchUrl)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          //console.log(data);
          setWeather(data);
        });
    }
  }, [location]);

  //------------------------
  const handleShowForm = () => {
    setLinksForm({ show: true });
  };

  //get input link URL
  const handleUrl = (e) => {
    setUrl(e.target.value);
  };
  //get input link name
  const handleName = (e) => {
    setName(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (url && name) {
      if (edit) {
        let tempLinks = links.map((link) => {
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
  const handleClose = (e) => {
    e.preventDefault();
    setLinksForm({ show: false });
  };

  // DELETE LINK
  const handleDelete = (id) => {
    let newLinks = links.filter((link) => link.id !== id);
    setLinks(newLinks);
  };
  // edit link
  const handleEdit = (id) => {
    let currentLink = links.filter((link) => link.id === id);
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
      <Weather weatherApi={weather} />
    </>
  );
}

export default App;
