import { NavLink } from 'react-router-dom';
import '../index.css'

function Navigation() {
  return (
    <>
    <nav className='navigation'>
 <NavLink
        to="/"
        className=

        {({ isActive }) => isActive ? "active" : ""}
      >
        Home
      </NavLink>

      <NavLink
        to="/about"
        className={({ isActive }) => isActive ? "active" : ""}
      >
        About
      </NavLink>

      <NavLink
        to="/students"
        className={({ isActive }) => isActive ? "active" : ""}
      >
        Students
      </NavLink>

      <NavLink
        to="/courses"
        className={({ isActive }) => isActive ? "active" : ""}
      >
        Courses
      </NavLink>

      <NavLink
        to="/contact"
        className={({ isActive }) => isActive ? "active" : ""}
        >
      
        Contact
      </NavLink>
    </nav>
     
    </>
  );
}
export default Navigation