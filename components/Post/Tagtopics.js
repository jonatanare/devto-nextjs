import React from "react";

export const TagTopics = ({ tag }) => {
  return (
    <a className={`btn post__btn--${tag}`}>
      <span> {tag} </span>
    </a>
  );
};
