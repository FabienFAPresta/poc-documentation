import React from "react";
import constructionAnimation from "@site/static/lottie/under-construction.json";
import Lottie from "lottie-react";
import Translate from "@docusaurus/Translate";

const UnderConstruction = () => {
  return (
    <section>
      <div className="container">
        <div className="column text--center p-2">
          <Lottie
            animationData={constructionAnimation}
            loop={true}
            style={{ height: 500 }}
          />
          <p>
            <Translate>
              This documentation is still under construction
            </Translate>
          </p>
        </div>
      </div>
    </section>
  );
};

export default UnderConstruction;
