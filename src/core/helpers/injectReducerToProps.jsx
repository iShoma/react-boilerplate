import React from 'react';

export default injectReducerFunction => Component => props => (
  <Component
    injectReducer={injectReducerFunction}
    {...props}
  />
);
