import React from 'react';
import { Container } from 'uf-ui-pack';
import './PrivateLayout.css';
import SideMenu from '../../components/sideMenu/SideMenu';

function PrivateLayout(props: any) {
  return (
    <div className="private-layout">  
      <div className="content-side">
        <SideMenu />
        <Container>
          {props.children}
        </Container>
      </div>
    </div>
  )
}

export default PrivateLayout