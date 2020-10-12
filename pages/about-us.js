import Link from 'next/link';
import Layout from '../components/Layouts';
import styles from  '../assets/css/styles.module.css';
import clsx from 'clsx';
const About = () => (
  <Layout>
    <div className={styles.about_page}>
      <div className="container py-5">
          <div className="d-flex align-items-center">
          <ul className="list-inline mb-0">
              <li className="list-inline-item">
                <Link href="/"><a className="text-white"> Back </a></Link>
              </li>
          </ul>
          <h1 className={clsx(styles.abt_breadcrumb, "mb-0 ml-auto text-white")}>About</h1>
        </div>
        <div className="pt-5">
            <p className="text-white">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
             Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
             and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        </div>
      </div>
    </div>
  </Layout>
);

export default About;