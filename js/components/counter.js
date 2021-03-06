import React from 'react';
const { div, span } = React.DOM;

import component from '../component';
import Clicker from './clicker';

const Counter =
  component('Counter', () =>
    div({},
      span({}, "Clicks:"),
      Clicker()));

export default Counter;
