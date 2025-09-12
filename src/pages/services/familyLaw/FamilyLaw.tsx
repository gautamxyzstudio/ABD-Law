import ServiceHero from "../../../components/services/hero-section/serviceHero";
import { serviceFamily } from "../../../exports";

export default function FamilyLaw() {
  return (
    <div>
      <ServiceHero
        title="Family Law Services" 
        image={serviceFamily} 
      />

    </div>
  );
}
