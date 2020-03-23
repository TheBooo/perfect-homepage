import React from "react";
import { MdDone, MdClose } from "react-icons/md";

const LinkForm = () => {
  return (
    <div className="container">
      <div className="row">
        <form className="link-form">
          <div className="row row-end">
            <button className="btn btn-danger">
              <MdClose />
            </button>
          </div>

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
          <div className="row row-end">
            <button type="submit" className="btn">
              <MdDone />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LinkForm;
