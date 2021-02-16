import React from "react";
import { Form, Button } from "antd";
import { formLayout } from "../utils/form";

export const SubmitButton = () => {
  return (
    <Form.Item wrapperCol={{ ...formLayout.wrapperCol, offset: 12 }}>
      <Button type="primary" htmlType="submit">
        등록
      </Button>
    </Form.Item>
  );
};
