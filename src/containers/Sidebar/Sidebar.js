import React from 'react';
import styles from './Sidebar.module.css';
import { Link } from "react-router-dom";


const Sidebar = (props) => {
  let links = [{
    to: "/about",
    title: "About Me"
  },
  {
    to: "/education",
    title: "Education"
  },
  {
    to: "/experience",
    title: "Experience"
  },
  {
    to: "/more",
    title: "More About Me"
  }]
  return (
    <div className={styles.sidebar}>
      {links.map(linksObj => (
        <Link key={linksObj.title} to={linksObj.to} className={styles.linkTitle}>
          {linksObj.title}
        </Link>
      ))}
    </div>
  )
}

export default Sidebar;
