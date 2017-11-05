import React from "react";
import PropTypes from "prop-types";

import { Select } from "antd";
const Option = Select.Option;

const Picker = ({ value, onChange, options }) => (
  <span>
    <Select
      defaultValue={value}
      style={{ width: 120 }}
      onChange={(value, label) => onChange(value)}
    >
      {options.map(option => (
        <Option value={option} key={option}>
          {option}
        </Option>
      ))}
    </Select>
  </span>
);

Picker.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};

export default Picker;
