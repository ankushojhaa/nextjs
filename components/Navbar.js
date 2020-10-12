import Link from 'next/link';
import clsx from 'clsx';
import styles from  '../assets/css/styles.module.css';
const Navbar = () => (
  <nav className= {clsx(styles.navbar_custom, "navbar navbar-expand navbar-dark bg-dark position-relative")}>
    <div className="container-fluid">
      <Link href="/"><a className="navbar-brand">YRA Solution</a></Link>
      <div className={styles.conatct}>
          <p className="mb-0 text-white small">
              <span>+65 1234 568</span>
              <span className="mx-1">|</span>
              <span>yra@whatever.com</span>
          </p>
      </div>

    </div>
  </nav>
);

export default Navbar;