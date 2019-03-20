import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import logo from './logo.svg';
import styles from './App.module.css';
import Sidebar from './containers/Sidebar';


// import Content from 'containers/Content';

const Title = (props) => {
  return (
    <div className={styles.title}>
    {props.name}
    </div>)
}

const TitleAndContent = ({match}) => {
  return (
    <div className={styles.titleAndContent}>
      <Title name={match.params.id}></Title>
      <Content component={match.params.id}></Content>
    </div>
  )
}

const Content = (props) => {
  let component;
  switch(props.component){
    case 'about':
      component = <About></About>
    break;
    case 'experience':
      component = <Experience></Experience>
    break;
    case 'education':
      component = <Education></Education>
    break;
    case 'more':
      component = <More></More>
    break;
  }
  return (
    <div className={styles.content}>
      {component}
    </div>
  )
}

const About = (props) => {
  return (<div className={styles.about}></div>)
}

const Education = (props) => {
  return (<div className={styles.education}></div>)
}

const Experience = (props) => {
  return (<div className={styles.experience}></div>)
}

const More = (props) => {
  return (<div className={styles.more}></div>)
}


class App extends Component {
  render() {
    return (
      <Router>
        <div className={styles.App}>
          <Sidebar></Sidebar>
          <Route
            path="/:id"
            render={props => <TitleAndContent {...props} />}
          />
        </div>
      </Router>
    );
  }
}

export default App;
