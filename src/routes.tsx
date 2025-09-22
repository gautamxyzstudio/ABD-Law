import AboutPage from "./pages/aboutPage/AboutPage";
import Home from "./pages/home/Home";
import CorporateCommercial from "./pages/services/corporateCommercial/CorporateCommercial";
import FamilyLaw from "./pages/services/familyLaw/FamilyLaw";
import NotaryImmigration from "./pages/services/notaryImmigration/NotaryImmigration";
import RealEstate from "./pages/services/realEstate/RealEstate";
import WillsEstate from "./pages/services/willsEstate/WillsEstate";
import TaxCalculator from "./pages/taxCalculator/TaxCalculator";

export interface RouteType {
  path: string;
  name: string;
  element?: React.ReactNode;
}

export const routes: RouteType[] = [
  { path: "/", name: "Home", element: <Home/> },
  { path: "/about", name: "About", element: <AboutPage/> },
  { path: "/family-law", name: "Family Law", element: <FamilyLaw/> },
  { path: "/real-estate", name: "Real Estate", element: <RealEstate/> },
  { path: "/corporate", name: "Corporate", element: <CorporateCommercial/> },
  { path: "/wills", name: "Wills", element: <WillsEstate/> },
  { path: "/notary", name: "Notary", element: <NotaryImmigration/>},
  { path: "/tax-calculator", name: "Tax Calculator", element: <TaxCalculator/> },
];