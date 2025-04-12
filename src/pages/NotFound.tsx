
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-portfolio-dark">
      <div className="text-center px-4">
        <h1 className="text-8xl font-bold text-portfolio-orange mb-4">404</h1>
        <p className="text-2xl text-white mb-8">Oops! Page not found</p>
        <p className="text-gray-400 mb-8 max-w-lg mx-auto">
          The page you are looking for might have been removed, had its name changed,
          or is temporarily unavailable.
        </p>
        <Link 
          to="/" 
          className="bg-portfolio-brown text-white px-6 py-3 rounded-lg transition-all duration-200 hover:bg-portfolio-orange transform hover:scale-95"
        >
          Return to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
