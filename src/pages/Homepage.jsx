import React from "react";
import HeroSection from "../components/layout/UI/herosection/HeroSection";
import heroSectionBg from "../assets/imgAssets/landscape-buildings.jpg";
import SectionHeading from "../components/layout/UI/section/SectionHeading";
import styles from "./Homepage.module.css";
import mobileAppImg from "../assets/imgAssets/mobile-app.jpg";
import eCommerceImg from "../assets/imgAssets/e-commerce.jpg";
import webImg from "../assets/imgAssets/web.jpg";
import SectionCard from "../components/layout/UI/section/cards/serviceCard/SectionCard";
import ProjectCard from "../components/layout/UI/section/cards/projectCard/ProjectCard";
import thingTestingLogo from "../assets/projects/thing-testing-logo.png";
import commercialEstateLogo from "../assets/projects/commercial-real-estate-logo.png";
import arogyaAiLogo from "../assets/projects/arogya-logo.png";
import artlistLogo from "../assets/projects/artlist-logo.png";
import rentATempLogo from "../assets/projects/rent-a-temp-logo.png";
import micImg from "../assets/stories/mic.jpg";
import ayurvedaImg from "../assets/stories/ayurveda.jpg";
import legalMeetingImg from "../assets/stories/legal-meeting.jpg";
import buildingImg from "../assets/stories/building.jpg";
import StoryCard from "../components/layout/UI/section/cards/storyCard/StoryCard";
import reactLogo from "../assets/expertise/React-icon.png";
import flutterLogo from "../assets/expertise/flutter.png";
import laravelLogo from "../assets/expertise/laravel.png";
import nextjsLogo from "../assets/expertise/nextjs.svg";
import nodejsLogo from "../assets/expertise/nodejs.png";
import wordpressLogo from "../assets/expertise/wordpress.png";
import ExpertiseCard from "../components/layout/UI/section/cards/expertiseCard/ExpertiseCard";
import ContactForm from "../components/page/ContactForm";
import Footer from "../components/page/Footer";

const servicesCards = [
  {
    id: 1,
    title: "Mobile App Development",
    img: `${mobileAppImg}`,
  },
  {
    id: 2,
    title: "E-commerce Development",
    img: `${eCommerceImg}`,
  },
  {
    id: 2,
    title: "E-commerce Development",
    img: `${eCommerceImg}`,
  },
  {
    id: 3,
    title: "Web Development",
    img: `${webImg}`,
  },
  {
    id: 4,
    title: "Custom Software Development",
    img: `${mobileAppImg}`,
  },
];
const projects = [
  {
    id: 1,
    title: "Thing Testing",
    img: thingTestingLogo,
  },
  {
    id: 2,
    title: "Commercial Estate",
    img: commercialEstateLogo,
  },
  {
    id: 3,
    title: "Arogya.ai",
    img: `${arogyaAiLogo}`,
  },
  {
    id: 4,
    title: "Artlist",
    img: artlistLogo,
  },
  {
    id: 5,
    title: "Rent A Temp",
    img: rentATempLogo,
  },
];

const stories = [
  {
    id: 1,
    sector: "Online Streaming",
    service: "Web Developement",
    title: "Radio Mirchi",
    img: micImg,
    story:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores perspiciatis consectetur ipsa laudantium ipsam recusandae dolor possimus earum facere voluptatum.",
  },
  {
    id: 2,
    sector: "Healthcare",
    service: "Web Development",
    title: "AushadhiKart",
    img: ayurvedaImg,
    story:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores perspiciatis consectetur ipsa laudantium ipsam recusandae dolor possimus earum facere voluptatum.",
  },
  {
    id: 3,
    sector: "Legal Services",
    service: "Web Development",
    title: "Insurance Samadhan",
    img: legalMeetingImg,
    story:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores perspiciatis consectetur ipsa laudantium ipsam recusandae dolor possimus earum facere voluptatum.",
  },
  {
    id: 4,
    sector: "Real Estate",
    service: "Web Development",
    title: "Commercial Real Estate",
    img: buildingImg,
    story:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores perspiciatis consectetur ipsa laudantium ipsam recusandae dolor possimus earum facere voluptatum.",
  },
  {
    id: 5,
    sector: "Legal",
    service: "Web Development",
    title: "Isreal Legal Services",
    img: `${legalMeetingImg}`,
    story:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores perspiciatis consectetur ipsa laudantium ipsam recusandae dolor possimus earum facere voluptatum.",
  },
];

