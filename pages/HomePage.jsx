import Banner from "../src/Components/layout/home/banner/Banner";
import Offer3 from "../src/Components/layout/home/offer/Offer3";
import Service from "../src/Components/layout/home/service/Service";
import Arrive from "../src/Components/layout/home/newArrive/Arrive";
import BestSellers from "../src/Components/layout/home/bestSellers/BestSellers";
import Offer1 from "../src/Components/layout/home/offer/Offer1";
import SpecialOffers from "../src/Components/layout/home/specialOffers/SpecialOffers";

function HomePage() {
  return (
    <>
      <Banner />
        <Service />
      {/* three img offer palate */}
      <Offer3 />
      <Arrive />
      <BestSellers />
      <Offer1 />
      <SpecialOffers />
    </>
  );
}

export default HomePage;
