import styles from "./Footer.module.scss";

const Footer = () => {
  return (
<footer className={styles.footer}>
      <div className={styles.footer__inner}>
        <div className={styles.footer__content}>
          <div>
            <h4>Company</h4>
            <ul>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Locations</a></li>
            </ul>
          </div>

          <div>
            <h4>Customer Care</h4>
            <ul>
              <li><a href="#">Help & FAQs</a></li>
              <li><a href="#">Return Policy</a></li>
              <li><a href="#">Size Guide</a></li>
            </ul>
          </div>

          <div>
            <h4>Terms & Policies</h4>
            <ul>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms & Conditions</a></li>
              <li><a href="#">Shipping Info</a></li>
            </ul>
          </div>

          <div>
            <h4>Follow Us</h4>
            <ul>
              <li><a href="#">Instagram</a></li>
              <li><a href="#">Facebook</a></li>
              <li><a href="#">TikTok</a></li>
            </ul>
          </div>
        </div>

        <p className={styles.footer__bottom}>
          © {new Date().getFullYear()} React E-Shop. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;