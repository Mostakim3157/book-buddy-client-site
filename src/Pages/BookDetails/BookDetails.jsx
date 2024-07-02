import axios from "axios";
import { useContext } from "react";
import { BiShoppingBag } from "react-icons/bi";
import { useLoaderData } from "react-router-dom";
import ReactStars from "react-rating-stars-component";
import { AuthContext } from "../../Providers/AuthProvider";
import toast from "react-hot-toast";

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

const BookDetails = () => {
  const { user } = useContext(AuthContext);
  console.log(user?.email);

  const {
    _id,
    name,
    authorName,
    shortDescription,
    rating,
    category,
    quantity,
    image,
    someContents,
  } = useLoaderData();
  console.log(_id);
  // 66544c621e5f0a1b3ffee577
  const handleBorrowBook = async (e) => {
    const form = e.target;
    const userName = form.userName.value;
    const email = form.email.value;
    const borrowDate = form.borrowDate.value;
    const returnDate = form.returnDate.value;
    const formData = {
      userName,
      email,
      returnDate,
      borrowDate,
      name,
      authorName,
      shortDescription,
      rating,
      category,
      quantity,
      image,
      someContents,
      newId: _id,
    };
    console.log(_id);

    try {
      const { data } = await axios.post(
        `https://y-rust-seven.vercel.app/borrowedBook/${_id}`,
        formData, {withCredentials: true}
      );
      console.log(data);
      toast.success("Successfully added.");
      window.location.reload();
    } catch (err) {
      // console.log(err);
      // toast.error("Failed to add book. It may already exist.")

      if (err.response && err.response.status === 400) {
        toast.error(err.response.data.message);
      } else {
        toast.error("Error");
      }
    }
  };

  return (
    <div
      className="mt-6
    "
    >
      <div className="card  bg-base-100 rounded-lg">
        <figure className="relative">
          <img className="rounded-lg h-96" src={image} alt="Shoes" />
        </figure>

        <div className="card-body  text">
          <p className=" text-gray-500  py-2 mb-4 ">{shortDescription}</p>
          <hr className="border-dashed border-[1.5px]" />

          <h2 className="text-3xl mt-4 font-semibold text-black">{name}</h2>
          <p className="flex items-center gap-2">Author Name: {authorName}</p>

          <div className="flex md:flex-row flex-col md:gap-64 gap-12 mt-4 mb-2 ">
            <div>
              <p className="flex items-center gap-2 my-3">
                Category: {category}{" "}
              </p>
              <p className="flex items-center gap-2 my-3">
                Rating:
                <StarRating rating={rating} />{" "}
              </p>
              <p className="flex items-center gap-2 my-3">
                Available Quantity: {quantity}
              </p>
            </div>
          </div>
          <hr className="border-dashed border-[1.5px]" />

          {quantity > 0 ? (
            <button
              className="btn mt-6 border-2 w-1/2 bg-[#FF8C32] text-white flex items-center gap-2"
              onClick={() => document.getElementById("my_modal_1").showModal()}
            >
              <BiShoppingBag className="text-lg mb-[3px]"></BiShoppingBag>
              Borrow
            </button>
          ) : (
            <button
              disabled
              className="btn mt-6 border-2 w-1/2 bg-[#FF8C32] text-white flex items-center gap-2"
            >
              <BiShoppingBag className="text-lg mb-[3px]"></BiShoppingBag>
              Borrow
            </button>
          )}

          {/* <button
         disabled
            className="btn mt-6 border-2 w-1/2 bg-[#FF8C32] text-white flex items-center gap-2"
            onClick={() => document.getElementById("my_modal_1").showModal()}
          >
            <BiShoppingBag className="text-lg mb-[3px]"></BiShoppingBag>
            Borrow
          </button> */}
          <dialog id="my_modal_1" className="modal">
            <div className="modal-box">
              <form
                onSubmit={handleBorrowBook}
                className="grid grid-cols-2 gap-8"
                method="dialog"
              >
                {/* User Name */}
                <div>
                  <label
                    htmlFor="username"
                    className="block text-sm text-gray-500 dark:text-gray-300"
                  >
                    Username
                  </label>
                  <input
                    value={user?.displayName}
                    name="userName"
                    type="text"
                    placeholder="John Doe"
                    className="block mt-2 w-full placeholder-gray-400/70 dark:placeholder-gray-500 
                   rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-gray-700 
                   focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 
                   focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 
                   dark:focus:border-blue-300"
                  />
                </div>
                {/* Email */}
                <div>
                  <label
                    htmlFor="username"
                    className="block text-sm text-gray-500 dark:text-gray-300"
                  >
                    Email
                  </label>
                  <input
                    name="email"
                    type="email"
                    value={user?.email}
                    className="block mt-2 w-full placeholder-gray-400/70 dark:placeholder-gray-500 
                   rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-gray-700 
                   focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 
                   focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 
                   dark:focus:border-blue-300"
                  />
                </div>

                {/*Borrow Date */}
                <div>
                  <label
                    htmlFor="birthday"
                    className="block text-sm text-gray-500 dark:text-gray-300"
                  >
                    Borrow Date:
                  </label>

                  <input
                    type="date"
                    required
                    name="borrowDate"
                    placeholder="John Doe"
                    className="block mt-2 w-full placeholder-gray-400/70 dark:placeholder-gray-500 rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300"
                  />
                </div>
                {/*return date */}
                <div>
                  <label
                    htmlFor="birthday"
                    className="block text-sm text-gray-500 dark:text-gray-300"
                  >
                    Return Date:
                  </label>

                  <input
                    type="date"
                    required
                    name="returnDate"
                    placeholder="John Doe"
                    className="block mt-2 w-full placeholder-gray-400/70 dark:placeholder-gray-500 rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300"
                  />
                </div>
                {/* Borrow */}
                <button className="btn col-span-2  bg-[#FF8C32] text-white w-1/2 mx-auto">
                  Submit
                </button>
              </form>
            </div>
          </dialog>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
