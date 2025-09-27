import PagesHero from "../../components/module/pagesHero/PagesHero";
import { aboutHero, ourApproach, ourMission } from "../../exports";
import ChooseUs from "../../components/home/chooseUs/ChooseUs";
import PromoSection from "../../components/home/promoSection/PromoSection";
import Testimonials from "../../components/home/testimonials/Testimonials";
import MissionSection from "../../components/about/missionSection/MissionSection";
import AboutFirm from "../../components/about/aboutFirm/AboutFirm";
import ApproachBlocks from "../../components/about/approachBlocks/ApproachBlocks";

const AboutPage = () => {
  return (
    <>
      <PagesHero title="About Us" imageBack={aboutHero} />

      <AboutFirm />

      <div className="bg-servicesB xl:py-20 md:py-15 py-8 xl:mt-38 mt-16">
        <MissionSection
          title="Our Mission"
          description="Our mission is simple: to provide clear, compassionate, and reliable legal guidance that empowers our clients to make informed decisions."
          image={ourMission}
        />
      </div>

      <ChooseUs />

      <div className="bg-servicesB xl:py-20 md:py-15 py-8 xl:mt-38 md:mt-31 mt-16">
        <MissionSection
          title="Our Approach"
          description="We combine deep legal expertise with a client-first mindset. Every case we take on is approached with:"
          image={ourApproach}
        />
        <ApproachBlocks />
      </div>

      <PromoSection />

      <Testimonials />
    </>
  );
};

export default AboutPage;
