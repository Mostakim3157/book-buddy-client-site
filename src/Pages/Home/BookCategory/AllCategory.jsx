import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const AllCategory = () => {
  const [books, setBooks] = useState();

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const res = await axios.get("https://y-rust-seven.vercel.app/allBook", {withCredentials: true});
        setBooks(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchBooks();
  }, []);

  // console.log(books);

  const categoryName = [...new Set(books?.map((val) => val.category))];

  // console.log(categoryName);

  return (
    <div className="my-24 ">
      <h3 className="text-3xl font-bold text-center mb-8">
        Books by <br /> <span className="text-[#FF8C32]">Category</span>
      </h3>

      <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-12">
        {categoryName?.map((cat, id) => (
          <Link to={`/bookByCat/${cat}`}
            key={id}
            className="hero h-72 rounded-2xl"
            style={{
              backgroundImage:
                "url(https://i.ibb.co/J28cdck/bookbycategory.jpg)",
            }}
          >
            <div className="hero-overlay bg-opacity-60 rounded-xl"></div>
            <div className="hero-content text-center text-white px-12 py-20">
              <div className="max-w-md">
                <h1 className="mb-5 text-4xl font-bold">{cat}</h1>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default AllCategory;
