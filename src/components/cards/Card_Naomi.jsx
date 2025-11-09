import React, { useState } from "react";
import profilePicNaomi from "../../images/NaomiResized.png";
import Popup from "../Popup.jsx";

function CardNaomi() {
  const [buttonPopup, setButtonPopup] = useState(false);
  return (
    <div className="card_Naomi">
      <span className="poppins-regular">
        <img src={profilePicNaomi} alt="Naomi Pedersen"></img>
        <h2>Naomi Pedersen</h2>
        <p>President</p>
        <button onClick={() => setButtonPopup(true)}>View Details</button>
        <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
          <img src={profilePicNaomi} alt="Profile Picture"></img>
          <p>
            Naomi Pedersen's passion for peace, helping communities thrive, and
            positive change moved her to co-found the Pono Pono Peace Initiative
            in 2023. A graduate of Brigham Young University-Hawaii's (BYUH)
            Intercultural Peacebuilding program, Naomi has spent the last twenty
            years tirelessly working to foster understanding, challenge
            injustice, and empower communities.
          </p>
          <p>
            Born in Canada, Naomi has woven her commitment to peacebuilding into
            every aspect of her life. As a mother of 11 children, she has made
            it a priority to instill the values of compassion, respect, and
            conflict resolution within her own family. This dedication has
            extended beyond the home, as Naomi has taught in-person and online
            peacebuilding classes, reaching countless individuals. In addition
            to teaching, Naomi has created platforms for diverse religious and
            spiritual communities to engage in meaningful conversations,
            challenge biases, and discover shared values through hosting
            workshops, camps, retreats, and conferences.
          </p>
          <p>
            Naomi's 20-year experience working closely with First Nations
            communities in Canada has given her a deep understanding of
            colonialism's enduring impacts and the critical importance of
            decolonization efforts. She has witnessed firsthand the ongoing
            struggles for Indigenous sovereignty, cultural revitalization, and
            the dismantling of oppressive colonial structures. This context has
            informed and enriched Naomi's holistic approach to peacebuilding and
            her commitment to centering marginalized voices.
          </p>
          <p>
            Navigating diverse perspectives and beliefs has been a key challenge
            in Naomi's peacebuilding work. By facilitating open and respectful
            conversations, she has built bridges across divides and guided
            participants to discover common ground. Addressing systemic
            injustice has also been a priority, as Naomi has tirelessly
            advocated for gender equality.
          </p>
          <p>
            Recognizing the transformative power of interfaith dialogue, Naomi
            has made it a centerpiece of her peacebuilding efforts.
          </p>
          <p>
            Alongside her peacebuilding initiatives, Naomi has demonstrated a
            deep understanding of the interconnectedness between economic
            security and social harmony. She has owned several successful
            businesses. Her passion for event planning and positive psychology
            has further enriched her ability to create transformative
            experiences that inspire hope and empower positive change.
          </p>
        </Popup>
      </span>
    </div>
  );
}

export default CardNaomi;
