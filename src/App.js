import "./App.css";
import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"
import "aos/dist/aos.css";

/* import HomePage from "./components/HomePage/HomePage";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer.jsx";
import StrategyConsultancy from "./components/StrategyConsultancy/StrategyConsultancy";
import IntractiveBluePrint from "./components/IntractiveBluePrint/IntractiveBluePrint";
import CorporateStrategy from "./components/CorporateStrategy/CorporateStrategy";
import BrandPositioning from "./components/BrandPositioning/BrandPositioning";
import AboutCorporality from "./components/AboutCorporality/AboutCorporality";
import PartnershipProgrammes from "./components/PartnershipProgrammes/PartnershipProgrammes.jsx";
import SustainableGrowth from "./components/SustainableGrowth/SustainableGrowth";
import Blogs from "./components/Blogs/Blogs";
import CxoStrategy from "./components/CxoStrategy/CxoStrategy";
import StrategyAndConsulting from "./components/StrategyAndConsulting/StrategyAndConsulting";
import InclusionAndDiversity from "./components/InclusionAndDiversity/InclusionAndDiversity";
import WorkWithClient from "./components/WorkWithClient/WorkWithClient";
import GoToMarketing from "./components/GoToMarketing/GoToMarketing";
import Contact from "./components/Contact/Contact";
import DigitalMediaMarketing from "./components/DigitalMediaMarketing/DigitalMediaMarketing";
import Clients from "./components/CauseStudies/Clients";
import CorporalityBooksList from "./components/CorporalityBooks/CorporalityBooksList";
import JourneyOfPerseverance from "./components/CorporalityBooks/JourneyOfPerseverance";
import ResearchPapers from "./components/ResearchPapers/ResearchPapers";
import WhyCorporalityEffect from "./components/WhyCorporalityEffect/WhyCorporalityEffect";
import WhatIsCorporalityEffect from "./components/WhatIsCorporalityEffect/WhatIsCorporalityEffect";
import CulturallyConditioned from "./components/CulturallyConditioned/CulturallyConditioned";
import InboundShifting from "./components/InboundShifting/InboundShifting";
import Careers from "./components/Careers/Careers";
import TermsConditions from "./components/TermsConditions/TermsConditions";
import PrivacyPolicy from "./components/PrivacyPolicy/PrivacyPolicy";
import AccountBasedMarketing from "./components/AccountBasedMarketing/AccountBasedMarketing";
import OutsourcedCMO from "./components/OutsourcedCMO/OutsourcedCMO";
import MarketingModelApproch from "./components/MarketingModelApproch/MarketingModelApproch";
import Blogs2 from "./components/Blogs/Blogs2";
import OurTeam from "./components/OurTeam/OurTeam";
import ServiceInsights from "./components/ServiceInsights/ServiceInsights";
import Single from "./components/Blog/Single";
import SingleArticle from "./components/Articles/SingleArticle";
import Articles from "./components/Articles/Articles";
import CooInsights from "./components/Insights/CooInsights";
import CmoInsights from "./components/Insights/CmoInsights";
import CeoInsights from "./components/Insights/CeoInsights";
import CxoInsights from "./components/Insights/CxoInsights";
import CorporalityStrikers from "./components/CorporalityStrikers/CorporalityStrikers";
import PageNotFound from "./components/PageNotFound/PageNotFound";
import Sitemap from "./components/Sitemap/Sitemap";
import CSuitSingle from "./components/Insights/CSuitSingle/CSuitSingle";
import Search from "./components/Search/Search";
import MedTech from "./components/Industries/MedTech";
import Finance from "./components/Industries/Finance";
import Geospatial from "./components/Industries/Geospatial";
import Biotech from "./components/Industries/Biotech";
import Nanotech from "./components/Industries/Nanotech";
import AgeCareAndRetirement from "./components/Industries/AgeCareAndRetirement";
import Allied from "./components/Industries/Allied";
import IndustrialEquipment from "./components/Industries/IndustrialEquipment";
import Metal from "./components/Industries/Metal";
import Construction from "./components/Industries/Construction";
import Manufacturing from "./components/Industries/Manufacturing";
import InformationTechnology from "./components/Industries/InformationTechnology";
import HighTech from "./components/Industries/HighTech";
import Agriculture from "./components/Industries/Agriculture";
import HealthCare from "./components/Industries/HealthCare";
import UtilitiesAndEnergy from "./components/Industries/UtilitiesAndEnergy";
import IndustrySingle from "./components/Industries/IndustrySingle/IndustrySingle";
import IndustryCategory from "./components/Industries/Category/IndustryCategory";
import Fintech from "./components/Industries/Fintech";
import Insurtech from "./components/Industries/Insurtech";
import Edutech from "./components/Industries/Edutech";
import SingleClient from "./components/CauseStudies/SingleClient";
import CruiseAndTourism from "./components/Industries/CruiseAndTourism";
import Pricing from "./components/Pricing/Pricing";
import CSuitCategory from "./components/Insights/Category/CSuitCategory"; */

