import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { MDBContainer, MDBCol, MDBRow, MDBCollapse, MDBBtn } from 'mdbreact';
// import Navbar from '../components/Navbar';
import userDb from '../dummy_data/users';
import productDb from '../dummy_data/products';
import Searchbar from '../components/Searchbar';
import TradeItem from '../components/TradeItem';
// import '../assets/styles/upForTradeScreen.scss';

const dummyData = [
  {
    Timestamp: Date.now() - Math.random() * 360000,
    Status: 'Offered',
    MessageThreadID: 1,
    Offerer: {
      id: 2,
      items: [
        {
          name: 'used hair',
          value: '2',
          image:
            'https://image.shutterstock.com/image-photo/scrap-hair-after-cutting-barber-260nw-1474957202.jpg'
        },
        {
          name: 'old bike',
          value: '7',
          image:
            'https://www.featurepics.com/StockImage/20081008/old-bike-stock-picture-924047.jpg'
        }
      ]
    },
    Offeree: {
      id: 1,
      items: [
        {
          name: 'McLaren 720S Spider',
          value: '720',
          image:
            'https://cars.mclaren.com/content/dam/mclaren-automotive/models/720s/720s-spider/overview/1920x1080/720s-Spider.jpg'
        }
      ]
    }
  },
  {
    Timestamp: Date.now() - Math.random() * 360000,
    Status: 'Offered',
    MessageThreadID: 2,
    Offerer: {
      id: 2,
      items: [
        {
          name: 'broken doll',
          value: '13',
          image:
            'https://images.fineartamerica.com/images-medium-large-5/broken-doll-katie-victoria-tolley.jpg'
        },
        {
          name: 'competitive hot dog eating mask',
          value: '18',
          image: 'https://pbs.twimg.com/media/Dl5rolBVAAA9cjM.jpg'
        },
        {
          name: 'the rest of this bag of cheetos',
          value: '5',
          image: 'https://i.redd.it/v11q4xffh4y11.jpg'
        }
      ]
    },
    Offeree: {
      id: 1,
      items: [
        {
          name: 'McLaren 720S Spider',
          value: '720',
          image:
            'https://cars.mclaren.com/content/dam/mclaren-automotive/models/720s/720s-spider/overview/1920x1080/720s-Spider.jpg'
        }
      ]
    }
  },
  {
    Timestamp: Date.now() - Math.random() * 360000,
    Status: 'Offered',
    MessageThreadID: 3,
    Offerer: {
      id: 1,
      items: [
        {
          name: 'This friendly gesture',
          value: '0',
          image:
            'https://nationalpostcom.files.wordpress.com/2019/06/flip-2.png?w=780'
        }
      ]
    },
    Offeree: {
      id: 2,
      items: [
        {
          name: 'old bike',
          value: '7',
          image:
            'https://www.featurepics.com/StockImage/20081008/old-bike-stock-picture-924047.jpg'
        }
      ]
    }
  }
];

