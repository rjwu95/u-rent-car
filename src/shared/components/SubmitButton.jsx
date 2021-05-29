import React from "react";
import { Form, Button } from "antd";
import { formLayout } from "../utils/form";

export const SubmitButton = ({ label = "등록" }) => {
  return (
    <Form.Item wrapperCol={{ ...formLayout.wrapperCol, offset: 12 }}>
      <Button type="primary" htmlType="submit">
        {label}
      </Button>
    </Form.Item>
  );
};
