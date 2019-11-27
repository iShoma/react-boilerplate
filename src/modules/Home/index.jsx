import React from 'react';
import { hot } from 'react-hot-loader/root';
import styles from './home.scss';
import sum from './sum';

// eslint-disable-next-line react/prefer-stateless-function
class Home extends React.Component {
  render() {
    return (<div className={styles.wrapper}>{ sum(1, 3) }</div>);
  }
}

Home.propTypes = {};

export default hot(Home);
