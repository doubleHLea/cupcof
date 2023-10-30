import { Collapse } from 'antd';
import React from 'react';

const text = `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor laboriosam unde rem perferendis excepturi magni ullam expedita maiores fugit dolorum quasi quisquam, ea ratione mollitia facere numquam, consequuntur vel voluptas?`;
const items = [
  {
    key: '1',
    label: 'PC 지도에서 내 위치(접속위치)가 다른 경우',
    children: <p>{text}</p>,
  },
  {
    key: '2',
    label: '지도 앱에서 내 위치(접속위치)가 다른 경우',
    children: <p>{text}</p>,
  },
  {
    key: '3',
    label: '지도 확대/축소 방법',
    children: <p>{text}</p>,
  },
  {
    key: '4',
    label: '지도 등록/수정/삭제 방법',
    children: <p>{text}</p>,
  }
];
const Accordion = () => {

  return (
    <Collapse items={items}
      style={{
        borderRadius: '0'

      }} />
  );
};
export default Accordion;