const Navbar = lazy(() => import("./components/Navbar/Navbar"));
const Footer = lazy(() => import("./components/Footer/Footer.jsx"));
const HomePage = lazy(() => import("./components/HomePage/HomePage"));
const StrategyConsultancy = lazy(() => import("./components/StrategyConsultancy/StrategyConsultancy"));
const IntractiveBluePrint = lazy(() => import("./components/IntractiveBluePrint/IntractiveBluePrint"));
const CorporateStrategy = lazy(() => import("./components/CorporateStrategy/CorporateStrategy"));
const BrandPositioning = lazy(() => import("./components/BrandPositioning/BrandPositioning"));
const AboutCorporality = lazy(() => import("./components/AboutCorporality/AboutCorporality"));
const PartnershipProgrammes = lazy(() => import("./components/PartnershipProgrammes/PartnershipProgrammes"));
const SustainableGrowth = lazy(() => import("./components/SustainableGrowth/SustainableGrowth"));
const Blogs = lazy(() => import("./components/Blogs/Blogs"));
const CxoStrategy = lazy(() => import("./components/CxoStrategy/CxoStrategy"));
const StrategyAndConsulting = lazy(() => import("./components/StrategyAndConsulting/StrategyAndConsulting"));
const InclusionAndDiversity = lazy(() => import("./components/InclusionAndDiversity/InclusionAndDiversity"));
const WorkWithClient = lazy(() => import("./components/WorkWithClient/WorkWithClient"));
const GoToMarketing = lazy(() => import("./components/GoToMarketing/GoToMarketing"));
const Contact = lazy(() => import("./components/Contact/Contact"));
const DigitalMediaMarketing = lazy(() => import("./components/DigitalMediaMarketing/DigitalMediaMarketing"));
const Clients = lazy(() => import("./components/CauseStudies/Clients"));
const CorporalityBooksList = lazy(() => import("./components/CorporalityBooks/CorporalityBooksList"));
const JourneyOfPerseverance = lazy(() => import("./components/CorporalityBooks/JourneyOfPerseverance"));
const ResearchPapers = lazy(() => import("./components/ResearchPapers/ResearchPapers"));
const WhyCorporalityEffect = lazy(() => import("./components/WhyCorporalityEffect/WhyCorporalityEffect"));
const WhatIsCorporalityEffect = lazy(() => import("./components/WhatIsCorporalityEffect/WhatIsCorporalityEffect"));
const CulturallyConditioned = lazy(() => import("./components/CulturallyConditioned/CulturallyConditioned"));
const InboundShifting = lazy(() => import("./components/InboundShifting/InboundShifting"));
const Careers = lazy(() => import("./components/Careers/Careers"));
const TermsConditions = lazy(() => import("./components/TermsConditions/TermsConditions"));
const PrivacyPolicy = lazy(() => import("./components/PrivacyPolicy/PrivacyPolicy"));
const AccountBasedMarketing = lazy(() => import("./components/AccountBasedMarketing/AccountBasedMarketing"));
const OutsourcedCMO = lazy(() => import("./components/OutsourcedCMO/OutsourcedCMO"));
const MarketingModelApproch = lazy(() => import("./components/MarketingModelApproch/MarketingModelApproch"));
const Blogs2 = lazy(() => import("./components/Blogs/Blogs2"));
const OurTeam = lazy(() => import("./components/OurTeam/OurTeam"));
const ServiceInsights = lazy(() => import("./components/ServiceInsights/ServiceInsights"));
const Single = lazy(() => import("./components/Blog/Single"));
const SingleArticle = lazy(() => import("./components/Articles/SingleArticle"));
const Articles = lazy(() => import("./components/Articles/Articles"));
const CooInsights = lazy(() => import("./components/Insights/CooInsights"));
const CmoInsights = lazy(() => import("./components/Insights/CmoInsights"));
const CeoInsights = lazy(() => import("./components/Insights/CeoInsights"));
const CxoInsights = lazy(() => import("./components/Insights/CxoInsights"));
const CorporalityStrikers = lazy(() => import("./components/CorporalityStrikers/CorporalityStrikers"));
const PageNotFound = lazy(() => import("./components/PageNotFound/PageNotFound"));
const Sitemap = lazy(() => import("./components/Sitemap/Sitemap"));
const CSuitSingle = lazy(() => import("./components/Insights/CSuitSingle/CSuitSingle"));
const Search = lazy(() => import("./components/Search/Search"));
const MedTech = lazy(() => import("./components/Industries/MedTech"));
const Finance = lazy(() => import("./components/Industries/Finance"));
const Geospatial = lazy(() => import("./components/Industries/Geospatial"));
const Biotech = lazy(() => import("./components/Industries/Biotech"));
const Nanotech = lazy(() => import("./components/Industries/Nanotech"));
const AgeCareAndRetirement = lazy(() => import("./components/Industries/AgeCareAndRetirement"));
const Allied = lazy(() => import("./components/Industries/Allied"));
const IndustrialEquipment = lazy(() => import("./components/Industries/IndustrialEquipment"));
const Metal = lazy(() => import("./components/Industries/Metal"));
const Construction = lazy(() => import("./components/Industries/Construction"));
const Manufacturing = lazy(() => import("./components/Industries/Manufacturing"));
const InformationTechnology = lazy(() => import("./components/Industries/InformationTechnology"));
const HighTech = lazy(() => import("./components/Industries/HighTech"));
const Agriculture = lazy(() => import("./components/Industries/Agriculture"));
const HealthCare = lazy(() => import("./components/Industries/HealthCare"));
const UtilitiesAndEnergy = lazy(() => import("./components/Industries/UtilitiesAndEnergy"));
const IndustrySingle = lazy(() => import("./components/Industries/IndustrySingle/IndustrySingle"));
const IndustryCategory = lazy(() => import("./components/Industries/Category/IndustryCategory"));
const Fintech = lazy(() => import("./components/Industries/Fintech"));
const Insurtech = lazy(() => import("./components/Industries/Insurtech"));
const Edutech = lazy(() => import("./components/Industries/Edutech"));
const SingleClient = lazy(() => import("./components/CauseStudies/SingleClient"));
const CruiseAndTourism = lazy(() => import("./components/Industries/CruiseAndTourism"));
const Pricing = lazy(() => import("./components/Pricing/Pricing"));
const CSuitCategory = lazy(() => import("./components/Insights/Category/CSuitCategory"));

