import React from "react";

import styles from "./Story.module.css";
import HeroSection from "../components/layout/UI/herosection/HeroSection";
import { stories } from "../data";
import { useParams } from "react-router-dom";
import heroSectionBgImg from "../assets/imgAssets/meeting.jpg";
import CollapsibleCards from "../components/layout/UI/section/cards/collapsibleCards/collapsibleCards";
import StoryCard from "../components/layout/UI/section/cards/storyCard/StoryCard";
import SectionHeading from "../components/layout/UI/section/SectionHeading";
import ContactForm from "../components/page/ContactForm";
import Footer from "../components/page/Footer";

function Story() {
  const params = useParams();
  const id = params.id;

  const story = stories.find((story) => story.id === parseInt(id));
  return (
    <div className={`${styles.mainContainer}`}>
      <div>
        <HeroSection
          title={`Customer Stories / ${story.title}`}
          subtitle={story.storyTitle}
          img={heroSectionBgImg}
        />
      </div>
      <div className={`${styles.breifDetailsContainer} py-5 px-5`}>
        <div className={`${styles.breif__serviceInfo} px-4`}>
          <h4>SECTOR</h4>
          <p>{story.sector}</p>
          <h4>SERVICE</h4>
          <p>{story.service}</p>
        </div>
        <div className={`${styles.breif__deployedLink}`}>
          <button>
            <a
              href={story.deployedLink}
              target="_blank"
            >{`🔗 ${story.deployedLink}`}</a>
          </button>
        </div>
      </div>
      {/* challanges & solution container */}
      <div>
        <CollapsibleCards
          data={[
            {
              challange: story.challenge,
            },
            { solution: story.solution },
            { outcome: story.outcome },
          ]}
        />
      </div>
      <div>
        <SectionHeading
          title={"More Stories"}
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
                  id={story.id}
                />
              </div>
            );
          })}
        </div>
      </div>
      <div>
        <ContactForm />
        <Footer />
      </div>
    </div>
  );
}

export default Story;
