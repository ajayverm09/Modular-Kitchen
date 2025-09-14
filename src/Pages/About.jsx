import { useEffect } from "react";
import HeroSection from "../Components/AboutHero";
import StorySection from "../Components/AboutStory";
import MissionValuesSection from "../Components/AboutMission";
import TimelineSection from "../Components/AboutTimeline";
import TeamSection from "../Components/AboutTeam";

const AboutPage = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="pt-16">
      <HeroSection />
      <StorySection />
      <MissionValuesSection />
      <TimelineSection />
      <TeamSection />
    </div>
  );
};

export default AboutPage;
