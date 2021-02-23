import React from "react";
import { Form, Button } from "antd";
import { formLayout } from "../utils/form";

interface SubmitButtonProps {
  label?: string;
}

export const SubmitButton: React.FC<SubmitButtonProps> = ({
  label = "등록",
}) => {
  return (
    <Form.Item wrapperCol={{ ...formLayout.wrapperCol, offset: 12 }}>
      <Button type="primary" htmlType="submit">
        {label}
      </Button>
    </Form.Item>
  );
};
