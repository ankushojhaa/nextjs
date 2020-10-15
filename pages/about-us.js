import React from 'react';
import Link from 'next/link';
import Layout from '../components/Layouts';
import styles from '../assets/css/styles.module.css';
import clsx from 'clsx';
import { motion } from 'framer-motion';
const axios = require('axios');

class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Title: String,
      Content: String
    };
    this.getApi = this.getApi.bind(this);
  }
  componentDidMount() {
    this.getApi();
  }

  getApi() {

    // Make a request for a user with a given ID
    axios.get('https://yra-strapi.herokuapp.com/pages/1')
      .then((response) => {
        this.setState({ Title: response.data.Title, Content: response.data.Content })
        // handle success
        console.log(response);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
      });
  }

  render() {
    return <Layout>
      <div className={styles.about_page}>
        <div className="container py-5">
        <motion.div initial="hidden" animate="visible" variants={{
            hidden: {
              scale: .8,
              opacity: 0
            },
            visible: {
              scale: 1,
              opacity: 1,
              transition: {
                delay: .4
              }
            },
          }}> 
          <div className="d-flex align-items-center">
            <ul className="list-inline mb-0">
              <li className="list-inline-item">
                <Link href="/"><a className="text-white"> Back </a></Link>
              </li>
            </ul>
            <h1 className={clsx(styles.abt_breadcrumb, "mb-0 ml-auto text-white")}>{this.state.Title}</h1>
          </div>
          <div className="pt-5">
            <p className="text-white">{this.state.Content}</p>
          </div>
          </motion.div>
        </div>
      </div>
    </Layout>
  }
}


export default About;