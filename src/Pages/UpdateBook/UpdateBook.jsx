import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import axios from "axios";
import { useParams } from "react-router-dom";
import toast from "react-hot-toast";
import { data } from "autoprefixer";

const UpdateBook = () => {

  const {id} = useParams()
  console.log(id);
  
  const handleUpdateBook = async (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const authorName = form.authorName.value;
    const rating = form.rating.value;
    const category = form.category.value;
    const newQuantity = parseInt(form.quantity.value);
    const quantity = newQuantity;
    const image = form.image.value;
    const description = form.description.value;
    const someContents = form.someContents.value;

    const formData = {
      name,
      authorName,
      rating,
      category,
      quantity,
      image,
      description,
      someContents,
    };

    console.log(formData);

    try {
      const res = await axios.put(`https://y-rust-seven.vercel.app/allBook/${id}`, formData, {withCredentials: true});
      toast.success("Successfully Updated ");
      console.log(res);
    } catch (err) {
      console.error(err);
    
    }



  };

  return (
    <div>
      <h3 className="text-center text-3xl font-bold mb-12 ">
        Update your <span className="text-[#FF8C32]">book</span>
      </h3>

      <form onSubmit={handleUpdateBook} className="grid md:grid-cols-2 gap-8">
        {/*Name */}
        <div>
          <label
            htmlFor="username"
            className="block text-sm text-gray-500 dark:text-gray-300"
          >
            Name
          </label>
          <input
            defaultValue={name}
            name="name"
            type="text"
            placeholder="Book Name"
            className="block mt-2 w-full placeholder-gray-400/70 dark:placeholder-gray-500 
                   rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-gray-700 
                   focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 
                   focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 
                   dark:focus:border-blue-300"
          />
        </div>
        {/*Author name */}
        <div>
          <label
            htmlFor="username"
            className="block text-sm text-gray-500 dark:text-gray-300"
          >
            Author Name
          </label>
          <input
            name="authorName"
            type="text"
            placeholder="Author Name"
            className="block mt-2 w-full placeholder-gray-400/70 dark:placeholder-gray-500 
                   rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-gray-700 
                   focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 
                   focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 
                   dark:focus:border-blue-300"
          />
        </div>
        {/* Category */}
        <div>
          <label
            htmlFor="username"
            className="block text-sm text-gray-500 dark:text-gray-300"
          >
            Category
          </label>
          <input
            name="category"
            type="text"
            placeholder="Category "
            className="block mt-2 w-full placeholder-gray-400/70 dark:placeholder-gray-500 
                   rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-gray-700 
                   focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 
                   focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 
                   dark:focus:border-blue-300"
          />
        </div>

        {/* rating */}
        <div className="">
          <label
            htmlFor="username"
            className="block text-sm text-gray-500 dark:text-gray-300"
          >
            Rating
          </label>
          <select
            id="rating"
            name="rating"
            className="block mt-2 w-full placeholder-gray-400/70 dark:placeholder-gray-500 
              rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-gray-700 
              focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 
              focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 
              dark:focus:border-blue-300"
          >
            {[1, 2, 3, 4, 5].map((value) => (
              <option key={value} value={value}>
                {value}
              </option>
            ))}
          </select>
        </div>
        {/* quantity */}
        <div>
          <label
            htmlFor="username"
            className="block text-sm text-gray-500 dark:text-gray-300"
          >
            Quantity
          </label>
          <input
            name="quantity"
            type="number"
            placeholder="0"
            className="block mt-2 w-full placeholder-gray-400/70 dark:placeholder-gray-500 
                   rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-gray-700 
                   focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 
                   focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 
                   dark:focus:border-blue-300"
          />
        </div>
         {/* Short Description */}
         <div>
          <label
            htmlFor="username"
            className="block text-sm text-gray-500 dark:text-gray-300"
          >
            Short Description
          </label>
          <input
            name="description"
            required
            type="text"
            placeholder="Short Description "
            className="block mt-2 w-full placeholder-gray-400/70 dark:placeholder-gray-500 
                   rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-gray-700 
                   focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 
                   focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 
                   dark:focus:border-blue-300"
          />
        </div>
{/* Some contents */}
<div>
          <label
            htmlFor="username"
            className="block text-sm text-gray-500 dark:text-gray-300"
          >
            Some contents
          </label>
          <input
            name="someContents"
            required
            type="text"
            placeholder="Some contents "
            className="block mt-2 w-full placeholder-gray-400/70 dark:placeholder-gray-500 
                   rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-gray-700 
                   focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 
                   focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 
                   dark:focus:border-blue-300"
          />
        </div>
        {/* Image URL */}
        <div>
          <label
            htmlFor="username"
            className="block text-sm text-gray-500 dark:text-gray-300"
          >
            Image URL
          </label>
          <input
            name="image"
            type="text"
            placeholder="Image URL "
            className="block mt-2 w-full placeholder-gray-400/70 dark:placeholder-gray-500 
                   rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-gray-700 
                   focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 
                   focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 
                   dark:focus:border-blue-300"
          />
        </div>

        {/* Add */}
        <div className="col-span-2">
          <button className="px-6 w-full py-2 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-[#FF8C32] rounded-lg hover:bg-[#dd680f] focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateBook;
