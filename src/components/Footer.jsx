import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white py-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 text-slate-500 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
        <p>© 2026 AI Resume Analyzer. Built for modern hiring workflows.</p>
        <div className="flex flex-wrap gap-3 text-sm">
          <Link to="/" className="hover:text-slate-900">
            Home
          </Link>
          <Link to="/login" className="hover:text-slate-900">
            Login
          </Link>
          <Link to="/register" className="hover:text-slate-900">
            Register
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
