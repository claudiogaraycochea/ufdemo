import React, { useState } from 'react';
import { H4, Icon, Row, Col } from 'uf-ui-pack';
import './ModalTicketMoreInfo.css'
// important change data by TypeScript

const ModalTicketMoreInfo = (data: any) => {

  return (
    <div>
      <Row>
        <Col>
          <div className='side-side'>
            <div className='ticket-image'>
              <Icon.IconTicket />
            </div>
            <div>
              <div><H4>{data.firstName} {data.lastName}</H4></div>
              <div>{data.present ? 'Ha entrado' : 'No ha entrado'}</div>                          
            </div>
          </div>        
        </Col>
      </Row>
      <Row className='row-double'>
        <Col>
          <div className='text-label'>ID</div>
          <div>{data._id}</div>
        </Col>
        <Col>
          <div className='text-label'>Nº de ticket</div>
          <div>{data.ticket}</div>
        </Col>
      </Row>
      <Row className='row-double'>
        <Col>
          <div className='text-label'>Fecha de nacimiento</div>
          <div>{data.birthdate}</div>
        </Col>
        <Col>
          <div className='text-label'>Email</div>
          <div>{data.email}</div>
        </Col>
        <Col>
          <div className='text-label'>Teléfono</div>
          <div>{data.phone}</div>
        </Col>
      </Row>
      <Row>
        <Col>
          <div className='text-label'>Dirección</div>
          <div>{data.address}</div>
        </Col>
      </Row>
    </div>
  );
};

export default ModalTicketMoreInfo