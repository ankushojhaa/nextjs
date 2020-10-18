import React from 'react';
import Link from 'next/link';
import Layout from '../components/Layouts';
import styles from '../assets/css/styles.module.css';
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

  function About ({ post }) {
    return (
    <Layout>
       <motion.div variants={fadeInUp} initial='initial' animate='animate' exit={{ opacity: 0 }}>
      <div className={styles.about_page}>
        <div className="container py-5">
       
          <div className="d-flex align-items-center">
            <ul className="list-inline mb-0">
              <li className="list-inline-item">
                <Link href="/"><a className="text-white"> Back </a></Link>
              </li>
            </ul>
            <h1 className={clsx(styles.abt_breadcrumb, "mb-0 ml-auto text-white")}>{post.Title}</h1>
          </div>
          <div className="pt-5">
            <p className="text-white">{post.Content}</p>
          </div>
        </div>
      </div>
      </motion.div>
    </Layout>
  )
}



export async function getStaticProps() {
  {/* Call an external API endpoint to get posts. */}
  {/* You can use any data fetching library */}
  let post;

  const res = await axios('https://yra-strapi.herokuapp.com/pages/1').then((response) => {
    post=response.data;
  })
  {/* By returning { props: posts }, the Blog component */}
  {/* will receive `posts` as a prop at build time */}
  return {
    props: {
      post,
    },
  }
}

export default About;