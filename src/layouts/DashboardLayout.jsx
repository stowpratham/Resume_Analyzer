import Navbar from '../components/Navbar.jsx';
import Sidebar from '../components/Sidebar.jsx';

function DashboardLayout({ children }) {
  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 py-6 lg:flex-row lg:px-8">
        <aside className="w-full lg:w-72">
          <Sidebar />
        </aside>
        <main className="flex-1 rounded-3xl bg-white p-6 shadow-soft">
          {children}
        </main>
      </div>
    </div>
  );
}

export default DashboardLayout;
