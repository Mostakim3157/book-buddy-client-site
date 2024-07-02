import { useContext, useState } from "react";
import { BiEdit } from "react-icons/bi";
import { MdDeleteOutline } from "react-icons/md";
import { Link, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import ReactStars from "react-rating-stars-component";
import { AuthContext } from "../../Providers/AuthProvider";
import toast from "react-hot-toast";


// eslint-disable-next-line react/prop-types
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


const AllBookCart = () => {
  const allBook = useLoaderData();
  const [books, setBooks] = useState(allBook);

  

const {user} = useContext(AuthContext)


  const handleDelete = (_id) => {
  
    if (user?.email) {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then((result) => {
        if (result.isConfirmed) {
          fetch(`https://y-rust-seven.vercel.app/allBook/${_id}`, {
            method: "DELETE",
          },  {credentials: "include"})
            .then((res) => res.json())
            .then((data) => {
              console.log(data);
              if (data.deletedCount > 0) {
                Swal.fire("Deleted!", "Your Book has been deleted.", "success");
                const remaining = books?.filter((a) => a._id !== _id);
                setBooks(remaining);
              }
            });
        }
      });
    }else{
    toast.error("You have to login first.")
  
    }


  };




  return (
    <div>
      <div className="grid gap-12 mt-8 lg:mt-12 lg:grid-cols-3 md:grid-cols-2">
        {books.map((book, id) => (
          <div
            key={id}
            className="card card-compact bg-base-100 shadow-xl"
          >
            <figure>
              <img src={book.image} alt="Shoes" />
            </figure>
            <div className="card-body ">
              <h2 className="card-title text-xl">{book.name}</h2>
              <p >{book.authorName}</p>
              <p className="text-lg font-semibold text-gray-600">Category: {book.category}</p>
              <div className="mb-2">
                            <StarRating rating={book.rating} />
                          </div>

              <div className="">
                <button className=" text-red-500 btn text-2xl btn-outline mr-4">
                  <MdDeleteOutline
                    onClick={() => handleDelete(book._id)}
                  ></MdDeleteOutline>
                </button>
                <Link to={`/updateBook/${book._id}`}  className="text-green-500 btn btn-outline text-2xl">
                  <BiEdit></BiEdit>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllBookCart;
