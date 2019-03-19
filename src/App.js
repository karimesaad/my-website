import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import logo from './logo.svg';
import styles from './App.module.css';
import Sidebar from './containers/Sidebar';


// import Content from 'containers/Content';

const Title = (props) => {
  return (
    <div className={styles.title}>
    {props.children}
    </div>)
}

const TitleAndContent = (props) => {
  return (
    <div className={styles.titleAndContent}>
      {props.children}
    </div>
  )
}

const Content = (props) => {
  return (
    <div className={styles.content}>
      {props.children}
    </div>
  )
}

const About = (props) => {
  return (
    <div className={styles.about}>
      <Title>{props.name}</Title>
    </div>
  )
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
          <TitleAndContent>
            <Title></Title>
            <Content>
              <Route
                path="/about"
                render={props => <About {...props} name='About' />}
              />
              <Route
                path="/education"
                render={props => <About {...props} name='Education' />}
              />
              <Route
                path="/experience"
                render={props => <About {...props} name='Experience' />}
              />
              <Route
                path="/more"
                render={props => <About {...props} name='More About Me' />}
              />
              <Route path="/education" component={Education} />
              <Route path="/experience" component={Experience} />
              <Route path="/more" component={More} />
            </Content>
          </TitleAndContent>
        </div>
      </Router>
    );
  }
}

export default App;
