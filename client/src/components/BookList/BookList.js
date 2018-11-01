import React from "react";

// BookList renders a bootstrap list item
export const BookList = props => (
  <ul className="list-group">{props.children}</ul>
);
