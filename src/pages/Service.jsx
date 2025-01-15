import React from "react";
import { useParams } from "react-router-dom";
import { services as servicesCards, advantages, whyUs } from "../data";
import HeroSection from "../components/layout/UI/herosection/HeroSection";
import heroSectionImg from "../assets/imgAssets/clients.jpg";
import styles from "./Service.module.css";
import TextSection from "../components/page/TextSection";
import ImageAndTextCard from "../components/layout/UI/section/cards/imageAndTextCard/ImageAndTextCard.jsx";
import ContactForm from "../components/page/ContactForm";
import Footer from "../components/page/Footer";
import useIsMobile from "../hooks/useIsMobile.js";

function Service() {
  const params = useParams();
  const id = params.id;
  const isMobile = useIsMobile();

  const service = servicesCards.find((service) => service.id === parseInt(id));

  return (
    <div className={styles.mainContainer}>
      <div>
        <HeroSection
          img={heroSectionImg}
          subtitle={
            "Take Flight with Wings, Wings gives your business the digital life it needs."
          }
          title={`Services / ${service.title}`}
        />
      </div>
      <div className={`${isMobile ? "px-3 py-5" : ` px-5 py-5`}`}>
        <TextSection title={service.title} description={service.description} />
      </div>

      {/* Advantages */}
      <div className="pb-5 w-100">
        <div className={`${isMobile ? `px-3 py-5` : `px-5 py-5`}`}>
          <TextSection title={"Wings Advantage"} />
        </div>
        <div
          className={`d-flex align-items-center h-100 w-100 justify-space-between ${
            isMobile ? "flex-wrap" : ""
          }`}
        >
          {advantages.map((advantage) => (
            <div className="p-0 w-100">
              <ImageAndTextCard
                id={`${advantage.id}_advantage`}
                text={advantage.text}
                icon={advantage.icon}
                color={advantage.color}
              />
            </div>
          ))}
        </div>
      </div>
      {/* Advantages End */}

      {/* why develop with us */}
      <div className={styles.whyUsContainer}>
        <div className={`${isMobile ? `px-3 py-5` : `px-5 py-5`}`}>
          <TextSection
            title={"Why Develop with Wings"}
            description={
              "Bring in your creative ideas, and wings help you sort them out!"
            }
            mode={"light"}
          />
          <div>
            {whyUs.map((item) => {
              return (
                <ImageAndTextCard
                  id={`${whyUs.id}_whyUs`}
                  orientation={"landscape"}
                  text={item.title}
                  icon={item.icon}
                  description={item.description}
                />
              );
            })}
          </div>
        </div>
      </div>
      {/* why develop with us end */}
      {/* footer */}
      <ContactForm />
      <Footer />
      {/* Footer end */}
    </div>
  );
}

export default Service;
