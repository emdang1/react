import React from 'react';
import logo from './logo.svg';
import './App.css';
import { render } from '@testing-library/react';

const Button = function(props) {
  return <button onClick={props.click}>{props.text}</button>;
};

const Display = function(props) {
  return <p>{props.value}</p>;
};

const Model = function() {
  return (
    <div>
      <Button click={() => alert('Add')} text='Buy One' />
      <Display value={0} />
      <Button click={() => alert('Decrease')} text='Eat One' />
    </div>
  );
};

export default Model;
