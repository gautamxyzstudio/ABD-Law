import Home from "./pages/home/Home";
import FamilyLaw from "./pages/services/familyLaw/FamilyLaw";
import TaxCalculator from "./pages/taxCalculator/TaxCalculator";

export interface RouteType {
  path: string;
  name: string;
  element?: React.ReactNode;
}

export const routes: RouteType[] = [
  { path: "/", name: "Home", element: <Home/> },
  { path: "/about", name: "About", element: <h1>About Page</h1> },
  { path: "/family-law", name: "Family Law", element: <FamilyLaw/> },
  { path: "/real-estate", name: "Real Estate", element: <h1>Real Estate</h1> },
  { path: "/corporate", name: "Corporate", element: <h1>Corporate</h1> },
  { path: "/wills", name: "Wills", element: <h1>Wills</h1> },
  { path: "/notary", name: "Notary", element: <h1>Notary</h1> },
  { path: "/tax-calculator", name: "Tax Calculator", element: <TaxCalculator/> },
];