import React, { useState } from 'react'
import { Input } from 'antd';
import { FaMapMarkerAlt } from "react-icons/fa";
import { Logo } from '../Config';

const Form = ({ handleInputValue, handleFormSubmit }) => {

  const [value, setValue] = useState()

  function handleInputValue(data) {
    const userValue = data.target.value
    setValue(userValue)
  }

  function handleFormSubmit() {
    localStorage.setItem('search', value)
  }

  return (
    <div>
      <a href='/'>
        <img
          src={Logo}
          alt='logo'
          style={{
            position: 'absolute',
            top: '-150px',
            left: '97px',
            backgroundRepeat: "no-repeat"
          }}
        />
        <h3 style={{
          position: 'absolute',
          top: '-41px',
          left: '220px',
          fontSize: '14px',
          color: '#fcc',
        }}>A Cup of Coffee</h3>
      </a>
      <form action='/map' method='get' onSubmit={handleFormSubmit} style={{
        position: "relative",
        top: '-6px',
      }} >
        <div style={{
          padding: '10px',
        }}>
          <label form="map_search">
            <a href='/map'>
              <FaMapMarkerAlt style={{
                position: 'relative',
                left: '-8px',
                top: '7px',
                color: '#f66',
                fontSize: '27px',
              }} />
            </a>
          </label>
          <Input type='text' name='map_search' id='map_search' placeholder='원하는 위치를 입력하시오'
            onChange={handleInputValue}
            style={{ borderColor: '#999', width: '85%', height: '40px' }} />
        </div>
      </form>
    </div>
  )
}

export default Form
