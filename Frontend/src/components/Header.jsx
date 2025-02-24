import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/courses">Courses</Link>
      </nav>
    </header>
  );
};

export default Header;