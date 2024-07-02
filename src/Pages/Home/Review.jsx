import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";

const Review = () => {

  const {theme  } = useContext(AuthContext)
 

  return (
    <div>
      <section 
      className={`${theme === "dark" ?  "bg-gray-800" : "bg-white"}`}
      
      >
        <div className="container px-6 py-10 mx-auto">
          <h1 
          className={`text-2xl font-semibold text-center ${theme === "dark" ? "text-white" : "text-gray-800"} capitalize lg:text-3xl `}
         
          >
         <span className="text-[#FF8C32]"> Testimonials</span> from Our Valued Clients
           
          </h1>

          <p 
          
          className="max-w-2xl mx-auto mt-6 text-center text-gray-500 dark:text-gray-300"
          >
          The authentic feedback and experiences shared by those who have interacted with our services, products, or team. These testimonials serve as a testament to the quality of our offerings and the satisfaction of our clientele.
          </p>

          <div className="grid grid-cols-1 gap-8 mx-auto mt-8 lg:grid-cols-2 xl:mt-10 max-w-7xl">
            <div 
            className={`p-6 rounded-lg ${theme === "dark" ? "bg-gray-800" : "bg-gray-100"} md:p-8`}
            
            >
              <p className="leading-loose text-gray-500 dark:text-gray-300">
              &ldquo; Absolutely thrilled with the service! From the moment I reached out, the team was incredibly responsive and attentive to my needs. They went above and beyond to ensure I had a seamless experience. I couldn&lsquo;t be happier with the results and would highly recommend their services to anyone in need! &ldquo;
              </p>

              <div className="flex items-center mt-6">
                <img
                  className="object-cover rounded-full w-14 h-14"
                  src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
                  alt=""
                />

                <div className="mx-4">
                  <h1 className="font-semibold text-[#FF8C32]">Robbert</h1>
                  <span className="text-sm text-gray-500 dark:text-gray-300">
                    CTO, Robert Consultency
                  </span>
                </div>
              </div>
            </div>

            <div className={`p-6 rounded-lg ${theme === "dark" ? "bg-gray-800" : "bg-gray-100"} md:p-8`}>
              <p className="leading-loose text-gray-500 dark:text-gray-300">
                “I&rsquo;ve been a customer for years, and I keep coming back because of the consistently excellent service. The team is always friendly, professional, and eager to assist. Not only do they deliver top-notch products ,support every step of the way. I wouldn&rsquo;t hesitate to recommend them to others!”.
              </p>

              <div className="flex items-center mt-6">
                <img
                  className="object-cover rounded-full w-14 h-14"
                  src="https://images.unsplash.com/photo-1499470932971-a90681ce8530?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                  alt=""
                />

                <div className="mx-4">
                  <h1 className="font-semibold text-[#FF8C32]">Mia Brown</h1>
                  <span className="text-sm text-gray-500 dark:text-gray-300">
                    Prof. at JX College
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Review;