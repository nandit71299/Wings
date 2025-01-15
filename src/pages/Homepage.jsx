import React from "react";

import styles from "./Homepage.module.css";

import HeroSection from "../components/layout/UI/herosection/HeroSection";
import heroSectionBg from "../assets/imgAssets/landscape-buildings.jpg";
import SectionHeading from "../components/layout/UI/section/SectionHeading";
import { servicesCards, expertises, projects, stories } from "../data";

import ServiceCard from "../components/layout/UI/section/cards/serviceCard/SeviceCard";
import ProjectCard from "../components/layout/UI/section/cards/projectCard/ProjectCard";
import StoryCard from "../components/layout/UI/section/cards/storyCard/StoryCard";
import ExpertiseCard from "../components/layout/UI/section/cards/expertiseCard/ExpertiseCard";
import ContactForm from "../components/page/ContactForm";
import Footer from "../components/page/Footer";

function Homepage() {
  return (
    <>
      <div className={`${styles.heroSectionContainer}`}>
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
                  <ServiceCard
                    id={service.id}
                    title={service.title}
                    img={service.img}
                  />
                  ;
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
          <div className="d-flex px-5 gap-4 pb-5 overflow-scroll">
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
