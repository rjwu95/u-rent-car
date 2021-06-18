import { Layout, Button, Row, Typography } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { logout } from "../../shared/store";
import { useDispatch, useSelector } from "react-redux";

const { Header } = Layout;

const HeaderRow = styled(Row)`
  justify-content: space-between;
  align-items: center;
  height: 100%;
  h1 {
    margin: 0;
    color: #1864ab;
  }
`;

export const CHeader = ({ setVisible }) => {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.auth.entities?.token);
  return (
    <Header>
      <HeaderRow>
        <Button
          className="menu"
          type="primary"
          icon={<MenuOutlined />}
          onClick={() => setVisible(true)}
          size="large"
        />
        <Typography.Title>
          <Link to="/"> 유렌트카</Link>
        </Typography.Title>
        {!!token ? (
          <Button onClick={() => dispatch(logout())}>로그아웃</Button>
        ) : (
          <div></div>
        )}
      </HeaderRow>
    </Header>
  );
};
