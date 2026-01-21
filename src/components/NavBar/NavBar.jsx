import { useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import styles from "./Navbar.module.scss";

const NavBar = ({getCartCount, scrollToProducts}) => {

  const location = useLocation();
  const navigate = useNavigate();
  const isHomePage = location.pathname === "/";

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const closeMenu = () => setIsMenuOpen(false);
 

  const handleProductsClick = (e) => {

    e.preventDefault();

    if(isHomePage) {
      scrollToProducts();
      closeMenu();
    return;
    }

    navigate("/", { state: { scrollToProducts: true } });
     closeMenu();

  }
  return (
    <header className={`${styles.navbar} ${isHomePage? styles.navbar__overlay : ""}`}>
      
        <nav className={styles.navbar__nav}>
          <div className={styles.navbar__left}>
          <NavLink to="/" className={styles.navbar__logo} onClick={closeMenu}>
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
            <a href="#" className={styles.link}>Shop</a>

            <a href="#" onClick={handleProductsClick} className={styles.link}>
              Products
            </a>
            <a href="#" className={styles.link}>Pages</a>
            <a href="#" className={styles.link}>Blog</a>
            </div>
            </div>


 <div className={styles.navbar__right}>

            <NavLink
              to="/cart"
              className={({ isActive }) =>
                isActive ? styles.active : undefined
              }
            >
              Cart <span className={styles.count}>({getCartCount})</span>
            </NavLink>

            <button
            type="button"
            className={styles.navbar__menuBtn}
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen((v) => !v)}
          >
            <span className={styles.navbar__menuIcon} />
          </button>


          </div>
          {isMenuOpen && (
          <div className={styles.mobileMenu}>
            <NavLink to="/" onClick={closeMenu} className={styles.mobileLink}>
              Home
            </NavLink>
            <a href="#" className={styles.mobileLink} onClick={(e) => { e.preventDefault(); closeMenu(); }}>
              Shop
            </a>
            <a href="#" className={styles.mobileLink} onClick={handleProductsClick}>
              Products
            </a>
            <a href="#" className={styles.mobileLink} onClick={(e) => { e.preventDefault(); closeMenu(); }}>
              Pages
            </a>
            <a href="#" className={styles.mobileLink} onClick={(e) => { e.preventDefault(); closeMenu(); }}>
              Blog
            </a>
          </div>
        )}
        </nav>
      
    </header>
  );
};

export default NavBar;
