import React, { Component } from 'react';
import logo from './logo.svg';
import styles from './App.module.css';
import Sidebar from './containers/Sidebar';
// import Content from 'containers/Content';

const Title = (props) => {
  return (<div className={styles.title}></div>)
}

const ContentChildren = (props) => {
  return (<div className={styles.contentChildren}></div>)
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


class App extends Component {
  render() {
    return (
      <div className={styles.App}>
        <Sidebar></Sidebar>
        <TitleAndContent>
          <Title></Title>
          <Content>
            <ContentChildren></ContentChildren>
          </Content>
        </TitleAndContent>
      </div>
    );
  }
}

export default App;
