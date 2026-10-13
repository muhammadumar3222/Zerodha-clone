import Hero from "./Hero.jsx";
import LeftSection from "./LeftSection.jsx";
import RightSection from "./RightSection.jsx";
import Universe from "./Universe.jsx";
const ProductPage = () => {
  return (
    <div>
      <Hero />
      <LeftSection
        imageURL="/media/images/kite.png"
        productName="Kite"
        productDes="Our ultra-fast flagship trading plat form with streaming market data, advanced charts, an eiegant UI, and more. Enjoy the Kite experience seamiessly on your Android and IOS devices."
        tryDemo=""
        learMore=""
        googlePlay=""
        appStore=""
      />
      <RightSection
        imageURL="/media/images/console.png"
        productName="Console"
        productDes="The central deshboard for your Zerodha account. Gain insights your trades and investment with in-depth reports and visualisations."
        tryDemo=""
      />
      <LeftSection
        imageURL="/media/images/coin.png"
        productName="Coin"
        productDes="Buy direct mutual funds onlilne.commission-fee. delivered directly to your Demal account. Enjoty the investment experience on your Android and IOS devices."
        tryDemo=""
        learMore=""
        googlePlay=""
        appStore=""
      />
      <RightSection
        imageURL="/media/images/kiteconnect.png"
        productName="Kite Connect API"
        productDes="Build powerful trading platforms and experiences wit our super simple HTTP/JSON APIs. if you are a startup, build your investment app and showcase it to our clientbase."
        tryDemo=""
      />
      <LeftSection
        imageURL="/media/images/varsity.png"
        productName="Varsity mobile"
        productDes="An easy to group. collection of stock market lessions with in-depth coverage and illustrations. Conent is broken down into bite-sizw cards to help you learn on the go."
        tryDemo=""
        learMore=""
        googlePlay=""
        appStore=""
      />
      <p className="text-center">
        Want to know more about our Technology stack?{" "}
        <a href="" style={{ textDecoration: "none" }}>
          Chec out the Zerodha. tech blog. <i class="fa-solid fa-arrow-right"></i>
        </a>
      </p>
      <Universe />
    </div>
  );
};

export default ProductPage;
