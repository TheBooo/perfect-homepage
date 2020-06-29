import React from "react";
import { MdEdit, MdDelete } from "react-icons/md";

const SingleLink = ({ singleLink, onDelete, onEdit }) => {
  let { id, url, name } = singleLink;
  const pattern = /^((http|https|ftp):\/\/)/;
  if (!pattern.test(url)) {
    url = "http://" + url;
  }

  return (
    <div>
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="single-link"
      >
        <img
          src={"https://s2.googleusercontent.com/s2/favicons?domain_url=" + url}
          alt=""
          className="link-icon"
        />
        <div>{name}</div>
      </a>
      <div className="link-edit">
        <MdEdit
          className="icon"
          onClick={() => {
            onEdit(id);
          }}
        />
        <MdDelete
          className="icon"
          onClick={() => {
            onDelete(id);
          }}
        />
      </div>
    </div>
  );
};

export default SingleLink;
