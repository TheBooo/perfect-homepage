import React from "react";
import SingleLink from "./SingleLink";
import { MdAdd } from "react-icons/md";

const Links = ({ links, onShowForm, onHandleDelete }) => {
  return (
    <div className="links-container">
      {links.map(link => {
        return (
          <SingleLink
            key={link.id}
            singleLink={link}
            onDelete={onHandleDelete}
          />
        );
      })}
      <button className="single-link add-link" onClick={onShowForm}>
        <div className="link-icon">
          <MdAdd />
        </div>
        <div>Add link</div>
      </button>
    </div>
  );
};

export default Links;
