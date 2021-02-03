import { Layout, Button, Col, Row } from "antd";
import { Dispatch, SetStateAction } from "react";
import { MenuOutlined } from "@ant-design/icons";

const { Header } = Layout;

interface CHeaderProps {
  setVisible: Dispatch<SetStateAction<boolean>>;
}

export const CHeader: React.FC<CHeaderProps> = ({ setVisible }) => {
  return (
    <Header>
      <Row>
        <Col span={8}>
          <Button
            className="menu"
            type="primary"
            icon={<MenuOutlined />}
            onClick={() => setVisible(true)}
          />
        </Col>
        <Col span={8} style={{ color: "white" }}>
          유렌트카
        </Col>
        <Col span={8} style={{ color: "white" }}>
          로그아웃
        </Col>
      </Row>
    </Header>
  );
};
