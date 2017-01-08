// @flow
import React, { Component } from 'react';
import { Link } from 'react-router';
import styles from './Counter.css';

class Counter extends Component {
  props: {
    increment: () => void,
    incrementIfOdd: () => void,
    incrementAsync: () => void,
    decrement: () => void,
    counter: number
  };

  render() {
    const { increment, incrementIfOdd, incrementAsync, decrement, counter } = this.props;
    return (
      <div>
        TBD
      </div>
    );
  }
}

export default Counter;
