import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { MDBContainer, MDBCol, MDBRow, MDBCollapse, MDBBtn } from 'mdbreact';
import { Grid, Col, Row, Divider } from '../components/CustomComponents';
// import Navbar from '../components/Navbar';
// import userDb from "../dummy_data/users";
// import productDb from "../dummy_data/products";
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
    <Grid fluid nopad id="active-offers-screen" className="pad-edge-top">
      <Row>
        <Col className="center" mobile="12">
          Active Offers
        </Col>
      </Row>

      <Row>
        <Col className="center" mobile="12">
          Offers You've Made
        </Col>
      </Row>

      <Row>
        <Col className="center" mobile="12">
          <Grid>
            {dummyData
              .filter(offer => offer.Offerer.id === user)
              .map((o, i) => (
                <Row key={i} nopad className="pad-none">
                  <Col nopad className="pad-edge-bottom-half" mobile="12">
                    <Grid>
                      <MDBBtn
                        style={{ margin: '0' }}
                        className="pad-all-half fill"
                        color="default"
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
                        className="margin-none pad-edge-top fill"
                        id={`collapse_yours${i}`}
                        isOpen={open}
                      >
                        <Divider label="Your Items" />
                        <Row key={i}>
                          <Col
                            className="pad-none center"
                            mobile="12"
                            tablet="6"
                          >
                            <Grid>
                              {o.Offerer.items.map((item, i) => (
                                <Row>
                                  <Col
                                    mobile="12"
                                    nopad
                                    className="pad-edge-bottom"
                                  >
                                    <TradeItem
                                      data={{
                                        product_name: item.name,
                                        value: item.value
                                      }}
                                      showDelete={false}
                                      onClick={() => {}}
                                      image={item.image}
                                    />
                                  </Col>
                                </Row>
                              ))}
                            </Grid>
                          </Col>
                          <Col className="center" mobile="12" tablet="6">
                            <Grid>
                              {o.Offeree.items.map((item, i) => (
                                <Row>
                                  <Col>
                                    <TradeItem
                                      data={{
                                        product_name: item.name,
                                        value: item.value
                                      }}
                                      showDelete={false}
                                      onClick={() => {}}
                                      image={item.image}
                                    />
                                  </Col>
                                </Row>
                              ))}
                            </Grid>
                          </Col>
                        </Row>
                      </MDBCollapse>
                    </Grid>
                  </Col>
                </Row>
              ))}
          </Grid>
        </Col>
      </Row>

      <Row>
        <Col className="center" mobile="12">
          Offers You've Recieved
        </Col>
      </Row>

      <Row>
        <Col className="center" mobile="12">
          <Grid>
            {dummyData
              .filter(offer => offer.Offerer.id === other)
              .map((o, i) => (
                <Row key={i}>
                  <Col nopad className="pad-edge-bottom-half" mobile="12">
                    <Grid>
                      <MDBBtn
                        style={{ margin: '0' }}
                        className="pad-all-half fill"
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
                        <Row key={i}>
                          <Col
                            className="margin-none pad-none center"
                            mobile="12"
                            tablet="6"
                          >
                            <Grid>
                              {o.Offerer.items.map((item, i) => (
                                <Row>
                                  <Col mobile="12">
                                    <TradeItem
                                      data={{
                                        product_name: item.name,
                                        value: item.value
                                      }}
                                      showDelete={false}
                                      onClick={() => {}}
                                      image={item.image}
                                    />
                                  </Col>
                                </Row>
                              ))}
                            </Grid>
                          </Col>
                          <Col
                            className="margin-none pad-none center"
                            mobile="12"
                            tablet="6"
                          >
                            <Grid>
                              {o.Offeree.items.map((item, i) => (
                                <Row>
                                  <Col mobile="12">
                                    <TradeItem
                                      data={{
                                        product_name: item.name,
                                        value: item.value
                                      }}
                                      showDelete={false}
                                      onClick={() => {}}
                                      image={item.image}
                                    />
                                  </Col>
                                </Row>
                              ))}
                            </Grid>
                          </Col>
                        </Row>
                      </MDBCollapse>
                    </Grid>
                  </Col>
                </Row>
              ))}
          </Grid>
        </Col>
      </Row>
    </Grid>
  );
};
export default ActiveOffersScreen;
