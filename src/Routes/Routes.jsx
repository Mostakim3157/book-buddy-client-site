import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import AddBook from "../Pages/AddBook/AddBook";
import AllBooks from "../Pages/AllBooks/AllBooks";
import Error from "../Pages/Error/Error";
import BookDetails from "../Pages/BookDetails/BookDetails";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import BorrowedBook from "../Pages/BorrowedBook/BorrowedBook";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import SingleBookCategory from "../Pages/Home/BookCategory/SingleBookCategory";
import UpdateBook from "../Pages/UpdateBook/UpdateBook";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement: <Error></Error>,
      children:[
        {
            path: "/",
            element: <Home></Home>
        },
        {
            path: "/addBook",
            element: <PrivateRoute><AddBook></AddBook></PrivateRoute>
        },
        {
            path: "/allBooks",
            element: <PrivateRoute><AllBooks></AllBooks></PrivateRoute>,
            loader: ()=>fetch("https://y-rust-seven.vercel.app/allBook", {credentials: "include"})
        },
        {
            path: "/bookByCat/:category",
            element: <SingleBookCategory></SingleBookCategory>
        },
        {
            path: "/borrowedBook",
            element: <PrivateRoute><BorrowedBook></BorrowedBook></PrivateRoute>
        },
        {
            path: `/bookDetails/:id`,
            element:<PrivateRoute> <BookDetails></BookDetails></PrivateRoute>,
            loader: ({params}) => fetch(`https://y-rust-seven.vercel.app/allBook/${params.id}`)
        },
        {
            path: "/login",
            element: <Login></Login>
        },
        {
            path: "/register",
            element: <Register></Register>
        },
        {
            path: "/updateBook/:id",
            element:<PrivateRoute><UpdateBook></UpdateBook></PrivateRoute>,
            loader: ({params})=> fetch(`https://y-rust-seven.vercel.app/allBook/${params.id}`, )
        }
        
      ]
    },
  ]);


  export default router