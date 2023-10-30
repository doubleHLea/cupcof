import { Checkbox, Col, ConfigProvider, Divider, Input, Layout, Radio, Row, Space } from 'antd';
import React, { useState } from 'react';
import { Logo } from '../Config';
import Filter from './Filter';

const { Sider } = Layout;

const SideBar = () => {
  const { Search } = Input;

  const onSearch = (value, _e, info) => { console.log(info?.source, value) };

  const onChangeCheckbox = (checkedValues) => {
    console.log('checked = ', checkedValues);
  };

  const [value, setValue] = useState("Popularity");
  const onChangeRadio = (e) => {
    console.log('radio checked', e.target.value);
    setValue(e.target.value);
  };

  function setInputValue() {
    if (localStorage.getItem('search') === "undefined") {
      return ("")
    } else {
      return (localStorage.getItem('search'))
    }
  }

  return (
    <div style={{ backgroundColor: "#fff" }}>
      <Sider theme='light' width='260' style={{ padding: '20px', borderLeft: "1px solid #000" }}>
        <a href='/'>
          <img
            src={Logo}
            alt='logo'
            height='40px'
            style={{ position: 'relative', left: '25%', marginBottom: '7px' }}
          />
        </a>
        <ConfigProvider theme={{
          token: {
            colorPrimaryHover: "#f99",
            colorPrimary: "#fcb0b1",
          }
        }}>
          <Search
            placeholder="위치 검색"
            onSearch={onSearch}
            value={setInputValue()}
            style={{ width: 220, }}
          />
          <Divider />
          <div>
            <h3 style={{ marginBottom: "7px" }}>Sort</h3>
            <Radio.Group onChange={onChangeRadio} value={value} style={{ textIndent: "8px" }}>
              <Space direction="vertical">
                <Radio value={"Popularity"}>인기순 정렬</Radio>
                <Radio value={"Price"}>가격순 정렬</Radio>
                <Radio value={"Distance"}>거리순 정렬</Radio>
              </Space>
            </Radio.Group>
            <Divider />
          </div>
          <div>
            <h3 style={{ marginBottom: "3px" }}>Price</h3>
            <p style={{ marginBottom: "7px", fontSize: "11px", textIndent: "6px" }}>아메리카노 1잔 가격 기준</p>
            <Checkbox.Group
              style={{
                width: '100%',
                textIndent: "10px"
              }}
              onChange={onChangeCheckbox}
            >
              <Row>
                <Col span={24}>
                  <Checkbox value="1000" style={{ margin: "5px 0" }}>1000원 ~ 2000원대</Checkbox>
                </Col>
                <Col span={24}>
                  <Checkbox value="3000" style={{ marginBottom: "5px" }}>3000원 ~ 5000원대</Checkbox>
                </Col>
                <Col span={24}>
                  <Checkbox value="6000" style={{ marginBottom: "5px" }}>6000원 ~ 8000원대</Checkbox>
                </Col>
                <Col span={24}>
                  <Checkbox value="9000" >9000원 이상</Checkbox>
                </Col>
              </Row>
            </Checkbox.Group>
            <Divider />
          </div>
          <Filter />
        </ConfigProvider>
      </Sider>
    </div>
  )
}

export default SideBar
