import { Link } from 'react-router-dom';
import Footer from '../components/Footer.jsx';
import Navbar from '../components/Navbar.jsx';

const features = [
  {
    title: 'AI-powered Analysis',
    description: 'Get instant ATS compatibility scores, keyword guidance, and formatting recommendations.',
  },
  {
    title: 'Resume Optimization',
    description: 'Improve your resume with targeted skill matches, structure insights, and clarity tips.',
  },
  {
    title: 'Dashboard Insights',
    description: 'Track analysis history, resume uploads, and summary performance metrics over time.',
  },
];

function Home() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />
      <main className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <section className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
          <div className="space-y-6">
            <span className="inline-flex rounded-full bg-brand-50 px-4 py-1 text-sm font-semibold text-brand-700">
              Built for smarter hiring workflows
            </span>
            <h1 className="text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
              AI Resume Analyzer for modern job seekers and hiring teams
            </h1>
            <p className="max-w-xl text-lg leading-8 text-slate-600">
              Instantly evaluate resume performance, discover missing skills, and optimize your application for ATS compatibility.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Link
                to="/register"
                className="inline-flex items-center justify-center rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
              >
                Get started
              </Link>
              <Link
                to="/dashboard"
                className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-100"
              >
                View demo dashboard
              </Link>
            </div>
          </div>
          <div className="rounded-[2rem] bg-gradient-to-br from-brand-500 to-blue-600 px-8 py-10 text-white shadow-soft">
            <div className="space-y-4">
              <div className="rounded-3xl bg-white/10 p-6">
                <p className="text-sm uppercase tracking-[0.3em] text-white/70">Live Resume Score</p>
                <p className="mt-4 text-5xl font-semibold">92%</p>
                <p className="mt-2 text-sm text-white/80">Your resume matches top applicant tracking requirements.</p>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-3xl bg-white/10 p-5">
                  <p className="text-sm uppercase tracking-[0.3em] text-white/70">Skills Found</p>
                  <p className="mt-3 text-2xl font-semibold">18</p>
                </div>
                <div className="rounded-3xl bg-white/10 p-5">
                  <p className="text-sm uppercase tracking-[0.3em] text-white/70">ATS readiness</p>
                  <p className="mt-3 text-2xl font-semibold">High</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-16 space-y-8">
          <div className="grid gap-6 md:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.title} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-soft">
                <h3 className="text-xl font-semibold text-slate-900">{feature.title}</h3>
                <p className="mt-4 text-sm leading-6 text-slate-600">{feature.description}</p>
              </div>
            ))}
          </div>
          <div className="rounded-3xl bg-brand-600 px-8 py-10 text-white shadow-soft">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h2 className="text-2xl font-semibold">Optimize your resume faster.</h2>
                <p className="mt-2 text-sm text-white/90">
                  Join thousands of professionals using AI analysis to highlight the right skills for every role.
                </p>
              </div>
              <Link
                to="/upload"
                className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-brand-700 shadow-lg shadow-slate-900/10"
              >
                Upload resume now
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default Home;
