import React from 'react';

class Home extends React.Component {
  constructor(props) {
    super(props);

    props.injectReducer('home', (state = { a: 0 }) => ({
      a: state.a + 1,
    }));
  }

  render() {
    return (<div>123</div>);
  }

}

export default Home;