const expertises = [
  {
    id: 1,
    title: "React",
    description:
      "I've never seen anything like this before. It's amazing. I love it.",
    img: reactLogo,
  },
  {
    id: 2,
    title: "Flutter",
    description:
      "I've never seen anything like this before. It's amazing. I love it.",
    img: flutterLogo,
  },
  {
    id: 3,
    title: "Laravel",
    description:
      "I've never seen anything like this before. It's amazing. I love it.",
    img: laravelLogo,
  },
  {
    id: 4,
    title: "Next.js",
    description:
      "I've never seen anything like this before. It's amazing. I love it.",
    img: nextjsLogo,
  },
  {
    id: 5,
    title: "Node.js",
    description:
      "I've never seen anything like this before. It's amazing. I love it.",
    img: nodejsLogo,
  },
  {
    id: 6,
    title: "WordPress",
    description:
      "I've never seen anything like this before. It's amazing. I love it.",
    img: wordpressLogo,
  },
];

function Homepage() {
  return (
    <>
      <div className={`${styles.headerContainer}`}>
        <HeroSection
          img={heroSectionBg}
          title={"Build smarter, grow faster with"}
          subtitle={"Custom software built for you."}
        />
      </div>
      <div className={`${styles.mainContainer}`}>
        {/* Services Section */}
        <div className={`${styles.servicesContainer} pb-5 `}>
          <SectionHeading
            title={"Services"}
            subtitle={"Transforming businesses through technology."}
          />
          <div className="d-flex align-items-center gap-4 overflow-scroll mx-5">
            {servicesCards.map((service) => {
              return (
                <div key={service.id}>
                  <SectionCard title={service.title} img={service.img} />;
                </div>
              );
            })}
          </div>
        </div>
        {/* Services Section End */}

        {/* Projects Section */}
        <div className={`${styles.projectsContainer} pb-5`}>
          <SectionHeading
            mode={"light"}
            title={"Projects"}
            subtitle={"Some of our recent projects."}
          />
          <div className="d-flex align-items-center gap-4 overflow-scroll mx-5">
            {projects.map((project) => {
              return (
                <div key={project.id} className="d-flex flex-column gap-5">
                  <ProjectCard title={project.title} img={project.img} />
                  <ProjectCard title={project.title} img={project.img} />
                </div>
              );
            })}
          </div>
        </div>
        {/* Projects Section End */}

        {/* Customer Stories Section */}
        <div>
          <SectionHeading
            title={"Customer Stories"}
            subtitle={"We transform our customers beliefs into reality."}
          />
          <div className="d-flex px-5 gap-4 pb-5">
            {stories.map((story) => {
              return (
                <div key={story.id} className="d-flex gap-5">
                  <StoryCard
                    img={story.img}
                    sector={story.sector}
                    service={story.service}
                    title={story.title}
                    story={story.story}
                  />
                </div>
              );
            })}
          </div>
        </div>
        {/* Customer Stories Section End */}

        {/* Experise Section */}
        <div className={`${styles.expertiseCardContainer} pb-5`}>
          <SectionHeading
            mode={"light"}
            title={"Expertise"}
            subtitle={"We're experts in cutting-edge technology."}
          />
          <div className="d-flex align-items-center justify-content-between gap-4 flex-wrap mx-5">
            {expertises.map((expertise) => {
              return (
                <div key={expertise.id}>
                  <ExpertiseCard
                    title={expertise.title}
                    description={expertise.description}
                    img={expertise.img}
                  />
                </div>
              );
            })}
          </div>
        </div>
        {/* Expertise Section End */}

        {/* Contact Form */}
        <ContactForm />
        {/* Contact Form End */}

        {/* Footer */}
        <div>
          <Footer />
        </div>
        {/* Footer End */}
      </div>
    </>
  );
}

export default Homepage;
