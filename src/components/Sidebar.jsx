import { NavLink } from 'react-router-dom';

const navItems = [
  { label: 'Overview', path: '/dashboard' },
  { label: 'Upload Resume', path: '/upload' },
  { label: 'Resume Analysis', path: '/analysis' },
];

function Sidebar() {
  return (
    <div className="space-y-6 rounded-3xl border border-slate-200 bg-white p-6 shadow-soft">
      <div>
        <p className="text-sm uppercase tracking-[0.24em] text-slate-500">Navigation</p>
        <h2 className="mt-3 text-2xl font-semibold text-slate-900">Workspace</h2>
      </div>
      <div className="space-y-2">
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `block rounded-2xl px-4 py-3 text-sm font-medium transition ${
                isActive ? 'bg-brand-50 text-brand-700' : 'text-slate-700 hover:bg-slate-100'
              }`
            }
          >
            {item.label}
          </NavLink>
        ))}
      </div>
    </div>
  );
}

export default Sidebar;
