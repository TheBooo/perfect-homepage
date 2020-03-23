import React from "react";

const SingleLink = ({ singleLink }) => {
  let { id, link, name } = singleLink;
  const pattern = /^((http|https|ftp):\/\/)/;
  if (!pattern.test(link)) {
    link = "http://" + link;
  }
  console.log(link);

  return (
    <a href={link} className="single-link">
      <img className="link-icon" src={link + "/favicon.ico"} alt="" />
      <div>{name}</div>
    </a>
  );
};

export default SingleLink;
