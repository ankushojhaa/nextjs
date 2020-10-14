import Link from 'next/link';
import clsx from 'clsx';
import styles from  '../assets/css/styles.module.css';
import logoYra from '../public/yralogo.png';
const Navbar = () => (
  <nav className= {clsx(styles.navbar_custom, "navbar navbar-expand navbar-dark bg-dark position-relative")}>
    <div className="container-fluid">
      <Link href="/"><a className="navbar-brand"><img src={logoYra} className="img-fluid" alt="logo" /></a></Link>
      <div className={styles.conatct}>
          <p className="mb-0 text-white small">
          <span><a href="tel:65-81659995">+65 81659995</a></span>
              <span className="mx-1">|</span>
              <span>yra@support.com</span>
          </p>
      </div>

    </div>
  </nav>
);

export default Navbar;