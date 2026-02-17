import React, { useState } from "react";
import "./ProjectPage.css";
import ComputersFlyer from "../images/Computers For College Flyer.webp";
import CompetitionFlyer from "../images/Peace Building Competition.webp";
import LineageFlyer from "../images/Shared Lineage Image.webp";
import NextGen from "../images/Empowering Next-Gen Image.webp";
import IntroIslam from "../images/Intro to Islam.webp";


const theme = {
  card: "#DFCEB9", // orange tile
  maroon: "#193D40", // featured project tile color
  border: "#F8F8F3",
};

const PROJECT_CARDS = [
  {
  id: "computers",
  title: "Computers for College",
  shortDesc: "Helping students access the technology they need for school.",
  longDesc: `
  Computers for College was created to remove a critical barrier facing students pursuing higher education through BYU–Hawaii and Pathways Worldwide: access to reliable technology. Many students from the Asia-Pacific and Oceania regions lack the financial resources, internet access, and mentorship commonly available to students in North America.
  Without a personal computer, these students struggle to complete applications, coursework, and required online programs—often while working full-time to support themselves. Computers for College provides refurbished laptops, application support, and ongoing mentorship to help students overcome these challenges and continue their education.
  Your support helps students gain the tools they need to succeed. Donations directly fund computers and educational support for students who would otherwise be unable to continue their studies. Even a small contribution can make a meaningful difference.
  `,
  featuredImage: ComputersFlyer,
  imageAlt: "Computers for College flyer",
  status: "Ongoing",
  },
  {
  id: "student-competition-2025",
  title: "Student Peacebuilding Competition (Fall 2025)",
  shortDesc: "A university student competition for peacebuilding ideas and community impact.",
  longDesc: `
      The Student Peacebuilding Competition is an annual initiative designed to support emerging student leaders who are applying peacebuilding theory to real-world challenges.
      Through this competition, university students were invited to propose innovative projects, programs, or organizations that address community needs using peacebuilding principles. Submissions emphasized practical impact, strong theoretical grounding, and long-term sustainability, with priority given to projects focused on the Asia-Pacific region and international contexts.
      Selected participants developed detailed proposals outlining their theory of change, financial sustainability, risk analysis, and implementation plans. Finalists presented their ideas through written submissions and recorded presentations reviewed by a panel of judges.
      Winning projects received seed funding, in-kind professional support, and the opportunity for incubation with the PonoPono Peace Initiative. The competition reflects our commitment to nurturing thoughtful, ethical, and impact-driven peacebuilders at the early stages of their work.
      `,
   featuredImage: CompetitionFlyer,
   imageAlt: "Student Peacebuilding Competition flyer",
   status: "Annual Initiative",
},

  {
    id: "Shared Lineage",
    title: "Tracing the Shared Lineage",
    shortDesc: "An Interfaith Dialogue at BYU-Hawaii",
    longDesc: `
       Tracing Shared Lineage is an interfaith initiative that explores the historical and spiritual connections among the Abrahamic traditions of Islam, Judaism, and Christianity.
       In June 2023, PonoPono Peace Initiative founder Naomi Pedersen partnered with the David O. McKay Center for Intercultural Understanding to host a day-long interfaith conference centered on dialogue, learning, and mutual respect. The event brought together scholars, faith leaders, and community members to examine the shared origins of these traditions and the ways in which their common lineage can serve as a foundation for understanding rather than division.
      Grounded in the recognition that the Abrahamic faiths trace their roots to the patriarch Abraham, the conference created space for meaningful conversation across religious difference. Speakers offered diverse perspectives on theology, history, and lived experience, highlighting both shared values and the importance of respectful engagement in pluralistic communities.
      `,
   featuredImage: LineageFlyer,
   imageAlt: "Shared Lineage Image",
  status: "Completed (2023)",
  },
  {
    id: "next-gen",
    title: "Empowering Next Generation",
    shortDesc: "Reflections on our Collaboration with the David O. McKay Center",
    longDesc: `
      Empowering the Next Generation of Peacebuilders is an initiative focused on engaging students in dialogue about peace, intercultural understanding, and the role of community-based knowledge in addressing global challenges.
      On May 15, 2024, PonoPono Peace Initiative participated in discussions hosted at the David O. McKay Center for Intercultural Understanding, bringing together students from diverse academic and cultural backgrounds. The conversations centered on the role of non-governmental organizations (NGOs) in peacebuilding and the ways emerging leaders can contribute to sustainable, community-driven change.
      A key insight from these discussions was the importance of local and Indigenous knowledge in peacebuilding efforts. Through engagement with the Hawaiian studies program, participants learned about the cultural symbolism of the waʻa Iosepa—a canoe representing interconnectedness, collective journey, and shared responsibility within the Hawaiian community. This exchange reinforced the value of integrating traditional wisdom and diverse perspectives into peacebuilding approaches, moving beyond solely top-down or Western-centric models.
      `,
      featuredImage: NextGen,
      imageAlt: "Empowering Next-Gen",
      status: "Completed (2024)",
  },
  {
    id: "intro-islam",
    title: "Introduction to Islam",
    shortDesc: "Intro Course to Islam",
    longDesc: `
      Introduction to Islam is an eight-week educational course designed to foster mutual understanding, respectful dialogue, and interfaith connection.  
    The course was taught by Imam Hashim Usman of the Ahmadiyya Muslim Community and offered participants an accessible introduction to Islamic beliefs, history, and contemporary practice. Through weekly online sessions, participants explored core theological concepts, sacred texts, and historical developments within Islam, as well as the religion’s relationship to other Abrahamic traditions.
    Topics included the basic tenets, rites, and rituals of Islam; the Qur’an, Sunnah, and Hadith; the life of Prophet Muhammad; major Islamic sects and their origins; the concept of jihad; and perspectives on Jesus, Mary, and the People of the Book. The course also examined the role of Islam in the modern world.
    Held from September to November 2024, this course welcomed participants from diverse backgrounds and faith traditions. Its primary goal was educational—creating space for learning, curiosity, and meaningful connection across religious difference.
    `,
      featuredImage: IntroIslam,
      imageAlt: "Intro to Islam Image",
      status: "Completed (Fall 2024)",
  },
];

