import styled from 'styled-components';
import React, { useState } from 'react';
import { Drawer, Button } from 'antd';
import LeftMenu from './Sections/LeftMenu';

function NavBar() {
  const [visible, setVisible] = useState(false)

  const showDrawer = () => {
    setVisible(true)
  };

  const onClose = () => {
    setVisible(false)
  };

  return (
    <Nav className="menu" style={{ position: 'fixed', zIndex: 5, width: '100%' }}>
      <Logo className="menu__logo">
        <a href="/movie">BEAKFLIX</a>
      </Logo>
      <div className="menu__container">
        <div className="menu_left">
          <LeftMenu mode="horizontal" />
        </div>
        <Button
          className="menu__mobile-button"
          type="primary"
          onClick={showDrawer}
        >
        </Button>
        <Drawer
          title="Basic Drawer"
          placement="right"
          className="menu_drawer"
          closable={false}
          onClose={onClose}
          visible={visible}
        >
          <LeftMenu mode="inline" />
        </Drawer>
      </div>
    </Nav>
  )
}

export default NavBar

const Nav = styled.header`
  display: flex;
  width: 100%;
  height: 60px;
  align-items: center;
  padding: 0 30px;
  background-color: #000;
`

const Logo = styled.div`
  color: #e50914;
  font-weight: 900;
  font-size: 24px;
  letter-spacing: -2px;
`