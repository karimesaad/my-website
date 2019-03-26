import React from 'react';
import styles from './Sidebar.module.css';
import { Link } from "react-router-dom";
import picture from '../../media/picture.jpg';

const Picture = (props) => {
  return(
    <div className={styles.pictureCropper}>
      <img className={styles.picture} src={picture} alt="picture" />
    </div>)
}

const Bio = (props) => {
  return(
    <div className={styles.bio}>
     <h4>Hi, welcome to my page, here's some info about me:</h4>
    
       I'm a software engineer working for Target Corporate.<br/>
       I'm from Chihuahua, Mexico, but I currently live in Minneapolis, MN.<br/>
       I'm passionate about women/gender/racial issues.<br/>
       I like to volunteer, create art, and learn. <br/>
    </div>
    )
}

const LinksAndBio = (props) => {
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
  return(
    <div className={styles.linksAndBio}>
      <div className={styles.name}>Karime Saad</div>
      <Bio/>
      {links.map(linksObj => (
        <Link key={linksObj.title} to={linksObj.to} className={styles.linkTitle}>
          {linksObj.title}<br/>
        </Link>
      ))}
    </div>
    )
}

const Sidebar = (props) => {

  return (
    <div className={styles.sidebar}>
      <Picture/>
      <LinksAndBio/>
    </div>
  )
}

export default Sidebar;
