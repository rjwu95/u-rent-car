import React, { useState } from "react";
import { Layout } from "antd";
import { CDrawer, CHeader } from ".";
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

export const CLayout = ({ children }) => {
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
