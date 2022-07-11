import "./App.css";
// import { BrowserRouter as Routes, Route } from 'react-router-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useContext } from "react";
import { Context, ContextProvider } from "./context/Context";
import HomePage from "./components/HomePage/HomePage";
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
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
// import Blog from "./components/Blog/Blog.jsx";
import Write from "./components/Write/Write";
// import IndustrialResources from "./components/IndustrialResources/IndustrialResources";
import DivineIntercession from "./components/CauseStudies/DivineIntercession";
import BuildQ from "./components/CauseStudies/BuildQ";
import FastgrowFinance from "./components/CauseStudies/FastgrowFinance";
import Liqmet from "./components/CauseStudies/Liqmet";
import KlekServices from "./components/CauseStudies/KlekServices";
import SKInsurance from "./components/CauseStudies/SKInsurance";
import TechConsultants from "./components/CauseStudies/TechConsultants";
import Clients from "./components/CauseStudies/Clients";
import XDesign from "./components/CauseStudies/XDesign";
import MeyerWest from "./components/CauseStudies/MeyerWest";
import Lumoral from "./components/CauseStudies/Lumoral";

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
import Edtech from "./components/Industries/Edtech";
import SingleClient from "./components/CauseStudies/SingleClient";

function App() {
  const { user, dispatch } = useContext(Context);
  // const handleLogout = () => {
  // dispatch({ type: "LOGOUT" });
  // };
  return (
    <>
      <ContextProvider>
        {/*<BrowserRouter basename="/mern">*/}
        <BrowserRouter>
          <Navbar />
          {/* {user && <h1 className="logout" onClick={handleLogout}>logout</h1>} */}
          <Routes>

            <Route path="/about-corporality" element={<AboutCorporality />} />

            <Route path="/register" element={user ? <HomePage /> : <Register />} />

            <Route path="/login" element={user ? <HomePage /> : <Login />} />

            <Route path="/write" element={user ? <Write /> : <Register />} />

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

            {/* <Route path="/divine-intercession" element={<DivineIntercession />} />
            <Route path="/buildq-group" element={<BuildQ />} />
            <Route path="/fastgrow-finance" element={<FastgrowFinance />} />
            <Route path="/liqmet" element={<Liqmet />} />
            <Route path="/klek-services" element={<KlekServices />} />
            <Route path="/sk-insurance" element={<SKInsurance />} />
            <Route path="/tech-consultants" element={<TechConsultants />} />
            <Route path="/x-designs" element={<XDesign />} />
            <Route path="/meyer-west" element={<MeyerWest />} />
            <Route path="/lumoral" element={<Lumoral />} /> */}

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
            <Route path="/edtech" element={<Edtech />} />

            {/* <Route path="/search/:search_string" element={<Blogs />}/> */}

            {/*<Route path="/articles/:article_name" element={<Blog />}/>*/}

            <Route path="/:post_slug" exact element={<Single />} />

            <Route path="/category/:category_slug" element={<Blogs />} />

            <Route path="/article/:article_slug" element={<SingleArticle />} />

            <Route path="/client/:client_slug" element={<SingleClient />} />

            <Route path="/csuit/:csuit_slug" element={<CSuitSingle />} />

            <Route path="/search/:search_keyword" element={<Search />} />
            <Route path="/search/" element={<Search />} />

            <Route path="/industry/:industry_slug" element={<IndustrySingle />} />
            <Route path="/industry/category/:category_slug" element={<IndustryCategory />} />

            <Route path="/" exact element={<HomePage />} />
            <Route path="*" element={<PageNotFound />} />

          </Routes>
          <Footer />
        </BrowserRouter>
      </ContextProvider>
    </>
  );
}

export default App;
