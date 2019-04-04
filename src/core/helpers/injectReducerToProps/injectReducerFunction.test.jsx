import React from 'react';
import jest from 'jest-mock';
import TestRenderer from 'react-test-renderer';
import injectReducerFunction from './injectReducerToProps';

test('inject function to props', () => {
  const mockFn = jest.fn();
  const inject = injectReducerFunction(mockFn);
  const TestComponent = inject((props) => {
    props.injectReducer();
    return <div>123</div>;
  });
  expect(mockFn.mock.calls.length).toBe(0);

  TestRenderer.create(new TestComponent());

  expect(mockFn.mock.calls.length).toBe(1);
});
