import Layout from '../components/Layouts';
import Link from 'next/link';
import styles from  '../assets/css/styles.module.css';
import clsx from 'clsx';
import { motion } from 'framer-motion';
const axios = require('axios');
{/* Our custom easing */}
let easing = [0.6, -0.05, 0.01, 0.99];

{/* Custom variant */}
const fadeInUp = {
  initial: {
    y: 500,
    opacity: 0,
    transition: { duration: 1, ease: easing }
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
      ease: easing
    }
  }
};
const Projects = () => (
    <Layout>
    <div className={styles.projects_page}>
    <div className="container py-5">
    <motion.div variants={fadeInUp} initial='initial' animate='animate' exit={{ opacity: 0 }}>
        <div className="d-flex align-items-center">
        <ul className="list-inline mb-0">
            <li className="list-inline-item">
              <Link href="/"><a className="text-white"> Back </a></Link>
            </li>
        </ul>
        <h1 className={clsx(styles.abt_breadcrumb, "mb-0 ml-auto text-white")}>Projects</h1>
      </div>
      <div className="pt-5">
          <p className="text-white">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
           Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
           and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
      </div>
      </motion.div>
    </div>
  </div>
</Layout>
);

export default Projects;