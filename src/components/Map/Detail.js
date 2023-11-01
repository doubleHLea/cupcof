import React, { useState } from 'react'
import { BsBookmark, BsBookmarkFill } from "react-icons/bs";
import TagButton from './TagButton';
import { Button } from 'antd';

const Detail = (props) => {
  const [Bookmark, setBookmark] = useState(<BsBookmark />)

  const changeBookmark = () => {
    // if(Bookmark === <BsBookmark />) {
    //   setBookmark(<BsBookmarkFill />)
    // } else {
    //   setBookmark(<BsBookmark />)
    // }
    return Bookmark
  }

  return (
    <div style={{ width: "90%", height: "240px", margin: "20px", border: "1px solid" }}>
      <a href=''>
        <img src={props.photos} alt="" style={{ display: "inline", height: "140px", width: "140px", border: "1px solid" }} />
      </a>
      <h3 style={{ display: "inline", position: "relative", }}>가게이름{props.shopName}</h3>
      <div onClick={changeBookmark} style={{ display: "inline", position: "relative", fontSize: "20px", color: "" }} >{Bookmark}</div>
      <div style={{ display: "inline", }}>영업시간{props.openingHours}</div>
      <div style={{ display: "inline", }}>주소{props.address}</div>
      <TagButton />
    </div>
  )
}

export default Detail