/** Collapsed card used in the main grid */
function ProjectTile({ project, onExpand }) {
  const { title } = project;
  <div className="text-2xl font-semibold">{proj.title}</div>

{proj.status && (
  <div className="status-pill">
    {proj.status}
  </div>
)}

  return (
    <article
      className="relative rounded-3xl p-6 text-white shadow-sm card-tile"
      style={{ backgroundColor: theme.card }}
    >
      <button
        type="button"
        onClick={onExpand}
        className="absolute right-3 top-3 w-7 h-7 grid place-items-center rounded-full bg-white/40 text-white font-bold cursor-pointer"
        aria-label={`View details for ${title}`}
      >
        +
      </button>
      {project.featuredImage ? (
  <img
    src={project.featuredImage}
    alt=""
    className="w-12 h-12 mb-6 rounded-full object-cover bg-white p-1 shadow-sm"
  />
) : (
  <div className="w-12 h-12 mb-6 rounded-full bg-white/30" />
)}

<div className="text-2xl font-semibold">
  {proj.title}
</div>

{proj.status && (
  <div className="status-pill">
    {proj.status}
  </div>
)}


      <div className="text-2xl font-semibold">{title}</div>
    </article>
  );
}

/** Expanded 3-panel strip view */
function ProjectExpandedRow({ project, onCollapse }) {
  const { title, longDesc, shortDesc } = project;

  return (
    <article className="card-row-expanded relative">
      <button
        type="button"
        className="card-close"
        onClick={onCollapse}
        aria-label={`Collapse details for ${title}`}
      >
        -
      </button>

      <div
        className="card-panel-left text-amber-100"
        style={{ backgroundColor: theme.maroon }}
      >
        <div className="w-14 h-14 mb-6 rounded-full bg-white/25" />
        <div className="text-2xl font-semibold leading-snug">{title}</div>
      </div>

      <div className="card-panel-middle text-sm leading-relaxed text-zinc-900">
        <p>{longDesc || shortDesc}</p>
      </div>

      <div className="card-panel-right bg-white">
        <div className="card-panel-right bg-white">
  {project.featuredImage ? (
    <img
      src={project.featuredImage}
      alt={project.imageAlt || `${title} flyer`}
      className="project-flyer"
    />
  ) : (
    <div className="rounded-3xl border border-[#e5e5e5] w-full h-40 flex flex-col items-center justify-center text-center px-4">
      <div className="font-semibold text-base mb-1">{title}</div>
      <div className="text-xs text-zinc-500">Flyer / image placeholder</div>
    </div>
  )}
</div>

      </div>
    </article>
  );
}

export default function ProjectsPage() {
  const [expandedProject, setExpandedProject] = useState(null);

  if (expandedProject) {
    return (
      <main className="min-h-screen bg-[#FFFCF6] text-zinc-900">
        <div className="max-w-6xl mx-auto px-6 py-10 space-y-12">
          <section>
  <ProjectExpandedRow
    project={expandedProject}
    onCollapse={() => setExpandedProject(null)}
  />
</section>

        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#FFFCF6] text-zinc-900">
      <div className="max-w-6xl mx-auto px-6 py-10 space-y-12">
        <section className="grid md:grid-cols-4 gap-6">
          {PROJECT_CARDS.map((proj, index) => {
            const isHero = index === 0;

            return (
              <article
                key={proj.id}
                className="relative rounded-3xl p-6 text-white shadow-sm card-tile cursor-pointer"
                style={{ backgroundColor: isHero ? theme.maroon : theme.card }}
                onClick={() => setExpandedProject(proj)}
              >
                <button
                  type="button"
                  className="absolute right-3 top-3 w-7 h-7 grid place-items-center rounded-full bg-white/40 text-white font-bold cursor-pointer"
                >
                  +
                </button>

                {proj.featuredImage ? (
  <img
    src={proj.featuredImage}
    alt=""
    className="w-12 h-12 mb-6 rounded-full object-cover bg-white p-1 shadow-sm"
  />
) : (
  <div className="w-12 h-12 mb-6 rounded-full bg-white/30" />
)}


                <div className="text-2xl font-semibold">
                  {proj.title}
                </div>
                {proj.status && (
  <div className="status-pill">
    {proj.status}
  </div>
)}


                {isHero && (
                  <div className="mt-8 grid grid-cols-6 gap-3 opacity-80">
                    {Array.from({ length: 12 }).map((_, i) => (
                      <div
                        key={i}
                        className="w-2 h-2 rounded-full bg-orange-300/70"
                      />
                    ))}
                  </div>
                )}
              </article>
            );
          })}
        </section>
      </div>
    </main>
  );
}
