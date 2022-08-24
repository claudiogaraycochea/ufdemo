import React, { useState } from 'react';
import { Header, Container, Section, Row, Col, H2, H4, P, ButtonIcon, Modal, TicketList, TicketRow, TicketCol, Icon} from 'uf-ui-pack';

const HomePage = () => {
  const [componentModal, setComponentModal] = useState<any|undefined>(undefined);
  const usersData = [
    {
        "_id": "612f24359e1f0d6777dacd5b",
        "ticket": 0,
        "present": true,
        "firstName": "Sasha",
        "lastName": "Nixon",
        "birthdate": "2/6/1973",
        "email": "sashanixon@polarium.com",
        "phone": "(806) 468-2961",
        "address": "729 Gilmore Court, Cartwright, Delaware"
    },
    {
        "_id": "612f243597337896689388d0",
        "ticket": 1,
        "present": true,
        "firstName": "Rutledge",
        "lastName": "Richards",
        "birthdate": "5/3/1953",
        "email": "rutledgerichards@polarium.com",
        "phone": "(972) 531-2330",
        "address": "231 Aster Court, Coventry, Wyoming"
    },
    {
        "_id": "612f24357d4a21a380c9512d",
        "ticket": 2,
        "present": true,
        "firstName": "Wagner",
        "lastName": "Mcmahon",
        "birthdate": "18/3/1992",
        "email": "wagnermcmahon@polarium.com",
        "phone": "(825) 481-3409",
        "address": "730 Dekoven Court, Nutrioso, Virginia"
    },
    {
        "_id": "612f24359d21db34b465cba4",
        "ticket": 3,
        "present": true,
        "firstName": "Lancaster",
        "lastName": "Simpson",
        "birthdate": "1/1/1971",
        "email": "lancastersimpson@polarium.com",
        "phone": "(985) 450-2706",
        "address": "222 Roosevelt Place, Windsor, Maine"
    },
    {
        "_id": "612f2435791ebffaec188c68",
        "ticket": 4,
        "present": false,
        "firstName": "Shelton",
        "lastName": "Kelly",
        "birthdate": "12/5/1970",
        "email": "sheltonkelly@polarium.com",
        "phone": "(999) 430-2521",
        "address": "781 Catherine Street, Santel, Idaho"
    },
    {
        "_id": "612f2435fddeea368cfa7648",
        "ticket": 5,
        "present": true,
        "firstName": "Sharpe",
        "lastName": "Brock",
        "birthdate": "20/8/1962",
        "email": "sharpebrock@polarium.com",
        "phone": "(867) 527-3016",
        "address": "747 Aviation Road, Nelson, Georgia"
    },
    {
        "_id": "612f2435fbc0bd1297058c37",
        "ticket": 6,
        "present": false,
        "firstName": "Cain",
        "lastName": "Holcomb",
        "birthdate": "28/8/1955",
        "email": "cainholcomb@polarium.com",
        "phone": "(971) 494-2235",
        "address": "385 Hawthorne Street, Trucksville, Washington"
    }
  ];

  const modalTestComponent = () => {
    return (
      <div>
        <Row>
          <Col className="lineal justify-content-center">
            Modal
          </Col>
        </Row>
      </div>
    )
  }

  function openTestModal() {
    console.log('opeTestModal');
    setComponentModal(modalTestComponent);
  }

  function closeModal() {
    setComponentModal(null);
  }

  return (
      <div>
        <Section>
          <Row>
            <Col>
              <H2>Bienvenido de nuevo, Rodrígo.</H2>
              <P>Estas son las personas que han comprado entrada</P>        
            </Col>
          </Row>
          <Row>
            <Col>
              <TicketList>
              {
                usersData.map((item)=> {
                  return (
                    <TicketRow key={item._id}>
                      <TicketCol className='col-20'>
                        <div className='side-side'>
                          <div className='ticket-image'>
                            <Icon.IconTicket />
                          </div>
                          <div>
                            <div><H4>{item.firstName} {item.lastName}</H4></div>
                            <div>{item.present ? 'Ha entrado' : 'No ha entrado'}</div>                          
                          </div>
                        </div>
                      </TicketCol>
                      <TicketCol className='col-20'>
                        <div className='text-dark'>ID</div>
                        <div>{item._id}</div>
                      </TicketCol>
                      <TicketCol>
                        <div className='side-side'>
                          <div className='flex'>
                            <div className='text-dark'>Nº de ticket</div>
                            <div>{item.ticket}</div>
                          </div>
                          <div><ButtonIcon icon={<Icon.IconDots />} action={()=>openTestModal()}/></div>                        
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
