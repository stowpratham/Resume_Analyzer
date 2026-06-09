import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div className="min-h-screen bg-slate-50 px-4 py-20">
      <div className="mx-auto max-w-3xl rounded-[2rem] bg-white p-14 text-center shadow-soft">
        <p className="text-sm uppercase tracking-[0.32em] text-brand-600">Page not found</p>
        <h1 className="mt-6 text-5xl font-semibold text-slate-900">404</h1>
        <p className="mt-4 text-lg leading-8 text-slate-600">
          Oops! The page you are looking for does not exist. Head back to the home page to continue exploring.
        </p>
        <Link
          to="/"
          className="mt-8 inline-flex rounded-full bg-slate-900 px-7 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
        >
          Return home
        </Link>
      </div>
    </div>
  );
}

export default NotFound;
