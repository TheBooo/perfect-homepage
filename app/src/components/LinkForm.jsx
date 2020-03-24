import React from "react";
import { MdDone, MdClose } from "react-icons/md";

const LinkForm = ({
  onHandleSubmit,
  onHandleUrl,
  onHandleName,
  onHandleClose
}) => {
  return (
    <div className="container">
      <div className="row">
        <form className="link-form">
          <div className="row row-end">
            <button className="btn btn-danger" onClick={onHandleClose}>
              <MdClose />
            </button>
          </div>

          <input
            type="url"
            name="url"
            className="link-input"
            placeholder="   URL"
            autoComplete="off"
            onChange={onHandleUrl}
          />
          <input
            type="text"
            name="name"
            className="link-input "
            placeholder="   Name"
            autoComplete="off"
            onChange={onHandleName}
          />
          <div className="row row-end">
            <button type="submit" className="btn" onClick={onHandleSubmit}>
              <MdDone />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LinkForm;
