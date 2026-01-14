import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.scss";

const NavBar = ({getCartCount}) => {
  return (
    <>
      <section className={styles.navbar}>
        <nav className={styles.navbar_nav}>
          <NavLink to="/" className={styles.navbar_logo}>
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
      </section>
    </>
  );
};

export default NavBar;
