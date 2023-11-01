import React from 'react';
import { Button, Flex, ConfigProvider } from 'antd';

const TagButton = () => {
  return (
      <ConfigProvider theme={{
        token: {
          colorPrimaryHover: "#f99",
          colorPrimary: "#fcb0b1",
        }
      }}>
        <Flex gap="middle" justify="space-evenly" align='center' style={{marginBottom: 10}}>
          <Button shape="round">Primary</Button>
          <Button shape="round">Primary</Button>
          <Button shape="round">Primary</Button>
          <Button shape="round">Primary</Button>
        </Flex>
      <ConfigProvider theme={{
        components: {
          Button: {
            defaultBg: "fcb0b1"
          }
        }
      }}>
      <Button style={{position: "absolute", right: 35}}> 상세보기 </ Button>
      </ ConfigProvider>
      </ ConfigProvider>
  );
};

export default TagButton
