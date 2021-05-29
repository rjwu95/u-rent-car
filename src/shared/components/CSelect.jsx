import React from "react";
import { Select } from "antd";

const { OptGroup, Option } = Select;

export const CSelect = ({ label, options }) => {
  return (
    <OptGroup label={label}>
      {options.map((el) => (
        <Option key={el} value={el}>
          {el}
        </Option>
      ))}
    </OptGroup>
  );
};
