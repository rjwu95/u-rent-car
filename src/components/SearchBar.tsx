import React from "react";
import { Form, Row, Col, Input, Button } from "antd";
import styled from "styled-components";

const SearchForm = styled(Form)`
  .ant-row {
    justify-content: center;
    padding: 0;
    .ant-col {
      padding: 0;
      .ant-form-item {
        padding: 0;
        .ant-form-item-control-input {
          padding: 0;
        }
      }
    }
  }
`;

interface SearchBarProps {
  onFinish(values: any): void;
}

export const SearchBar: React.FC<SearchBarProps> = ({ onFinish }) => {
  return (
    <SearchForm name="search-form" onFinish={onFinish}>
      <Row>
        <Col>
          <Form.Item name="search">
            <Input placeholder="검색" />
          </Form.Item>
        </Col>
        <Col>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              검색
            </Button>
          </Form.Item>
        </Col>
      </Row>
    </SearchForm>
  );
};
