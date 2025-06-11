import TitleSection from "./components/TitleSection";
import CareerSection from "./components/CareerSection";
import WorkSection from "./components/WorkSection";
import MoreWorksSection from "./components/MoreWorksSection";

export default function Home() {
  return (
    <main className="flex flex-col gap-y-8">
      <TitleSection />
      <CareerSection />
      <WorkSection />
      <MoreWorksSection />
    </main>
  );
}
