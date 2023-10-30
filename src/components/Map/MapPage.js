import { Wrapper } from "@googlemaps/react-wrapper";
import { FloatButton, Layout } from 'antd';
import React from 'react';
import { BiSolidUser } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import Map from './Map';
import SideBar from "./SideBar";

const { Content } = Layout;

const MapPage = () => {
  const navigate = useNavigate();

  function handleNavigate() {
    navigate('/user')
  }

  return (
    <Layout style={{
      width: '100vw',
      minHeight: '100vh',
    }}>
      <SideBar />
      <Layout>
        <Content>
          <Wrapper apiKey={"AIzaSyCT0l871XAG974GA-muDhoghQ5O-Ics_uM"} >
            <Map />
            <FloatButton onClick={handleNavigate}
              icon={<BiSolidUser style={{ color: '#f66' }} />}
              style={{
                position: 'absolute',
                top: '11px',
                right: '63px',
              }}
            />
          </Wrapper>
        </Content>
      </Layout>
    </Layout>
  )
}

export default MapPage
