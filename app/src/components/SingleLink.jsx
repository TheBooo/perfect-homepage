import React from "react";
import { MdEdit, MdDelete } from "react-icons/md";

const SingleLink = ({ singleLink, onDelete }) => {
  let { id, link, name } = singleLink;
  const pattern = /^((http|https|ftp):\/\/)/;
  if (!pattern.test(link)) {
    link = "http://" + link;
  }

  return (
    <div>
      <a href={link} className="single-link">
        <img
          src={
            "https://s2.googleusercontent.com/s2/favicons?domain_url=" + link
          }
          alt=""
          className="link-icon"
        />
        <div>{name}</div>
      </a>
      <div className="link-edit">
        <MdEdit />
        <MdDelete
          onClick={() => {
            onDelete(id);
          }}
        />
      </div>
    </div>
  );
};

export default SingleLink;
