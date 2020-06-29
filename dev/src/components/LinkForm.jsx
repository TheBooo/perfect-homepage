import React from "react";
import { MdDone, MdClose } from "react-icons/md";

const LinkForm = ({
  onHandleSubmit,
  onHandleUrl,
  onHandleName,
  onHandleClose,
  url,
  name
}) => {
  return (
    <div className="container">
      <div className="row">
        <form className="link-form" onSubmit={onHandleSubmit}>
          <div className="row row-end">
            <button
              type="button"
              className="btn btn-danger"
              onClick={onHandleClose}
            >
              <MdClose />
            </button>
          </div>

          <input
            type="text"
            name="url"
            className="link-input"
            placeholder="   URL"
            autoComplete="off"
            value={url}
            onChange={onHandleUrl}
          />
          <input
            type="text"
            name="name"
            className="link-input "
            placeholder="   Name"
            autoComplete="off"
            value={name}
            onChange={onHandleName}
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
