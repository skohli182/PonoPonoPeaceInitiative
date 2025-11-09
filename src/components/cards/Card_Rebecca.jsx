import React, { useState } from "react";
import profilePicRebecca from "../../images/RebeccaResized.png";
import Popup from "../Popup.jsx";

function CardRebecca() {
  const [buttonPopup, setButtonPopup] = useState(false);
  return (
    <div className="card_Rebecca">
      <span className="poppins-regular">
        <img src={profilePicRebecca} alt="Rebecca Burnham"></img>
        <h2>Rebecca Burnham</h2>
        <p>Board Member</p>
        <button onClick={() => setButtonPopup(true)}>View Details</button>
        <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
          <img src={profilePicRebecca} alt="Profile Picture"></img>
          <p>
            Rebecca Burnham's passion for peacebuilding was lit when, as an
            18-year-old studying the Arab-Israeli conflict in Jerusalem, she
            heard Biblical promises of gathering in a way that included the
            Arabs as well as the Jews. Since then, she has endeavoured to impact
            the world for good while overcoming her perceptions of others as
            enemies.
          </p>
          <p>
            She has a BA in Near Eastern Studies from BYU, served an 18-month
            Christian mission among the people of Brazil, and wrote for BC
            Report magazine, covering family, religious, and educational issues
            from a conservative perspective.
          </p>
          <p>
            She learned there that many of those whose ideologies she opposed
            shared her longing for a kinder and more just world.
          </p>
          <p>
            While raising her family, she led two pro-family lobbies through the
            gay marriage debate while avoiding contention and inflammatory
            action alerts.
          </p>
          <p>
            She works with developmentally disabled adults and is launching an
            online community devoted to bringing to the stage quality musicals
            that lift and unite.
          </p>
        </Popup>
      </span>
    </div>
  );
}

export default CardRebecca;
