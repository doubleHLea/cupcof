import React from 'react'
import Form from './Form'
import { BiSolidUser } from "react-icons/bi";


function Main() {
  return (
    <div style={{
      position: 'relative',
      height: '100vh',
      backgroundImage: `url(${process.env.PUBLIC_URL}/img/Cup-of-coffee-image-2.jpg)`,
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      backgroundPosition: "bottom",
    }}>
      <a href='/user'>
        <BiSolidUser style={{
          position: 'absolute',
          top: '19px',
          right: '30px',
          color: 'f66',
          fontSize: '30px',
        }} />
        </a>
      <div style={{
        position: "absolute",
        width: '525px',
        height: '50px',
        top: "50%",
        left: "50%",
        transform: 'translate(-50%, -50%)',
        backgroundColor: "#fff",
        borderRadius: "100px",
        boxShadow: "1px 2px 3px 3px #ccc",
        textAlign: 'center'
      }}>
       <Form />
      </div>
    </div>
  )
}

export default Main
