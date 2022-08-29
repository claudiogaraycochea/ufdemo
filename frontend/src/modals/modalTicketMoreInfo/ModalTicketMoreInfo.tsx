import React from 'react';
import { H4, Icon, Row, Col } from 'uf-ui-pack';
import './ModalTicketMoreInfo.css'
import ICustomer from '../../models/Customer';

const ModalTicketMoreInfo: React.FC<ICustomer> = (customer) => {
  return (
    <div>
      <Row>
        <Col>
          <div className='side-side'>
            <div className='ticket-image'>
              <Icon.IconTicket />
            </div>
            <div>
              <div><H4>{customer.firstName} {customer.lastName}</H4></div>
              <div>{customer.present ? 'Ha entrado' : 'No ha entrado'}</div>                          
            </div>
          </div>        
        </Col>
      </Row>
      <Row className='row-double'>
        <Col>
          <div className='text-label'>ID</div>
          <div>{customer._id}</div>
        </Col>
        <Col>
          <div className='text-label'>Nº de ticket</div>
          <div>{customer.ticket}</div>
        </Col>
      </Row>
      <Row className='row-double'>
        <Col>
          <div className='text-label'>Fecha de nacimiento</div>
          <div>{customer.birthdate}</div>
        </Col>
        <Col>
          <div className='text-label'>Email</div>
          <div>{customer.email}</div>
        </Col>
        <Col>
          <div className='text-label'>Teléfono</div>
          <div>{customer.phone}</div>
        </Col>
      </Row>
      <Row>
        <Col>
          <div className='text-label'>Dirección</div>
          <div>{customer.address}</div>
        </Col>
      </Row>
    </div>
  );
};

export default ModalTicketMoreInfo