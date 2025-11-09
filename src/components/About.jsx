import React from "react";
import "./About.css";
import CardBrian from "./cards/Card_Brian.jsx";
import CardMaclaine from "./cards/Card_Maclaine.jsx";
import CardRebecca from "./cards/Card_Rebecca.jsx";
import CardSteve from "./cards/Card_Steve.jsx";
import CardNaomi from "./cards/Card_Naomi.jsx";
import CardReka from "./cards/Card_Reka.jsx";
import groupPhoto from "../images/groupPhoto.png";

function About() {
  return (
    <div className="about-page">
      <div className="about-body">
        <span className="poppins-regular">
          <h1>About Us</h1>
          <p>
            The Pono Pono Peace Initiative is a 501(c)(3) charitable
            organization registered in Hawaii. Our mission is to empower
            peacebuilding students by offering supplemental learning,
            internships, and career development opportunities tailored to the
            Asia-Pacific region. Our vision is to ensure that 80% of local
            peacebuilding students graduate with a clear path to graduate school
            or multiple job opportunities that value their unique training and
            skills.
          </p>
          <h2>Our values are:</h2>
          <ul>
            <li>
              <b>Student-Centric Approach:</b> We prioritize our students' needs
              and aspirations, ensuring that our programs and initiatives are
              tailored to their individual development and career goals.
            </li>
            <li>
              <b>Equity and Accessibility:</b> We are committed to creating an
              inclusive environment that removes barriers and provides equal
              opportunities for all peacebuilding students, regardless of their
              background or socioeconomic status.
            </li>
            <li>
              <b>Collaborative Partnerships:</b> We foster strong relationships
              with organizations, institutions, and industry leaders, both
              locally in Hawaii and across the Asia-Pacific and Oceania region,
              to expand the range of internships, training programs, and job
              opportunities available to our students.
            </li>
            <li>
              <b>Continuous Improvement:</b> We continuously evaluate and
              enhance our programs to ensure they remain relevant, effective,
              and aligned with the evolving needs of our students and the job
              market.
            </li>
            <li>
              <b>Ethical Integrity:</b> We uphold the highest standards of
              ethical conduct and professional integrity in all our dealings,
              serving as role models for our students and the community.
            </li>
          </ul>
          <br></br>
          <p>
            Our name comes from the Hawaiian word <b>'Pono'</b> which means
            balance and righteousness. In Hawaiian when you put two words beside
            each other, their meaning is deepened or emphasized. Thus 'Pono
            Pono' extends Pono to a deeper level and reminds us that to have{" "}
            <u>Pono Pono peace</u> it is not enough to avoid conflict or do
            right; we need to do more to create peace! It is not enough to
            remove the weeds; we must plant the flowers and food of peace.
          </p>
          <br></br>
          <p>
            <b>
              Pono Pono is a call to be a positive influence in the world
              wherever we are.
            </b>
          </p>
          <p>
            <b>
              This should be a group photo of the Pono Pono Peace Initiative
            </b>
          </p>
          <img
            src={groupPhoto}
            height={650}
            width={800}
            style={{ alignSelf: "center" }}
            alt="Group Photo of the Pono Pono Peace Initiative"
          ></img>
          <br></br>
          <p>
            Pono's work was initially catalyzed by the vision of Naomi Pedersen,
            a Brigham Young University-Hawaii (BYUH) Intercultural Peacebuilding
            program student. Now an alumnus, Naomi saw an opportunity to
            increase the impact of peacebuilding. We operate independently from
            any university but work with peacebuilding students and alumni to
            improve the skills of peacebuilding students and connect them with
            opportunities in the field. To this end, the Pono Pono Peace
            Initiative has undertaken a multifaceted approach to cultivating a
            thriving peacebuilding ecosystem:
          </p>
          <ul>
            <li>
              <b>Developing collaborative projects</b> with community partners,
              such as the Abrahamic Faith Conference hosted at BYU-Hawaii in the
              summer of 2023.
            </li>
            <li>
              <b>Supporting students</b> through internships, scholarships, and
              competitive opportunities to hone their peacebuilding skills and
              bring their ideas to life.
            </li>
            <li>
              <b>Promoting peacebuilding strategies and solutions</b> through
              podcasting, social media, and other outreach channels.
            </li>
            <li>
              <b>Organizing workshops, seminars, and training programs</b> for
              students, professionals, and the broader community to deepen
              understanding and application of peacebuilding principles and
              practices.
            </li>
            <li>
              <b>Hosting peacebuilding conferences and symposiums</b> that
              provide a platform for students and alumni to present their
              research, share insights, and engage with experts in the field.
            </li>
          </ul>
          <br></br>
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
            Asia-Pacific region, we would love to connect with you.
          </p>
          <p>
            Together, we can cultivate a more just, harmonious, and sustainable
            future.
          </p>
          <hr></hr>
          <h1>Meet Our Board</h1>
          <div className="board-members">
            <CardNaomi />
            <CardReka />
            <CardSteve />
            <CardMaclaine />
            <CardBrian />
            <CardRebecca />
          </div>
        </span>
      </div>
    </div>
  );
}

export default About;
