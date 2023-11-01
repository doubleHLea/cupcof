import { Wrapper } from "@googlemaps/react-wrapper";
import { FloatButton, Layout } from 'antd';
import React from 'react';
import { BiSolidUser } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import Map from './Map';
import SideBar from "./SideBar";
import MapPopup from "./MapPopup";
import {API_KEY} from "../Config"

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
      <MapPopup />
      <Layout>
        <Content>
          <Wrapper apiKey={API_KEY} >
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
