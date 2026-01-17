import { NavLink, useLocation } from "react-router-dom";
import styles from "./Navbar.module.scss";

const NavBar = ({getCartCount}) => {

  const location = useLocation();
  const isHomePage = location.pathname === "/";
  return (
    <header className={`${styles.navbar} ${isHomePage? styles.navbar__overlay : ""}`}>
      
        <nav className={styles.navbar_nav}>
          <NavLink to="/" className={styles.navbar__logo}>
            React E- Shop
          </NavLink>
          <div className={styles.navbar__links}>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? styles.active : undefined
              }
            >
              Home
            </NavLink>

            <NavLink
              to="/cart"
              className={({ isActive }) =>
                isActive ? styles.active : undefined
              }
            >
              Cart <span className={styles.navbar__count}>({getCartCount})</span>
            </NavLink>
          </div>
        </nav>
      
    </header>
  );
};

export default NavBar;
