import React from 'react';
import styles from './Sidebar.module.css';
import { Link } from "react-router-dom";


const Sidebar = (props) => {
  return (
    <div className={styles.sidebar}>
      <Link className={styles.linkTitle} to="/about">About Me</Link>
      <Link className={styles.linkTitle} to="/education">Education</Link>
      <Link className={styles.linkTitle} to="/experience">Experience</Link>
      <Link className={styles.linkTitle} to="/more">More about me</Link>
    </div>
  )
}

export default Sidebar;
