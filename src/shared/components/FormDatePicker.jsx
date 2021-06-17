import React from "react";
import { DatePicker } from "antd";
import moment from "moment";

export function FormDatePicker({ value, onChange, ...rest }) {
  return (
    <DatePicker
      {...rest}
      value={value ? moment(value) : null}
      onChange={(a) => onChange(a._d)}
    />
  );
}
