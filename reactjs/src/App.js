import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./components/home";
import Login from "./components/login";
import Registration from "./components/registration";
import Dashboard from "./components/dashboard";

function App() {
  return (
    <div>
      <nav className=" bg-gray-800">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-between">
            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
              <div className="flex flex-shrink-0 items-center">
                <img
                  className="h-8 w-auto  hover:bg-blue-600"
                  src="https://softcreation.tech/assets/img/soft%20logo1.png"
                  alt="Your Company"
                />
              </div>
              <div className="hidden sm:ml-6 sm:block">
                <div className="flex space-x-4">
                  <Link
                    to="/home"
                    className="text-gray-300 hover:bg-blue-600 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                  >
                    Home
                  </Link>

                  <Link
                    to="/dashboard"
                    className="text-gray-300 hover:bg-blue-600 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                  >
                    Dashboard
                  </Link>
                  <Link
                    to="/login"
                    className="text-gray-300 hover:bg-blue-600 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                  >
                    Login
                  </Link>
                  <Link
                    to="/registration"
                    className="text-gray-300 hover:bg-blue-600 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                  >
                    Registration
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <div className="container">
        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/Registration" element={<Registration />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