function App() {
  return (
    <>
      <Suspense fallback={``}>
        <BrowserRouter>
          <Navbar />

          <Routes>

            <Route path="/about-corporality" element={<AboutCorporality />} />

            <Route path="/brand-positioning" element={<BrandPositioning />} />

            <Route path="/contact" element={<Contact />} />

            <Route path="/corporate-strategy" element={<CorporateStrategy />} />

            <Route path="/digital-media-marketing" element={<DigitalMediaMarketing />} />

            <Route path="/goto-market-strategy" element={<GoToMarketing />} />

            <Route path="/cxo-strategy" element={<CxoStrategy />} />

            <Route path="/inclusion-and-diversity" element={<InclusionAndDiversity />} />

            <Route path="/interactive-blueprint" element={<IntractiveBluePrint />} />

            <Route path="/partnership-programmes" element={<PartnershipProgrammes />} />

            <Route path="/strategy-and-consulting" element={<StrategyAndConsulting />} />

            <Route path="/strategic-consultancy" element={<StrategyConsultancy />} />

            <Route path="/sustainable-growth" element={<SustainableGrowth />} />

            <Route path="/work-with-clients" element={<WorkWithClient />} />

            <Route path="/article" element={<Articles />} />

            <Route path="/research-papers" element={<ResearchPapers />} />

            <Route path="/clients" element={<Clients />} />

            <Route path="/corporality-books" element={<CorporalityBooksList />} />
            <Route path="/book/journey-of-perseverance" element={<JourneyOfPerseverance />} />

            <Route path="/why-corporality-effect" element={<WhyCorporalityEffect />} />
            <Route path="/what-is-corporality-effect" element={<WhatIsCorporalityEffect />} />
            <Route path="/corporality-culturally-conditioned" element={<CulturallyConditioned />} />
            <Route path="/corporality-inbound-shiftings" element={<InboundShifting />} />

            <Route path="/careers" element={<Careers />} />
            <Route path="/terms-and-conditions" element={<TermsConditions />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />

            <Route path="/account-based-marketing" element={<AccountBasedMarketing />} />
            <Route path="/outsourced-cmo" element={<OutsourcedCMO />} />
            <Route path="/marketing-model-approch" element={<MarketingModelApproch />} />

            <Route path="/blog" element={<Blogs2 />} />
            <Route path="/our-team" element={<OurTeam />} />
            <Route path="/service-insights" element={<ServiceInsights />} />

            <Route path="/coo-insights" element={<CooInsights />} />
            <Route path="/cmo-insights" element={<CmoInsights />} />
            <Route path="/ceo-insights" element={<CeoInsights />} />
            <Route path="/cxo-insights" element={<CxoInsights />} />

            <Route path="/corporality-striker" element={<CorporalityStrikers />} />

            <Route path="/404" element={<PageNotFound />} />

            <Route path="/sitemap" element={<Sitemap />} />

            <Route path="/medtech" element={<MedTech />} />
            <Route path="/finance" element={<Finance />} />
            <Route path="/geospatial" element={<Geospatial />} />
            <Route path="/biotech" element={<Biotech />} />
            <Route path="/nanotech" element={<Nanotech />} />
            <Route path="/age-care-and-retirement" element={<AgeCareAndRetirement />} />
            <Route path="/allied" element={<Allied />} />
            <Route path="/industrial-equipment" element={<IndustrialEquipment />} />
            <Route path="/metal" element={<Metal />} />
            <Route path="/construction" element={<Construction />} />
            <Route path="/manufacturing" element={<Manufacturing />} />
            <Route path="/information-technology" element={<InformationTechnology />} />
            <Route path="/high-tech" element={<HighTech />} />
            <Route path="/agriculture" element={<Agriculture />} />
            <Route path="/health-care" element={<HealthCare />} />
            <Route path="/utilities-and-energy" element={<UtilitiesAndEnergy />} />
            <Route path="/fintech" element={<Fintech />} />
            <Route path="/insurtech" element={<Insurtech />} />
            <Route path="/edutech" element={<Edutech />} />
            <Route path="/cruise-and-tourism" element={<CruiseAndTourism />} />

            <Route path="/pricing" element={<Pricing />} />

            <Route path="/:post_slug" exact element={<Single />} />

            <Route path="/category/:category_slug" element={<Blogs />} />

            <Route path="/article/:article_slug" element={<SingleArticle />} />

            <Route path="/client/:client_slug" element={<SingleClient />} />

            <Route path="/csuit/:csuit_slug" element={<CSuitSingle />} />
            <Route path="/csuit/category/:category_slug" element={<CSuitCategory />} />

            <Route path="/search/:search_keyword" element={<Search />} />
            <Route path="/search/" element={<Search />} />

            <Route path="/industry/:industry_slug" element={<IndustrySingle />} />
            <Route path="/industry/category/:category_slug" element={<IndustryCategory />} />

            <Route path="/" exact element={<HomePage />} />
            <Route path="*" element={<PageNotFound />} />

          </Routes>

          <Footer />
        </BrowserRouter>
      </Suspense>
    </>
  );
}

export default App;
