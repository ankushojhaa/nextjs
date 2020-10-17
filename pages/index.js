import Layout from '../components/Layouts';
import styles from  '../assets/css/styles.module.css';
import Link from 'next/link';
import { motion } from 'framer-motion';


// Our custom easing


// Custom variant
const fadeInDown = {
  initial: {
    y: 0,
    opacity: 0,
    transition: { duration: 1.5}
  },
  animate: {
    y: 300,
    opacity: 1,
    transition: {
      duration: 1.5,
    }
  }
};
const Index = (props) => (
  
  <Layout>
    <motion.div variants={fadeInDown} initial='initial' animate='animate' exit={{ opacity: 0 }}>
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
      </motion.div>
  </Layout>
);


export default Index;