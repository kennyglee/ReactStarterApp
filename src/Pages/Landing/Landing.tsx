import React from "react";
import "./Landing.css";
import { PublicNavBar } from "@Components";

export const Landing = () => {
  return (
    <div>
      <PublicNavBar />
      <p>
        Landing Page:{" "}
        <em>
          I am only available (in this state) when user is not logged in. Otherwise I can
          observe the Session store to change state
        </em>
      </p>
      <br />
      <a href={"/login"}>login</a>
      <br />
      <a href={"/signup"}>signup</a>
    </div>
  );
};

export const XYZ = () => <div>Hello</div>;
