import { Link, Outlet } from 'react-router-dom';
const Layuot = () => {
  return <div>
    <nav>
      <Link to="/">Home</Link>
      <Link to="/movies">Movies</Link>
    </nav>
    <Outlet />
  </div>
}

export default Layuot;