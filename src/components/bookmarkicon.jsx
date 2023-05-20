import React from "react";
import { BsBookmark } from "react-icons/bs";
import { NavLink } from "react-router-dom";

function Bookmarkicon() {
  return (
    <NavLink
      style=
      {{
        width: "20px",
        height: "20px",
        backgroundColor: "#504d4daf",
        borderRadius: "50%",
        padding: ".4rem",
        display: "grid",
        placeItems: "center",
        position: "absolute",
        right: ".5rem",
        top: ".5rem",
      }}
      >
      <BsBookmark
        style={{
          position: "absolute",

          top: ".5rem",
          color: "#ffffff",
        }}
      />
    </NavLink>
  );
}

export default Bookmarkicon;
