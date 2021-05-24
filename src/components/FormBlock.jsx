import React from "react";
import { Form } from "antd";
import { formLayout, onFinishFailed, validateMessages } from "../utils/form";
import styled from "styled-components";

const FormContainer = styled(Form)`
  .formBlock {
    border: solid grey 1px;
    padding: 10px;
    margin: 5px;
  }
  .ant-form-item {
    .ant-form-item-control-input-content {
      display: flex;
      flex-direction: row;
      .ant-form-item {
        margin-bottom: 0;
        & + .ant-form-item {
          margin-left: 8px;
        }
      }
    }
  }
`;

export const FormBlock = ({ children, onFinish, ...props }) => {
  return (
    <FormContainer
      {...props}
      {...formLayout}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      validateMessages={validateMessages}
    >
      {children}
    </FormContainer>
  );
};
