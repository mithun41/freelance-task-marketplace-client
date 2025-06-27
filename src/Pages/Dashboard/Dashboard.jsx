// src/layout/DashboardLayout.jsx
import { Outlet, NavLink, useNavigate } from "react-router";

const DashboardLayout = () => {
  const navigate = useNavigate();
  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-100 p-4">
        <h2 className="text-xl font-bold mb-4">Dashboard</h2>
        <nav className="flex flex-col gap-2">
          <NavLink to="/dashboard" className="hover:underline">
            Overview
          </NavLink>
          <NavLink to="/addtask" className="hover:underline">
            Add Tasks
          </NavLink>
          <NavLink to="/my-posted-tasks" className="hover:underline">
            My Posted Tasks
          </NavLink>
        </nav>
      </aside>

      {/* Main content with cards */}
      <main className="flex-1 p-6">
        <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-8">
          <h1 className="text-3xl font-bold mb-8">Welcome to Your Dashboard</h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl">
            {/* Card 1 */}
            <div
              onClick={() => navigate("/addtask")}
              className="cursor-pointer bg-white shadow-md p-6 rounded-lg hover:shadow-lg transition duration-300"
            >
              <h2 className="text-xl font-semibold mb-2">Add Tasks</h2>
              <p className="text-gray-600">
                View and manage your accepted tasks.
              </p>
            </div>

            {/* Card 2 */}
            <div
              onClick={() => navigate("/my-posted-tasks")}
              className="cursor-pointer bg-white shadow-md p-6 rounded-lg hover:shadow-lg transition duration-300"
            >
              <h2 className="text-xl font-semibold mb-2">My Posted Tasks</h2>
              <p className="text-gray-600">Check the jobs you have posted.</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default DashboardLayout;
