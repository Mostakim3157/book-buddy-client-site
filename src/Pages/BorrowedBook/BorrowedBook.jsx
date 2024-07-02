import axios from "axios";
import { useContext, useEffect, useState } from "react";
import ReactStars from "react-rating-stars-component";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";
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

const BorrowedBook = () => {


  const {user} = useContext(AuthContext)
  const [books,setBooks] = useState()

useEffect(()=>{
  const fetchData = async ()=>{
    try{
      const res = await axios.get(`https://y-rust-seven.vercel.app/borrowedBookByEmail/${user?.email}`, {withCredentials: true})

      setBooks(res.data);
    }
    catch(err){
      console.log(err);
    }
  }
  fetchData()
},[user?.email])


const handleDelete = (_id, newId) =>{
//   console.log(_id);
// console.log(newId);

  fetch(`https://y-rust-seven.vercel.app/borrowedBook/${ _id}/${newId}`, {
        method: "DELETE",
      },  {credentials: "include"})
        .then((res) => res.json())
        .then((data) => {
          toast.success("Successfully returned.")
          window.location.reload();
          if (data.deletedCount > 0) {
           
            const remaining = books?.filter((a) => a._id !== _id);
            setBooks(remaining);
            
          }


          
        });




      }

  return (
    <div>
      <h2 className="text-3xl text-center mb-8 font-bold  dark:text-white">
        Your <span className="text-[#FF8C32]">Borrowed</span> Books
      </h2>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">

        {/* cart */}
       {
        books?.map((book, id)=> <div key={id} className="  bg-white rounded-lg shadow-lg dark:bg-gray-800">
        <div
          className=" bg-cover rounded-lg"
          
        >
          <img src={book.image} className="rounded-t-lg" alt="" />
        </div>

        <div className=" p-4 md:p-4">
          <h1 className="text-xl font-bold text-gray-800 dark:text-white">
            {book.name}
          </h1>

          <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
            {book.category}
          </p>

          <div className="flex mt-2 item-center">
            <div>
              <StarRating rating={book.rating} />
            </div>
          </div>

          <div className="mt-2">
            <div>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                Borrow Date: {book.borrowDate}
              </p>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                Return Date: {book.returnDate}
              </p>
            </div>
            <button onClick={()=>(handleDelete(book._id, book.newId))} className="px-2 py-1 mt-2 text-xs font-bold text-white uppercase transition-colors duration-300 transform bg-[#FF8C32] rounded dark:bg-gray-700 hover:bg-gray-700 dark:hover:bg-gray-600 focus:outline-none focus:bg-gray-700 dark:focus:bg-gray-600">
              Return
            </button>
          </div>
        </div>
      </div>)
       }

      </div>
    </div>
  );
};

export default BorrowedBook;
