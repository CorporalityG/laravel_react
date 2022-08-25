import "./App.css";
import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import loadable from '@loadable/component'

const Styling = loadable(() => import("./StylingComponent"));
const Navbar = loadable(() => import("./components/Navbar/Navbar"));
const Footer = loadable(() => import("./components/Footer/Footer.jsx"));
const HomePage = loadable(() => import("./components/HomePage/HomePage"));
const StrategyConsultancy = loadable(() => import("./components/StrategyConsultancy/StrategyConsultancy"));
const IntractiveBluePrint = loadable(() => import("./components/IntractiveBluePrint/IntractiveBluePrint"));
const CorporateStrategy = loadable(() => import("./components/CorporateStrategy/CorporateStrategy"));
const BrandPositioning = loadable(() => import("./components/BrandPositioning/BrandPositioning"));
const AboutCorporality = loadable(() => import("./components/AboutCorporality/AboutCorporality"));
const PartnershipProgrammes = loadable(() => import("./components/PartnershipProgrammes/PartnershipProgrammes"));
const SustainableGrowth = loadable(() => import("./components/SustainableGrowth/SustainableGrowth"));
const Blogs = loadable(() => import("./components/Blogs/Blogs"));
const CxoStrategy = loadable(() => import("./components/CxoStrategy/CxoStrategy"));
const StrategyAndConsulting = loadable(() => import("./components/StrategyAndConsulting/StrategyAndConsulting"));
const InclusionAndDiversity = loadable(() => import("./components/InclusionAndDiversity/InclusionAndDiversity"));
const WorkWithClient = loadable(() => import("./components/WorkWithClient/WorkWithClient"));
const GoToMarketing = loadable(() => import("./components/GoToMarketing/GoToMarketing"));
const Contact = loadable(() => import("./components/Contact/Contact"));
const DigitalMediaMarketing = loadable(() => import("./components/DigitalMediaMarketing/DigitalMediaMarketing"));
const Clients = loadable(() => import("./components/CauseStudies/Clients"));
const CorporalityBooksList = loadable(() => import("./components/CorporalityBooks/CorporalityBooksList"));
const JourneyOfPerseverance = loadable(() => import("./components/CorporalityBooks/JourneyOfPerseverance"));
const ResearchPapers = loadable(() => import("./components/ResearchPapers/ResearchPapers"));
const WhyCorporalityEffect = loadable(() => import("./components/WhyCorporalityEffect/WhyCorporalityEffect"));
const WhatIsCorporalityEffect = loadable(() => import("./components/WhatIsCorporalityEffect/WhatIsCorporalityEffect"));
const CulturallyConditioned = loadable(() => import("./components/CulturallyConditioned/CulturallyConditioned"));
const InboundShifting = loadable(() => import("./components/InboundShifting/InboundShifting"));
const Careers = loadable(() => import("./components/Careers/Careers"));
const TermsConditions = loadable(() => import("./components/TermsConditions/TermsConditions"));
const PrivacyPolicy = loadable(() => import("./components/PrivacyPolicy/PrivacyPolicy"));
const AccountBasedMarketing = loadable(() => import("./components/AccountBasedMarketing/AccountBasedMarketing"));
const OutsourcedCMO = loadable(() => import("./components/OutsourcedCMO/OutsourcedCMO"));
const MarketingModelApproch = loadable(() => import("./components/MarketingModelApproch/MarketingModelApproch"));
const Blogs2 = loadable(() => import("./components/Blogs/Blogs2"));
const OurTeam = loadable(() => import("./components/OurTeam/OurTeam"));
const ServiceInsights = loadable(() => import("./components/ServiceInsights/ServiceInsights"));
const Single = loadable(() => import("./components/Blog/Single"));
const SingleArticle = loadable(() => import("./components/Articles/SingleArticle"));
const Articles = loadable(() => import("./components/Articles/Articles"));
const CooInsights = loadable(() => import("./components/Insights/CooInsights"));
const CmoInsights = loadable(() => import("./components/Insights/CmoInsights"));
const CeoInsights = loadable(() => import("./components/Insights/CeoInsights"));
const CxoInsights = loadable(() => import("./components/Insights/CxoInsights"));
const CorporalityStrikers = loadable(() => import("./components/CorporalityStrikers/CorporalityStrikers"));
const PageNotFound = loadable(() => import("./components/PageNotFound/PageNotFound"));
const Sitemap = loadable(() => import("./components/Sitemap/Sitemap"));
const CSuitSingle = loadable(() => import("./components/Insights/CSuitSingle/CSuitSingle"));
const Search = loadable(() => import("./components/Search/Search"));
const MedTech = loadable(() => import("./components/Industries/MedTech"));
const Finance = loadable(() => import("./components/Industries/Finance"));
const Geospatial = loadable(() => import("./components/Industries/Geospatial"));
const Biotech = loadable(() => import("./components/Industries/Biotech"));
const Nanotech = loadable(() => import("./components/Industries/Nanotech"));
const AgeCareAndRetirement = loadable(() => import("./components/Industries/AgeCareAndRetirement"));
const Allied = loadable(() => import("./components/Industries/Allied"));
const IndustrialEquipment = loadable(() => import("./components/Industries/IndustrialEquipment"));
const Metal = loadable(() => import("./components/Industries/Metal"));
const Construction = loadable(() => import("./components/Industries/Construction"));
const Manufacturing = loadable(() => import("./components/Industries/Manufacturing"));
const InformationTechnology = loadable(() => import("./components/Industries/InformationTechnology"));
const HighTech = loadable(() => import("./components/Industries/HighTech"));
const Agriculture = loadable(() => import("./components/Industries/Agriculture"));
const HealthCare = loadable(() => import("./components/Industries/HealthCare"));
const UtilitiesAndEnergy = loadable(() => import("./components/Industries/UtilitiesAndEnergy"));
const IndustrySingle = loadable(() => import("./components/Industries/IndustrySingle/IndustrySingle"));
const IndustryCategory = loadable(() => import("./components/Industries/Category/IndustryCategory"));
const Fintech = loadable(() => import("./components/Industries/Fintech"));
const Insurtech = loadable(() => import("./components/Industries/Insurtech"));
const Edutech = loadable(() => import("./components/Industries/Edutech"));
const SingleClient = loadable(() => import("./components/CauseStudies/SingleClient"));
const CruiseAndTourism = loadable(() => import("./components/Industries/CruiseAndTourism"));
const Pricing = loadable(() => import("./components/Pricing/Pricing"));
const CSuitCategory = loadable(() => import("./components/Insights/Category/CSuitCategory"));

function App() {
  return (
    <>
      <Styling />
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
    </>
  );
}

export default App;
