import Layout from '../components/Layouts';
import styles from  '../assets/css/styles.module.css';
import Link from 'next/link';
const Index = (props) => (
  
  <Layout>

    <div className={styles.navbar_custom_links}>
        <ul className="list-inline">
          <li className="list-inline-item d-flex my-5">
            <Link href="/about-us"><a className="text-white">About Us</a></Link>
          </li>
          <li className="list-inline-item d-flex my-5">
            <Link href="/services"><a className="text-white">Services</a></Link>
          </li>
          <li className="list-inline-item d-flex my-5">
            <Link href="/projects"><a className="text-white">Projects</a></Link>
          </li>
        </ul>
      </div>

  </Layout>
);


export default Index;