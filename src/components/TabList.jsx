import { Link } from "react-router-dom";
export default function TabList({ children, ...props }) {
  return (
      <>
        <Link to={"/home"}>
          <p
            className="block px-4 py-2 lg:p-0 font-poppins lg:font-medium hover:bg-gray-100"
          >
            Home
          </p>
        </Link>
        <Link
            to={"/recipe"}
          >
        <p className="block px-4 py-2 lg:p-0 font-poppins lg:font-medium hover:bg-gray-100">
            Recipe
        </p>
        </Link>
        <Link
        to={"/social"}
        ><p className="block px-4 py-2 lg:p-0 font-poppins lg:font-medium hover:bg-gray-100">
            Social
        </p>
        </Link>
        <Link
        to={"/meal-planner"}
        ><p className="block px-4 py-2 lg:p-0 font-poppins lg:font-medium hover:bg-gray-100">
            Meal Planner
        </p>
        </Link>
    </>
  );
}
