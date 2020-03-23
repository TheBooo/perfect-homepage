import React from "react";
import { MdDone, MdClose } from "react-icons/md";

const LinkForm = () => {
  return (
    <div className="container">
      <div className="row">
        <form className="link-form">
          <button className="btn btn-danger">
            <MdClose />
          </button>
          <input
            type="text"
            name="url"
            className="link-input"
            placeholder="   URL"
            autoComplete="off"
          />
          <input
            type="text"
            name="name"
            className="link-input "
            placeholder="   Name"
            autoComplete="off"
          />
          <button type="submit" className="btn">
            <MdDone />
          </button>
        </form>
      </div>
    </div>
  );
};

export default LinkForm;
