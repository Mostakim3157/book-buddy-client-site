import { BiBook } from "react-icons/bi";
import { Link, useParams } from "react-router-dom";

import ReactStars from "react-rating-stars-component";
import { useEffect, useState } from "react";

const StarRating = ({ rating }) => {
  return (
    <ReactStars
      count={5}
      value={rating}
      size={20}
      activeColor="#ffd700"
      color="#dcdcdc" 
      edit={false}
      isHalf={true} 
    />
  );
};

const SingleBookCategory = () => {

  const { category } = useParams();
console.log(category);
  const [books, setBooks] = useState();

  

  useEffect(() => {
    const fetchBooks = async () => {
      if (category) {
        const response = await fetch(
          `https://y-rust-seven.vercel.app/bookByCategoryName/${category}`
        );
        const data = await response.json();
        console.log(data);
        setBooks(data);
      }
    };

    fetchBooks();
  }, [category]);


  return (
    <div>
      <h2 className="text-3xl text-center mb-8 font-bold  dark:text-white">
    Book Category: <span className="text-[#FF8C32]">{category}</span>
      </h2>
      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-12">
        {/* cart */}
        {
          books?.map((book, id) => <div key={id} className="w-full max-w-sm overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
          <img
            className="object-cover object-center w-full h-56"
            src={book.image}
            alt="avatar"
          />

          <div className="flex items-center px-6 py-3 bg-[#FF8C32]">
            <BiBook className="text-white text-lg"></BiBook>

            <h1 className="mx-3 text-lg font-semibold text-white">{book.category}</h1>
          </div>

          <div className="px-6 py-4">
            <div className="flex items-center justify-between">
              <div className="">
                <h1 className="text-xl font-semibold text-gray-800 dark:text-white">
                 {book.name}
                </h1>

                <p className="py-2 text-gray-700 dark:text-gray-400">
                  {book.authorName}
                </p>
                <p className="py-2 text-gray-700 dark:text-gray-400">
                  Quantity: {book.quantity}
                </p>
                <StarRating rating={book.rating} />
              </div>
              <div>
                <Link to={`/bookDetails/${book._id}`}>
                  <button className="btn bg-[#FF8C32] text-white ">
                    Details
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>)
        }


      
      </div>
    </div>
  );
};

export default SingleBookCategory;
