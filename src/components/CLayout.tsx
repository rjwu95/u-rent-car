import React, { useState } from "react";
import { Layout } from "antd";
import { CDrawer, CHeader } from "../components";

const { Content } = Layout;

interface CLayoutProps {
  children: JSX.Element;
}

export const CLayout: React.FC<CLayoutProps> = ({ children }) => {
  const [visible, setVisible] = useState(false);
  return (
    <Layout>
      <CDrawer visible={visible} setVisible={setVisible} />
      <Layout className="site-layout">
        <CHeader setVisible={setVisible} />
        <Content style={{ margin: "24px 16px", overflow: "initial" }}>
          <div
            className="site-layout-background"
            style={{ padding: 24, textAlign: "center" }}
          >
            {children}
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};
