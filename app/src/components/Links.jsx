import React from "react";
import SingleLink from "./SingleLink";
import { MdAdd } from "react-icons/md";

const Links = ({ links }) => {
  return (
    <div className="links-container">
      {links.map(link => {
        return <SingleLink key={link.id} singleLink={link} />;
      })}
      <div className="single-link">
        <div className="link-icon">
          <MdAdd />
        </div>
        <div>Add link</div>
      </div>
    </div>
  );
};

export default Links;
