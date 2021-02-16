import React from "react";
import { Select } from "antd";

const { OptGroup, Option } = Select;

interface CSelectProps {
  label: string;
  options: string[];
}

export const CSelect: React.FC<CSelectProps> = ({ label, options }) => {
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
