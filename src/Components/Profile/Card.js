import React from "react";

function Card({ Fullname, Address, About }) {
  return (
    <div className="upper-container">
      <p>
      Graduated from the national school of electronics and telecommunications of Sfax, <br />
I have 2 years of experience in an association (Association Nour for women) and I hold the position 
of a designer and 1 year in a company of export ACCORDISS (Accord International Sources)
occupying the position of a commercial assistant and designer.    <br />{" "}
        {" "}
        Flexible, I
am able to work both in a team and independently.   <br />
      </p>
      <button>Visit Profile</button>
    </div>
  );
}

export default Card;