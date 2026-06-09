import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext.jsx';

function Navbar() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <header className="border-b border-slate-200 bg-white py-4 shadow-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link to="/" className="text-xl font-semibold text-slate-900">
          AI Resume Analyzer
        </Link>
        <nav className="flex items-center gap-4 text-sm text-slate-600">
          <Link to="/" className="hover:text-slate-900">
            Home
          </Link>
          {user ? (
            <>
              <Link to="/dashboard" className="hover:text-slate-900">
                Dashboard
              </Link>
              <button
                onClick={handleLogout}
                className="rounded-full bg-slate-900 px-4 py-2 text-white transition hover:bg-slate-800"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/login" className="hover:text-slate-900">
                Login
              </Link>
              <Link
                to="/register"
                className="rounded-full border border-brand-500 bg-brand-500 px-4 py-2 text-white transition hover:bg-brand-600"
              >
                Register
              </Link>
            </>
          )}
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
