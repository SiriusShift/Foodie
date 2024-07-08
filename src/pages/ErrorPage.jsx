import { useRouteError, Link } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div className="h-full text-center flex flex-col my-auto">
      <h1 className="text-3xl">Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
      <div className="mt-4">
        <Link className="px-4 py-2 bg-red-500 " to="/">Home</Link>        
      </div>
    </div>
  );
}