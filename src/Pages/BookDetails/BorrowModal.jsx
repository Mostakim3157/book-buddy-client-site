const BorrowModal = () => {
  return (
    <div>
      <form>
        {/* Email */}


        {/* Name */}


        {/*return date */}
        <div>
          <label
            htmlFor="birthday"
            className="block text-sm text-gray-500 dark:text-gray-300"
          >
            Birthday
          </label>

          <input
            type="date"
            placeholder="John Doe"
            className="block mt-2 w-full placeholder-gray-400/70 dark:placeholder-gray-500 rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300"
          />
        </div>
        {/* submit */}

        
      </form>
    </div>
  );
};

export default BorrowModal;