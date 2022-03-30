import React from "react";
import Talent from "./Components/Talent";
import Continously from "./Components/Continously";
import Leverage from "./Components/Leverage";
import Differentiate from "./Components/Differentiate";
import NewCharge from "./Components/NewCharge";
import NewStep from "./Components/NewStep";
import BusinessResults from "./Components/BusinessResults";
import WhyOutsource from "./Components/WhyOutsource";

function HomePage() {
  return (
    <>
      <Differentiate />
      <NewCharge />
      <NewStep />
      <Talent />
      <Continously />
      <Leverage />
      <BusinessResults />
      <WhyOutsource />
    </>
  );
}

export default HomePage;
