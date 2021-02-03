import React, { Dispatch, SetStateAction } from "react";
import { Drawer, Row } from "antd";
import { Link } from "react-router-dom";

interface CDrawerProps {
  visible: boolean;
  setVisible: Dispatch<SetStateAction<boolean>>;
}

export const CDrawer: React.FC<CDrawerProps> = ({ visible, setVisible }) => {
  const onClose = () => {
    setVisible(false);
  };

  return (
    <Drawer
      title="메뉴"
      placement="left"
      closable={false}
      onClose={onClose}
      visible={visible}
    >
      <Row>
        <Link onClick={onClose} to="/car">
          차량관리
        </Link>
      </Row>
      <Row>
        <Link onClick={onClose} to="/staff">
          직원관리
        </Link>
      </Row>
      <Row>
        <Link onClick={onClose} to="/contract">
          계약서관리
        </Link>
      </Row>
    </Drawer>
  );
};
