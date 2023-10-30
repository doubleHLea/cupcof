import { Divider, Collapse, ConfigProvider, Checkbox, Input } from 'antd';
import React, { useState } from 'react';

const Filter = () => {
  const [checked, setChecked] = useState();

  const onChangeFilter = (e) => {
    console.log(`checked = ${e.target.checked}`);
    setChecked(e.target.checked);
  };

  const items = [
    {
      key: 'method',
      label: '커피 추출 방식',
      children: <div>
        <Checkbox onChange={onChangeFilter} style={{ marginBottom: "5px" }}>머신</Checkbox>
        <br />
        <Checkbox onChange={onChangeFilter} style={{ marginBottom: "5px" }}>핸드 드립</Checkbox>
        <br />
        <Checkbox onChange={onChangeFilter} style={{ marginBottom: "5px" }}>콜드 브루</Checkbox>
        <br />
        <Checkbox onChange={onChangeFilter} style={{ marginBottom: "5px" }}>프렌치 프레스</Checkbox>
        <br />
      </div>,
    },
    {
      key: 'desert',
      label: '디저트별',
      children: <div>
        <Checkbox onChange={onChangeFilter} style={{ marginBottom: "5px" }}>전통 다과</Checkbox>
        <br />
        <Checkbox onChange={onChangeFilter} style={{ marginBottom: "5px" }}>베이커리</Checkbox>
        <br />
        <Checkbox onChange={onChangeFilter} style={{ marginBottom: "5px" }}>케이크</Checkbox>
        <br />
        <Checkbox onChange={onChangeFilter} style={{ marginBottom: "5px" }}>타르트</Checkbox>
        <br />
      </div>,
    },
    {
      key: 'tag',
      label: '해쉬 태그',
      children: <div>
        <Checkbox onChange={onChangeFilter} style={{ marginBottom: "5px" }}>스터디</Checkbox>
        <br />
        <Checkbox onChange={onChangeFilter} style={{ marginBottom: "5px" }}>아늑한 공간</Checkbox>
        <br />
        <Checkbox onChange={onChangeFilter} style={{ marginBottom: "5px" }}>감성 카페</Checkbox>
        <br />
        <Checkbox onChange={onChangeFilter} style={{ marginBottom: "5px" }}>로스팅</Checkbox>
        <br />
        <Checkbox onChange={onChangeFilter} checked={checked}>
          More...
          {checked === true ? <Input style={{ width: 120, height: 23, }} /> : null}
        </Checkbox>
        <br />
      </div>,
    },
  ];

  return (
    <div>
      <h3 style={{ marginBottom: "7px" }}>Filter</h3>
      <ConfigProvider theme={{
        components: {
          Collapse: {
            headerPadding: "5px 16px",
            contentPadding: "0 27px",
          }
        }
      }}>
        <Checkbox onChange={onChangeFilter} style={{ marginLeft: "15px", marginBottom: "5px" }}>프랜차이즈</Checkbox>
        <br />
        <Checkbox onChange={onChangeFilter} style={{ marginLeft: "15px", marginBottom: "10px" }}>개인 카페</Checkbox>
        <Collapse defaultActiveKey={['method']} ghost items={items} expandIconPosition="end" />
      </ConfigProvider>
      <Divider />
    </div >
  )
}


export default Filter
