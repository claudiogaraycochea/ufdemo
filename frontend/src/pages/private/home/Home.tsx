import React, { useState, useEffect } from 'react';
import { Section, Row, Col, H2, H4, P, ButtonIcon, Modal, TicketList, TicketRow, TicketCol, Icon} from 'uf-ui-pack';
import ModalTicketMoreInfo from '../../../modals/modalTicketMoreInfo/ModalTicketMoreInfo';
import { useSelector, useDispatch } from 'react-redux';
import { getItems } from '../../../store/items/ItemsActions';
import ICustomer from '../../../models/Customer';

const HomePage = () => {
  const { items } = useSelector((state: any) => state.default.items)
  const dispatch = useDispatch();
  const [componentModal, setComponentModal] = useState<any|null>(null);

  useEffect(() => {
    if(items.length===0) {
      getItems(dispatch);
    }
  });

  function openModalMoreInfo(customer: ICustomer ) {
    setComponentModal(ModalTicketMoreInfo(customer));
  }

  function closeModal() {
    setComponentModal(null);
  }

  return (
      <div>
        <Section>
          <Row>
            <Col>
              <H2>Bienvenido de nuevo, Rodrígo. 👋</H2>
              <P>Estas son las personas que han comprado entrada</P>        
            </Col>
          </Row>
          <Row>
            <Col>
              <TicketList>
              {
                items.map((customer:ICustomer)=> {
                  return (
                    <TicketRow key={customer._id}>
                      <TicketCol className='col-20'>
                        <div className='side-side'>
                          <div className='ticket-image'>
                            <Icon.IconTicket />
                          </div>
                          <div>
                            <div><H4>{customer.firstName} {customer.lastName}</H4></div>
                            <div>{customer.present ? 'Ha entrado' : 'No ha entrado'}</div>                          
                          </div>
                        </div>
                      </TicketCol>
                      <TicketCol className='col-20'>
                        <div className='text-label'>ID</div>
                        <div>{customer._id}</div>
                      </TicketCol>
                      <TicketCol>
                        <div className='side-side'>
                          <div className='flex'>
                            <div className='text-label'>Nº de ticket</div>
                            <div>{customer.ticket}</div>
                          </div>
                          <div><ButtonIcon icon={<Icon.IconDots />} action={()=>openModalMoreInfo(customer)}/></div>                        
                        </div>
                      </TicketCol>
                    </TicketRow>
                  )
                })
              }
              </TicketList>
            </Col>
          </Row>
        </Section>
        <Modal close={()=>closeModal()} component={componentModal} />
      </div>)
}

export default HomePage
