import Banner from "./Banner";
import AllCategory from "./BookCategory/AllCategory";

import ContactUs from "./ContactUs";
import Review from "./Review";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <AllCategory></AllCategory>
     
      <ContactUs></ContactUs>
      <Review></Review>
      
    </div>
  );
};

export default Home;
