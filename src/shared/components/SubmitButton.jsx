import React from "react";
import { Form, Button } from "antd";
import { formLayout } from "../utils/form";

export const SubmitButton = ({ label = "등록", offset = 12 }) => {
  return (
    <Form.Item wrapperCol={{ ...formLayout.wrapperCol, offset }}>
      <Button type="primary" htmlType="submit">
        {label}
      </Button>
    </Form.Item>
  );
};
