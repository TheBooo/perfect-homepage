import React from "react";
import SingleLink from "./SingleLink";
import { MdAdd } from "react-icons/md";

const Links = ({ links, onShowForm }) => {
  return (
    <div className="links-container">
      {links.map(link => {
        return <SingleLink key={link.id} singleLink={link} />;
      })}
      <button className="single-link" onClick={onShowForm}>
        <div className="link-icon">
          <MdAdd />
        </div>
        <div>Add link</div>
      </button>
    </div>
  );
};

export default Links;
