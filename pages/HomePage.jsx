import Banner from "../src/Components/layout/home/banner/Banner";
import Offer3 from "../src/Components/layout/home/offer/Offer3";
import Service from "../src/Components/layout/home/service/Service";
import Arrive from "../src/Components/layout/home/newArrive/Arrive";

function HomePage() {
  return (
    <>
      <Banner />
        <Service />
      {/* three img offer palate */}
      <Offer3 />
      <Arrive />
    </>
  );
}

export default HomePage;
