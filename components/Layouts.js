import Head from 'next/head';
import Navbar from './Navbar';
import styles from  '../assets/css/styles.module.css';
import clsx from 'clsx';
const Layout = (props) => (
  <div>
    <Head>
      <title>Yra</title>
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.css"/>
    </Head>
    <div className={styles.main_layout}>
      <Navbar/>
      <div className={styles.main_layout_inner}>
        <div className={styles.video_style}>
          <video  controls="" autoplay="" fullscreen='' name="media" className={styles.full_width_video}>
            <source  src="https://assets.mixkit.co/videos/preview/mixkit-a-man-paddling-on-a-board-near-the-seashore-1578-small.mp4" type="video/mp4"></source>
          </video>
        </div>
      {props.children}
      </div>
    </div>
  </div>
);

export default Layout;