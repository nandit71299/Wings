import React from "react";
import HeroSection from "../components/layout/UI/herosection/HeroSection";
import aboutUsImg from "../assets/imgAssets/aboutus.jpg";
import SectionHeading from "../components/layout/UI/section/SectionHeading";
import styles from "./AboutUs.module.css";
import TabPanel from "../components/layout/UI/section/panels/TabPanel";
import { aboutUs, probSolvingApproach } from "../data";
import ImageAndTextSection from "../components/layout/UI/section/sidebyside/ImageAndTextSection";
import serversImg from "../assets/imgAssets/servers.jpg";
import stairsImg from "../assets/imgAssets/stairs.jpg";
import ContactForm from "../components/page/ContactForm";
import Footer from "../components/page/Footer";

function AboutUs() {
  return (
    <div className={styles.mainContainer}>
      <div>
        <HeroSection
          img={aboutUsImg}
          title={`Who are we / About us`}
          subtitle={"We give ideas a wings, so you can fly."}
        />
      </div>
      <div>
        <div>
          <SectionHeading
            title={"About Us"}
            subtitle={
              "A team of tech geeks with a passion to devise simple & elegant solutions in the areas of Web, Mobile, E-commerce & Digital Marketing"
            }
          />
        </div>
        <div>
          <TabPanel data={aboutUs} />
        </div>

        <div>
          <ImageAndTextSection
            img={serversImg}
            title={"Jack of All Trades"}
            description={
              "A team of tech geeks with a passion to devise simple & elegant solutions in the areas of Web, Mobile, E-commerce & Digital Marketing"
            }
            imgPosition="left"
          />
          <ImageAndTextSection
            img={stairsImg}
            title={"360 degree perspective"}
            description={
              "There is a lot of experiential learning that our team has undergone since we started chugging along in 2010. Taking offshore projects has certainly helped – it is something that has shaped a global perspective for our team. Having worked with some of the biggest companies all across the world, our team knows how valuable certain qualities are – professionalism, time-bound deliveries and support. This perspective has become a part of our DNA and it trickles down in all the projects that we handle today whether small or big."
            }
            imgPosition="right"
          />
        </div>

        <div>
          <div>
            <SectionHeading
              title={"Our problem solving approach"}
              subtitle={
                "We have designed a streamlined approach to build projects for maximum  effectiveness and a smooth workflow."
              }
            />
          </div>
          <div>
            <TabPanel data={probSolvingApproach} />
          </div>
        </div>
      </div>
      <div>
        <ContactForm />
        <Footer />
      </div>
    </div>
  );
}

export default AboutUs;
