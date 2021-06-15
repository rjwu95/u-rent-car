import React from "react";
import { Input, Form, Card } from "antd";
import { SubmitButton } from "../../shared/components";
import { useDispatch, useSelector } from "react-redux";
import { fetchLogin } from "../authReducer";
import styled from "styled-components";
import { Redirect } from "react-router";

const CustomCard = styled(Card)`
  width: 400px;
  padding: 30px;
`;

export function Login() {
  const dispatch = useDispatch();
  const { entities, loading } = useSelector((state) => state.auth);
  const onFinish = (value) => {
    dispatch(fetchLogin(value));
  };
  if (loading === "pending") return <div>로딩중</div>;
  if (entities.name) return <Redirect to={{ pathname: "/" }} />;
  return (
    <CustomCard>
      <Form onFinish={onFinish}>
        <div className="formBlock">
          <Form.Item name="loginId" label="아이디">
            <Input />
          </Form.Item>
          <Form.Item name="password" label="패스워드">
            <Input type="password" />
          </Form.Item>
          <SubmitButton label="로그인" offset={0} />
        </div>
      </Form>
    </CustomCard>
  );
}
