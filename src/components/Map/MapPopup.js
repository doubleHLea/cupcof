import { ConfigProvider, Layout } from 'antd';
import React, { useState } from 'react';
import Detail from './Detail';
const { Sider } = Layout;

const MapPopup = () => {
  const [DetailOpen, setDetailOpen] = useState(false)

  function handleDetailOpen() {
    return setDetailOpen(!DetailOpen)
  }

  return (
    <div style={{ backgroundColor: "#fff", zIndex: "100" }}>
     <ConfigProvider theme={{
      components: {
        Layout: { lightTriggerBg: "#00000010" }
      },
     }}>
        <Layout>
          <Sider theme='light' collapsible defaultCollapsed="true" collapsedWidth="30" width="400" onCollapse={handleDetailOpen}>
            {DetailOpen && <Detail />}
          </ Sider>
        </Layout>
     </ConfigProvider>
    </div>
  )
}

export default MapPopup
