import React from "react";
import Title from "antd/lib/typography/Title";
import styled from "styled-components";

const Padding = styled.div`
  padding: 20px;
`;

export default function PageNotFound() {
  return (
    <Padding>
      <Title>페이지를 찾을 수 없습니다.</Title>
    </Padding>
  );
}
