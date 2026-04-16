import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "motion/react"; 
import "./About.css";
import groupPhoto from "../images/groupPhoto.png";

// Import Supabase client and Popup component
import { supabase } from "../supabaseClient";
import Popup from "./Popup.jsx";

// Short Reveal Animation, used for paragraphs
const revealVariants_short = {
  hidden: { opacity: 0, y: 50 }, // Start invisible and 50px lower
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.8, ease: "easeOut" } 
  },
};

// Longer Reveal Animation, used for headers 
const revealVariants_long = {
  hidden: { opacity: 0, y: 50 }, // Start invisible and 50px lower
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 1.5, ease: "easeOut" } 
  },
};

// Reveal Animation used for Bullet Points
const reveal_BulletPoints = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.4,  // Sets the stagger time for bullet points
    },
  },
};

// Reveal Animation for singular BulletPoints
const pointVariants = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0 },
};

/* Defines the Board Member "card" for each member */
function BoardMemberCard({ member }) {
  //Define the popup default state to be false
  const [buttonPopup, setButtonPopup] = useState(false);
  const bioParagraphs = member.member_description ? member.member_description.split("\n\n") : [];

  //Stucture of how the card is ordered
  //The parameters are based on the names of the columns used in Supabaes
  return (
    <div className="card-boardmember">
      <div className="poppins-regular flex flex-col items-center text-center">
        <img 
          src={member.member_image} 
          alt={member.name}
        />
        <h2>{member.name}</h2>
        <p>{member.position}</p>
        <button 
          onClick={() => setButtonPopup(true)}
        >
          View Details
        </button>
        <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
          <img 
            src={member.member_image} 
            alt={member.name} 
          />
          {/* Keys are used for changes when the data is loaded */}
          {bioParagraphs.map((paragraph, index) => (
            <p key={index} className="mb-3 text-left">
              {paragraph}
            </p>
          ))}
        </Popup>
      </div>
    </div>
  );
}


