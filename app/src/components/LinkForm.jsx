import React from "react";

const LinkForm = () => {
  return (
    <div className="container">
      <form className="form">
        <button className="btn">Cancel</button>
        <input
          type="text"
          name="link"
          className="search"
          placeholder="link goes here"
        />
        <input
          type="text"
          name="name"
          className="search "
          placeholder="name goes here"
        />
        <button type="submit" className="btn">
          Add
        </button>
      </form>
    </div>
  );
};

export default LinkForm;
