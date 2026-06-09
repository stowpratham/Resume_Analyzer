import { Link } from 'react-router-dom';
import DashboardLayout from '../layouts/DashboardLayout.jsx';
import { useAuth } from '../context/AuthContext.jsx';

const stats = [
  { label: 'Total reports', value: '14', icon: '📊' },
  { label: 'ATS score avg.', value: '88%', icon: '✅' },
  { label: 'Skills matched', value: '48', icon: '💼' },
];

const recentAnalyses = [
  { title: 'Senior Product Manager Resume', score: 91, date: 'May 21, 2026' },
  { title: 'Marketing Specialist CV', score: 83, date: 'May 16, 2026' },
  { title: 'UX Designer Portfolio', score: 78, date: 'May 10, 2026' },
];

function Dashboard() {
  const { user } = useAuth();

  return (
    <DashboardLayout>
      <div className="space-y-8">
        <section className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm text-slate-500">Welcome back, {user?.name || 'Analyst'}</p>
              <h1 className="mt-2 text-3xl font-semibold text-slate-900">Your resume intelligence hub</h1>
            </div>
            <div className="flex gap-3">
              <Link
                to="/upload"
                className="rounded-full bg-brand-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-brand-700"
              >
                Upload Resume
              </Link>
              <Link
                to="/analysis"
                className="rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-100"
              >
                View analysis
              </Link>
            </div>
          </div>
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            {stats.map((item) => (
              <div key={item.label} className="rounded-3xl bg-white p-6 shadow-soft">
                <p className="text-sm text-slate-500">{item.label}</p>
                <div className="mt-4 flex items-center gap-3 text-3xl font-semibold text-slate-900">
                  <span>{item.icon}</span>
                  {item.value}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="space-y-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="text-2xl font-semibold text-slate-900">Recent analyses</h2>
              <p className="text-sm text-slate-500">Review your latest resume insights and AI recommendations.</p>
            </div>
            <a href="/upload" className="rounded-full bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800">
              Upload new resume
            </a>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {recentAnalyses.map((item) => (
              <div key={item.title} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-soft">
                <p className="text-sm font-semibold text-slate-900">{item.title}</p>
                <p className="mt-3 text-4xl font-semibold text-brand-600">{item.score}%</p>
                <p className="mt-2 text-sm text-slate-500">{item.date}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </DashboardLayout>
  );
}

export default Dashboard;
