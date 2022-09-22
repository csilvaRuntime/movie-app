import React from "react";
import "../../App.css";
import { useNavigate } from "react-router-dom";
import Avatar from "../../img/Avatar.png";

const Person = ({ person }) => {
  const navigate = useNavigate();

  return (
    <div key={person.id} onClick={() => navigate(`/person/${person.id}`)}>
      <img
        className="Person"
        src={
          person.profile_path
            ? `https://image.tmdb.org/t/p/w500/${person.profile_path}`
            : Avatar
        }
        alt="tvShow poster"
      />
      <p>{person.name}</p>
    </div>
  );
};
export default Person;
