import React, { useState } from "react";
import { Layout } from "antd";
import { CDrawer, CHeader } from "../components";
import styled from "styled-components";

const { Content } = Layout;

const ContentBlock = styled(Content)`
  padding: 24px;
  overflow: initial;
  .content-container {
    padding: 24px;
    background: white;
  }
`;

interface CLayoutProps {
  children: JSX.Element;
}

export const CLayout: React.FC<CLayoutProps> = ({ children }) => {
  const [visible, setVisible] = useState(false);
  return (
    <Layout>
      <CDrawer visible={visible} setVisible={setVisible} />
      <Layout>
        <CHeader setVisible={setVisible} />
        <ContentBlock>
          <div className="content-container">{children}</div>
        </ContentBlock>
      </Layout>
    </Layout>
  );
};