const ActiveOffersScreen = () => {
  const user = 2;
  const other = 1;
  const [open, setOpen] = useState('');
  return (
    <MDBContainer
      fluid
      id="active-offers-screen"
      className="pad-none margin-none"
    >
      <MDBRow className="pad-none margin-none">
        <MDBCol className="pad-all center" size="12" xs="12">
          Active Offers
        </MDBCol>
      </MDBRow>

      <MDBRow className="pad-none margin-none">
        <MDBCol className="margin-none pad-bucket center" size="12" xs="12">
          Offers You've Made
        </MDBCol>
      </MDBRow>

      <MDBRow className="pad-none margin-none">
        <MDBCol className="margin-none pad-none center" size="12" xs="12">
          <MDBContainer className="pad-none margin-none">
            {dummyData
              .filter(offer => offer.Offerer.id === user)
              .map((o, i) => (
                <MDBRow key={i} className="pad-none margin-none">
                  <MDBCol className="margin-none pad-none" size="12" xs="12">
                    <MDBContainer className="pad-bucket margin-none">
                      <MDBBtn
                        className="margin-none pad-none fill"
                        onClick={() =>
                          setOpen(
                            open === `collapse_yours${i}`
                              ? ''
                              : `collapse_yours${i}`
                          )
                        }
                      >
                        {`${o.Offerer.items.length} item${
                          o.Offerer.items.length !== 1 ? 's' : ''
                        } offered for their ${o.Offeree.items[0].name}`}
                      </MDBBtn>
                      <MDBCollapse
                        className="margin-none pad-none fill"
                        id={`collapse_yours${i}`}
                        isOpen={open}
                      >
                        <MDBRow key={i} className="pad-none margin-none">
                          <MDBCol
                            className="margin-none pad-none center"
                            size="6"
                            xs="6"
                          >
                            <MDBContainer className="margin-none pad-none">
                              {o.Offerer.items.map((item, i) => (
                                <MDBRow className="margin-none pad-none">
                                  <MDBCol className="margin-none pad-bucket-half">
                                    <TradeItem
                                      data={{
                                        product_name: item.name,
                                        value: item.value
                                      }}
                                      showDelete={false}
                                      onClick={() => {}}
                                      image={item.image}
                                    />
                                  </MDBCol>
                                </MDBRow>
                              ))}
                            </MDBContainer>
                          </MDBCol>
                          <MDBCol
                            className="margin-none pad-none center"
                            size="6"
                            xs="6"
                          >
                            <MDBContainer className="margin-none pad-none">
                              {o.Offeree.items.map((item, i) => (
                                <MDBRow className="margin-none pad-none">
                                  <MDBCol className="margin-none pad-bucket-half">
                                    <TradeItem
                                      data={{
                                        product_name: item.name,
                                        value: item.value
                                      }}
                                      showDelete={false}
                                      onClick={() => {}}
                                      image={item.image}
                                    />
                                  </MDBCol>
                                </MDBRow>
                              ))}
                            </MDBContainer>
                          </MDBCol>
                        </MDBRow>
                      </MDBCollapse>
                    </MDBContainer>
                  </MDBCol>
                </MDBRow>
              ))}
          </MDBContainer>
        </MDBCol>
      </MDBRow>

      <MDBRow className="pad-none margin-none">
        <MDBCol className="margin-none pad-bucket center" size="12" xs="12">
          Offers You've Recieved
        </MDBCol>
      </MDBRow>

      <MDBRow className="pad-none margin-none">
        <MDBCol className="margin-none pad-none center" size="12" xs="12">
          <MDBContainer className="pad-none margin-none">
            {dummyData
              .filter(offer => offer.Offerer.id === other)
              .map((o, i) => (
                <MDBRow key={i} className="pad-none margin-none">
                  <MDBCol className="margin-none pad-none" size="12" xs="12">
                    <MDBContainer className="pad-bucket margin-none">
                      <MDBBtn
                        className="margin-none pad-none fill"
                        onClick={() =>
                          setOpen(
                            open === `collapse_theirs${i}`
                              ? ''
                              : `collapse_theirs${i}`
                          )
                        }
                      >
                        {`${o.Offerer.items.length} item${
                          o.Offerer.items.length !== 1 ? 's' : ''
                        } offered for your ${o.Offeree.items[0].name}`}
                      </MDBBtn>
                      <MDBCollapse
                        className="margin-none pad-none fill"
                        id={`collapse_theirs${i}`}
                        isOpen={open}
                      >
                        <MDBRow key={i} className="pad-none margin-none">
                          <MDBCol
                            className="margin-none pad-none center"
                            size="6"
                            xs="6"
                          >
                            <MDBContainer className="margin-none pad-none">
                              {o.Offerer.items.map((item, i) => (
                                <MDBRow className="margin-none pad-none">
                                  <MDBCol className="margin-none pad-bucket-half">
                                    <TradeItem
                                      data={{
                                        product_name: item.name,
                                        value: item.value
                                      }}
                                      showDelete={false}
                                      onClick={() => {}}
                                      image={item.image}
                                    />
                                  </MDBCol>
                                </MDBRow>
                              ))}
                            </MDBContainer>
                          </MDBCol>
                          <MDBCol
                            className="margin-none pad-none center"
                            size="6"
                            xs="6"
                          >
                            <MDBContainer className="margin-none pad-none">
                              {o.Offeree.items.map((item, i) => (
                                <MDBRow className="margin-none pad-none">
                                  <MDBCol className="margin-none pad-bucket-half">
                                    <TradeItem
                                      data={{
                                        product_name: item.name,
                                        value: item.value
                                      }}
                                      showDelete={false}
                                      onClick={() => {}}
                                      image={item.image}
                                    />
                                  </MDBCol>
                                </MDBRow>
                              ))}
                            </MDBContainer>
                          </MDBCol>
                        </MDBRow>
                      </MDBCollapse>
                    </MDBContainer>
                  </MDBCol>
                </MDBRow>
              ))}
          </MDBContainer>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};
export default ActiveOffersScreen;
