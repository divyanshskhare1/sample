
import React from 'react';
import 'antd/dist/antd.css';
import { Radio } from 'antd';

const RadioGroup = Radio.Group;

export default class SimpleRadio extends React.Component {

  render() {
    return (
        <RadioGroup name="radiogroup" defaultValue={1}>
        <Radio value={1}>A</Radio>
        <Radio value={2}>B</Radio>
        <Radio value={3}>C</Radio>
        <Radio value={4}>D</Radio>
      </RadioGroup>
    );
  }
}

          