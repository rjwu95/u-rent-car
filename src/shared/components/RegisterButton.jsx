import React from "react";
import { Button } from "antd";
import { Link } from "react-router-dom";
import styled from "styled-components";

const RegisterContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const RegisterButton = ({ label, link }) => {
  return (
    <RegisterContainer>
      <Button>
        <Link to={link}>{label}</Link>
      </Button>
    </RegisterContainer>
  );
};
