import React from "react";

const SingleLink = ({ singleLink }) => {
  let { id, link, name } = singleLink;
  const pattern = /^((http|https|ftp):\/\/)/;
  if (!pattern.test(link)) {
    link = "http://" + link;
  }

  return (
    <a href={link} className="single-link">
      <img
        src={"https://s2.googleusercontent.com/s2/favicons?domain_url=" + link}
        alt=""
        className="link-icon"
      />
      <div>{name}</div>
    </a>
  );
};

export default SingleLink;
