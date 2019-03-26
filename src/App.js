import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import logo from './logo.svg';
import styles from './App.module.css';
import Sidebar from './containers/Sidebar';
import About from './components/About';
import Education from './components/Education';
import Experience from './components/Experience';
import More from './components/More';

// import Content from 'containers/Content';

const Title = (props) => {
  return (
    <div className={props.className}>{props.name}</div>
  )
}

const TitleAndContent = (props) => {
  return(
    <div className={props.className}>
    <Title className={styles.title} name={props.match.params.id}/>
    <Content className={styles.content} component={props.match.params.id}/>
    </div>
  )
}

const Content = (props) => {
  switch (props.component) {
    case "about":
      return <About/>;
      break;
    case "education":
      return <Education/>;
      break;
    case "experience":
      return <Experience/>;
      break;
    case "more":
      return <More/>;
      break;
  }
}

class App extends Component {
  render() {
    return (
      <Router>
        <div className={styles.App}>
          <Sidebar/>
          <Route
            path="/:id"
            render={props => (<TitleAndContent className={styles.titleAndContent} {...props}/>)}
          >
          </Route>
        </div>
      </Router>
    )
  }
}

export default App;
