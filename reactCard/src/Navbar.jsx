import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

function Navbar() {
    return (
        <nav className="bg-gray-900 shadow-md">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
            
            {/* Navigation Links */}
            <ul className="flex gap-8 text-sm font-medium">
            <li>
                <NavLink
                to="/"
                className={({ isActive }) =>
                    `transition duration-200 ${
                    isActive
                        ? "text-cyan-400"
                        : "text-gray-300 hover:text-white"
                    }`
                }
                >
                Home
                </NavLink>
            </li>

            <li>
                <NavLink
                to="/about"
                className={({ isActive }) =>
                    `transition duration-200 ${
                    isActive
                        ? "text-cyan-400"
                        : "text-gray-300 hover:text-white"
                    }`
                }
                >
                About
                </NavLink>
            </li>

            <li>
                <NavLink
                to="/contact"
                className={({ isActive }) =>
                    `transition duration-200 ${
                    isActive
                        ? "text-cyan-400"
                        : "text-gray-300 hover:text-white"
                    }`
                }
                >
                Contact
                </NavLink>
            </li>
            </ul>

        </div>
        </nav>
    );
    }

export default Navbar;