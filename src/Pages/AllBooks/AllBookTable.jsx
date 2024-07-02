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

const AllBookTable = () => {
  const allBook = useLoaderData();
  const [books, setBooks] = useState(allBook);
  const { user } = useContext(AuthContext);
  // console.log(user?.email);

  const handleDelete = (_id) => {
    // console.log(_id);

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
    } else {
      toast.error("You have to login first.");
    }
  };

  return (
    <div>
      <div className="flex flex-col mt-6">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
            <div className="overflow-hidden border border-gray-200 dark:border-gray-700 md:rounded-lg">
              <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                <thead className="bg-gray-50 dark:bg-gray-800">
                  <tr>
                    <th
                      scope="col"
                      className="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                    >
                      <div className="flex items-center gap-x-3">
                        <input
                          type="checkbox"
                          className="text-blue-500 border-gray-300 rounded dark:bg-gray-900 dark:ring-offset-gray-900 dark:border-gray-700"
                        />
                        <span>Name</span>
                      </div>
                    </th>
                    <th
                      scope="col"
                      className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                    >
                      <button className="flex items-center gap-x-2">
                        <span>Category</span>
                      </button>
                    </th>
                    <th
                      scope="col"
                      className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                    >
                      <button className="flex items-center gap-x-2">
                        <span>Author Name</span>
                      </button>
                    </th>
                    <th
                      scope="col"
                      className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                    >
                      Rating
                    </th>
                    <th
                      scope="col"
                      className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                    >
                      Delete/Edit
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900">
                  {books.map((book, id) => (
                    <tr key={id}>
                      <td className="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                        <div className="inline-flex items-center gap-x-3">
                          <input
                            type="checkbox"
                            className="text-blue-500 border-gray-300 rounded dark:bg-gray-900 dark:ring-offset-gray-900 dark:border-gray-700"
                          />
                          <div className="flex items-center gap-x-2">
                            <img
                              className="object-cover w-10 h-10 rounded-full"
                              src={book.image}
                              alt=""
                            />
                            <div>
                              <h2 className="font-medium text-gray-800 dark:text-white ">
                                {book.name}
                              </h2>
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                        <div className="inline-flex items-center px-3 py-1 rounded-full gap-x-2 bg-emerald-100/60 dark:bg-gray-800">
                          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500"></span>
                          <h2 className="text-sm font-normal text-emerald-500">
                            {book.category}
                          </h2>
                        </div>
                      </td>

                      <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                        {book.authorName}
                      </td>
                      <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                        <div>
                          <StarRating rating={book.rating} />
                        </div>
                      </td>
                      <td className="px-4 py-3.5 text-xl font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                        <button className="text-red-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300 pr-4">
                          <MdDeleteOutline
                            onClick={() => handleDelete(book._id)}
                          ></MdDeleteOutline>
                        </button>
                        <Link to={`/updateBook/${book._id}`} className="text-green-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300">
                          <BiEdit></BiEdit>
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllBookTable;