// 
function About() {
  const [boardMembers, setBoardMembers] = useState([]);

  const { scrollYProgress: AboutPageScroll } = useScroll();
  const ref = useRef(null);
  
  // Function used for how the About Page is revealed via scrolling progress
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"]
  });

  // This make the about image appear thin, but then make it appear large when it's scrolled into
  const clipPath = useTransform(
    scrollYProgress,
    [0, 1],
    ["inset(0% 50% 0% 50%)", "inset(0% 0% 0% 0%)"]
  );

  // Get the board members from Supabase
  useEffect(() => {
    async function fetchBoardMembers() {
      const { data, error } = await supabase
        .from("board_members")
        .select("*")
        .order("id", { ascending: true });

      // Return an error if Supabase can't be accessed for some reason
      if (error) {
        console.error("Error fetching board members:", error);
      } else {
        // Otherwise, load the card data
        setBoardMembers(data);
      }
    }
    fetchBoardMembers();
  }, []);

  return (
    <div className="about-page">
      {/* Code relating to the scroll bar */}
      <motion.div
        id="scroll-indicator"
        style={{
          scaleX: AboutPageScroll,
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          height: 10, // How large the scrollbar is
          originX: 0,
          backgroundColor: "#193d40",
          zIndex: 1100, // Needs to always be a greater value than the index so that it is "above" the header
        }}
      />
      {/* Text relating to the body paragraphs, including the image */}
      <div className="about-body">
        <div className="poppins-regular">
          <motion.h1 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={revealVariants_short}
          >
            About Us
          </motion.h1>
          <motion.p 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={revealVariants_long}
          >
            The Pono Pono Peace Initiative is a 501(c)(3) charitable
            organization registered in Hawaii. Our mission is to empower
            peacebuilding students by offering supplemental learning,
            internships, and career development opportunities tailored to the
            Asia-Pacific region. Our vision is to ensure that 80% of local
            peacebuilding students graduate with a clear path to graduate school
            or multiple job opportunities that value their unique training and skills.
          </motion.p>
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={revealVariants_long}
          >
            Our values are:
          </motion.h2>
          {/* Bullet Points */}
          <motion.ul
            variants={reveal_BulletPoints}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.li variants={pointVariants}>
              <b>Student-Centric Approach:</b> We prioritize our students' needs
              and aspirations, ensuring that our programs and initiatives are
              tailored to their individual development and career goals.
            </motion.li>
            <motion.li variants={pointVariants}>
              <b>Equity and Accessibility:</b> We are committed to creating an
              inclusive environment that removes barriers and provides equal
              opportunities for all peacebuilding students, regardless of their
              background or socioeconomic status.
            </motion.li>
            <motion.li variants={pointVariants}>
              <b>Collaborative Partnerships:</b> We foster strong relationships
              with organizations, institutions, and industry leaders, both
              locally in Hawaii and across the Asia-Pacific and Oceania region,
              to expand the range of internships, training programs, and job
              opportunities available to our students.
            </motion.li>
            <motion.li variants={pointVariants}>
              <b>Continuous Improvement:</b> We continuously evaluate and
              enhance our programs to ensure they remain relevant, effective,
              and aligned with the evolving needs of our students and the job market.
            </motion.li>
            <motion.li variants={pointVariants}>
              <b>Ethical Integrity:</b> We uphold the highest standards of
              ethical conduct and professional integrity in all our dealings,
              serving as role models for our students and the community.
            </motion.li>
          </motion.ul>
          <br />
          <motion.p 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={revealVariants_long}
          >
            Our name comes from the Hawaiian word <b>'Pono'</b>, which means
            balance and righteousness. In Hawaiian, when you put two words beside
            each other, their meaning is deepened or emphasized. Thus, 'Pono
            Pono' extends Pono to a deeper level and reminds us that to have{" "}
            <u>Pono Pono peace</u>, it is not enough to avoid conflict or do right; we need to do
            more to create peace! It is not enough to remove the weeds;
            we must plant the flowers and food of peace.
          </motion.p>
          <br />
          <p>
            <b>
              Pono Pono is a call to be a positive influence in the world
              wherever we are.
            </b>
          </p>
          {/* Animated Image reveal when scrolling to it */}
          <motion.div ref={ref} style={{ clipPath, margin: "2rem auto", display: "block", width: "fit-content" }}>
            <img
              src={groupPhoto}
              height={650}
              width={800}
              style={{ alignSelf: "center" }}
              alt="Group Photo of the Pono Pono Peace Initiative" 
            />
          </motion.div>         
          <br />         
          <p>
            Pono's work was initially catalyzed by the vision of Naomi Pedersen,
            a Brigham Young University-Hawaii (BYUH) Intercultural Peacebuilding
            program student. Now an alumnus, Naomi saw an opportunity to increase
            the impact of peacebuilding. We operate independently from any university
            but work with peacebuilding students and alumni to improve their skills
            and connect them with opportunities in the field. To this end,
            the Pono Pono Peace Initiative has undertaken a multifaceted approach
            to cultivating a thriving peacebuilding ecosystem:
          </p>
          {/* Bullet Points */}
          <motion.ul
            variants={reveal_BulletPoints}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.li variants={pointVariants}>
              <b>Developing collaborative projects</b> with community partners,
              such as the Abrahamic Faith Conference hosted at BYU-Hawaii in the
              summer of 2023.
            </motion.li>
            <motion.li variants={pointVariants}>
              <b>Supporting students</b> through internships, scholarships, and
              competitive opportunities to hone their peacebuilding skills and
              bring their ideas to life.
            </motion.li>
            <motion.li variants={pointVariants}>
              <b>Promoting peacebuilding strategies and solutions</b> through
              podcasting, social media, and other outreach channels.
            </motion.li>
            <motion.li variants={pointVariants}>
              <b>Organizing workshops, seminars, and training programs</b> for
              students, professionals, and the broader community to deepen
              understanding and application of peacebuilding principles and
              practices.
            </motion.li>
            <motion.li variants={pointVariants}>
              <b>Hosting peacebuilding conferences and symposiums</b> that
              provide a platform for students and alumni to present their
              research, share insights, and engage with experts in the field.
            </motion.li>
          </motion.ul>
          <br />
          <p>
            Through these concerted efforts, the Pono Pono Peace Initiative
            strives to create a supportive ecosystem that nurtures student
            growth and catalyzes impactful peacebuilding initiatives, both
            locally and globally.
          </p>
          <p>
            We recognize that Peacebuilding comes in many different shapes and
            sizes.
          </p>
          <p>
            If you would like to get involved with the Pono Pono Peace
            Initiative and contribute to the flourishing of peacebuilding in the
            Asia-Pacific region, we would love to{" "}
            {/* Link to the contact page */}
            <Link 
              to="/contact" 
              onClick={() => window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })}
            >
              connect with you.
            </Link>
          </p>
          <p>
            Together, we can cultivate a more just, harmonious, and sustainable
            future.
          </p>
          <hr />
          <motion.h1 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={revealVariants_short}
          >
            Meet Our Board
          </motion.h1>
          <div className="board-members">
            {/* If there is data in supabase, create a card for each member */}
            {/* Keys are again used to check reloading new data */}
            {boardMembers.length > 0 ? (boardMembers.map((member) => (<BoardMemberCard key={member.id} member={member} />))) : (
              <p>
                {/* Sample text that displays if the dataset isn't loaded yet */}
                If this text appears, it means that the database containing the board members information is loading. If you have waiting for more than 20 seconds, the database may be down.
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
