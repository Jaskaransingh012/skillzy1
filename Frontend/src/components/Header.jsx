// Header.jsx
import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../AuthContext';
import logo from "../assets/logo.png";

const Header = () => {
  const { isAuthenticated, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <header className="flex justify-between items-center px-7 py-3 bg-white shadow-md">
      {/* Logo */}
      <Link to="/" className="flex items-center space-x-2">
        <img src={logo} alt="Skilzy Logo" className="h-12 w-13" />
      </Link>

      {/* Navigation Links */}
      <nav className="flex space-x-8 text-gray-700 text-sm font-medium">
        <Link to="/" className="hover:text-black transition">Home</Link>
        <Link to="/courses" className="hover:text-black transition">Courses</Link>
        <Link to="/about" className="hover:text-black transition">About</Link>
        <Link to="/favorites" className="hover:text-black transition">Favorite</Link>
      </nav>

      {/* Authentication Buttons */}
      <div className="flex items-center space-x-6">
        {isAuthenticated ? (
          <button
            onClick={handleLogout}
            className="bg-red-500 text-white text-sm px-6 py-2 rounded-full hover:bg-red-600 transition"
          >
            Log Out
          </button>
        ) : (
          <>
            <Link to="/signin" className="border-2 border-blue-500 px-6 py-2 rounded-full text-gray-600 text-sm hover:text-black transition">
              Sign in
            </Link>
            <Link
              to="/signup"
              className="bg-[#665EFF] text-white text-sm px-6 py-2 rounded-full hover:bg-[#564EDF] transition"
            >
              Sign Up
            </Link>
          </>
        )}
      </div>
    </header>
  );
};

export default Header;