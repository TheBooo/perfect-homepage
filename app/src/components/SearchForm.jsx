import React from "react";
import { ReactComponent as Duckduckgo } from "../img/Duckduckgo.svg";
import { MdSearch } from "react-icons/md";

const SearchForm = () => {
  return (
    <div className="container">
      <div className="row form-row">
        <form className="form" action="https://duckduckgo.com/">
          <input
            type="text"
            name="q"
            className="search"
            placeholder="Search on DuckDuckGo"
            aria-label="Search on DuckDuckGo"
            autoComplete="off"
          />
          <button type="submit" className="btn submit-btn">
            <MdSearch />
          </button>
        </form>
        <Duckduckgo className="duckduckgo-logo" />
      </div>
    </div>
  );
};

export default SearchForm;
